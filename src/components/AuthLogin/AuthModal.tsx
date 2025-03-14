import React, { useContext, useEffect } from 'react'
import Modal from 'react-modal'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { useLocation } from '@docusaurus/router'
import styles from './styles.module.scss'
import Icon from '../Icon/Icon'
import {
  authenticateAndAuthorize,
  saveTokenString,
  getUserIdFromJwtToken,
  AUTH_WALLET_PAIRING,
  AUTH_WALLET_PROJECTS,
  AUTH_WALLET_SESSION_NAME,
  AUTH_WALLET_USER_PLAN,
} from '@site/src/lib/siwsrp/auth'
import { REQUEST_PARAMS } from '@site/src/lib/constants'
import { MetamaskProviderContext } from '@site/src/theme/Root'
import Button from '@site/src/components/elements/buttons/button'
import Text from '@site/src/components/Text'

Modal.setAppElement('#__docusaurus')
type AuthModalProps = {
  open: boolean
  setOpen: (arg: boolean) => void
  setUser: (arg: string) => void
  setToken: (arg: string) => void
  step: AUTH_LOGIN_STEP
  setStep: (arg: AUTH_LOGIN_STEP) => void
  setUksTier: (arg: string) => void
}

export enum AUTH_LOGIN_STEP {
  CONNECTING = 'connecting',
  CONNECTION_ERROR = 'connection-error',
  CONNECTION_SUCCESS = 'connection-success',
}

export enum WALLET_LINK_TYPE {
  NO = 'NO',
  ONE = 'ONE',
  MULTIPLE = 'MULTIPLE',
}

const ConnectingModal = () => {
  return (
    <>
      <div className={styles.spinnerContainer}>
        <img src="/img/spinner.png" className={styles.spinner} />
        <Icon name="metamask" classes={styles.metamask} />
      </div>
      <Text as="p" className={styles.heading}>
        Waiting for MetaMask
      </Text>
      <Text as="p" className={styles.content}>
        Don’t close or exit this window. Please continue connecting on your extension.
      </Text>
    </>
  )
}

const ConnectionSuccessModal = () => {
  return (
    <>
      <div className={styles.spinnerContainer}>
        <Icon name="spinner-success" classes={styles.spinner} />
        <Icon name="metamask" classes={styles.metamask} />
      </div>
      <Text as="p" className={styles.heading}>
        Wallet Connected!
      </Text>
      <Text as="p" className={styles.content}>
        <span>
          Your wallet is successfully connected.
          <br />
          You’re all set!
        </span>
      </Text>
    </>
  )
}

const ConnectionErrorModal = ({
  setOpen,
  login,
  metaMaskDisconnect,
}: {
  setOpen: (arg: boolean) => void
  login: () => void
  metaMaskDisconnect: () => void
}) => {
  const handleCancel = () => {
    metaMaskDisconnect()
    setOpen(false)
  }
  return (
    <>
      <div className={styles.spinnerContainer}>
        <Icon name="spinner-error" classes={styles.spinner} />
        <Icon name="metamask" classes={styles.metamask} />
      </div>
      <Text as="p" className={styles.heading}>
        There was an issue connecting your wallet
      </Text>
      <Text as="p" className={styles.content}>
        <span>
          Please try again or <a href="https://support.metamask.io/">contact us</a>.
        </span>
      </Text>
      <div className={styles.flexButton}>
        <Button as="button" onClick={handleCancel} label={'Cancel'} />
        <Button as="button" onClick={login} label={'Retry'} />
      </div>
    </>
  )
}

