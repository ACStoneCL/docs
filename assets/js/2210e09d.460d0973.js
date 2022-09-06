"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5877],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),h=n,g=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return r?a.createElement(g,l(l({ref:t},p),{},{components:r})):a.createElement(g,l({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3341:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=r(3117),n=r(102),o=(r(7294),r(3905)),l=r(4996),i=["components"],s={},c="Ledger Setup",p={unversionedId:"workflow/ledger-setup",id:"workflow/ledger-setup",title:"Ledger Setup",description:"A Ledger Device is a hardware wallet that is considered one of the most secure ways to store your digital assets. Ledger uses an offline, or cold storage, method of generating private keys, making it a preferred method for many crypto users. This guide will help you to connect your Ledger device to a Casper Web wallet on a block explorer such as cspr.live. The Casper Web wallet enables you to send and receive CSPR tokens.",source:"@site/source/docs/casper/workflow/ledger-setup.md",sourceDirName:"workflow",slug:"/workflow/ledger-setup",permalink:"/workflow/ledger-setup",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/workflow/ledger-setup.md",tags:[],version:"current",frontMatter:{},sidebar:"workflow",previous:{title:"How to Stake your CSPR",permalink:"/workflow/staking"},next:{title:"Casper Signer User Guide",permalink:"/workflow/signer-guide"}},u={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Before you begin",id:"before-you-begin",level:3},{value:"Install the Casper app on the Ledger device",id:"install-the-casper-app-on-the-ledger-device",level:3},{value:"Use Ledger device with your Web wallet",id:"use-ledger-device-with-your-web-wallet",level:2},{value:"Sign in",id:"sign-in",level:3},{value:"View account details",id:"view-account-details",level:3},{value:"View account balance",id:"view-account-balance",level:3},{value:"Receive tokens",id:"receive-tokens",level:3},{value:"Send tokens",id:"send-tokens",level:3}],h={toc:d};function g(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ledger-setup"},"Ledger Setup"),(0,o.kt)("p",null,"A Ledger Device is a hardware wallet that is considered one of the most secure ways to store your digital assets. Ledger uses an offline, or cold storage, method of generating private keys, making it a preferred method for many crypto users. This guide will help you to connect your Ledger device to a Casper Web wallet on a block explorer such as ",(0,o.kt)("a",{parentName:"p",href:"https://cspr.live/"},"cspr.live"),". The Casper Web wallet enables you to send and receive CSPR tokens."),(0,o.kt)("p",null,"If you need help, contact us on the following services:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Twitter: ",(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/Casper_Network"},"https://twitter.com/Casper_Network")),(0,o.kt)("li",{parentName:"ul"},"Discord: ",(0,o.kt)("a",{parentName:"li",href:"https://discord.com/invite/Q38s3Vh"},"https://discord.com/invite/Q38s3Vh")),(0,o.kt)("li",{parentName:"ul"},"Telegram: ",(0,o.kt)("a",{parentName:"li",href:"https://t.me/casperblockchain"},"https://t.me/casperblockchain"))),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"You can also find these instructions at the official Ledger support site ",(0,o.kt)("a",{parentName:"p",href:"https://support.ledger.com/hc/en-us/articles/4416379141009-Casper-CSPR-?docs=true"},"here"),"."),(0,o.kt)("h3",{id:"before-you-begin"},"Before you begin"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You have initialized your Ledger Nano S/X."),(0,o.kt)("li",{parentName:"ol"},"You have installed the latest firmware on your Ledger Nano S/X."),(0,o.kt)("li",{parentName:"ol"},"Ledger Live is ready to use."),(0,o.kt)("li",{parentName:"ol"},"You have installed a Chromium-based browser such as Chrome or Brave.")),(0,o.kt)("h3",{id:"install-the-casper-app-on-the-ledger-device"},"Install the Casper app on the Ledger device"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open the Manager in Ledger Live."),(0,o.kt)("li",{parentName:"ol"},"Connect and unlock your Ledger device."),(0,o.kt)("li",{parentName:"ol"},"If asked, allow the manager on your device by pressing the right button."),(0,o.kt)("li",{parentName:"ol"},"Find Casper in the app catalog."),(0,o.kt)("li",{parentName:"ol"},"Click the Install button of the app."),(0,o.kt)("li",{parentName:"ol"},"An installation window appears."),(0,o.kt)("li",{parentName:"ol"},"Your device will display ",(0,o.kt)("strong",{parentName:"li"},'"Processing..."')),(0,o.kt)("li",{parentName:"ol"},"The app installation is confirmed.")),(0,o.kt)("h2",{id:"use-ledger-device-with-your-web-wallet"},"Use Ledger device with your Web wallet"),(0,o.kt)("h3",{id:"sign-in"},"Sign in"),(0,o.kt)("p",null,"You can now use the Ledger device with Web wallet. Follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Connect and unlock your Ledger device."),(0,o.kt)("li",{parentName:"ol"},"Open the Casper app on your Ledger device."),(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("a",{parentName:"li",href:"https://cspr.live/sign-in"},"cspr.live/sign-in"),"."),(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("strong",{parentName:"li"},"Connect")," button in the Ledger section."),(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("strong",{parentName:"li"},"Connect to Ledger wallet")," button."),(0,o.kt)("li",{parentName:"ol"},"Select an account you want to use."),(0,o.kt)("li",{parentName:"ol"},"Now, your Ledger device is connected to the Web wallet.")),(0,o.kt)("h3",{id:"view-account-details"},"View account details"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("a",{parentName:"li",href:"https://cspr.live"},"cspr.live"),"."),(0,o.kt)("li",{parentName:"ol"},"Click on the account address in the upper-right corner of the page.")),(0,o.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/flow/3-view-account.png"),alt:"3-view-account",width:"750"}),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("strong",{parentName:"li"},"View account")," button.")),(0,o.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/flow/6-view-account-button.png"),alt:"6-view-account-button",width:"350"}),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"You are presented with a page displaying details about your account.")),(0,o.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/flow/4-account-details.png"),alt:"4-account-details",width:"750"}),(0,o.kt)("h3",{id:"view-account-balance"},"View account balance"),(0,o.kt)("p",null,"You can check your account balance from the Web wallet:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Follow the steps described in the "View account details" section above.'),(0,o.kt)("li",{parentName:"ol"},"On the ",(0,o.kt)("strong",{parentName:"li"},"Liquid Account Balance")," row, you will see your latest known account balance.")),(0,o.kt)("h3",{id:"receive-tokens"},"Receive tokens"),(0,o.kt)("p",null,"To receive tokens, you need to provide the sender with the public key of your account. To find it:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Open the account details page (see the "View account details" section).'),(0,o.kt)("li",{parentName:"ol"},"Copy the public key found on the ",(0,o.kt)("strong",{parentName:"li"},"Public Key")," row."),(0,o.kt)("li",{parentName:"ol"},"Alternatively, click on the drop-down menu on your account address.")),(0,o.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/flow/3-view-account.png"),alt:"3-view-account",width:"750"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("strong",{parentName:"li"},"Copy public key")," button."),(0,o.kt)("li",{parentName:"ol"},"Share the public key with the sender.")),(0,o.kt)("h3",{id:"send-tokens"},"Send tokens"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("a",{parentName:"li",href:"https://cspr.live"},"cspr.live"),"."),(0,o.kt)("li",{parentName:"ol"},"Sign in with your Ledger device."),(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("strong",{parentName:"li"},"Wallet")," and then ",(0,o.kt)("strong",{parentName:"li"},"Transfer CSPR"),".")),(0,o.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/flow/5-transfer-wallet.png"),alt:"5-transfer-wallet",width:"750"}),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Fill in the details for the transfer.")),(0,o.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/cspr-live/1-transfer-details.png"),alt:"1-transfer-details",width:"500"}),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("strong",{parentName:"li"},"Next")," button."),(0,o.kt)("li",{parentName:"ol"},"On the next page, click ",(0,o.kt)("strong",{parentName:"li"},"Confirm and transfer"),".")),(0,o.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/cspr-live/2-transfer-confirm.png"),alt:"2-transfer-confirm",width:"500"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"On the ",(0,o.kt)("strong",{parentName:"li"},"Sign transaction")," page, click on the ",(0,o.kt)("strong",{parentName:"li"},"Sign with Ledger")," button.")),(0,o.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/cspr-live/3-transfer-sign.png"),alt:"3-transfer-sign",width:"500"}),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"Your Ledger hardware wallet will present you with transfer details. Verify the transfer details (txn hash, chain ID, source ",(0,o.kt)("strong",{parentName:"li"},"account"),", fee, target, and amount).")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Verify the transaction on your Ledger device")),(0,o.kt)("p",null,"Press the right button on your Ledger Device to review the transaction details (Amount and Address) until you see ",(0,o.kt)("strong",{parentName:"p"},'"Approve"'),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Verify the ",(0,o.kt)("strong",{parentName:"li"},"txn hash")," - make sure it matches the value displayed in the Web wallet on ",(0,o.kt)("a",{parentName:"li",href:"https://cspr.live"},"cspr.live"),".")),(0,o.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/device/3-txn-1.jpg"),alt:"3-txn-1",width:"600"}),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"txn hash")," value continues on a second screen."),(0,o.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/device/4-txn-2.jpg"),alt:"4-txn-2",width:"600"}),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"The next page displays transaction ",(0,o.kt)("strong",{parentName:"li"},"type")," - for CSPR transfers, that will be ",(0,o.kt)("strong",{parentName:"li"},"Token transfer"),".")),(0,o.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/device/5-type.jpg"),alt:"5-type",width:"600"}),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Verify the ",(0,o.kt)("strong",{parentName:"li"},"chain ID"),", which identifies the network on which you want to send the transaction.")),(0,o.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/device/7-chain.jpg"),alt:"7-chain",width:"600"}),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Verify the ",(0,o.kt)("strong",{parentName:"li"},"account"),", which is the public key of the account that initiated the transaction.")),(0,o.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/device/8-account-1.jpg"),alt:"8-account-1",width:"600"}),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"account")," value continues on a second screen."),(0,o.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/device/9-account-2.jpg"),alt:"9-account-2",width:"600"}),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Verify the ",(0,o.kt)("strong",{parentName:"li"},"fee"),". For CSPR token transfers, that value should be constant and equal to 10 000 motes = 0.00001 CSPR.")),(0,o.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/device/10-fee.jpg"),alt:"10-fee",width:"600"}),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Verify ",(0,o.kt)("strong",{parentName:"li"},"target")," - ",(0,o.kt)("strong",{parentName:"li"},"NOTE")," this ",(0,o.kt)("strong",{parentName:"li"},"IS NOT"),' a public key of the recipient but the hash of that key. Compare the public key with the value in the Web wallet which shows you two fields for the recipient public key and target.".')),(0,o.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/device/11-target-1.jpg"),alt:"11-target-1",width:"600"}),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"target")," value continues on a second screen."),(0,o.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/device/12-target-2.jpg"),alt:"12-target-2",width:"600"}),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Verify the ",(0,o.kt)("strong",{parentName:"li"},"amount")," you want to transfer.")),(0,o.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/device/13-amount.jpg"),alt:"13-amount",width:"600"}),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"If you approve the transaction, click both buttons on the Ledger device.")),(0,o.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/device/15-approve.jpg"),alt:"15-approve",width:"600"}),(0,o.kt)("p",null,"After approving the transaction with your Ledger hardware wallet, the ",(0,o.kt)("a",{parentName:"p",href:"https://cspr.live"},"cspr.live"),' Web wallet will display a "Transfer completed" page.'),(0,o.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/cspr-live/4-transfer-completed.png"),alt:"4-transfer-completed",width:"500"}),(0,o.kt)("p",null,"You can now check your account to see a list of all the completed transfers."))}g.isMDXComponent=!0}}]);