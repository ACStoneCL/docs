"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2245],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return n?o.createElement(f,r(r({ref:t},u),{},{components:n})):o.createElement(f,r({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,t,n){function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!o(e)}n.d(t,{b:function(){return o},Z:function(){return a}})},4996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return r}});var o=n(2263),a=n(3919);function i(){var e=(0,o.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,o){var i=void 0===o?{}:o,r=i.forcePrependBaseUrl,s=void 0!==r&&r,l=i.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(s)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+u:u}(i,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},4174:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return h}});var o=n(2122),a=n(9756),i=(n(7294),n(3905)),r=n(4996),s=["components"],l={},c="Delegation Details",u={unversionedId:"economics/delegation",id:"economics/delegation",isDocsHomePage:!1,title:"Delegation Details",description:"This section provides a detailed explanation of the delegation cost mechanism, how the gas cost relates with delegations, where to find the details etc. Please note that the cost amounts are likely to change with time and you may have to check the latest release details to get the most up-to-date and accurate details.",source:"@site/source/docs/casper/economics/delegation.md",sourceDirName:"economics",slug:"/economics/delegation",permalink:"/docs/economics/delegation",editUrl:"https://github.com/casper-network/documentation/tree/master/docs/casper/economics/delegation.md",tags:[],version:"current",frontMatter:{},sidebar:"economics",previous:{title:"Gas and the Casper Blockchain",permalink:"/docs/economics/gas-concepts"},next:{title:"Staking Concepts",permalink:"/docs/economics/concepts"}},p=[{value:"Delegation Cost",id:"delegation-cost",children:[{value:"Delegation Fees",id:"delegation-fees",children:[]},{value:"First-time Delegation",id:"first-time-delegation",children:[]}]}],d={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"delegation-details"},"Delegation Details"),(0,i.kt)("p",null,"This section provides a detailed explanation of the delegation cost mechanism, how the gas cost relates with delegations, where to find the details etc. Please note that the cost amounts are likely to change with time and you may have to check the latest release details to get the most up-to-date and accurate details."),(0,i.kt)("h2",{id:"delegation-cost"},"Delegation Cost"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How much does delegation cost?")),(0,i.kt)("p",null,"The delegation cost is defined in the chainspec.toml file for each Casper network. In this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node/blob/release-1.3.2/resources/production/chainspec.toml"},"example chainspec"),", the delegation is set to cost 2.5 CSPR. However, ",(0,i.kt)("inlineCode",{parentName:"p"},"when you perform the delegation, you see that it costs a little more")," than what is specified in the chainspec. Let\u2019s discuss why this happens."),(0,i.kt)("p",null,"When you delegate, the system automatically charges some gas to set up related data in the global state of the network to track your delegation. This cost is addition to the delegation cost defined in the chainspec file."),(0,i.kt)("p",null,"For example, the chainspec file in release 1.3.2 will contain the following information. This is how the delegation cost is defined in the chainspec.toml file of a Casper network."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:(0,r.Z)("/image/economic-delegationCost.png"),alt:"cost",width:"400",class:"center"})),(0,i.kt)("p",{align:"center"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 1"),": Delegation cost is defined in the chainspec.toml file of a Casper network")),(0,i.kt)("h3",{id:"delegation-fees"},"Delegation Fees"),(0,i.kt)("p",null,"Delegation fees may change over time, so, it is essential to stay up to date. To do so, select the latest release in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node"},"Github"),", and navigate to the chainspec.toml file."),(0,i.kt)("p",null,"If you are unsure about anything, please join the ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/PjAQVXRx4Y"},"Discord channel")," to ask us questions."),(0,i.kt)("h3",{id:"first-time-delegation"},"First-time Delegation"),(0,i.kt)("p",null,"If you perform the delegation for the first time, the system charges some gas to create a purse to hold the delegated tokens."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example:")," The system can charge 0.5 CSPR in addition to the base delegation fee of 2.5 CSPR, resulting in a delegation cost of 3 CSPR on ",(0,i.kt)("a",{parentName:"p",href:"https://cspr.live/"},"Mainnet")),(0,i.kt)("p",null,"It is essential to have enough funds in your account when you set up a delegation transaction. Otherwise, the transaction will fail, and you will lose the transfer cost. For example, if you have 200 CSPR in your account, delegate at most 197 CSPR and leave at least 3 CSPR for the delegation cost. Another option is to delegate 195 CSPR and leave some additional buffer."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Transaction Fee")),(0,i.kt)("p",null,"As a result, when performing a ",(0,i.kt)("a",{parentName:"p",href:"/docs/workflow/delegate"},"delegation using the command line"),", we recommend you specify a little more than the base transaction payment to ensure that the transaction will go through without failure."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:(0,r.Z)("/image/economic-delegationDetails.png"),alt:"details",width:"400"})," "),(0,i.kt)("p",{align:"center"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 2")," : On Testnet or Mainnet, the transaction fee for a delegation is a little bit higher than 2.5 CSPR ")),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"NOTE:"))),(0,i.kt)("p",null,"Transaction costs depend on each Casper network and the cost tables defined in the chainspec. The examples you will find in the documentation are general."),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Lastly, we recommend that you try out delegations on the ",(0,i.kt)("a",{parentName:"p",href:"https://testnet.cspr.live/%3E"},"Casper Testnet")," before making actual transactions on the ",(0,i.kt)("a",{parentName:"p",href:"https://cspr.live/"},"Casper Mainnet"),". This way, you will understand the costs involved in delegating tokens."))}h.isMDXComponent=!0}}]);