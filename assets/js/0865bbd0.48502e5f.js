"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7426],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=i(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||c;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var i=2;i<c;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9784:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p}});var a=n(3117),r=n(102),c=(n(7294),n(3905)),o=["components"],l={},s="Setup",i={unversionedId:"workflow/erc-20-sample-guide/setup",id:"workflow/erc-20-sample-guide/setup",title:"Setup",description:"Clone the ERC-20 contract repository and run the make build-contract command. This will create the erc20token.wasm and the erc20testcall.wasm. The token WASM is the main contract. We will use the testcall contract wasm to query the balances and allowances of the ERC-20 token balances throughout this workflow.",source:"@site/source/docs/casper/workflow/erc-20-sample-guide/setup.md",sourceDirName:"workflow/erc-20-sample-guide",slug:"/workflow/erc-20-sample-guide/setup",permalink:"/workflow/erc-20-sample-guide/setup",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/workflow/erc-20-sample-guide/setup.md",tags:[],version:"current",frontMatter:{},sidebar:"workflow",previous:{title:"Introduction",permalink:"/workflow/erc-20-sample-guide"},next:{title:"Query the Contract Package",permalink:"/workflow/erc-20-sample-guide/query"}},u={},p=[{value:"Install the Main ERC-20 Contract",id:"install-the-main-erc-20-contract",level:2},{value:"Install the erc20_test_call Contract Package",id:"install-the-erc20_test_call-contract-package",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,c.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"setup"},"Setup"),(0,c.kt)("p",null,"Clone the ERC-20 contract repository and run the ",(0,c.kt)("inlineCode",{parentName:"p"},"make build-contract")," command. This will create the ",(0,c.kt)("inlineCode",{parentName:"p"},"erc20_token.wasm")," and the ",(0,c.kt)("inlineCode",{parentName:"p"},"erc20_test_call.wasm"),". The token WASM is the main contract. We will use the ",(0,c.kt)("inlineCode",{parentName:"p"},"test_call")," contract wasm to query the balances and allowances of the ERC-20 token balances throughout this workflow."),(0,c.kt)("h2",{id:"install-the-main-erc-20-contract"},"Install the Main ERC-20 Contract"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client put-deploy -n http://3.143.158.19:7777 \\\n--chain-name integration-test \\\n--secret-key ~/casper/demo/user_a/secret_key.pem \\\n--session-path ~/casper/demo/erc20_token.wasm \\\n--session-arg \"name:string='ERC20'\" \\\n--session-arg \"symbol:string='gris'\" \\\n--session-arg \"total_supply:u256='100'\" \\\n--session-arg \"decimals:u8='1'\" \\\n--payment-amount 90000000000\n")),(0,c.kt)("h2",{id:"install-the-erc20_test_call-contract-package"},"Install the erc20_test_call Contract Package"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client put-deploy -n http://3.143.158.19:7777 \\\n--chain-name integration-test \\\n--secret-key ~/casper/demo/user_a/secret_key.pem \\\n--session-path ~/casper/demo/erc20_test_call.wasm \\\n--payment-amount 90000000000\n")),(0,c.kt)("p",null,"At this point, the account that installed both the main contract and the helper contract will look like this."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'{\n    "src": {\n    "Account": {\n    "_accountHash": "account-hash-303c0f8208220fe9a4de40e1ada1d35fdd6c678877908f01fddb2a56502d67fd",\n    "namedKeys": [\n        {\n        "name": "erc20_test_call",\n        "key": "hash-999326ca8408dfd37da023eb6fd82f174151be64f83f9fb837632a0d69fd4c7e"\n        },\n        {\n        "name": "erc20_token_contract",\n        "key": "hash-b568f50a64acc8bbe43462ffe243849a88111060b228dacb8f08d42e26985180"\n        },\n    ],\n    "mainPurse": "uref-6c062525debdee18d5cad083ca530fcb65ef8741574fba4c97673f4ed00093f7-007",\n    "associatedKeys": [\n        {\n        "accountHash": "account-hash-303c0f8208220fe9a4de40e1ada1d35fdd6c678877908f01fddb2a56502d67fd",\n        "weight": 1\n        }\n    ],\n    "actionThresholds": {\n        "deployment": 1,\n        "keyManagement": 1\n        }\n        }\n    }\n}\n')),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},(0,c.kt)("em",{parentName:"strong"},"Note:"))),(0,c.kt)("blockquote",null,(0,c.kt)("ol",{parentName:"blockquote"},(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("inlineCode",{parentName:"li"},"erc20_token_contract")," is the main contract, and is a stored contract, record its hash"),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("inlineCode",{parentName:"li"},"erc20_test_call")," is a Contract package which contains the utility contract required to read the balances and allowances of users within the ERC-20 state."))))}m.isMDXComponent=!0}}]);