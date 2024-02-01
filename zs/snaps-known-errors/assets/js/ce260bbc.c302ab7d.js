"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[7340],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8817:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={description:"See the Unity SDK API reference.",sidebar_position:2,tags:["Unity SDK"]},s="Unity SDK API",o={unversionedId:"reference/sdk-unity-api",id:"reference/sdk-unity-api",title:"Unity SDK API",description:"See the Unity SDK API reference.",source:"@site/wallet/reference/sdk-unity-api.md",sourceDirName:"reference",slug:"/reference/sdk-unity-api",permalink:"/zs/snaps-known-errors/wallet/reference/sdk-unity-api",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/reference/sdk-unity-api.md",tags:[{label:"Unity SDK",permalink:"/zs/snaps-known-errors/wallet/tags/unity-sdk"}],version:"current",sidebarPosition:2,frontMatter:{description:"See the Unity SDK API reference.",sidebar_position:2,tags:["Unity SDK"]},sidebar:"walletSidebar",previous:{title:"JavaScript SDK options",permalink:"/zs/snaps-known-errors/wallet/reference/sdk-js-options"},next:{title:"Ethereum provider API",permalink:"/zs/snaps-known-errors/wallet/reference/provider-api"}},l={},c=[{value:"MetaMaskUnity",id:"metamaskunity",level:2},{value:"Instance",id:"instance",level:3},{value:"Initialize",id:"initialize",level:3},{value:"SaveSession",id:"savesession",level:3},{value:"LoadSession",id:"loadsession",level:3},{value:"MetaMaskWallet",id:"metamaskwallet",level:2},{value:"Connect",id:"connect",level:3},{value:"Disconnect",id:"disconnect",level:3},{value:"Request",id:"request",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"unity-sdk-api"},"Unity SDK API"),(0,r.kt)("p",null,"The following is an overview of the API methods used in the ",(0,r.kt)("a",{parentName:"p",href:"/zs/snaps-known-errors/wallet/how-to/connect/set-up-sdk/gaming/unity"},"Unity SDK"),"."),(0,r.kt)("h2",{id:"metamaskunity"},"MetaMaskUnity"),(0,r.kt)("p",null,"This is a singleton class that you can use to access the ",(0,r.kt)("inlineCode",{parentName:"p"},"MetaMaskWallet")," instance, which is\nspecific to Unity."),(0,r.kt)("h3",{id:"instance"},"Instance"),(0,r.kt)("p",null,"This is the singleton instance of the ",(0,r.kt)("inlineCode",{parentName:"p"},"MetaMaskUnity")," class that is lazy-loaded when you access it\nfor the first time."),(0,r.kt)("h3",{id:"initialize"},"Initialize"),(0,r.kt)("p",null,"This method initializes the ",(0,r.kt)("inlineCode",{parentName:"p"},"MetaMaskWallet")," instance and makes it accessible via the ",(0,r.kt)("inlineCode",{parentName:"p"},"Wallet")," property.\nYou can also pass extra options and parameters to it to customize the wallet instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// Initialize using default settings\nMetaMaskUnity.Instance.Initialize();\n\n// Initialize using custom transport and socket provider\nvar transport = new MyCustomTransport();\nvar socketProvider = new MyCustomSocketProvider();\nMetaMaskUnity.Instance.Initialize(transport, socketProvider);\n\n// Initialize using custom config, transport and socket provider\nvar config = myMetaMaskConfig;\nvar transport = new MyCustomTransport();\nvar socketProvider = new MyCustomSocketProvider();\nMetaMaskUnity.Instance.Initialize(config, transport, socketProvider);\n")),(0,r.kt)("h3",{id:"savesession"},"SaveSession"),(0,r.kt)("p",null,"This method saves the current session to persistent storage.\nIt is useful when you want to save the session and restore it later.\nWhen the application starts, it automatically calls this method.\nYou can also manually call this method."),(0,r.kt)("h3",{id:"loadsession"},"LoadSession"),(0,r.kt)("p",null,"This method loads the session from persistent storage.\nIt is useful when you want to restore the session after the application quits.\nWhen the application starts, it automatically calls this method.\nYou can also manually call this method."),(0,r.kt)("h2",{id:"metamaskwallet"},"MetaMaskWallet"),(0,r.kt)("h3",{id:"connect"},"Connect"),(0,r.kt)("p",null,"This method connects to MetaMask.\nIt renders a generated QR code in the user interface for your users to scan with MetaMask Mobile.\nAfter the user scans this QR code, a connection screen appears in MetaMask Mobile where the user can\napprove the connection with your Unity game."),(0,r.kt)("h3",{id:"disconnect"},"Disconnect"),(0,r.kt)("p",null,"This method disconnects the user from the MetaMask session."),(0,r.kt)("h3",{id:"request"},"Request"),(0,r.kt)("p",null,"This method sends a request to MetaMask.\nYou can use it to call any ",(0,r.kt)("a",{parentName:"p",href:"/zs/snaps-known-errors/wallet/reference/provider-api"},"provider API method"),"."))}d.isMDXComponent=!0}}]);