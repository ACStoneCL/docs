"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8692],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),h=s(n),f=a,d=h["".concat(i,".").concat(f)]||h[f]||p[f]||o;return n?r.createElement(d,c(c({ref:t},l),{},{components:n})):r.createElement(d,c({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=h;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,c[1]=u;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},355:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),c=["components"],u={},i="Account Hash",s={unversionedId:"workflow/account-hash",id:"workflow/account-hash",title:"Account Hash",description:"The account-hash is a 32-byte hash of the public key and it represents the address of the user account. It is the identifier of the account inside a smart contract.",source:"@site/source/docs/casper/workflow/account-hash.md",sourceDirName:"workflow",slug:"/workflow/account-hash",permalink:"/workflow/account-hash",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/workflow/account-hash.md",tags:[],version:"current",frontMatter:{},sidebar:"workflow",previous:{title:"Querying the Network",permalink:"/workflow/querying"},next:{title:"Two-Party Multi-Signature Deploys",permalink:"/workflow/two-party-multi-sig"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Generating Account Hash",id:"generating-account-hash",level:2}],h={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"account-hash"},"Account Hash"),(0,o.kt)("p",null,"The account-hash is a 32-byte hash of the public key and it represents the address of the user account. It is the identifier of the account inside a smart contract."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"You must ensure the following prerequisites are met, before you can generate an account hash:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Set up your machine as per the ",(0,o.kt)("a",{parentName:"li",href:"/workflow/setup"},"prerequisites")),(0,o.kt)("li",{parentName:"ol"},"Get a ",(0,o.kt)("em",{parentName:"li"},"public key")," hex"),(0,o.kt)("li",{parentName:"ol"},"Use the Casper ",(0,o.kt)("a",{parentName:"li",href:"/workflow/setup#the-casper-command-line-client"},"command-line client"))),(0,o.kt)("h2",{id:"generating-account-hash"},"Generating Account Hash"),(0,o.kt)("p",null,"To generate an account-hash use the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client account-address --public-key <PUBLIC KEY HEX CODE>\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Sample Output")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"account-hash-a2c2a41c282452195e5dd267272d12ed3e991467a5f881aab96306bac1cec3e8\n")),(0,o.kt)("p",null,"In the above output, ",(0,o.kt)("inlineCode",{parentName:"p"},"a2c2a41c282452195e5dd267272d12ed3e991467a5f881aab96306bac1cec3e8")," is the account hash and the prefix ",(0,o.kt)("inlineCode",{parentName:"p"},"account-hash-")," is used to make it a tight key."))}f.isMDXComponent=!0}}]);