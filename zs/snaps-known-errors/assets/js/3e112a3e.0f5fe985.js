"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[260],{3905:(e,r,t)=>{t.d(r,{Zo:()=>f,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},f=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),l=p(t),m=a,d=l["".concat(c,".").concat(m)]||l[m]||u[m]||s;return t?n.createElement(d,o(o({ref:r},f),{},{components:t})):n.createElement(d,o({ref:r},f))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[l]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},99226:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const s={description:"Reference content for the Gas API."},o="API reference",i={unversionedId:"gas-api/api-reference/index",id:"gas-api/api-reference/index",title:"API reference",description:"Reference content for the Gas API.",source:"@site/services/gas-api/api-reference/index.md",sourceDirName:"gas-api/api-reference",slug:"/gas-api/api-reference/",permalink:"/zs/snaps-known-errors/services/gas-api/api-reference/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/gas-api/api-reference/index.md",tags:[],version:"current",frontMatter:{description:"Reference content for the Gas API."},sidebar:"servicesSidebar",previous:{title:"Supported networks",permalink:"/zs/snaps-known-errors/services/gas-api/supported-networks"},next:{title:"Get the base fee history",permalink:"/zs/snaps-known-errors/services/gas-api/api-reference/basefeehistory"}},c={},p=[],f={toc:p},l="wrapper";function u(e){let{components:r,...t}=e;return(0,a.kt)(l,(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"api-reference"},"API reference"),(0,a.kt)("p",null,"This section provides reference information for the various Gas REST APIs.\nUse the APIs to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zs/snaps-known-errors/services/gas-api/api-reference/gasprices-type2"},"Get EIP-1559 gas prices.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zs/snaps-known-errors/services/gas-api/api-reference/basefeehistory"},"Get the base fee history (in Gwei).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zs/snaps-known-errors/services/gas-api/api-reference/basefeepercentile"},"Get the base fee percentile (in Gwei).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zs/snaps-known-errors/services/gas-api/api-reference/busythreshold"},"Get the busy threshold for a network."))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You will need your ",(0,a.kt)("a",{parentName:"p",href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/project-id"},"API key"),"\nand ",(0,a.kt)("a",{parentName:"p",href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/project-secret"},"API key secret"),"\nto authorize your account to use the interactive APIs.")))}u.isMDXComponent=!0}}]);