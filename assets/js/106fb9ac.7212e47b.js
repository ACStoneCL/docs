"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[478],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,h=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},622:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=r(3117),a=r(102),i=(r(7294),r(3905)),o=["components"],s={},l="Listing CSPR",c={unversionedId:"dapp-dev-guide/list-cspr",id:"dapp-dev-guide/list-cspr",title:"Listing CSPR",description:"This document is tailored specifically for exchanges that wish to list the Casper token (CSPR).",source:"@site/source/docs/casper/dapp-dev-guide/list-cspr.md",sourceDirName:"dapp-dev-guide",slug:"/dapp-dev-guide/list-cspr",permalink:"/dapp-dev-guide/list-cspr",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/dapp-dev-guide/list-cspr.md",tags:[],version:"current",frontMatter:{},sidebar:"dapp-dev-guide",previous:{title:"Why Build on Casper",permalink:"/dapp-dev-guide/why-build-on-casper"},next:{title:"Introduction",permalink:"/writing-contracts"}},p={},u=[{value:"Transaction Workflow",id:"transaction-workflow",level:2},{value:"The Casper Protocol",id:"the-casper-protocol",level:2}],d={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"listing-cspr"},"Listing CSPR"),(0,i.kt)("p",null,"This document is tailored specifically for exchanges that wish to list the Casper token (CSPR)."),(0,i.kt)("p",null,"CSPR is listed on over 25 exchanges worldwide. As a token, CSPR is very straightforward to integrate. Developers can complete integration and testing in a matter of days."),(0,i.kt)("p",null,"There are several well-maintained Software Development Kits (SDKs) available to use on the Casper Network, see ",(0,i.kt)("a",{parentName:"p",href:"/sdk"},"SDK Libraries"),"."),(0,i.kt)("h2",{id:"transaction-workflow"},"Transaction Workflow"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dapp-dev-guide/keys"},"Create an account")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/workflow/transfer-workflow"},"Create a transfer transaction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/workflow/querying"},"Query the transaction status")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/workflow/verify-transfer"},"Verify a transfer"))),(0,i.kt)("h2",{id:"the-casper-protocol"},"The Casper Protocol"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Casper supports two types of keys, ",(0,i.kt)("inlineCode",{parentName:"li"},"secp256k1")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"ed25519"),". In the global state, public keys are hashed using a one-way ",(0,i.kt)("inlineCode",{parentName:"li"},"blake2b")," hash. When creating keys, it is strongly recommended that the account hash be stored along with the public and private keys. Keys can be created offline, and do not exist on the blockchain until CSPR is sent to an address."),(0,i.kt)("li",{parentName:"ul"},"Casper is integrated with BitGo for enterprise grade custody. If your exchange uses BitGo, support for Casper is available already."),(0,i.kt)("li",{parentName:"ul"},"Casper transactions are executed only after they are finalized through consensus. Transactions are not orphaned or uncle\u2019d on Casper and neither does chain reorganization happen on it."),(0,i.kt)("li",{parentName:"ul"},"Exchanges can check finality signatures from validators for additional security. Finality signatures are sent by validators after the finalized block is executed and global state is updated. The Casper node streams execution effects and finality signatures through an SSE architecture. The default configuration of the Casper node provides event streaming on the ",(0,i.kt)("inlineCode",{parentName:"li"},"/events")," endpoint of port ",(0,i.kt)("inlineCode",{parentName:"li"},"9999"),".")))}f.isMDXComponent=!0}}]);