"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1388],{3905:function(e,a,n){n.d(a,{Zo:function(){return p},kt:function(){return b}});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function c(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?c(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=t.createContext({}),f=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},p=function(e){var a=f(e.components);return t.createElement(i.Provider,{value:a},e.children)},l={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=f(n),b=r,u=d["".concat(i,".").concat(b)]||d[b]||l[b]||c;return n?t.createElement(u,s(s({ref:a},p),{},{components:n})):t.createElement(u,s({ref:a},p))}));function b(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var c=n.length,s=new Array(c);s[0]=d;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var f=2;f<c;f++)s[f]=n[f];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,a,n){function t(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!t(e)}n.d(a,{b:function(){return t},Z:function(){return r}})},4996:function(e,a,n){n.d(a,{C:function(){return c},Z:function(){return s}});var t=n(2263),r=n(3919);function c(){var e=(0,t.Z)().siteConfig,a=(e=void 0===e?{}:e).baseUrl,n=void 0===a?"/":a,c=e.url;return{withBaseUrl:function(e,a){return function(e,a,n,t){var c=void 0===t?{}:t,s=c.forcePrependBaseUrl,o=void 0!==s&&s,i=c.absolute,f=void 0!==i&&i;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(o)return a+n;var p=n.startsWith(a)?n:a+n.replace(/^\//,"");return f?e+p:p}(c,n,e,a)}}}function s(e,a){return void 0===a&&(a={}),(0,c().withBaseUrl)(e,a)}},4506:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return i},contentTitle:function(){return f},metadata:function(){return p},toc:function(){return l},default:function(){return b}});var t=n(2122),r=n(9756),c=(n(7294),n(3905)),s=n(4996),o=["components"],i={},f="Transfers",p={unversionedId:"workflow/erc-20-sample-guide/transfers",id:"workflow/erc-20-sample-guide/transfers",isDocsHomePage:!1,title:"Transfers",description:"Transfer 50 ERC-20 Tokens from A to B",source:"@site/source/docs/casper/workflow/erc-20-sample-guide/transfers.md",sourceDirName:"workflow/erc-20-sample-guide",slug:"/workflow/erc-20-sample-guide/transfers",permalink:"/docs/workflow/erc-20-sample-guide/transfers",editUrl:"https://github.com/casper-network/documentation/tree/master/docs/casper/workflow/erc-20-sample-guide/transfers.md",tags:[],version:"current",frontMatter:{},sidebar:"workflow",previous:{title:"Query the Contract Package",permalink:"/docs/workflow/erc-20-sample-guide/query"},next:{title:"Approvals",permalink:"/docs/workflow/erc-20-sample-guide/approvals"}},l=[{value:"Transfer 50 ERC-20 Tokens from A to B",id:"transfer-50-erc-20-tokens-from-a-to-b",children:[{value:"Invoking <code>balance_of</code> Entry Point",id:"invoking-balance_of-entry-point",children:[]},{value:"Transfer of 20 ERC-20 Tokens from B to C",id:"transfer-of-20-erc-20-tokens-from-b-to-c",children:[]},{value:"Approve B to Spend 15 Tokens of A",id:"approve-b-to-spend-15-tokens-of-a",children:[]},{value:"Transfer 10 ERC-20 Tokens from B\u2019s Allowance to D",id:"transfer-10-erc-20-tokens-from-bs-allowance-to-d",children:[]}]}],d={toc:l};function b(e){var a=e.components,n=(0,r.Z)(e,o);return(0,c.kt)("wrapper",(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"transfers"},"Transfers"),(0,c.kt)("h2",{id:"transfer-50-erc-20-tokens-from-a-to-b"},"Transfer 50 ERC-20 Tokens from A to B"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy -n http://3.143.158.19:7777 \\\n--chain-name integration-test \\\n--secret-key ~/casper/ibm_demo/user_a/secret_key.pem \\\n--session-hash hash-b568f50a64acc8bbe43462ffe243849a88111060b228dacb8f08d42e26985180 \\\n--session-entry-point "transfer" \\\n--session-arg "recipient:key=\'account-hash-9f81014b9c7406c531ebf0477132283f4eb59143d7903a2fae54358b26cea44b" \\\n--session-arg "amount:u256=\'50\'" \\\n--payment-amount "10000000000"\n')),(0,c.kt)("h3",{id:"invoking-balance_of-entry-point"},"Invoking ",(0,c.kt)("inlineCode",{parentName:"h3"},"balance_of")," Entry Point"),(0,c.kt)("p",null,"We then call our utility contract to invoke the ",(0,c.kt)("inlineCode",{parentName:"p"},"balance_of")," entry point and write the balance of User A to URef we sourced initially."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy -n http://3.143.158.19:7777 \\\n--secret-key ~/casper/ibm_demo/user_a/secret_key.pem \\\n--session-package-name "erc20_test_call" \\\n--session-entry-point "check_balance_of" \\\n--session-arg "token_contract:account_hash=\'account-hash-b568f50a64acc8bbe43462ffe243849a88111060b228dacb8f08d42e26985180\'" \\\n--session-arg "address:key=\'account-hash-303c0f8208220fe9a4de40e1ada1d35fdd6c678877908f01fddb2a56502d67fd\'" \\\n--chain-name integration-test \\\n--payment-amount 1000000000\n')),(0,c.kt)("p",null,"The follow up read of the corresponding URef:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-state -n http://3.143.158.19:7777 \\\n--key uref-56efe683287668bab985d472b877b018ad24a960aafadb48ebc5217737b45c85-007 \\\n--state-root-hash eec441ad782dcaab1b83708a9456250f97e6725528f9579ca4871a3b9429033f\n")),(0,c.kt)("img",{src:(0,s.Z)("/image/tutorials/erc-20/transferUref.png"),width:"800"}),(0,c.kt)("h3",{id:"transfer-of-20-erc-20-tokens-from-b-to-c"},"Transfer of 20 ERC-20 Tokens from B to C"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy -n http://3.143.158.19:7777 \\\n--chain-name integration-test \\\n--secret-key ~/casper/ibm_demo/user_b/secret_key.pem \\\n--session-hash hash-b568f50a64acc8bbe43462ffe243849a88111060b228dacb8f08d42e26985180 \\\n--session-entry-point "transfer" \\\n--session-arg "recipient:key=\'account-hash-89422a0f291a83496e644cf02d2e3f9d6cbc5f7c877b6ba9f4ddfab8a84c2670\'" \\\n--session-arg "amount:u256=\'20\'" \\\n--payment-amount "10000000000"\n')),(0,c.kt)("p",null,"We must then call the utility contract once for every balance we wish to check."),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Invoking ",(0,c.kt)("inlineCode",{parentName:"strong"},"balance_of")," for user A")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy -n http://3.143.158.19:7777 \\\n--secret-key ~/casper/ibm_demo/user_a/secret_key.pem \\\n--session-package-name "erc20_test_call" \\\n--session-entry-point "check_balance_of" \\\n--session-arg "token_contract:account_hash=\'account-hash-b568f50a64acc8bbe43462ffe243849a88111060b228dacb8f08d42e26985180\'" \\\n--session-arg "address:key=\'account-hash-303c0f8208220fe9a4de40e1ada1d35fdd6c678877908f01fddb2a56502d67fd\'" \\\n--chain-name integration-test \\\n--payment-amount 1000000000\n')),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"casper-client query-state -n http://3.143.158.19:7777\n--state-root-hash eec441ad782dcaab1b83708a9456250f97e6725528f9579ca4871a3b9429033f \\\n--key uref-56efe683287668bab985d472b877b018ad24a960aafadb48ebc5217737b45c85-007 \\\n")),(0,c.kt)("img",{src:(0,s.Z)("/image/tutorials/erc-20/invoke-bal-a.png"),width:"800"}),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Invoking ",(0,c.kt)("inlineCode",{parentName:"strong"},"balance_of")," for user B")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy -n http://3.143.158.19:7777 \\\n--secret-key ~/casper/ibm_demo/user_a/secret_key.pem \\\n--session-package-name "erc20_test_call" \\\n--session-entry-point "check_balance_of" \\\n--session-arg "token_contract:account_hash=\'account-hash-b568f50a64acc8bbe43462ffe243849a88111060b228dacb8f08d42e26985180\'" \\\n--session-arg "address:key=\'account-hash-9f81014b9c7406c531ebf0477132283f4eb59143d7903a2fae54358b26cea44b\'" \\\n--chain-name integration-test \\\n--payment-amount 1000000000\n')),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-state -n http://3.143.158.19:7777 \\\n--state-root-hash 3e77ef8615f372d8d169959c9ebd276693ec98e7d69b62e3872ffe4328e6427c \\\n--key uref-56efe683287668bab985d472b877b018ad24a960aafadb48ebc5217737b45c85-007\n")),(0,c.kt)("img",{src:(0,s.Z)("/image/tutorials/erc-20/invoke-bal-a.png"),width:"800"}),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Invoking ",(0,c.kt)("inlineCode",{parentName:"strong"},"balance_of")," for user C")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy -n http://3.143.158.19:7777 \\\n--secret-key ~/casper/ibm_demo/user_a/secret_key.pem \\\n--session-package-name "erc20_test_call" \\\n--session-entry-point "check_balance_of" \\\n--session-arg "token_contract:account_hash=\'account-hash-b568f50a64acc8bbe43462ffe243849a88111060b228dacb8f08d42e26985180\'" \\\n--session-arg "address:key=\'account-hash-89422a0f291a83496e644cf02d2e3f9d6cbc5f7c877b6ba9f4ddfab8a84c2670\'" \\\n--chain-name integration-test \\\n--payment-amount 1000000000\n')),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-state -n http://3.143.158.19:7777 \\\n--state-root-hash 745aa27b61cf37dd1f3d0f57212874a9430ea4fa597c54d25a02ba5f4665ca37 \\\n--key uref-56efe683287668bab985d472b877b018ad24a960aafadb48ebc5217737b45c85-007\n")),(0,c.kt)("img",{src:(0,s.Z)("/image/tutorials/erc-20/invoke-bal-c.png"),width:"800"}),(0,c.kt)("h3",{id:"approve-b-to-spend-15-tokens-of-a"},"Approve B to Spend 15 Tokens of A"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy -n http://3.143.158.19:7777 \\\n--chain-name integration-test \\\n--secret-key ~/casper/ibm_demo/user_a/secret_key.pem \\\n--session-hash hash-b568f50a64acc8bbe43462ffe243849a88111060b228dacb8f08d42e26985180 \\\n--session-entry-point "approve" \\\n--session-arg "spender:key=\'account-hash-9f81014b9c7406c531ebf0477132283f4eb59143d7903a2fae54358b26cea44b\'" \\\n--session-arg "amount:u256=\'15\'" \\\n--payment-amount "10000000000"\n')),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Invoking ",(0,c.kt)("inlineCode",{parentName:"strong"},"allowance")," entry point to check for the allowance")),(0,c.kt)("p",null,"As we did for ",(0,c.kt)("inlineCode",{parentName:"p"},"balance_of")," to read out the balance values, we must perform a similar invoking of the ",(0,c.kt)("inlineCode",{parentName:"p"},"allowance")," entry point of the main ERC-20 contract."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy -n http://3.143.158.19:7777 \\\n--secret-key ~/casper/ibm_demo/user_a/secret_key.pem \\\n--session-package-name "erc20_test_call" \\\n--session-entry-point "check_allowance_of" \\\n--session-arg "token_contract:account_hash=\'account-hash-b568f50a64acc8bbe43462ffe243849a88111060b228dacb8f08d42e26985180\'" \\\n--session-arg "owner:key=\'account-hash-303c0f8208220fe9a4de40e1ada1d35fdd6c678877908f01fddb2a56502d67fd\'" \\\n--session-arg "spender:key=\'account-hash-9f81014b9c7406c531ebf0477132283f4eb59143d7903a2fae54358b26cea44b\'" \\\n--chain-name integration-test \\\n--payment-amount 10000000000\n')),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-state -n http://3.143.158.19:7777 \\\n--state-root-hash a4f11712b6ffe2f87267d2fa08aa04494846d50ed8a3d1717724a1d6facfe2a7 \\\n--key uref-56efe683287668bab985d472b877b018ad24a960aafadb48ebc5217737b45c85-007\n")),(0,c.kt)("img",{src:(0,s.Z)("/image/tutorials/erc-20/approve-b.png"),width:"800"}),(0,c.kt)("h3",{id:"transfer-10-erc-20-tokens-from-bs-allowance-to-d"},"Transfer 10 ERC-20 Tokens from B\u2019s Allowance to D"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy -n http://3.143.158.19:7777 \\\n--chain-name integration-test \\\n--secret-key ~/casper/ibm_demo/user_b/secret_key.pem \\\n--session-hash hash-b568f50a64acc8bbe43462ffe243849a88111060b228dacb8f08d42e26985180 \\\n--session-entry-point "transfer_from" \\\n--session-arg "owner:key=\'account-hash-303c0f8208220fe9a4de40e1ada1d35fdd6c678877908f01fddb2a56502d67fd\'" \\\n--session-arg "recipient:key=\'account-hash-f32a2abc55316dc85a446a1c548674e03757974aaaf86e8b7d29947ae148eeca\'" \\\n--session-arg "amount:u256=\'10\'" \\\n--payment-amount "10000000000"\n')),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Invoking ",(0,c.kt)("inlineCode",{parentName:"strong"},"balance_of")," for user A")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy -n http://3.143.158.19:7777 \\\n--secret-key ~/casper/ibm_demo/user_a/secret_key.pem \\\n--session-package-name "erc20_test_call" \\\n--session-entry-point "check_balance_of" \\\n--session-arg "token_contract:account_hash=\'account-hash-b568f50a64acc8bbe43462ffe243849a88111060b228dacb8f08d42e26985180\'" \\\n--session-arg "address:key=\'account-hash-303c0f8208220fe9a4de40e1ada1d35fdd6c678877908f01fddb2a56502d67fd\'" \\\n--chain-name integration-test \\\n--payment-amount 1000000000\n')),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-state -n http://3.143.158.19:7777 \\\n--state-root-hash 76b1e6844b26d0565461e8d609147ea5c0e0f6f70022d2a9ebfbabce6f5f8407 \\\n--key uref-56efe683287668bab985d472b877b018ad24a960aafadb48ebc5217737b45c85-007\n")),(0,c.kt)("img",{src:(0,s.Z)("/image/tutorials/erc-20/transfer-b2d.png"),width:"800"}),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Invoking ",(0,c.kt)("inlineCode",{parentName:"strong"},"balance_of")," for user B")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy -n http://3.143.158.19:7777 \\\n--secret-key ~/casper/ibm_demo/user_a/secret_key.pem \\\n--session-package-name "erc20_test_call" \\\n--session-entry-point "check_balance_of" \\\n--session-arg "token_contract:account_hash=\'account-hash-b568f50a64acc8bbe43462ffe243849a88111060b228dacb8f08d42e26985180\'" \\\n--session-arg "address:key=\'account-hash-9f81014b9c7406c531ebf0477132283f4eb59143d7903a2fae54358b26cea44b\'" \\\n--chain-name integration-test \\\n--payment-amount 1000000000\n')),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-state -n http://3.143.158.19:7777 \\\n--state-root-hash 08f89451f65d87aac27f482bfb46d6772ee7543c207fd2907a2515549ed01a9a \\\n--key uref-56efe683287668bab985d472b877b018ad24a960aafadb48ebc5217737b45c85-007\n")),(0,c.kt)("img",{src:(0,s.Z)("/image/tutorials/erc-20/invoke-bal-b2.png"),width:"800"}),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Invoking ",(0,c.kt)("inlineCode",{parentName:"strong"},"balance_of")," for user C")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy -n http://3.143.158.19:7777 \\\n--secret-key ~/casper/ibm_demo/user_a/secret_key.pem \\\n--session-package-name "erc20_test_call" \\\n--session-entry-point "check_balance_of" \\\n--session-arg "token_contract:account_hash=\'account-hash-b568f50a64acc8bbe43462ffe243849a88111060b228dacb8f08d42e26985180\'" \\\n--session-arg "address:key=\'account-hash-89422a0f291a83496e644cf02d2e3f9d6cbc5f7c877b6ba9f4ddfab8a84c2670\'" \\\n--chain-name integration-test \\\n--payment-amount 1000000000\n')),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-state -n http://3.143.158.19:7777 \\\n--state-root-hash 717c4b166737cec5a3101ecea2341f96e54dde17309ecfbe80a3df339d8e4bcd \\\n--key uref-56efe683287668bab985d472b877b018ad24a960aafadb48ebc5217737b45c85-007\n")),(0,c.kt)("img",{src:(0,s.Z)("/image/tutorials/erc-20/invoke-bal-c2.png"),width:"800"}),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Invoking ",(0,c.kt)("inlineCode",{parentName:"strong"},"balance_of")," for user D")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy -n http://3.143.158.19:7777 \\\n--secret-key ~/casper/ibm_demo/user_a/secret_key.pem \\\n--session-package-name "erc20_test_call" \\\n--session-entry-point "check_balance_of" \\\n--session-arg "token_contract:account_hash=\'account-hash-b568f50a64acc8bbe43462ffe243849a88111060b228dacb8f08d42e26985180\'" \\\n--session-arg "address:key=\'account-hash-f32a2abc55316dc85a446a1c548674e03757974aaaf86e8b7d29947ae148eeca\'" \\\n--chain-name integration-test \\\n--payment-amount 1000000000\n')),(0,c.kt)("img",{src:(0,s.Z)("/image/tutorials/erc-20/invoke-bal-d.png"),width:"800"}),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Invoking ",(0,c.kt)("inlineCode",{parentName:"strong"},"allowance")," to check that it is 5")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy -n http://3.143.158.19:7777 \\\n--secret-key ~/casper/ibm_demo/user_a/secret_key.pem \\\n--session-package-name "erc20_test_call" \\\n--session-entry-point "check_allowance_of" \\\n--session-arg "token_contract:account_hash=\'account-hash-b568f50a64acc8bbe43462ffe243849a88111060b228dacb8f08d42e26985180\'" \\\n--session-arg "owner:key=\'account-hash-303c0f8208220fe9a4de40e1ada1d35fdd6c678877908f01fddb2a56502d67fd\'" \\\n--session-arg "spender:key=\'account-hash-9f81014b9c7406c531ebf0477132283f4eb59143d7903a2fae54358b26cea44b\'" \\\n--chain-name integration-test \\\n--payment-amount 10000000000\n')),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-state -n http://3.143.158.19:7777 \\\n--state-root-hash 90635f6e9c35df061e74903148a1b47b9f32c1feb40abb7a902163a20f4c2025 \\\n--key uref-56efe683287668bab985d472b877b018ad24a960aafadb48ebc5217737b45c85-007\n")),(0,c.kt)("img",{src:(0,s.Z)("/image/tutorials/erc-20/invoke-allowance.png"),width:"800"}))}b.isMDXComponent=!0}}]);