const AuthModal = ({
  open,
  setOpen,
  step,
  setStep,
  setUser,
  setToken,
  setUksTier,
}: AuthModalProps) => {
  const { siteConfig } = useDocusaurusContext()
  const { DASHBOARD_URL, VERCEL_ENV } = siteConfig?.customFields || {}
  const {
    sdk,
    setNeedsMfa,
    setWalletLinked,
    setWalletAuthUrl,
    metaMaskDisconnect,
    setProjects,
    setMetaMaskAccount,
    setMetaMaskProvider,
    fetchLineaEns,
  } = useContext(MetamaskProviderContext)
  const location = useLocation()
  const { pathname } = location

  const login = async () => {
    setStep(AUTH_LOGIN_STEP.CONNECTING)
    try {
      if (!sdk.isExtensionActive()) {
        setOpen(false)
      }

      // Try to connect wallet first
      const accounts = await sdk.connect()

      if (accounts && accounts.length > 0) {
        setMetaMaskAccount(accounts[0])
        fetchLineaEns(accounts[0])
        const provider = sdk.getProvider()
        setMetaMaskProvider(provider)
      }

      const customProvider = sdk.getProvider()
      // Call Profile SDK API to retrieve Hydra Access Token & Wallet userProfile
      // Hydra Access Token will be used to fetch Infura API
      const { accessToken, userProfile } = await authenticateAndAuthorize(
        VERCEL_ENV as string,
        customProvider
      )

      const loginResponse = await (
        await fetch(`${DASHBOARD_URL}/api/wallet/login`, {
          ...REQUEST_PARAMS('POST', {
            hydra_token: accessToken,
            token: 'true',
          }),
          body: JSON.stringify({
            profileId: userProfile.profileId,
            redirect_to: window.location.href,
          }),
        })
      ).json()

      if (!loginResponse) throw new Error('Something went wrong')

      const { data, session, token } = loginResponse
      sessionStorage.setItem(AUTH_WALLET_PAIRING, JSON.stringify({ data }))

      if (data.step) {
        // Handling no wallet pairing or multiple pairing
        const mm_auth = Buffer.from(
          JSON.stringify({
            step: data.step,
            mmAuthSession: sessionStorage.getItem(AUTH_WALLET_SESSION_NAME),
            walletPairing: data.pairing,
            token: true,
          })
        ).toString('base64')

        const walletAuthUrl = `${DASHBOARD_URL}/login?mm_auth=${mm_auth}&redirect_to=${session.redirect_to}`

        setWalletAuthUrl(walletAuthUrl)

        if (data.pairing && !data.pairing.length) {
          setWalletLinked(WALLET_LINK_TYPE.NO)
        }

        if (data.pairing && data.pairing.length > 1) {
          setWalletLinked(WALLET_LINK_TYPE.MULTIPLE)
        }

        setStep(AUTH_LOGIN_STEP.CONNECTION_SUCCESS)
        setOpen(false)
        return
      }

      if (data.mfa?.enabled) {
        const mm_auth = Buffer.from(
          JSON.stringify({
            step: 'verify',
            mmAuthSession: sessionStorage.getItem(AUTH_WALLET_SESSION_NAME),
            dashboardSessionToken: token,
          })
        ).toString('base64')

        const walletAuthUrl = `${DASHBOARD_URL}/login?mm_auth=${mm_auth}&redirect_to=${session.redirect_to}`

        setWalletAuthUrl(walletAuthUrl)

        setNeedsMfa(true)
        setStep(AUTH_LOGIN_STEP.CONNECTION_SUCCESS)
        setOpen(false)
        return
      }

      setWalletLinked(WALLET_LINK_TYPE.ONE)

      if (!token) {
        setStep(AUTH_LOGIN_STEP.CONNECTION_ERROR)
        return
      }

      saveTokenString(token)
      if (setToken) {
        setToken(token)
      }
      setStep(AUTH_LOGIN_STEP.CONNECTION_SUCCESS)
      const userId = getUserIdFromJwtToken()
      if (setUser) {
        setUser(userId)
      }

      // You can use Infura Access Token to fetch any Infura API endpoint
      const projectsResponse = await fetch(`${DASHBOARD_URL}/api/v1/users/${userId}/projects`, {
        ...REQUEST_PARAMS('GET', { Authorization: `Bearer ${token}` }),
      })
      const {
        result: { projects },
      } = await projectsResponse.json()
      sessionStorage.setItem(AUTH_WALLET_PROJECTS, JSON.stringify(projects))
      setProjects(projects)

      const uksUserRawResp = await fetch(`${DASHBOARD_URL}/api/v1/users/${userId}`, {
        ...REQUEST_PARAMS('GET', { Authorization: `Bearer ${token}` }),
      })
      const {
        result: {
          servicePlan: { tier },
        },
      } = await uksUserRawResp.json()
      sessionStorage.setItem(AUTH_WALLET_USER_PLAN, JSON.stringify(tier))
      if (setUser) {
        setUksTier(tier)
      }
      setOpen(false)
    } catch (e: any) {
      if (pathname.startsWith('/wallet/reference')) {
        setStep(AUTH_LOGIN_STEP.CONNECTION_SUCCESS)
        setOpen(true)
      } else {
        setStep(AUTH_LOGIN_STEP.CONNECTION_ERROR)
        setOpen(true)
      }
    }
  }

  useEffect(() => {
    if (open && step == AUTH_LOGIN_STEP.CONNECTING) {
      ;(async () => {
        try {
          await login()
        } catch (e: any) {
          setStep(AUTH_LOGIN_STEP.CONNECTION_ERROR)
        }
      })()
    }

    if (!open) setStep(AUTH_LOGIN_STEP.CONNECTING)
  }, [open])

  const handleClose = () => {
    if (step === AUTH_LOGIN_STEP.CONNECTION_ERROR) {
      metaMaskDisconnect()
    }
    setOpen(false)
  }

  return (
    <Modal
      isOpen={open}
      onRequestClose={handleClose}
      contentLabel="Connect Wallet"
      className={styles.modalWrapper}
      overlayClassName={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button type="button" className={styles.modalClose} onClick={handleClose}>
          <Icon name="close" classes={styles.modalClose} />
        </button>
        {step === AUTH_LOGIN_STEP.CONNECTING ? <ConnectingModal /> : null}
        {step === AUTH_LOGIN_STEP.CONNECTION_SUCCESS ? <ConnectionSuccessModal /> : null}
        {step === AUTH_LOGIN_STEP.CONNECTION_ERROR ? (
          <ConnectionErrorModal
            setOpen={setOpen}
            login={login}
            metaMaskDisconnect={metaMaskDisconnect}
          />
        ) : null}
      </div>
    </Modal>
  )
}

export default AuthModal
