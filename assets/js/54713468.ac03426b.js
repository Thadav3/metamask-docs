"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3523],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>h});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},w=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),w=o,h=p["".concat(s,".").concat(w)]||p[w]||u[w]||a;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=w;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}w.displayName="MDXCreateElement"},5279:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(58168),o=(n(96540),n(15680));const a={description:"Detect a user's network and network changes.",sidebar_position:1},i="Detect a user's network",c={unversionedId:"how-to/manage-networks/detect-network",id:"how-to/manage-networks/detect-network",title:"Detect a user's network",description:"Detect a user's network and network changes.",source:"@site/wallet/how-to/manage-networks/detect-network.md",sourceDirName:"how-to/manage-networks",slug:"/how-to/manage-networks/detect-network",permalink:"/wallet/how-to/manage-networks/detect-network",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/manage-networks/detect-network.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Detect a user's network and network changes.",sidebar_position:1},sidebar:"walletSidebar",previous:{title:"Manage networks",permalink:"/wallet/how-to/manage-networks"},next:{title:"Add a network",permalink:"/wallet/how-to/manage-networks/add-network"}},s={},l=[],d={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"detect-a-users-network"},"Detect a user's network"),(0,o.yg)("p",null,"It's important to keep track of the user's network chain ID because all RPC requests are submitted\nto the currently connected network."),(0,o.yg)("p",null,"Use the ",(0,o.yg)("a",{parentName:"p",href:"/wallet/reference/eth_chainId"},(0,o.yg)("inlineCode",{parentName:"a"},"eth_chainId")),"\nRPC method to detect the chain ID of the user's current network.\nListen to the ",(0,o.yg)("a",{parentName:"p",href:"/wallet/reference/provider-api#chainchanged"},(0,o.yg)("inlineCode",{parentName:"a"},"chainChanged"))," provider event to\ndetect when the user changes networks."),(0,o.yg)("p",null,"For example, the following code detects a user's network and when the user changes networks:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'const chainId = await provider // Or window.ethereum if you don\'t support EIP-6963.\n  .request({ method: "eth_chainId" });\n\nprovider // Or window.ethereum if you don\'t support EIP-6963.\n  .on("chainChanged", handleChainChanged);\n\nfunction handleChainChanged(chainId) {\n  // We recommend reloading the page, unless you must do otherwise.\n  window.location.reload();\n}\n')))}u.isMDXComponent=!0}}]);