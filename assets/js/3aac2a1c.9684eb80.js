"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3264],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6607:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),i=["components"],s={},c="Important Commands",l={unversionedId:"dapp-dev-guide/tutorials/counter/commands",id:"dapp-dev-guide/tutorials/counter/commands",isDocsHomePage:!1,title:"Important Commands",description:"Faucet Account Information",source:"@site/source/docs/casper/dapp-dev-guide/tutorials/counter/commands.md",sourceDirName:"dapp-dev-guide/tutorials/counter",slug:"/dapp-dev-guide/tutorials/counter/commands",permalink:"/docs/dapp-dev-guide/tutorials/counter/commands",editUrl:"https://github.com/casper-network/documentation/tree/master/docs/casper/dapp-dev-guide/tutorials/counter/commands.md",tags:[],version:"current",frontMatter:{},sidebar:"dapp-dev-guide",previous:{title:"Overview",permalink:"/docs/dapp-dev-guide/tutorials/counter/overview"},next:{title:"Casper Client Setup",permalink:"/docs/dapp-dev-guide/tutorials/counter/setup"}},u=[{value:"Faucet Account Information",id:"faucet-account-information",children:[]},{value:"State Root Hash",id:"state-root-hash",children:[]},{value:"Querying Network State",id:"querying-network-state",children:[]},{value:"Put Deploys (onto the Chain)",id:"put-deploys-onto-the-chain",children:[{value:"Deploy via a compiled WASM binary",id:"deploy-via-a-compiled-wasm-binary",children:[]},{value:"Deploy via a named key already on the blockchain",id:"deploy-via-a-named-key-already-on-the-blockchain",children:[]}]},{value:"Get Deploys (from the Chain)",id:"get-deploys-from-the-chain",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"important-commands"},"Important Commands"),(0,r.kt)("h2",{id:"faucet-account-information"},"Faucet Account Information"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"nctl-view-faucet-account\n")),(0,r.kt)("p",null,"This command is part of NCTL and provides a view into the faucet account details. The faucet is the default account created on the network. Generally on the Mainnet, your own account is used to fund transactions. However, for the sake of this tutorial, we do not need accounts and will use the faucet to execute deploys. This command supplies two key pieces of information: the account's ",(0,r.kt)("em",{parentName:"p"},"secret key")," location and the ",(0,r.kt)("em",{parentName:"p"},"account hash"),", which are used to sign deploys and query the network state, respectively."),(0,r.kt)("h2",{id:"state-root-hash"},"State Root Hash"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"casper-client get-state-root-hash --node-address [NODE_SERVER_ADDRESS]\n")),(0,r.kt)("p",null,"The first command that we will cover as part of the ",(0,r.kt)("em",{parentName:"p"},"casper-client")," tool is the [",(0,r.kt)("em",{parentName:"p"},"get-state-root-hash")," command. The state root hash is an identifier of the current network state. It is similar to a Git commit ID for commit history. It gives a snapshot of the blockchain state at a moment in time. For this tutorial, it will be used to query the network state after we take actions with deployments."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"After any deploys to the network, you must get the new state root hash to see the new changes reflected. Otherwise, you will be looking at events in the past."))),(0,r.kt)("h2",{id:"querying-network-state"},"Querying Network State"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'casper-client query-state \\\n    --node-address [NODE_SERVER_ADDRESS] \\\n    --state-root-hash [STATE_ROOT_HASH] \\\n    --key [ACCOUNT_HASH] \\\n    -q "[SESSION_NAME]/[SESSION_NAMED_KEY]" (OPTIONAL)\n')),(0,r.kt)("p",null,"This command allows you to query the state of a Casper network at a given moment in time, which is specified by the ",(0,r.kt)("em",{parentName:"p"},"state-root-hash")," described above."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("em",{parentName:"li"},"node-address")," is the server (localhost when running on a local NCTL network)."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("em",{parentName:"li"},"key")," is the identifier for the query. It must be either the account public key, account hash, contract address hash, transfer hash, or deploy hash. We will demonstrate two of these key types in this tutorial."),(0,r.kt)("li",{parentName:"ul"},"The optional query path argument (",(0,r.kt)("em",{parentName:"li"},"q"),") allows you to drill into the specifics of a query concerning the key.")),(0,r.kt)("h2",{id:"put-deploys-onto-the-chain"},"Put Deploys (onto the Chain)"),(0,r.kt)("h3",{id:"deploy-via-a-compiled-wasm-binary"},"Deploy via a compiled WASM binary"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"casper-client put-deploy \\\n    --node-address [NODE_SERVER_ADDRESS] \\\n    --chain-name casper-net-1 \\\n    --secret-key [KEY_PATH]/secret_key.pem \\\n    --payment-amount 5000000000000 \\\n    --session-path [CONTRACT_PATH]/counter-define.wasm\n")),(0,r.kt)("p",null,"This command creates a deploy and sends it to the network for execution. In this first usage of the command,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("em",{parentName:"li"},"session-path")," points to a compiled WASM contract."),(0,r.kt)("li",{parentName:"ul"},"This contract is then deployed to the network specified by ",(0,r.kt)("em",{parentName:"li"},"node-address")," and ",(0,r.kt)("em",{parentName:"li"},"chain-name"),'. By default, NCTL names the chain "casper-net-1" but this is configurable.'),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("em",{parentName:"li"},"payment-amount")," is in units of motes (1 nano-CSPR) and is required to pay the transaction fee for the deployment. If it is too small, the transaction will get denied due to insufficient funds.")),(0,r.kt)("h3",{id:"deploy-via-a-named-key-already-on-the-blockchain"},"Deploy via a named key already on the blockchain"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'casper-client put-deploy \\\n    --node-address [NODE_SERVER_ADDRESS] \\\n    --chain-name casper-net-1 \\\n    --secret-key [KEY_PATH]/secret_key.pem \\\n    --payment-amount 5000000000000 \\\n    --session-name "counter" \\\n    --session-entry-point "counter_inc"\n')),(0,r.kt)("p",null,"This second usage of ",(0,r.kt)("em",{parentName:"p"},"put-deploy")," does not place a new contract on the chain, but it allows you to call entry points (functions) defined in smart contracts."),(0,r.kt)("p",null,'Here we show the example using "counter" and "counter_inc" because, in the ',(0,r.kt)("a",{parentName:"p",href:"/docs/dapp-dev-guide/tutorials/counter/walkthrough"},"Counter tutorial"),', we have defined a smart contract by the name of "counter", and there is an entry-point named "counter_inc" defined within it. However, these will be different when you write your contracts.'),(0,r.kt)("h2",{id:"get-deploys-from-the-chain"},"Get Deploys (from the Chain)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"casper-client get-deploy \\\n    --node-address [NODE_SERVER_ADDRESS] \\\n    [DEPLOY_HASH]\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"get-deploy")," command is complementary to the ",(0,r.kt)("em",{parentName:"p"},"put-deploy")," command. It retrieves a deploy from the network and allows you to check the status of the deploy. The ",(0,r.kt)("em",{parentName:"p"},"DEPLOY_HASH")," is the identifier to a specific deploy and is returned by the ",(0,r.kt)("em",{parentName:"p"},"put-deploy")," command."))}d.isMDXComponent=!0}}]);