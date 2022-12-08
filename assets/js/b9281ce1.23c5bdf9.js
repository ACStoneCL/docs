"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6827],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(r),h=a,f=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1995:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return d}});var n=r(3117),a=r(102),i=(r(7294),r(3905)),o=["components"],p={},s="Interacting with the Casper JSON-RPC API",c={unversionedId:"dapp-dev-guide/json-rpc",id:"dapp-dev-guide/json-rpc",title:"Interacting with the Casper JSON-RPC API",description:"Users looking to interact with the JSON-RPC API of a Casper network have several options, depending on their needs and the level of interaction required.",source:"@site/source/docs/casper/dapp-dev-guide/json-rpc.md",sourceDirName:"dapp-dev-guide",slug:"/dapp-dev-guide/json-rpc",permalink:"/dapp-dev-guide/json-rpc",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/dapp-dev-guide/json-rpc.md",tags:[],version:"current",frontMatter:{},sidebar:"dapp-dev-guide",previous:{title:"Understanding Hash Types",permalink:"/dapp-dev-guide/understanding-hash-types"},next:{title:"Introduction",permalink:"/dapp-dev-guide/sdkspec/introduction"}},l={},d=[{value:"Using a Casper SDK",id:"using-a-casper-sdk",level:2},{value:"Building a Casper SDK",id:"building-a-casper-sdk",level:2},{value:"Interacting Directly with the JSON-RPC",id:"interacting-directly-with-the-json-rpc",level:2}],u={toc:d};function h(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interacting-with-the-casper-json-rpc-api"},"Interacting with the Casper JSON-RPC API"),(0,i.kt)("p",null,"Users looking to interact with the JSON-RPC API of a Casper network have several options, depending on their needs and the level of interaction required."),(0,i.kt)("h2",{id:"using-a-casper-sdk"},"Using a Casper SDK"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://casper.network/en-us/"},"Casper Association")," provides a ",(0,i.kt)("a",{parentName:"p",href:"/dapp-dev-guide/building-dapps/sdk/script-sdk/"},"JavaScript SDK")," for use with Casper networks. A list of additional SDKs maintained by third parties can be found ",(0,i.kt)("a",{parentName:"p",href:"/sdk/"},"here"),"."),(0,i.kt)("p",null,"These SDKs offer a means to build decentralized applications by interacting with the JSON-RPC API through your programming language of choice."),(0,i.kt)("h2",{id:"building-a-casper-sdk"},"Building a Casper SDK"),(0,i.kt)("p",null,"Most programming languages that compile to ",(0,i.kt)("a",{parentName:"p",href:"/glossary/W/#webassembly"},"WebAssembly (Wasm)")," are compatible with Casper. If there is not currently an SDK for your preferred programming language, you are free to build your own ",(0,i.kt)("a",{parentName:"p",href:"/dapp-dev-guide/sdkspec/introduction/"},"Casper SDK Standard")," compliant SDK."),(0,i.kt)("p",null,"The standard outlines necessary available endpoints and their included types, both for fully-featured SDKs and those of a more narrow scope. Guidance for Casper SDK developers can be found ",(0,i.kt)("a",{parentName:"p",href:"/dapp-dev-guide/sdkspec/guidance/"},"here"),"."),(0,i.kt)("h2",{id:"interacting-directly-with-the-json-rpc"},"Interacting Directly with the JSON-RPC"),(0,i.kt)("p",null,"For advanced users that wish to interact directly with the JSON-RPC API, they are free to do so using various tools like ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/"},"Postman"),"."),(0,i.kt)("p",null,"The Casper JSON-RPC API is fully compatible with the ",(0,i.kt)("a",{parentName:"p",href:"https://www.jsonrpc.org/specification"},"JSON-RPC 2.0 Specification"),"."),(0,i.kt)("p",null,"Casper nodes provide the RPC schema on port ",(0,i.kt)("inlineCode",{parentName:"p"},"8888"),", followed by ",(0,i.kt)("inlineCode",{parentName:"p"},"rpc-schema"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"<HOST:8888>/rpc-schema\n")),(0,i.kt)("p",null,"To see an example, navigate to ",(0,i.kt)("a",{parentName:"p",href:"http://65.21.235.219:8888/rpc-schema"},"http://65.21.235.219:8888/rpc-schema")," in your browser."),(0,i.kt)("p",null,"The Casper client subcommand ",(0,i.kt)("inlineCode",{parentName:"p"},"list-rpcs")," provides all currently supported RPCs. Here is an example of running the Casper client to list RPCs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"casper-client list-rpcs -n http://65.21.235.219:7777\n")))}h.isMDXComponent=!0}}]);