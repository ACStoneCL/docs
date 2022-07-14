"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4531],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(i,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1609:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),l=["components"],s={},i="FAQ - General",u={unversionedId:"faq/faq-general",id:"faq/faq-general",title:"FAQ - General",description:"Accounts",source:"@site/source/docs/casper/faq/faq-general.md",sourceDirName:"faq",slug:"/faq/faq-general",permalink:"/faq/faq-general",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/faq/faq-general.md",tags:[],version:"current",frontMatter:{},sidebar:"faq",previous:{title:"Frequently Asked Questions (FAQ)",permalink:"/faq"},next:{title:"FAQ - Enterprise",permalink:"/faq/faq-enterpise"}},c={},p=[{value:"Accounts",id:"accounts",level:3},{value:"Minimum CSPR Balance",id:"minimum-cspr-balance",level:3},{value:"Ledger Support",id:"ledger-support",level:3},{value:"Staking",id:"staking",level:3}],d={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"faq---general"},"FAQ - General"),(0,o.kt)("h3",{id:"accounts"},"Accounts"),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Should a customer see use the account-hex or the account-hash?")),"Exchange customers or end-users only need to see the ",(0,o.kt)("em",null,"account-hex"),". They do not need to know the ",(0,o.kt)("em",null,"account_hash"),". The ",(0,o.kt)("em",null,"account_hash")," is needed in the backend to verify transactions. Store the ",(0,o.kt)("em",null,"account-hash")," to query and monitor the account. Customers do not need to know this value, so to simplify their experience, we recommend storing both values and displaying only the ",(0,o.kt)("em",null,"account-hex")," value."),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Is it possible to convert an account-hash back to an account-hex?")),(0,o.kt)("p",null,"An ",(0,o.kt)("em",null,"account-hash")," is a one-way hashed value of the ",(0,o.kt)("em",null,"account-hex"),". We refer to the ",(0,o.kt)("em",null,"account-hex")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"public_key")," and the ",(0,o.kt)("em",null,"account-hash")," as the ",(0,o.kt)("inlineCode",{parentName:"p"},"account_address"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("em",null,"account-hex")," originates with JS-SDK naming conventions. We store it and convert it to an ",(0,o.kt)("em",null,"account-hash"),". Using ",(0,o.kt)("inlineCode",{parentName:"p"},"account-address")," within the Rust client generates an account hash from a given public key.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Why is my account invalid when I can see it on the testnet?")),(0,o.kt)("p",null,"You must deposit tokens to activate it. You can request tokens from ",(0,o.kt)("a",{parentName:"p",href:"https://testnet.cspr.live/tools/faucet"},"CSPR Live"),".")),(0,o.kt)("h3",{id:"minimum-cspr-balance"},"Minimum CSPR Balance"),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"What is the minimum CSPR balance required to transfer?")),(0,o.kt)("p",null,"An account cannot transfer less than 2.5 CSPR.")),(0,o.kt)("h3",{id:"ledger-support"},"Ledger Support"),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Does Casper offer Ledger support?")),(0,o.kt)("p",null,"Yes. Follow ",(0,o.kt)("a",{parentName:"p",href:"https://support.ledger.com/hc/en-us/articles/4416379141009-Casper-CSPR-?docs=true"},"this guide")," to install the Casper app on your Ledger device to manage CSPR.")),(0,o.kt)("h3",{id:"staking"},"Staking"),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"What are the important aspects to consider when delegating tokens to a validator?")),(0,o.kt)("p",null,"Users should consider consistent uptime, prompt upgrades and commission rates when choosing a validator. Offline and out-of-date validators do not generate rewards."),(0,o.kt)("p",null,"Active engagement in the community is another important aspect.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"How do I stake tokens via the command line?")),(0,o.kt)("p",null,"Follow ",(0,o.kt)("a",{parentName:"p",href:"https://docs.casperlabs.io/workflow/delegate/"},"the delegation workflow")," to learn how to stake your tokens via the command line.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"How do I stake tokens using cspr.live?")),(0,o.kt)("p",null,"See the article on ",(0,o.kt)("a",{parentName:"p",href:"https://docs.casperlabs.io/workflow/staking/"},"How to Stake your CSPR"),".")),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"What is self-stake percentage?")),(0,o.kt)("p",null,"Self-stake is the amount of CSPR a validator personally staked on the network from their validating node, expressed as a percentage of the total amount of CSPR staked to that validator. Most validators choose to delegate their own tokens to their validating node as a security practice, which will show as a low self-stake percentage.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"What is slashing?")),(0,o.kt)("p",null,"Slashing is a penalty for inappropriate or malicious behavior. Ordinarily, the official node software will not act maliciously unless intentionally altered. When this happens, the validator in question gets slashed (Note: The network treats validator and delegator tokens equally)."),(0,o.kt)("p",null,"Slashing is not currently enabled on the Casper Mainnet. If a validator behaves poorly on the network, they face eviction from the network and loss of rewards. When slashing is enabled, poor behavior will result in token removal. In this case, you will lose any rewards accrued during the eviction period.")))}h.isMDXComponent=!0}}]);