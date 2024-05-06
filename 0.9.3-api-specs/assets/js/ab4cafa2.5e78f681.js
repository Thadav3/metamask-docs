"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[257],{15680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>y});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},g=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),l=c(t),u=r,y=l["".concat(p,".").concat(u)]||l[u]||m[u]||i;return t?a.createElement(y,o(o({ref:n},g),{},{components:t})):a.createElement(y,o({ref:n},g))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[l]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},97220:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(58168),r=(t(96540),t(15680));const i={description:"Follow these security guidelines when creating an account management Snap.",sidebar_label:"Security guidelines",sidebar_position:3,tags:["Keyring API"]},o="Account management Snap security guidelines",s={unversionedId:"features/custom-evm-accounts/security",id:"features/custom-evm-accounts/security",title:"Account management Snap security guidelines",description:"Follow these security guidelines when creating an account management Snap.",source:"@site/snaps/features/custom-evm-accounts/security.md",sourceDirName:"features/custom-evm-accounts",slug:"/features/custom-evm-accounts/security",permalink:"/0.9.3-api-specs/snaps/features/custom-evm-accounts/security",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/custom-evm-accounts/security.md",tags:[{label:"Keyring API",permalink:"/0.9.3-api-specs/snaps/tags/keyring-api"}],version:"current",sidebarPosition:3,frontMatter:{description:"Follow these security guidelines when creating an account management Snap.",sidebar_label:"Security guidelines",sidebar_position:3,tags:["Keyring API"]},sidebar:"snapsSidebar",previous:{title:"Create a companion dapp",permalink:"/0.9.3-api-specs/snaps/features/custom-evm-accounts/create-companion-dapp"},next:{title:"Custom name resolution",permalink:"/0.9.3-api-specs/snaps/features/custom-name-resolution"}},p={},c=[{value:"Do not add secret information to account objects",id:"do-not-add-secret-information-to-account-objects",level:2},{value:"Limit the methods exposed to dapps",id:"limit-the-methods-exposed-to-dapps",level:2},{value:"Ensure the redirect URL cannot be manipulated",id:"ensure-the-redirect-url-cannot-be-manipulated",level:2},{value:"Remove all debug code from your production Snap",id:"remove-all-debug-code-from-your-production-snap",level:2},{value:"Remove sensitive information from errors",id:"remove-sensitive-information-from-errors",level:2},{value:"Expose Account Management API methods using the <code>onKeyringRequest</code> entry point",id:"expose-account-management-api-methods-using-the-onkeyringrequest-entry-point",level:2},{value:"Do not fetch remote code from inside your Snap",id:"do-not-fetch-remote-code-from-inside-your-snap",level:2}],g={toc:c},l="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(l,(0,a.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"account-management-snap-security-guidelines"},"Account management Snap security guidelines"),(0,r.yg)("p",null,"Refer to the following security guidelines when ",(0,r.yg)("a",{parentName:"p",href:"/0.9.3-api-specs/snaps/features/custom-evm-accounts/create-account-snap"},"creating an account management Snap"),"."),(0,r.yg)("admonition",{title:"see also",type:"tip"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/0.9.3-api-specs/snaps/features/custom-evm-accounts/"},"Custom EVM accounts")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/0.9.3-api-specs/snaps/features/custom-evm-accounts/create-account-snap"},"Create an account management Snap")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/0.9.3-api-specs/snaps/features/custom-evm-accounts/create-companion-dapp"},"Create an account management companion dapp")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/0.9.3-api-specs/snaps/reference/keyring-api/"},"Keyring API reference")))),(0,r.yg)("h2",{id:"do-not-add-secret-information-to-account-objects"},"Do not add secret information to account objects"),(0,r.yg)("p",null,"Ensure that you do not store any secret information in\n",(0,r.yg)("a",{parentName:"p",href:"/0.9.3-api-specs/snaps/reference/keyring-api/account-management/objects#keyringaccount"},"account objects"),", since they are\nexposed to dapps and MetaMask.\nFor example:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u274c ",(0,r.yg)("strong",{parentName:"p"},"Do NOT do this:")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'const account: KeyringAccount = {\n  id: uuid(),\n  options: {\n    privateKey: "0x01234...78", // !!! DO NOT DO THIS !!!\n  },\n  address,\n  methods: [\n    EthMethod.PersonalSign,\n    EthMethod.Sign,\n    EthMethod.SignTransaction,\n    EthMethod.SignTypedDataV1,\n    EthMethod.SignTypedDataV3,\n    EthMethod.SignTypedDataV4,\n  ],\n  type: EthAccountType.Eoa,\n};\n'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u2705 ",(0,r.yg)("strong",{parentName:"p"},"Do this instead:")),(0,r.yg)("p",{parentName:"li"},"  ",(0,r.yg)("em",{parentName:"p"},"Store any secret information that you need in the Snap's state:")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'await snap.request({\n  method: "snap_manageState",\n  params: {\n    operation: "update",\n    newState: {\n      // Your Snap\'s state here.\n      privateKey: "0x01234...78",\n    },\n  },\n});\n')))),(0,r.yg)("h2",{id:"limit-the-methods-exposed-to-dapps"},"Limit the methods exposed to dapps"),(0,r.yg)("p",null,"By default, MetaMask enforces the following restrictions on calling\n",(0,r.yg)("a",{parentName:"p",href:"/0.9.3-api-specs/snaps/reference/keyring-api/account-management/"},"Account Management API")," methods on your Snap based on\nthe caller origin:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Method"),(0,r.yg)("th",{parentName:"tr",align:"center"},"MetaMask origin"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Dapp origin"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/0.9.3-api-specs/snaps/reference/keyring-api/account-management/#keyring_listaccounts"},(0,r.yg)("inlineCode",{parentName:"a"},"keyring_listAccounts"))),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/0.9.3-api-specs/snaps/reference/keyring-api/account-management/#keyring_getaccount"},(0,r.yg)("inlineCode",{parentName:"a"},"keyring_getAccount"))),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/0.9.3-api-specs/snaps/reference/keyring-api/account-management/#keyring_createaccount"},(0,r.yg)("inlineCode",{parentName:"a"},"keyring_createAccount"))),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/0.9.3-api-specs/snaps/reference/keyring-api/account-management/#keyring_filteraccountchains"},(0,r.yg)("inlineCode",{parentName:"a"},"keyring_filterAccountChains"))),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/0.9.3-api-specs/snaps/reference/keyring-api/account-management/#keyring_updateaccount"},(0,r.yg)("inlineCode",{parentName:"a"},"keyring_updateAccount"))),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/0.9.3-api-specs/snaps/reference/keyring-api/account-management/#keyring_deleteaccount"},(0,r.yg)("inlineCode",{parentName:"a"},"keyring_deleteAccount"))),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/0.9.3-api-specs/snaps/reference/keyring-api/account-management/#keyring_exportaccount"},(0,r.yg)("inlineCode",{parentName:"a"},"keyring_exportAccount"))),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/0.9.3-api-specs/snaps/reference/keyring-api/account-management/#keyring_listrequests"},(0,r.yg)("inlineCode",{parentName:"a"},"keyring_listRequests"))),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/0.9.3-api-specs/snaps/reference/keyring-api/account-management/#keyring_getrequest"},(0,r.yg)("inlineCode",{parentName:"a"},"keyring_getRequest"))),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/0.9.3-api-specs/snaps/reference/keyring-api/account-management/#keyring_submitrequest"},(0,r.yg)("inlineCode",{parentName:"a"},"keyring_submitRequest"))),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u274c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/0.9.3-api-specs/snaps/reference/keyring-api/account-management/#keyring_approverequest"},(0,r.yg)("inlineCode",{parentName:"a"},"keyring_approveRequest"))),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/0.9.3-api-specs/snaps/reference/keyring-api/account-management/#keyring_rejectrequest"},(0,r.yg)("inlineCode",{parentName:"a"},"keyring_rejectRequest"))),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2705")))),(0,r.yg)("p",null,"For example, a dapp is not allowed to call the ",(0,r.yg)("inlineCode",{parentName:"p"},"keyring_submitRequest")," method of your Snap, and\nMetaMask is not allowed to call the ",(0,r.yg)("inlineCode",{parentName:"p"},"keyring_createAccount")," method of your Snap."),(0,r.yg)("p",null,"MetaMask also enforces that only dapps allowlisted in the Snap's manifest file using the\n",(0,r.yg)("a",{parentName:"p",href:"/0.9.3-api-specs/snaps/reference/permissions#endowmentkeyring"},(0,r.yg)("inlineCode",{parentName:"a"},"endowment:keyring"))," permission can call these methods."),(0,r.yg)("admonition",{title:"important",type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"We recommend further restricting the methods exposed to dapps according to your Snap's functionality.\nFor example, if your Snap does not support account deletion via dapps, your Snap should reject\ncalls to the ",(0,r.yg)("inlineCode",{parentName:"p"},"keyring_deleteAccount")," method originating from dapps.")),(0,r.yg)("p",null,"Your Snap can also impose varying restrictions depending on the calling dapp.\nFor example, Dapp 1 may have access to a different set of methods than Dapp 2.\nThe following is an example of implementing such logic:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'const permissions: Record<string, string[]> = {\n  "https://<Dapp 1 domain>": [\n    // List of allowed methods for Dapp 1.\n  ],\n  "https://<Dapp 2 domain>": [\n    // List of allowed methods for Dapp 2.\n  ],\n};\n\nif (origin !== "metamask" && !permissions[origin]?.includes(request.method)) {\n  // Reject the request.\n}\n')),(0,r.yg)("p",null,"Both dapps must be allowlisted in the Snap's manifest file."),(0,r.yg)("h2",{id:"ensure-the-redirect-url-cannot-be-manipulated"},"Ensure the redirect URL cannot be manipulated"),(0,r.yg)("p",null,"If your Snap implements an ",(0,r.yg)("a",{parentName:"p",href:"/0.9.3-api-specs/snaps/features/custom-evm-accounts/#asynchronous-transaction-flow"},"asynchronous transaction flow"),",\nensure that the redirect URL is valid and cannot be manipulated, otherwise the user can be\nredirected to a malicious website."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'async submitRequest(request: KeyringRequest): Promise<SubmitRequestResponse> {\n  // Your Snap\'s custom logic.\n  return {\n    pending: true,\n    redirect: {\n      message: "Please continue in the dapp.",\n      url: "https://<dapp domain>/sign?tx=1234", // !!! ENSURE THIS IS A SAFE URL !!!\n    },\n  };\n}\n')),(0,r.yg)("admonition",{title:"important",type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"Only HTTPS URLs are allowed in the ",(0,r.yg)("inlineCode",{parentName:"p"},"url")," field, and the provided URL is checked against a\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/eth-phishing-detect"},"list of blocked domains"),".\nHowever, for development purposes, HTTP URLs are allowed on Flask.\nMetaMask also requires the redirect URL to be within a site allowlisted in the Snap's manifest file.")),(0,r.yg)("h2",{id:"remove-all-debug-code-from-your-production-snap"},"Remove all debug code from your production Snap"),(0,r.yg)("p",null,"Ensure that all debug code is removed from your production Snap.\nExposing debug code can lead to multiple security vulnerabilities.\nFor example, secret information can be logged to the console, or a malicious dapp can bypass a\nsecurity check."),(0,r.yg)("h2",{id:"remove-sensitive-information-from-errors"},"Remove sensitive information from errors"),(0,r.yg)("p",null,"Ensure that all error messages returned by your Snap are sanitized.\nFailing to sanitize error messages can lead to exposing secrets or other sensitive information to\ndapps or to MetaMask."),(0,r.yg)("p",null,"For example:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u274c ",(0,r.yg)("strong",{parentName:"p"},"Do NOT do this:")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"// If inputSecretValue contains invalid hexadecimal characters, its value\n// will be added to the error thrown by toBuffer.\nconst privateKey = toBuffer(inputSecretValue);\n// Use privateKey here.\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u2705 ",(0,r.yg)("strong",{parentName:"p"},"Do this instead:")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'try {\n  const privateKey = toBuffer(inputSecretValue);\n  // Use privateKey here.\n} catch (error) {\n  throw new Error("Invalid private key");\n}\n')))),(0,r.yg)("h2",{id:"expose-account-management-api-methods-using-the-onkeyringrequest-entry-point"},"Expose Account Management API methods using the ",(0,r.yg)("inlineCode",{parentName:"h2"},"onKeyringRequest")," entry point"),(0,r.yg)("p",null,"The ",(0,r.yg)("a",{parentName:"p",href:"/0.9.3-api-specs/snaps/reference/entry-points#onrpcrequest"},(0,r.yg)("inlineCode",{parentName:"a"},"onRpcRequest"))," entry point is a general-purpose\nentry point and has no restrictions on the methods that can be called.\nEnsure that you only expose Account Management API methods using the\n",(0,r.yg)("a",{parentName:"p",href:"/0.9.3-api-specs/snaps/reference/entry-points#onkeyringrequest"},(0,r.yg)("inlineCode",{parentName:"a"},"onKeyringRequest"))," entry point, which has extra\nsecurity checks."),(0,r.yg)("p",null,"For example:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u274c ",(0,r.yg)("strong",{parentName:"p"},"Do NOT do this:")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"export const onRpcRequest: OnRpcRequestHandler = async ({\n  //           ~~~           ~~~\n  origin,\n  request,\n}) => {\n  return handleKeyringRequest(keyring, request);\n};\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u2705 ",(0,r.yg)("strong",{parentName:"p"},"Do this instead:")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"export const onKeyringRequest: OnKeyringRequestHandler = async ({\n  //           ~~~~~~~           ~~~~~~~\n  origin,\n  request,\n}) => {\n  // Any custom logic or extra security checks here.\n  return handleKeyringRequest(keyring, request);\n};\n")))),(0,r.yg)("h2",{id:"do-not-fetch-remote-code-from-inside-your-snap"},"Do not fetch remote code from inside your Snap"),(0,r.yg)("p",null,"Ensure that your Snap is self-contained and does not fetch code from external sources.\nOtherwise, a compromised server can use this mechanism to inject malicious code into your Snap."))}m.isMDXComponent=!0}}]);