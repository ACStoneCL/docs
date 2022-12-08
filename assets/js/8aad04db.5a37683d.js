"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5774],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,h=u["".concat(d,".").concat(m)]||u[m]||c[m]||i;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9099:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var n=a(3117),r=a(102),i=(a(7294),a(3905)),l=["components"],o={},d="Understanding Hash Types",s={unversionedId:"dapp-dev-guide/understanding-hash-types",id:"dapp-dev-guide/understanding-hash-types",title:"Understanding Hash Types",description:"For the sake of user convenience and compatibility, we expect the delivery of hashes and similar data in the form of a prefixed string when using the node. The following is a list of string representations used.",source:"@site/source/docs/casper/dapp-dev-guide/understanding-hash-types.md",sourceDirName:"dapp-dev-guide",slug:"/dapp-dev-guide/understanding-hash-types",permalink:"/dapp-dev-guide/understanding-hash-types",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/dapp-dev-guide/understanding-hash-types.md",tags:[],version:"current",frontMatter:{},sidebar:"dapp-dev-guide",previous:{title:"Accounts and Cryptographic Keys",permalink:"/dapp-dev-guide/keys"},next:{title:"Interacting with the Casper JSON-RPC API",permalink:"/dapp-dev-guide/json-rpc"}},p={},c=[{value:"Table of Associated Hash Types",id:"table-of-associated-hash-types",level:2},{value:"Hash and Key Explanations",id:"hash-and-key-explanations",level:2}],u={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"understanding-hash-types"},"Understanding Hash Types"),(0,i.kt)("p",null,"For the sake of user convenience and compatibility, we expect the delivery of hashes and similar data in the form of a prefixed string when using the node. The following is a list of string representations used."),(0,i.kt)("h2",{id:"table-of-associated-hash-types"},"Table of Associated Hash Types"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Prefix"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PublicKey"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"018a88e3dd7409f195fd52db2d3cba5d72ca6709bf1d94121bf3748801b40f6f5c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AccountHash"),(0,i.kt)("td",{parentName:"tr",align:null},"account-hash-"),(0,i.kt)("td",{parentName:"tr",align:null},"account-hash-ef4687f74d465826239bab05c4e1bdd2223dd8c201b96f361f775125e624ef70")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ContractHash"),(0,i.kt)("td",{parentName:"tr",align:null},"contract-"),(0,i.kt)("td",{parentName:"tr",align:null},"contract-0101010101010101010101010101010101010101010101010101010101010101")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ContractPackageHash"),(0,i.kt)("td",{parentName:"tr",align:null},"contract-package-"),(0,i.kt)("td",{parentName:"tr",align:null},"contract-package-0101010101010101010101010101010101010101010101010101010101010101")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Key::Account"),(0,i.kt)("td",{parentName:"tr",align:null},"account-hash-"),(0,i.kt)("td",{parentName:"tr",align:null},"account-hash-ef4687f74d465826239bab05c4e1bdd2223dd8c201b96f361f775125e624ef70")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Key::Hash"),(0,i.kt)("td",{parentName:"tr",align:null},"hash-"),(0,i.kt)("td",{parentName:"tr",align:null},"hash-0101010101010101010101010101010101010101010101010101010101010101")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Key::URef"),(0,i.kt)("td",{parentName:"tr",align:null},"uref-"),(0,i.kt)("td",{parentName:"tr",align:null},"uref-0101010101010101010101010101010101010101010101010101010101010101-001")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Key::Transfer"),(0,i.kt)("td",{parentName:"tr",align:null},"transfer-"),(0,i.kt)("td",{parentName:"tr",align:null},"transfer-0101010101010101010101010101010101010101010101010101010101010101")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Key::DeployInfo"),(0,i.kt)("td",{parentName:"tr",align:null},"deploy-"),(0,i.kt)("td",{parentName:"tr",align:null},"deploy-0101010101010101010101010101010101010101010101010101010101010101")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Key::EraInfo"),(0,i.kt)("td",{parentName:"tr",align:null},"era-"),(0,i.kt)("td",{parentName:"tr",align:null},"era-1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Key::Balance"),(0,i.kt)("td",{parentName:"tr",align:null},"balance-"),(0,i.kt)("td",{parentName:"tr",align:null},"balance-0101010101010101010101010101010101010101010101010101010101010101")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Key::Bid"),(0,i.kt)("td",{parentName:"tr",align:null},"bid-"),(0,i.kt)("td",{parentName:"tr",align:null},"bid-ef4687f74d465826239bab05c4e1bdd2223dd8c201b96f361f775125e624ef70")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Key::Withdraw"),(0,i.kt)("td",{parentName:"tr",align:null},"withdraw-"),(0,i.kt)("td",{parentName:"tr",align:null},"withdraw-ef4687f74d465826239bab05c4e1bdd2223dd8c201b96f361f775125e624ef70")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Key::Dictionary"),(0,i.kt)("td",{parentName:"tr",align:null},"dictionary-"),(0,i.kt)("td",{parentName:"tr",align:null},"dictionary-0101010101010101010101010101010101010101010101010101010101010101")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Key::SystemContractRegistry"),(0,i.kt)("td",{parentName:"tr",align:null},"system-contract-registry-"),(0,i.kt)("td",{parentName:"tr",align:null},"system-contract-registry-00000000000000000000000000000000")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Key::Unbond"),(0,i.kt)("td",{parentName:"tr",align:null},"unbond-"),(0,i.kt)("td",{parentName:"tr",align:null},"unbond-ef4687f74d465826239bab05c4e1bdd2223dd8c201b96f361f775125e624ef70")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Key::ChainspecRegistry"),(0,i.kt)("td",{parentName:"tr",align:null},"chainspec-registry-"),(0,i.kt)("td",{parentName:"tr",align:null},"chainspec-registry-11111111111111111111111111111111")))),(0,i.kt)("h2",{id:"hash-and-key-explanations"},"Hash and Key Explanations"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PublicKey")," is a 32 byte asymmetric public key, preceded by a one-byte prefix that tells whether the key is ",(0,i.kt)("inlineCode",{parentName:"p"},"ed25519")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"secp256k1"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"AccountHash")," is a 32 byte hash of the ",(0,i.kt)("inlineCode",{parentName:"p"},"PublicKey"),". It serves as the address for user accounts."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ContractHash")," is the 32 byte hash of specific smart contract versions. You can use this to call specific contract versions."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ContractPackageHash")," is a 32 byte hash of the smart contract package. This hash directs you to the contract package. The function ",(0,i.kt)("inlineCode",{parentName:"p"},"call_versioned_contract")," uses ",(0,i.kt)("inlineCode",{parentName:"p"},"ContractPackageHash")," and allows you to call the latest version of the contract (by default). It also allows you to call any version stored previously to the package."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Key")," is a wrapper type that may contain one of several possible sets of data."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Key::Account")," contains an AccountHash."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Key::Hash")," contains a byte array with a length of 32, and as such can be used to pass any of the hashes. Please take note that the developer of the contract is responsible for implementation of any checks necessary on the receiving side."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Key::URef")," contains an URef suffixed by access rights."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Key::Transfer")," should contain the address hash for a transfer."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Key::DeployInfo")," retains the address hash of deploy information."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Key::EraInfo")," is the integer number of the associated era."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Key::Balance")," is the balance of a purse."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Key::Bid")," is used to keep track of bids for the auction contract. It is not generally used by users."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Key::Withdraw")," is used to keep track of withdraws for the auction contract. It is not generally used by users and exists in a historical context."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Key::Dictionary")," is the hash derived from a URef and a piece of arbitrary data and leads to a dictionary."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Key::SystemContractRegistry")," is a unique ",(0,i.kt)("inlineCode",{parentName:"li"},"Key")," under which a mapping of the names and ContractHashes for system contracts, including ",(0,i.kt)("inlineCode",{parentName:"li"},"Mint"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Auction"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"HandlePayment")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"StandardPayment"),", is stored."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Key::Unbond")," is a variant of the key type that tracks unbonding purses."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Key::ChainspecRegistry")," is a unique ",(0,i.kt)("inlineCode",{parentName:"li"},"Key")," which contains a mapping of file names to the hash of the file itself. These files include ",(0,i.kt)("em",{parentName:"li"},"Chainspec.toml")," and may also include ",(0,i.kt)("em",{parentName:"li"},"Accounts.toml")," and ",(0,i.kt)("em",{parentName:"li"},"GlobalState.toml"),".")))}m.isMDXComponent=!0}}]);