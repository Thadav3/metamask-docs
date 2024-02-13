"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[8447],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),d=r,h=p["".concat(i,".").concat(d)]||p[d]||m[d]||l;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(87462),r=a(67294),l=a(86010),o=a(12466),s=a(70989),i=a(72389);const u={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function c(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=p.indexOf(t),n=c[a].value;n!==s&&(m(t),i(n))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:h,onClick:d},o,{className:(0,l.Z)("tabs__item",u.tabItem,o?.className,{"tabs__item--active":s===t})}),a??t)})))}function p(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function m(e){const t=(0,s.Y)(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",u.tabList)},r.createElement(c,(0,n.Z)({},e,t)),r.createElement(p,(0,n.Z)({},e,t)))}function d(e){const t=(0,i.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},70989:(e,t,a)=>{a.d(t,{Y:()=>m});var n=a(67294),r=a(16550),l=a(91980),o=a(67392),s=a(50012);function i(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function u(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??i(a);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const o=(0,r.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(o.location.search);t.set(s,e),o.replace({...o.location,search:t.toString()})}),[s,o])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=u(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[m,d]=p({queryString:a,groupId:r}),[h,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,s.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),f=(()=>{const e=m??h;return c({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),k(e)}),[d,k,l]),tabValues:l}}},85336:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),l=a(65488),o=a(85162);const s={sidebar_label:"iOS",sidebar_position:1,toc_max_heading_level:4,description:"Set up the SDK in your iOS dapp.",tags:["iOS SDK"]},i="Use MetaMask SDK with iOS",u={unversionedId:"how-to/use-sdk/mobile/ios",id:"how-to/use-sdk/mobile/ios",title:"Use MetaMask SDK with iOS",description:"Set up the SDK in your iOS dapp.",source:"@site/wallet/how-to/use-sdk/mobile/ios.md",sourceDirName:"how-to/use-sdk/mobile",slug:"/how-to/use-sdk/mobile/ios",permalink:"/1053-snaps-ia-revamp/wallet/how-to/use-sdk/mobile/ios",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/mobile/ios.md",tags:[{label:"iOS SDK",permalink:"/1053-snaps-ia-revamp/wallet/tags/i-os-sdk"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"iOS",sidebar_position:1,toc_max_heading_level:4,description:"Set up the SDK in your iOS dapp.",tags:["iOS SDK"]},sidebar:"walletSidebar",previous:{title:"Mobile",permalink:"/1053-snaps-ia-revamp/wallet/how-to/use-sdk/mobile/"},next:{title:"Android",permalink:"/1053-snaps-ia-revamp/wallet/how-to/use-sdk/mobile/android"}},c={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Install the SDK",id:"1-install-the-sdk",level:3},{value:"2. Import the SDK",id:"2-import-the-sdk",level:3},{value:"3. Connect your dapp",id:"3-connect-your-dapp",level:3},{value:"4. Call methods",id:"4-call-methods",level:3},{value:"Example: Get chain ID",id:"example-get-chain-id",level:4},{value:"Example: Get account balance",id:"example-get-account-balance",level:4},{value:"Example: Send transaction",id:"example-send-transaction",level:4},{value:"Example",id:"example",level:2}],m={toc:p},d="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-metamask-sdk-with-ios"},"Use MetaMask SDK with iOS"),(0,r.kt)("p",null,"Import ",(0,r.kt)("a",{parentName:"p",href:"/1053-snaps-ia-revamp/wallet/concepts/sdk/"},"MetaMask SDK")," into your native iOS dapp to enable your\nusers to easily connect with their MetaMask Mobile wallet."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"MetaMask Mobile version 7.6.0 or later installed on your target device (that is, a physical device\nor emulator).\nYou can install MetaMask Mobile from the ",(0,r.kt)("a",{parentName:"p",href:"https://apps.apple.com/us/app/metamask-blockchain-wallet/id1438144202"},"App Store"),"\nor clone and compile MetaMask Mobile from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-mobile"},"source"),"\nand build to your target device.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"iOS version 14 or later.\nThe SDK supports ",(0,r.kt)("inlineCode",{parentName:"p"},"ios-arm64")," (iOS devices) and ",(0,r.kt)("inlineCode",{parentName:"p"},"ios-arm64-simulator")," (M1 chip simulators).\nIt currently doesn't support ",(0,r.kt)("inlineCode",{parentName:"p"},"ios-ax86_64-simulator")," (Intel chip simulators)."))),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("h3",{id:"1-install-the-sdk"},"1. Install the SDK"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"CocoaPods",mdxType:"TabItem"},(0,r.kt)("p",null,"To add the SDK as a CocoaPods dependency to your project, add the following entry to our Podfile:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"pod 'metamask-ios-sdk'\n")),(0,r.kt)("p",null,"Run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pod install\n"))),(0,r.kt)(o.Z,{value:"Swift Package Manager",mdxType:"TabItem"},(0,r.kt)("p",null,"To add the SDK as a Swift Package Manager (SPM) package to your project, in Xcode, select\n",(0,r.kt)("strong",{parentName:"p"},"File > Swift Packages > Add Package Dependency"),".\nEnter the URL of the MetaMask iOS SDK repository: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://github.com/MetaMask/metamask-ios-sdk"),"."),(0,r.kt)("p",null,"Alternatively, you can add the URL directly in your project's package file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'dependencies: [\n    .package(\n        url: "https://github.com/MetaMask/metamask-ios-sdk",\n        from: "0.3.0"\n    )\n]\n')))),(0,r.kt)("h3",{id:"2-import-the-sdk"},"2. Import the SDK"),(0,r.kt)("p",null,"Import the SDK by adding the following line to the top of your project file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"import metamask_ios_sdk\n")),(0,r.kt)("h3",{id:"3-connect-your-dapp"},"3. Connect your dapp"),(0,r.kt)("p",null,"Connect your dapp to MetaMask by adding the following code to your project file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'let appMetadata = AppMetadata(name: "Dub Dapp", url: "https://dubdapp.com")\n\n@ObservedObject var metamaskSDK = MetaMaskSDK.shared(appMetadata)\n\nmetamaskSDK.connect()\n')),(0,r.kt)("p",null,"By default, MetaMask logs three SDK events: ",(0,r.kt)("inlineCode",{parentName:"p"},"connectionRequest"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"connected"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"disconnected"),".\nThis allows MetaMask to monitor any SDK connection issues.\nTo disable this, set ",(0,r.kt)("inlineCode",{parentName:"p"},"MetaMaskSDK.shared.enableDebug = false")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ethereum.enableDebug = false"),"."),(0,r.kt)("h3",{id:"4-call-methods"},"4. Call methods"),(0,r.kt)("p",null,"You can now call any ",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/json-rpc-api"},"JSON-RPC API method")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"metamaskSDK.request()"),"."),(0,r.kt)("h4",{id:"example-get-chain-id"},"Example: Get chain ID"),(0,r.kt)("p",null,"The following example gets the user's chain ID by calling\n",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/eth_chainId"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_chainId")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"let chainIdRequest = EthereumRequest(method: .ethChainId)\nlet chainId = await metamaskSDK.request(chainIdRequest)\n")),(0,r.kt)("h4",{id:"example-get-account-balance"},"Example: Get account balance"),(0,r.kt)("p",null,"The following example gets the user's account balance by calling\n",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/eth_getBalance"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_getBalance")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'// Create parameters\nlet account = metamaskSDK.account\n\nlet parameters: [String] = [\n    // account to check for balance\n    account,\n    // "latest", "earliest" or "pending" (optional)\n    "latest"\n]\n\n// Create request\nlet getBalanceRequest = EthereumRequest(\n    method: .ethGetBalance,\n    params: parameters\n)\n\n// Make request\nlet accountBalance = await metamaskSDK.request(getBalanceRequest)\n')),(0,r.kt)("h4",{id:"example-send-transaction"},"Example: Send transaction"),(0,r.kt)("p",null,"The following example sends a transaction by calling\n",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/eth_sendTransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_sendTransaction")),"."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Use a dictionary",value:"tab1",mdxType:"TabItem"},(0,r.kt)("p",null,"If your request parameters make up a simple dictionary of string key-value pairs, you can use the\ndictionary directly.\nNote that ",(0,r.kt)("inlineCode",{parentName:"p"},"Any")," or even ",(0,r.kt)("inlineCode",{parentName:"p"},"AnyHashable")," types aren't supported, since the type must be explicitly known."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'// Create parameters\nlet account = metamaskSDK.account\n\nlet parameters: [String: String] = [\n    // receiver address\n    "to": "0x...",\n    // sender address\n    "from": account,\n    // amount\n    "value": "0x..."\n]\n\n// Create request\nlet transactionRequest = EthereumRequest(\n    method: .ethSendTransaction,\n    // eth_sendTransaction expects an array parameters object\n    params: [parameters]\n)\n\n// Make a transaction request\nlet transactionResult = await metamaskSDK.request(transactionRequest)\n'))),(0,r.kt)(o.Z,{label:"Use a struct",value:"tab2",mdxType:"TabItem"},(0,r.kt)("p",null,"For more complex parameter representations, define and use a struct that conforms to ",(0,r.kt)("inlineCode",{parentName:"p"},"CodableData"),",\nthat is, a struct that implements the following requirement:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"func socketRepresentation() -> NetworkData\n")),(0,r.kt)("p",null,"The type can then be represented as a socket packet."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'struct Transaction: CodableData {\n    let to: String\n    let from: String\n    let value: String\n    let data: String?\n\n    init(to: String, from: String, value: String, data: String? = nil) {\n        self.to = to\n        self.from = from\n        self.value = value\n        self.data = data\n    }\n\n    func socketRepresentation() -> NetworkData {\n        [\n            "to": to,\n            "from": from,\n            "value": value,\n            "data": data\n        ]\n    }\n}\n\n// Create parameters\nlet account = metamaskSDK.account\n\nlet transaction = Transaction(\n    // receiver address\n    to: "0x...",\n    // sender address\n    from: account,\n    // amount\n    value: "0x..."\n)\n\n// Create request\nlet transactionRequest = EthereumRequest(\n    method: .ethSendTransaction,\n    // eth_sendTransaction expects an array parameters object\n    params: [transaction]\n)\n\n// Make a transaction request\nlet result = await metamaskSDK.request(transactionRequest)\n')))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-ios-sdk/tree/main/Example"},"example iOS dapp")," in the\niOS SDK GitHub repository for more information."))}h.isMDXComponent=!0}}]);