(()=>{"use strict";var e,a,c,d,f,b={},r={};function t(e){var a=r[e];if(void 0!==a)return a.exports;var c=r[e]={id:e,loaded:!1,exports:{}};return b[e].call(c.exports,c,c.exports,t),c.loaded=!0,c.exports}t.m=b,e=[],t.O=(a,c,d,f)=>{if(!c){var b=1/0;for(n=0;n<e.length;n++){c=e[n][0],d=e[n][1],f=e[n][2];for(var r=!0,o=0;o<c.length;o++)(!1&f||b>=f)&&Object.keys(t.O).every((e=>t.O[e](c[o])))?c.splice(o--,1):(r=!1,f<b&&(b=f));if(r){e.splice(n--,1);var l=d();void 0!==l&&(a=l)}}return a}f=f||0;for(var n=e.length;n>0&&e[n-1][2]>f;n--)e[n]=e[n-1];e[n]=[c,d,f]},t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a:a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,t.t=function(e,d){if(1&d&&(e=this(e)),8&d)return e;if("object"==typeof e&&e){if(4&d&&e.__esModule)return e;if(16&d&&"function"==typeof e.then)return e}var f=Object.create(null);t.r(f);var b={};a=a||[null,c({}),c([]),c(c)];for(var r=2&d&&e;"object"==typeof r&&!~a.indexOf(r);r=c(r))Object.getOwnPropertyNames(r).forEach((a=>b[a]=()=>e[a]));return b.default=()=>e,t.d(f,b),f},t.d=(e,a)=>{for(var c in a)t.o(a,c)&&!t.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((a,c)=>(t.f[c](e,a),a)),[])),t.u=e=>"assets/js/"+({40:"8145e54e",53:"935f2afb",59:"e1aa5429",67:"14263bd8",157:"652081cc",167:"486ba757",260:"3e112a3e",261:"reactPlayerKaltura",368:"41f5386a",479:"82c9c8ff",582:"ef8d09aa",690:"47fa8f02",726:"9ccdf259",795:"63b87658",825:"03c51261",941:"2ca6782d",1145:"40d431ee",1234:"669925fe",1321:"d2baf1b2",1402:"3ee3d2fe",1511:"682638a2",1607:"608d969c",1624:"eb2b80f1",1752:"f5e9b272",1764:"17a18c8c",1835:"bdecca60",1856:"be5d59a6",1858:"86c686bd",2044:"aee6d0cb",2071:"fd6c27b9",2088:"c29e371a",2121:"reactPlayerFacebook",2144:"66a99382",2164:"c66e041d",2176:"b6db0fd4",2177:"fd774138",2197:"03e748d8",2250:"4ecdda4a",2257:"95c87532",2274:"4efa9f2e",2325:"6e004e16",2330:"52198f09",2350:"18e5589a",2472:"ce634f1e",2546:"reactPlayerStreamable",2583:"2a5de1af",2741:"c3be8443",2744:"f4fa537f",2794:"577b8b2a",2797:"a2353af7",2922:"416e56d6",2928:"d2011f4f",2999:"cf9828a6",3054:"68c12626",3109:"54f1853a",3115:"97c42b41",3237:"1df93b7f",3264:"8329f30e",3371:"55d0cf22",3634:"f6d13bb3",3660:"df3ffe2a",3743:"reactPlayerVimeo",3751:"3720c009",3791:"b223888a",3805:"91efdb01",3899:"bb0a09d2",3924:"6a03d60b",4121:"55960ee5",4140:"501c7dd0",4151:"ff576332",4192:"037997aa",4232:"7976d7e4",4257:"9cea254b",4283:"c66adc2f",4328:"573e544f",4332:"1d0adbbf",4397:"3cc70d16",4439:"reactPlayerYouTube",4442:"ba7d2542",4467:"177a052f",4514:"0db58064",4646:"56d3cc0a",4657:"b099eb42",4667:"reactPlayerMixcloud",4717:"ef105518",4750:"3e786943",4832:"f8a3ce18",4836:"921313a9",4880:"fbd1eabb",4957:"2150471b",5216:"66ba7e9e",5262:"2126a0d5",5412:"7d4adaa7",5413:"dfe67240",5473:"f5000f06",5549:"b09ec3c2",5576:"3d86cae6",5580:"fd49626c",5643:"19fab523",5712:"66d369c7",5715:"1132786b",5774:"406cc3cd",5812:"f0c90a0b",5965:"2e39c2b3",6002:"6380b8b5",6011:"reactPlayerFilePlayer",6125:"reactPlayerSoundCloud",6147:"c455d87c",6216:"reactPlayerTwitch",6325:"46731dd0",6336:"9947d6d2",6343:"ab4cafa2",6423:"77a46a80",6439:"c5e4f5c1",6453:"4a530d18",6487:"ad36dd7c",6556:"2c1888ff",6570:"903ae864",6595:"ab85252c",6655:"70334ba8",6718:"6721d267",6753:"ee067fe3",6754:"cfc76383",7030:"29447368",7050:"11b7fc92",7194:"01740467",7199:"888d5642",7252:"7f39747f",7266:"5e56b9d4",7318:"5625bc05",7340:"ce260bbc",7382:"d70a1ef5",7385:"537b678a",7440:"9edebb4e",7502:"57e75615",7523:"f8f7b6b2",7531:"cb2c0fed",7596:"reactPlayerDailyMotion",7612:"72448035",7664:"reactPlayerPreview",7698:"31bfc0a5",7714:"839511b6",7918:"17896441",7920:"1a4e3797",8055:"reactPlayerWistia",8078:"d058e3e1",8092:"33b0db95",8144:"91c9bb37",8301:"4ad67257",8313:"286d8836",8447:"d4b4a7ff",8669:"56aa118c",8742:"6ebf937c",8756:"3925c87d",8778:"b91521d0",8812:"f760ba82",8819:"ba4cac81",8821:"3a19b72c",8888:"reactPlayerVidyard",8930:"debbc54f",8931:"cf946124",8937:"2c7781db",9048:"95fa971a",9057:"94590018",9077:"8c26323b",9304:"49f67c63",9329:"ab8b636d",9360:"453c9f5d",9514:"1be78505",9548:"fe7415f5",9555:"766f73f8",9724:"e451bb6a",9817:"14eb3368",9905:"502824f3",9924:"df203c0f",9978:"10737780",9980:"284a1a9e",9998:"5902240e"}[e]||e)+"."+{40:"54dd033a",53:"f4f5c6c7",59:"77e1b75a",67:"02c9468a",157:"097756e3",167:"85c29107",260:"94b3abbe",261:"091ed2a3",368:"2f60c8a5",479:"43b9cdcd",582:"a1579fa5",690:"62994834",726:"3a799967",795:"d07af685",825:"df309bf6",941:"ef818099",1145:"0a870e66",1234:"d43bab2e",1321:"9114df48",1402:"cb6cff2b",1426:"be64a7dc",1511:"0cc546a8",1607:"a96e3ad0",1624:"13c5bed5",1752:"a1315d80",1764:"35fb5839",1835:"662ff628",1856:"f9167cbd",1858:"bdf9428f",2044:"bf3bcdc4",2071:"0764365a",2088:"71d9e098",2121:"697cc207",2144:"b494f3fe",2164:"5aa3b7a5",2176:"f5b47094",2177:"c2ff4efa",2197:"82e1f200",2250:"ba2f512b",2257:"ef5cd383",2274:"fb7f0bcc",2325:"3fe909af",2330:"db46698c",2350:"c8634133",2472:"068c27d8",2546:"4582143a",2583:"7f760a9b",2741:"14a6f9e6",2744:"daa2737c",2794:"c9840aef",2797:"fb8557f6",2922:"92f0b8e1",2928:"de1b18b3",2999:"38045cf5",3054:"10f01376",3109:"a65386b4",3115:"d5368fa6",3237:"f520a0b3",3264:"7dd83ed5",3371:"8c35e5c7",3634:"b966404e",3660:"28c0d0ca",3743:"42a0d9c0",3751:"df3385d2",3791:"c53c986d",3805:"aafee64e",3899:"88e32a53",3924:"bb203271",4121:"520c8a92",4140:"c91b7947",4151:"99a2e027",4192:"c95a2337",4232:"3464e5da",4257:"25bd899f",4283:"95a13abb",4328:"506541c1",4332:"7f118635",4397:"750d01df",4439:"a9b14741",4442:"dff76164",4467:"577161b2",4514:"8fe91451",4646:"a795cd47",4657:"5455053c",4667:"3aafbc0c",4717:"e3f64bf2",4750:"e672c55a",4832:"ce9087c2",4836:"2a2f4cfb",4880:"522b7f1c",4957:"63f92c90",4972:"e49176b8",5216:"38cac74c",5262:"27fd7ab3",5412:"f63a7323",5413:"f443b8c5",5473:"99c17ee2",5549:"b7fbc177",5576:"4d73064e",5580:"82e46a7b",5643:"68776ec0",5712:"77e610b6",5715:"867ca40d",5774:"b4e46da6",5812:"e941f5b3",5965:"61755f5c",6002:"6cb6b615",6011:"98545a61",6125:"bacff259",6147:"81337103",6216:"d718da62",6316:"d9003c37",6325:"89260b07",6336:"ade032d5",6343:"afee851b",6423:"6f5d7db7",6439:"d893d854",6453:"18e52d70",6487:"0523d588",6556:"34436d37",6570:"62b5284d",6595:"d3b59917",6655:"f5b7a4ad",6718:"b53092bf",6753:"51407d65",6754:"faea8974",6760:"d1120f0d",6945:"07888cb2",7030:"72715083",7050:"27765970",7194:"e77cb998",7199:"ae6866d5",7252:"108592d0",7266:"adb84bfe",7318:"9394c0e1",7340:"8d6bbdd7",7382:"026cfcb4",7385:"af6ecf83",7440:"9fa609e0",7502:"936775a8",7523:"812864c1",7531:"9695fb6b",7596:"a49c1936",7612:"d4c03f41",7664:"9db1cd05",7698:"ded7e244",7714:"61e26471",7724:"df7eb109",7918:"dbcdf1b4",7920:"3b179cfe",8055:"508ea7c7",8078:"85e0a045",8092:"85b54c2e",8144:"b596f031",8301:"fab65e16",8313:"4b1d8d23",8447:"a2cbf235",8669:"d657d635",8685:"19ce8911",8742:"e3870b67",8756:"5c252f97",8778:"f4655458",8812:"5e6e5d9c",8819:"9571917f",8821:"2a705731",8888:"1189c126",8894:"814fc599",8930:"fb644538",8931:"ca22b72e",8937:"374540ad",9048:"af8dc517",9057:"31dc2a18",9077:"49628493",9304:"f1cb4879",9329:"87a49987",9360:"8f85b52b",9487:"e0727ae8",9514:"bf7c0fe3",9548:"26c00770",9555:"8830e099",9701:"3bfec2d8",9724:"520b8017",9817:"f9ec2b68",9876:"ee4589f6",9905:"a4b66a78",9924:"8cde9cdd",9978:"1a95facb",9980:"037b1918",9984:"3e5c17e0",9998:"6ec863de"}[e]+".js",t.miniCssF=e=>{},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),d={},f="metamask-docs:",t.l=(e,a,c,b)=>{if(d[e])d[e].push(a);else{var r,o;if(void 0!==c)for(var l=document.getElementsByTagName("script"),n=0;n<l.length;n++){var i=l[n];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==f+c){r=i;break}}r||(o=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,t.nc&&r.setAttribute("nonce",t.nc),r.setAttribute("data-webpack",f+c),r.src=e),d[e]=[a];var u=(a,c)=>{r.onerror=r.onload=null,clearTimeout(s);var f=d[e];if(delete d[e],r.parentNode&&r.parentNode.removeChild(r),f&&f.forEach((e=>e(c))),a)return a(c)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=u.bind(null,r.onerror),r.onload=u.bind(null,r.onload),o&&document.head.appendChild(r)}},t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),t.p="/1164-accounts-concepts/",t.gca=function(e){return e={10737780:"9978",17896441:"7918",29447368:"7030",72448035:"7612",94590018:"9057","8145e54e":"40","935f2afb":"53",e1aa5429:"59","14263bd8":"67","652081cc":"157","486ba757":"167","3e112a3e":"260",reactPlayerKaltura:"261","41f5386a":"368","82c9c8ff":"479",ef8d09aa:"582","47fa8f02":"690","9ccdf259":"726","63b87658":"795","03c51261":"825","2ca6782d":"941","40d431ee":"1145","669925fe":"1234",d2baf1b2:"1321","3ee3d2fe":"1402","682638a2":"1511","608d969c":"1607",eb2b80f1:"1624",f5e9b272:"1752","17a18c8c":"1764",bdecca60:"1835",be5d59a6:"1856","86c686bd":"1858",aee6d0cb:"2044",fd6c27b9:"2071",c29e371a:"2088",reactPlayerFacebook:"2121","66a99382":"2144",c66e041d:"2164",b6db0fd4:"2176",fd774138:"2177","03e748d8":"2197","4ecdda4a":"2250","95c87532":"2257","4efa9f2e":"2274","6e004e16":"2325","52198f09":"2330","18e5589a":"2350",ce634f1e:"2472",reactPlayerStreamable:"2546","2a5de1af":"2583",c3be8443:"2741",f4fa537f:"2744","577b8b2a":"2794",a2353af7:"2797","416e56d6":"2922",d2011f4f:"2928",cf9828a6:"2999","68c12626":"3054","54f1853a":"3109","97c42b41":"3115","1df93b7f":"3237","8329f30e":"3264","55d0cf22":"3371",f6d13bb3:"3634",df3ffe2a:"3660",reactPlayerVimeo:"3743","3720c009":"3751",b223888a:"3791","91efdb01":"3805",bb0a09d2:"3899","6a03d60b":"3924","55960ee5":"4121","501c7dd0":"4140",ff576332:"4151","037997aa":"4192","7976d7e4":"4232","9cea254b":"4257",c66adc2f:"4283","573e544f":"4328","1d0adbbf":"4332","3cc70d16":"4397",reactPlayerYouTube:"4439",ba7d2542:"4442","177a052f":"4467","0db58064":"4514","56d3cc0a":"4646",b099eb42:"4657",reactPlayerMixcloud:"4667",ef105518:"4717","3e786943":"4750",f8a3ce18:"4832","921313a9":"4836",fbd1eabb:"4880","2150471b":"4957","66ba7e9e":"5216","2126a0d5":"5262","7d4adaa7":"5412",dfe67240:"5413",f5000f06:"5473",b09ec3c2:"5549","3d86cae6":"5576",fd49626c:"5580","19fab523":"5643","66d369c7":"5712","1132786b":"5715","406cc3cd":"5774",f0c90a0b:"5812","2e39c2b3":"5965","6380b8b5":"6002",reactPlayerFilePlayer:"6011",reactPlayerSoundCloud:"6125",c455d87c:"6147",reactPlayerTwitch:"6216","46731dd0":"6325","9947d6d2":"6336",ab4cafa2:"6343","77a46a80":"6423",c5e4f5c1:"6439","4a530d18":"6453",ad36dd7c:"6487","2c1888ff":"6556","903ae864":"6570",ab85252c:"6595","70334ba8":"6655","6721d267":"6718",ee067fe3:"6753",cfc76383:"6754","11b7fc92":"7050","01740467":"7194","888d5642":"7199","7f39747f":"7252","5e56b9d4":"7266","5625bc05":"7318",ce260bbc:"7340",d70a1ef5:"7382","537b678a":"7385","9edebb4e":"7440","57e75615":"7502",f8f7b6b2:"7523",cb2c0fed:"7531",reactPlayerDailyMotion:"7596",reactPlayerPreview:"7664","31bfc0a5":"7698","839511b6":"7714","1a4e3797":"7920",reactPlayerWistia:"8055",d058e3e1:"8078","33b0db95":"8092","91c9bb37":"8144","4ad67257":"8301","286d8836":"8313",d4b4a7ff:"8447","56aa118c":"8669","6ebf937c":"8742","3925c87d":"8756",b91521d0:"8778",f760ba82:"8812",ba4cac81:"8819","3a19b72c":"8821",reactPlayerVidyard:"8888",debbc54f:"8930",cf946124:"8931","2c7781db":"8937","95fa971a":"9048","8c26323b":"9077","49f67c63":"9304",ab8b636d:"9329","453c9f5d":"9360","1be78505":"9514",fe7415f5:"9548","766f73f8":"9555",e451bb6a:"9724","14eb3368":"9817","502824f3":"9905",df203c0f:"9924","284a1a9e":"9980","5902240e":"9998"}[e]||e,t.p+t.u(e)},(()=>{var e={1303:0,532:0};t.f.j=(a,c)=>{var d=t.o(e,a)?e[a]:void 0;if(0!==d)if(d)c.push(d[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var f=new Promise(((c,f)=>d=e[a]=[c,f]));c.push(d[2]=f);var b=t.p+t.u(a),r=new Error;t.l(b,(c=>{if(t.o(e,a)&&(0!==(d=e[a])&&(e[a]=void 0),d)){var f=c&&("load"===c.type?"missing":c.type),b=c&&c.target&&c.target.src;r.message="Loading chunk "+a+" failed.\n("+f+": "+b+")",r.name="ChunkLoadError",r.type=f,r.request=b,d[1](r)}}),"chunk-"+a,a)}},t.O.j=a=>0===e[a];var a=(a,c)=>{var d,f,b=c[0],r=c[1],o=c[2],l=0;if(b.some((a=>0!==e[a]))){for(d in r)t.o(r,d)&&(t.m[d]=r[d]);if(o)var n=o(t)}for(a&&a(c);l<b.length;l++)f=b[l],t.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return t.O(n)},c=self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})()})();