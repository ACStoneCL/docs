"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9350],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2544:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),i=["components"],s={},l="Two-Party Multi-Signature Deploys",c={unversionedId:"workflow/two-party-multi-sig",id:"workflow/two-party-multi-sig",title:"Two-Party Multi-Signature Deploys",description:"Accounts on a Casper Network can associate other accounts to allow or require a multiple signature scheme for deploys.",source:"@site/source/docs/casper/workflow/two-party-multi-sig.md",sourceDirName:"workflow",slug:"/workflow/two-party-multi-sig",permalink:"/workflow/two-party-multi-sig",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/workflow/two-party-multi-sig.md",tags:[],version:"current",frontMatter:{},sidebar:"workflow",previous:{title:"Account Hash",permalink:"/workflow/account-hash"},next:{title:"Introduction",permalink:"/workflow/transfers"}},u={},p=[{value:"Configuring the Main Account",id:"configuring-the-main-account",level:2},{value:"Code Description",id:"code-description",level:2},{value:"Code Execution",id:"code-execution",level:2},{value:"Confirming Execution and Account Status",id:"confirming-execution-and-account-status",level:3}],d={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"two-party-multi-signature-deploys"},"Two-Party Multi-Signature Deploys"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/design/accounts"},"Accounts")," on a Casper Network can associate other accounts to allow or require a multiple signature scheme for deploys."),(0,r.kt)("p",null,"This workflow describes how a trivial two-party multi-signature scheme for signing and sending deploys can be enforced for an account on a Casper Network."),(0,r.kt)("p",null,"This workflow assumes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You meet the ",(0,r.kt)("a",{parentName:"li",href:"/workflow/setup"},"prerequisites")),(0,r.kt)("li",{parentName:"ol"},"You are using the Casper command-line client"),(0,r.kt)("li",{parentName:"ol"},"You have a main ",(0,r.kt)("inlineCode",{parentName:"li"},"PublicKey")," hex (",(0,r.kt)("strong",{parentName:"li"},"MA"),") and a ",(0,r.kt)("inlineCode",{parentName:"li"},"PublicKey")," hex to associate (",(0,r.kt)("strong",{parentName:"li"},"AA"),")"),(0,r.kt)("li",{parentName:"ol"},"You have a valid ",(0,r.kt)("inlineCode",{parentName:"li"},"node-address")),(0,r.kt)("li",{parentName:"ol"},"You have previously ",(0,r.kt)("a",{parentName:"li",href:"/dapp-dev-guide/sending-deploys"},"deployed a smart contract")," to a Casper Network")),(0,r.kt)("h2",{id:"configuring-the-main-account"},"Configuring the Main Account"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CAUTION"),": Incorrect account configurations could render accounts defunct and unusable. It is highly recommended to first execute any changes to an account in a test environment like Testnet, before performing them in a live environment like Mainnet."),(0,r.kt)("p",null,"Each account has an ",(0,r.kt)("inlineCode",{parentName:"p"},"associated_keys")," field which is a list containing the account address and its weight for every associated account. Accounts can be associated by adding the account address to the ",(0,r.kt)("inlineCode",{parentName:"p"},"associated_keys")," field."),(0,r.kt)("p",null,"An account on a Casper Network assigns weights to keys associated with it. For a single key to sign a deploy or edit the state of the account, its weight must be greater than or equal to a set threshold. The thresholds are labeled as the ",(0,r.kt)("inlineCode",{parentName:"p"},"action_thresholds")," for the account."),(0,r.kt)("p",null,"Each account within a Casper Network has two action thresholds that manage the permissions to send deploys or manage the account. Each threshold defines the minimum weight that a single key or a combination of keys must have, to either:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Send a deploy to the network; determined by the ",(0,r.kt)("inlineCode",{parentName:"li"},"deployment")," threshold"),(0,r.kt)("li",{parentName:"ol"},"Edit the ",(0,r.kt)("inlineCode",{parentName:"li"},"associated keys")," and the ",(0,r.kt)("inlineCode",{parentName:"li"},"action_thresholds"),"; determined by the ",(0,r.kt)("inlineCode",{parentName:"li"},"key_management")," threshold")),(0,r.kt)("p",null,"To enforce the multi-signature (multi-sig) feature for an account on a Casper Network, the ",(0,r.kt)("em",{parentName:"p"},"main key")," and ",(0,r.kt)("em",{parentName:"p"},"associated key"),"'s combined weight must be greater than or equal to the ",(0,r.kt)("inlineCode",{parentName:"p"},"deployment")," threshold. This can be achieved by having each key's weight equal to half of the ",(0,r.kt)("inlineCode",{parentName:"p"},"deployment")," threshold."),(0,r.kt)("h2",{id:"code-description"},"Code Description"),(0,r.kt)("p",null,"You can run session code that will execute within the context of your main account. Below is the code that will be compiled to Wasm and then sent to the network as part of a deploy."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": The following contract example will set up a specific account configuration and is not a general-purpose contract."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#![no_main]\nuse casper_contract::{\n    contract_api::{account, runtime},\n    unwrap_or_revert::UnwrapOrRevert,\n};\nuse casper_types::account::{AccountHash, ActionType, Weight};\n\nconst ASSOCIATED_ACCOUNT: &str = "deployment-account";\n\n#[no_mangle]\npub extern "C" fn call() {\n    // Account hash for the account to be associated.\n    let deployment_account: AccountHash = runtime::get_named_arg(ASSOCIATED_ACCOUNT);\n\n    // Add the CA key to half the deployment threshold (i.e 1)\n    account::add_associated_key(deployment_account, Weight::new(1)).unwrap_or_revert();\n\n    // Deployment threshold <= Key management threshold.\n    // Therefore update the key management threshold value.\n    account::set_action_threshold(ActionType::KeyManagement, Weight::new(2)).unwrap_or_revert();\n\n    // Set the deployment threshold to 2, enforcing multi-sig to send deploys.\n    account::set_action_threshold(ActionType::Deployment, Weight::new(2)).unwrap_or_revert();\n}\n')),(0,r.kt)("p",null,"The contract will execute ",(0,r.kt)("strong",{parentName:"p"},"2 crucial steps")," to enforce the multi-sig scheme for your main account:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add the associated key ",(0,r.kt)("strong",{parentName:"li"},"AA")," to the account"),(0,r.kt)("li",{parentName:"ol"},"Raise the ",(0,r.kt)("inlineCode",{parentName:"li"},"deployment")," threshold to ",(0,r.kt)("inlineCode",{parentName:"li"},"2"),", such that the weight required to send a deploy is split equally between the keys associated with the account")),(0,r.kt)("p",null,"The action thresholds for deploys cannot be greater than the action threshold for key management. By default, action thresholds are set to ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,r.kt)("h2",{id:"code-execution"},"Code Execution"),(0,r.kt)("p",null,"The state of the account can be altered by sending a deploy which executes the Wasm that will associate the ",(0,r.kt)("strong",{parentName:"p"},"AA")," account address."),(0,r.kt)("p",null,"For this guide, a smart contract has been written and is stored in its ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/two-party-multi-sig"},"Github Repository"),". The repository contains a ",(0,r.kt)("em",{parentName:"p"},"Makefile")," with the build commands necessary to compile the contract to generate the necessary Wasm."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/casper-ecosystem/two-party-multi-sig\ncd two-party-multi-sig\n")),(0,r.kt)("p",null,"To build the contract, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make build-contract\n")),(0,r.kt)("p",null,"The compiled Wasm will be saved on this path:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"target/wasm32-unknown-unknown/release/contract.wasm\n")),(0,r.kt)("p",null,"The Casper command-line client can be used to send the compiled Wasm to the network for execution."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client put-deploy \\\n--node-address http://<peer-ip-address>:7777/rpc \\\n--secret-key <secret-key-MA>.pem \\\n--chain-name casper-test \\\n--payment-amount 2500000000 \\\n--session-path <path-to-contract-wasm> \\\n--session-arg \"deployment-account:account_hash='account-hash-<hash-AA>'\"\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"node-address")," - An IP address of a node on the network"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"secret-key")," - The file name containing the secret key of the Main Account"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"chain-name")," - The chain-name to the network where you wish to send the deploy (this example uses the Testnet)"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"payment-amount")," - The cost of the deploy"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"session-path")," - The path to the contract Wasm"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"session-arg")," - The contract takes the account hash of the Associated account as an argument labeled ",(0,r.kt)("inlineCode",{parentName:"li"},"deployment-account"),". You can pass this argument using the ",(0,r.kt)("inlineCode",{parentName:"li"},"--session-arg")," flag in the command line client")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Important response fields:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"result"."deploy_hash"')," - the address of the executed deploy, needed to look up additional information about the transfer")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": Save the returned ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy_hash")," from the output to query information about execution status."),(0,r.kt)("h3",{id:"confirming-execution-and-account-status"},"Confirming Execution and Account Status"),(0,r.kt)("p",null,"Account configuration on a Casper blockchain is stored in a ",(0,r.kt)("a",{parentName:"p",href:"/glossary/M#merkle-tree"},"Merkle Tree")," and is a snapshot of the blockchain's ",(0,r.kt)("a",{parentName:"p",href:"/design/global-state"},"Global State"),". The representation of global state for a given block can be computed by executing the deploys (including transfers) within the block and its ancestors. The root node of the Merkle Tree identifying a particular state is called the ",(0,r.kt)("inlineCode",{parentName:"p"},"state-root-hash")," and is stored in every executed block."),(0,r.kt)("p",null,"To check that your account was configured correctly, you need the ",(0,r.kt)("inlineCode",{parentName:"p"},"state-root-hash")," corresponding to the block that contains your deploy. To obtain the ",(0,r.kt)("inlineCode",{parentName:"p"},"state-root-hash"),", you need to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/workflow/querying#querying-deploys"},"Confirm the execution status of the deploy")," and obtain the hash of the block containing it"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/workflow/querying#querying-blocks"},"Query the block containing the deploy")," to obtain the corresponding ",(0,r.kt)("inlineCode",{parentName:"li"},"state_root_hash"))),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"state_root_hash")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"hex-encoded-public-key")," of the main account to query the network for the account and check its configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state \\\n--node-address http://<peer-ip-address>:7777/rpc \\\n--state-root-hash <state-root-hash-from-block> \\\n--key <hex-encoded-public-key-MA>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example Output")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1126043166167626077,\n    "jsonrpc": "2.0",\n    "result": {\n        "api_version": "1.0.0",\n        "merkle_proof": "2226 chars",\n        "stored_value": {\n            "Account": {\n                "account_hash": "account-hash-dc88a1819381c5ebbc3432e5c1d94df18cdcd7253b85259eeebe0ec8661bb84a",\n                "action_thresholds": {\n                    "deployment": 2,\n                    "key_management": 2\n                },\n                "associated_keys": [\n                    {\n                        "account_hash": "account-hash-12dee9fe535bfd8fd335fce1ba1f972f26bb60029a303b310d85419357d18f51",\n                        "weight": 1\n                    },\n                    {\n                        "account_hash": "account-hash-dc88a1819381c5ebbc3432e5c1d94df18cdcd7253b85259eeebe0ec8661bb84a",\n                        "weight": 1\n                    }\n                ],\n                "main_purse": "uref-74b20e9722d3f087f9dc431e9f0fcc6a803c256e005fa45b64a101512001cb78-007",\n                "named_keys": []\n            }\n        }\n    }\n}\n')),(0,r.kt)("p",null,"In the above example, you can see the account addresses listed within the ",(0,r.kt)("inlineCode",{parentName:"p"},"associated_keys")," section. Each key has a weight of ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),", since the action threshold for ",(0,r.kt)("inlineCode",{parentName:"p"},"deployment")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"2"),", neither account is able to sign and send a deploy individually. Thus to send the deploy from the Main account, the deploy needs to be signed by the secret keys of each account to reach the required threshold."),(0,r.kt)("p",null,"Details about various scenarios in which multiple associated keys can be setup is discussed in ",(0,r.kt)("a",{parentName:"p",href:"/dapp-dev-guide/tutorials/multi-sig/additional"},"the examples section of the Multi-Signature Tutorial"),"."))}h.isMDXComponent=!0}}]);