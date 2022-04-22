"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1747],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(n),m=o,d=h["".concat(s,".").concat(m)]||h[m]||u[m]||i;return n?a.createElement(d,r(r({ref:t},p),{},{components:n})):a.createElement(d,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4361:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return h}});var a=n(3117),o=n(102),i=(n(7294),n(3905)),r=n(4996),l=["components"],s={},c="Casper Signer User Guide",p={unversionedId:"workflow/signer-guide",id:"workflow/signer-guide",title:"Casper Signer User Guide",description:"1. Introduction",source:"@site/source/docs/casper/workflow/signer-guide.md",sourceDirName:"workflow",slug:"/workflow/signer-guide",permalink:"/workflow/signer-guide",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/workflow/signer-guide.md",tags:[],version:"current",frontMatter:{},sidebar:"workflow",previous:{title:"Ledger Setup",permalink:"/workflow/ledger-setup"},next:{title:"Transferring Tokens using a Block Explorer",permalink:"/workflow/token-transfer"}},u={},h=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"1.1 Installing the CasperLabs Signer Extension",id:"11-installing-the-casperlabs-signer-extension",level:3},{value:"1.2 Logging in to the Casper Signer",id:"12-logging-in-to-the-casper-signer",level:3},{value:"2. Creating an Account",id:"2-creating-an-account",level:2},{value:"3. Importing an Account",id:"3-importing-an-account",level:2},{value:"4. Managing an Account",id:"4-managing-an-account",level:2},{value:"4.1 Switching Active Accounts",id:"41-switching-active-accounts",level:3},{value:"4.2 Key Management",id:"42-key-management",level:3},{value:"4.3 Connected Sites",id:"43-connected-sites",level:3},{value:"4.3.1 Connecting to websites and dApps",id:"431-connecting-to-websites-and-dapps",level:4},{value:"4.4 Download Active Key",id:"44-download-active-key",level:3},{value:"4.5 Timeout",id:"45-timeout",level:3},{value:"4.6 Lock",id:"46-lock",level:3},{value:"5. Resetting the Vault",id:"5-resetting-the-vault",level:2},{value:"6. Viewing Account Details",id:"6-viewing-account-details",level:2},{value:"7. Accessing the CSPR Wallet from a Block Explorer",id:"7-accessing-the-cspr-wallet-from-a-block-explorer",level:2},{value:"8. Logging out of the Casper Signer",id:"8-logging-out-of-the-casper-signer",level:2}],m={toc:h};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"casper-signer-user-guide"},"Casper Signer User Guide"),(0,i.kt)("h2",{id:"1-introduction"},"1. Introduction"),(0,i.kt)("p",null,"The Casper Signer allows you to safely access your Casper Token (CSPR) wallet. The CSPR wallet can be used to transfer CSPR tokens to another user, delegate stake, or ungelegate stake. The Casper Signer can be used for more than one CSPR account and all the accounts are securely stored in a vault, which is a mechanism to protect online information with a password. You set a password for the vault while creating a Casper Signer account. To login using Casper Signer, you must download and install the CasperLabs Signer extension for your browser. The following sections take you through the process of downloading and signing in to the Casper Signer."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note"),": These steps use the ",(0,i.kt)("a",{parentName:"p",href:"https://cspr.live/"},"cspr.live")," as an example, you can install and setup your Signer account on any Casper Network ",(0,i.kt)("a",{parentName:"p",href:"../block-explorer/"},"block explorer"),".")),(0,i.kt)("h3",{id:"11-installing-the-casperlabs-signer-extension"},"1.1 Installing the CasperLabs Signer Extension"),(0,i.kt)("p",null,"To install the CaperLabs Signer extension, follow these steps:"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Alternatively, you can use this link to download the ",(0,i.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/casperlabs-signer/djhndpllfiibmcdbnmaaahkhchcoijce"},"CasperLabs Signer")," extension and skip to ",(0,i.kt)("em",{parentName:"p"},"Step 4"),"."))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Navigate to ",(0,i.kt)("a",{parentName:"li",href:"https://cspr.live/"},"cspr.live"),", using Chrome or a Chromium-based browser like Brave."),(0,i.kt)("li",{parentName:"ol"},"Click the ",(0,i.kt)("strong",{parentName:"li"},"Sign in")," option on the top-right corner of the screen. The Casper Signer is displayed."),(0,i.kt)("li",{parentName:"ol"},"In the Casper Signer, click the ",(0,i.kt)("strong",{parentName:"li"},"Download Signer")," button. A new window with the Chrome extension is displayed."),(0,i.kt)("li",{parentName:"ol"},"On the CasperLabs Signer extension page, click the ",(0,i.kt)("strong",{parentName:"li"},"Add to Chrome")," button. A pop-up will let you know the permissions required. To approve the extension access, click ",(0,i.kt)("strong",{parentName:"li"},"Add extension"),". The CasperLabs Signer extension is now added to your browser.")),(0,i.kt)("h3",{id:"12-logging-in-to-the-casper-signer"},"1.2 Logging in to the Casper Signer"),(0,i.kt)("p",null,"To log in to the Casper Signer, you must create a vault and import or create accounts. To create a vault, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Next to the address bar of your browser, you will find the extensions icon. Click the extensions icon ",(0,i.kt)("img",{src:(0,r.Z)("/image/tutorials/signer/ext-icon.png"),class:"inline-img",width:"25"})," and select CasperLabs Signer from the list."),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"If you are logging in for the first time, a pop-up window to create a new vault will appear."),(0,i.kt)("li",{parentName:"ol"},"On the New Vault pop-up window, enter a password for your vault, confirm the password, and click ",(0,i.kt)("strong",{parentName:"li"},"CREATE VAULT"),". This vault safeguards your Casper accounts, so make sure you use a strong password and keep the password safe.")),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Password requirements:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"It must be at least 10 characters long"),(0,i.kt)("li",{parentName:"ul"},"It must contain the following:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"at least one uppercase letter"),(0,i.kt)("li",{parentName:"ul"},"at least one lowercase letter"),(0,i.kt)("li",{parentName:"ul"},"at least one number"),(0,i.kt)("li",{parentName:"ul"},"at least one special character"))),(0,i.kt)("li",{parentName:"ul"},"It may not contain sequences of three or more repeated characters"))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you have already created a password for your vault, the Unlock Vault pop-up window is displayed. Enter your password and click ",(0,i.kt)("strong",{parentName:"p"},"UNLOCK"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You can now import an account or create a new one."),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"If you don\u2019t have any existing cryptographic keys, you must create a new account. For more information on creating a new account, see ",(0,i.kt)("a",{parentName:"li",href:"#2-creating-an-account"},"Creating an Account"),"."),(0,i.kt)("li",{parentName:"ol"},"If you have a set of keys for your account, you can just import the secret key in the Casper Signer. For more information on importing an existing account, see ",(0,i.kt)("a",{parentName:"li",href:"#3-importing-an-account"},"Importing an Account"),".")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 1"),": Casper Signer Home (when you have no existing accounts) ",(0,i.kt)("img",{src:(0,r.Z)("/image/tutorials/signer/first-home.png"),alt:"Casper Signer Home",width:"200"})),(0,i.kt)("h2",{id:"2-creating-an-account"},"2. Creating an Account"),(0,i.kt)("p",null,"The Casper Signer allows you to create an account and generates a set of keys based on your chosen encryption algorithm. The Casper Network supports these two algorithms:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ed25519 is fast and provides a high level of security with foolproof session keys, among other features. It is the default algorithm used while creating new accounts."),(0,i.kt)("li",{parentName:"ul"},"Secp256k1 is an efficient encryption algorithm, also used by Bitcoin and Ethereum. If you would like to derive Ethereum or Bitcoin keys in the future using your private key, then choose the Secp256k1 algorithm.")),(0,i.kt)("p",null,"To learn more about cryptographic keys, see ",(0,i.kt)("a",{parentName:"p",href:"/dapp-dev-guide/keys"},"Accounts and Cryptographic Keys"),"."),(0,i.kt)("p",null,"To create an account, do the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"On the Casper Signer home (as shown in ",(0,i.kt)("em",{parentName:"li"},"Figure 1"),"), click ",(0,i.kt)("strong",{parentName:"li"},"CREATE ACCOUNT"),". The Create Account fields are displayed."),(0,i.kt)("li",{parentName:"ol"},"Enter a name for the account and select the algorithm to generate the keys. The Public Key field is auto-populated."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"CREATE")," to create your account.",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"To return to the Casper Signer home, click the home icon ",(0,i.kt)("img",{src:(0,r.Z)("/image/tutorials/signer/home-icon.png"),width:"25",class:"inline-img"})," on the top-left corner of the pop-up window. Here, you can see the number of accounts in your wallet and the name of the account that is currently active.")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It is highly recommended that you download and save your account keys in a safe location (preferably offline). This will allow you to recover your account in case you lose access to your vault. See ",(0,i.kt)("a",{parentName:"p",href:"#44-download-active-key"},"Download Active Key")," for more information."))),(0,i.kt)("h2",{id:"3-importing-an-account"},"3. Importing an Account"),(0,i.kt)("p",null,"The Casper Signer allows you to add your existing keys to the Signer wallet. You need to have the secret key for the account you wish to import. To import an account, do the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"On the Casper Signer home (as shown in ",(0,i.kt)("em",{parentName:"li"},"Figure 1"),"), click ",(0,i.kt)("strong",{parentName:"li"},"IMPORT ACCOUNT"),". The Import from Secret Key File option is displayed."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"UPLOAD"),", browse and select the secret key you wish to add to your wallet."),(0,i.kt)("li",{parentName:"ol"},"Enter a name for the imported account and click ",(0,i.kt)("strong",{parentName:"li"},"IMPORT"),". Your secret key is now imported into the Casper Signer.",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"To return to the Casper Signer home, click the home icon ",(0,i.kt)("img",{src:(0,r.Z)("/image/tutorials/signer/home-icon.png"),width:"25",class:"inline-img"})," on the top-left corner of the pop-up window. Here, you can see the number of accounts in your wallet and the name of the account that is currently active.")))),(0,i.kt)("h2",{id:"4-managing-an-account"},"4. Managing an Account"),(0,i.kt)("p",null,"The main menu of the Casper Signer allows you to perform various functions, such as switching between accounts, managing keys, viewing connected sites, downloading active key, setting the timeout for your Signer session, and locking your vault. The main menu icon ",(0,i.kt)("img",{src:(0,r.Z)("/image/tutorials/signer/main-icon.png"),width:"25",class:"inline-img"})," is located at the top-right corner of the Casper Signer window."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 2"),": Casper Signer Main Menu ",(0,i.kt)("img",{src:(0,r.Z)("/image/tutorials/signer/main-menu.png"),width:"200"})),(0,i.kt)("h3",{id:"41-switching-active-accounts"},"4.1 Switching Active Accounts"),(0,i.kt)("p",null,"The main menu displays the names of all the accounts registered with the Casper Signer wallet. To select an account as the current active account, click the account name. A check-mark appears in front of the account name. This indicates that the account is active. As an example, in ",(0,i.kt)("em",{parentName:"p"},"Figure 2"),", account ",(0,i.kt)("em",{parentName:"p"},"GSTest12345")," is the active account."),(0,i.kt)("h3",{id:"42-key-management"},"4.2 Key Management"),(0,i.kt)("p",null,"Key management allows you to manage the keys added to your Signer wallet. You can rename the account, delete a key, view the account information (public key hex and the account hash) and download the secret key for each account."),(0,i.kt)("p",null,"To view the various functions available, on the main menu, select ",(0,i.kt)("strong",{parentName:"p"},"Key Management"),". The list of keys available are displayed along with the icons to manage keys."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 3"),": Key Management ",(0,i.kt)("img",{src:(0,r.Z)("/image/tutorials/signer/key_mgnt.png"),width:"200"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To rename an account, click the edit icon next to the account name, enter the new name and click ",(0,i.kt)("strong",{parentName:"li"},"UPDATE"),"."),(0,i.kt)("li",{parentName:"ul"},"To delete an account, click the delete icon next to the account name. A Remove Account notification pops-up. To approve the deletion, enter the password to your vault and click ",(0,i.kt)("strong",{parentName:"li"},"REMOVE"),"."),(0,i.kt)("li",{parentName:"ul"},"To view the account information, such as the public key and the account hash, click the key-shaped icon."),(0,i.kt)("li",{parentName:"ul"},"To download a copy of the secret key, click the down-arrow icon. The secret key is downloaded to your computer.")),(0,i.kt)("h3",{id:"43-connected-sites"},"4.3 Connected Sites"),(0,i.kt)("p",null,"This feature allows you to view all the websites and decentralized applications (dApps) that are connected with the Casper Signer. You can disconnect or delete the websites from Casper Signer using the icons next to the name of each site."),(0,i.kt)("h4",{id:"431-connecting-to-websites-and-dapps"},"4.3.1 Connecting to websites and dApps"),(0,i.kt)("p",null,"You can use the Casper Signer to connect to various websites and dApps. To connect to a website or dApp, do the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Navigate to the website or dApp that is integrated with the Signer."),(0,i.kt)("li",{parentName:"ol"},"Log in to your Signer, for more details see ",(0,i.kt)("a",{parentName:"li",href:"#12-logging-in-to-the-casper-signer"},"Logging in to the Casper Signer"),"."),(0,i.kt)("li",{parentName:"ol"},"On the Signer home, the top bar displays DISCONNECTED. Click this bar to connect to the website. When the website is connected to the Casper Signer, the top bar displays CONNECTED."),(0,i.kt)("li",{parentName:"ol"},"Click the main menu icon ",(0,i.kt)("img",{src:(0,r.Z)("/image/tutorials/signer/main-icon.png"),width:"25",class:"inline-img"})," to open the main menu and select ",(0,i.kt)("strong",{parentName:"li"},"Connected Sites"),". The current website is displayed in the list of connected sites."),(0,i.kt)("li",{parentName:"ol"},"To connect to a site, click the connect icon next to the name of the website.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 4"),": Connected Sites ",(0,i.kt)("img",{src:(0,r.Z)("/image/tutorials/signer/connect-site.png"),width:"200"})),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If the website is not integrated with Casper Signer, the roll-over text displays the message \u2018This site is not integrated with the Signer\u2019."))),(0,i.kt)("h3",{id:"44-download-active-key"},"4.4 Download Active Key"),(0,i.kt)("p",null,"This feature allows you to download the secret key from your active account. To download the secret key for the selected active account, click the main menu icon ",(0,i.kt)("img",{src:(0,r.Z)("/image/tutorials/signer/main-icon.png"),width:"25",class:"inline-img"})," and select ",(0,i.kt)("strong",{parentName:"p"},"Download Active Key"),"."),(0,i.kt)("h3",{id:"45-timeout"},"4.5 Timeout"),(0,i.kt)("p",null,"This feature allows you to set the idle time limit for the Signer vault to automatically lock itself. Once the vault is locked, you must enter your password again to unlock the vault."),(0,i.kt)("h3",{id:"46-lock"},"4.6 Lock"),(0,i.kt)("p",null,"This feature allows you to lock your vault. You must enter your vault password again to unlock the vault."),(0,i.kt)("h2",{id:"5-resetting-the-vault"},"5. Resetting the Vault"),(0,i.kt)("p",null,"Once you have created a password for the vault, every time you access it, you will see a ",(0,i.kt)("strong",{parentName:"p"},"Reset Vault?")," link below the UNLOCK button. You can click this link to delete all your CSPR accounts from the vault. If you have downloaded your account keys, you can create a new vault password and import the keys to your account and recover all the transactions."),(0,i.kt)("h2",{id:"6-viewing-account-details"},"6. Viewing Account Details"),(0,i.kt)("p",null,"You can view your account details, such as, the public key, account hash, CSPR token balance, and the transaction history."),(0,i.kt)("p",null,"To view your account information, do the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"On the CSPR home page, click the option in the top-right corner of the screen that displays a few digits of your public key. A menu with your public key is displayed."),(0,i.kt)("li",{parentName:"ol"},"To view your account details for the displayed public key, click ",(0,i.kt)("strong",{parentName:"li"},"View Account"),".")),(0,i.kt)("h2",{id:"7-accessing-the-cspr-wallet-from-a-block-explorer"},"7. Accessing the CSPR Wallet from a Block Explorer"),(0,i.kt)("p",null,"Once you are logged in to the Casper Signer, you can access the wallet for each account registered in the Signer. For more information on how to log in to the Signer, see ",(0,i.kt)("a",{parentName:"p",href:"#12-logging-in-to-the-casper-signer"},"Logging in to the Casper Signer"),"."),(0,i.kt)("p",null,"Alternatively, you can follow these steps to log in to your Signer/CSPR wallet:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Navigate to ",(0,i.kt)("a",{parentName:"li",href:"https://cspr.live/"},"cspr.live"),", using Chrome or a Chromium-based browser like Brave."),(0,i.kt)("li",{parentName:"ol"},"Click the ",(0,i.kt)("strong",{parentName:"li"},"Sign in")," option on the top-right corner of the screen. The Casper Signer is displayed."),(0,i.kt)("li",{parentName:"ol"},"In the Casper Signer, click the ",(0,i.kt)("strong",{parentName:"li"},"Sign In")," button. The Unlock Vault pop-up is displayed."),(0,i.kt)("li",{parentName:"ol"},"Enter your password and click ",(0,i.kt)("strong",{parentName:"li"},"UNLOCK"),". The Connection Request message is displayed."),(0,i.kt)("li",{parentName:"ol"},"To continue with the connection, click ",(0,i.kt)("strong",{parentName:"li"},"CONNECT"),". The Approve Connection message appears."),(0,i.kt)("li",{parentName:"ol"},"To approve the connection, click ",(0,i.kt)("strong",{parentName:"li"},"CONNECT"),". You are now connected to your CSPR wallet.")),(0,i.kt)("h2",{id:"8-logging-out-of-the-casper-signer"},"8. Logging out of the Casper Signer"),(0,i.kt)("p",null,"To logout from the Signer, do the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"On the CSPR home page, click the option in the top-right corner of the screen that displays a few digits of your public key. A menu with your public key is displayed."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Logout"),". You will be logged out of your vault.")))}d.isMDXComponent=!0}}]);