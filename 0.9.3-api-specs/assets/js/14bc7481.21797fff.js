"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6213],{15680:(e,n,t)=>{t.d(n,{xA:()=>l,yg:()=>d});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),g=s(t),u=r,d=g["".concat(p,".").concat(u)]||g[u]||m[u]||i;return t?a.createElement(d,o(o({ref:n},l),{},{components:t})):a.createElement(d,o({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c[g]="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},67881:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var a=t(58168),r=(t(96540),t(15680));const i={sidebar_position:1,sidebar_label:"Objects",tags:["Keyring API"]},o="Account Management API objects",c={unversionedId:"reference/keyring-api/account-management/objects",id:"reference/keyring-api/account-management/objects",title:"Account Management API objects",description:"Account management Snaps use the following objects",source:"@site/snaps/reference/keyring-api/account-management/objects.md",sourceDirName:"reference/keyring-api/account-management",slug:"/reference/keyring-api/account-management/objects",permalink:"/0.9.3-api-specs/snaps/reference/keyring-api/account-management/objects",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/keyring-api/account-management/objects.md",tags:[{label:"Keyring API",permalink:"/0.9.3-api-specs/snaps/tags/keyring-api"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Objects",tags:["Keyring API"]},sidebar:"snapsSidebar",previous:{title:"Account Management API",permalink:"/0.9.3-api-specs/snaps/reference/keyring-api/account-management/"},next:{title:"Events",permalink:"/0.9.3-api-specs/snaps/reference/keyring-api/account-management/events"}},p={},s=[{value:"<code>KeyringAccount</code>",id:"keyringaccount",level:3},{value:"Example",id:"example",level:4},{value:"<code>KeyringRequest</code>",id:"keyringrequest",level:3},{value:"Example",id:"example-1",level:4}],l={toc:s},g="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(g,(0,a.A)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"account-management-api-objects"},"Account Management API objects"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/0.9.3-api-specs/snaps/features/custom-evm-accounts/"},"Account management Snaps")," use the following objects\nwith the ",(0,r.yg)("a",{parentName:"p",href:"/0.9.3-api-specs/snaps/reference/keyring-api/account-management/"},"Account Management API"),"."),(0,r.yg)("h3",{id:"keyringaccount"},(0,r.yg)("inlineCode",{parentName:"h3"},"KeyringAccount")),(0,r.yg)("p",null,"An object representing an account with its properties and capabilities.\nAn account object contains:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"address"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"string")," - Account address or next receive address (UTXO)."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"id"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"string")," - Account ID (UUIDv4)."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"methods"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"string[]")," - List of supported ",(0,r.yg)("a",{parentName:"li",href:"/0.9.3-api-specs/snaps/reference/keyring-api/chain-methods"},"Keyring Interface API")," methods."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"options"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"Record<string, Json>")," - Snap-defined account options."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"type"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"string")," - Account type.\n",(0,r.yg)("inlineCode",{parentName:"li"},'"eip155:eoa"')," for an externally owned account (EOA) or ",(0,r.yg)("inlineCode",{parentName:"li"},'"eip155:erc4337"')," for an\n",(0,r.yg)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-4337"},"ERC-4337")," account.")),(0,r.yg)("h4",{id:"example"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "address": "0xd1f5279be4b4dd94133a23dee1b23f5bfc0db1d0",\n  "id": "091bbc2e-6625-44d0-ac5c-658670ca649a",\n  "methods": [\n    "eth_sign",\n    "eth_signTransaction",\n    "eth_signTypedData_v4",\n    "personal_sign"\n  ],\n  "options": {\n    "signerCount": 5,\n    "threshold": 3\n  },\n  "type": "eip155:eoa"\n}\n')),(0,r.yg)("h3",{id:"keyringrequest"},(0,r.yg)("inlineCode",{parentName:"h3"},"KeyringRequest")),(0,r.yg)("p",null,"An object representing a request made to the account management Snap for account-related operations.\nA request object contains:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"account"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"string")," - Account ID (UUIDv4)."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"id"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"string")," - Request ID (UUIDv4)."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"request")," - Inner request sent by the client application, containing:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"method"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"string")," - The request method."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"params"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"Json[]")," - Optional method parameters."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"scope"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"string")," - ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/ChainAgnostic/CAIPs/blob/main/CAIPs/caip-2.md"},"CAIP-2"),"\nchain ID of the blockchain network for the request.")),(0,r.yg)("h4",{id:"example-1"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "address": "0xd1f5279be4b4dd94133a23dee1b23f5bfc0db1d0",\n  "id": "f84d3a97-b6e1-47ea-8b0c-fd8609efaad4",\n  "request": {\n    "method": "personal_sign",\n    "params": [\n      "0x4578616d706c652060706572736f6e616c5f7369676e60206d657373616765",\n      "0xe887f3b50232722e6eb4c1d3a03b34c9b345acd1"\n    ]\n  },\n  "scope": "eip155:1"\n}\n')))}m.isMDXComponent=!0}}]);