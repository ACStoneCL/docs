"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6653],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=o,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||r;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1143:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),i=["components"],s={},c="Deploying Contracts",l={unversionedId:"dapp-dev-guide/deploying-contracts",id:"dapp-dev-guide/deploying-contracts",isDocsHomePage:!1,title:"Deploying Contracts",description:"Ultimately, smart contracts are meant to run on the blockchain. Once your smart contract is complete, it's time to deploy the contract to the blockchain. There are a few pre-requisites to doing this:",source:"@site/source/docs/casper/dapp-dev-guide/deploying-contracts.md",sourceDirName:"dapp-dev-guide",slug:"/dapp-dev-guide/deploying-contracts",permalink:"/docs/dapp-dev-guide/deploying-contracts",editUrl:"https://github.com/casper-network/documentation/tree/master/docs/casper/dapp-dev-guide/deploying-contracts.md",tags:[],version:"current",frontMatter:{},sidebar:"dapp-dev-guide",previous:{title:"Upgrading Contracts",permalink:"/docs/dapp-dev-guide/upgrading-contracts"},next:{title:"Calling Contracts",permalink:"/docs/dapp-dev-guide/calling-contracts"}},d=[{value:"The Casper Client",id:"the-casper-client",children:[{value:"Building the Client from Source",id:"building-the-client-from-source",children:[]},{value:"Check the Client Version",id:"check-the-client-version",children:[]},{value:"Token to Pay for Deployments",id:"token-to-pay-for-deployments",children:[]},{value:"Target Network",id:"target-network",children:[]},{value:"Creating Keys",id:"creating-keys",children:[]}]},{value:"Sending a Deployment to the Testnet",id:"sending-a-deployment-to-the-testnet",children:[{value:"Obtain Token",id:"obtain-token",children:[]},{value:"A Basic Deployment using the Command Line (Rust Client)",id:"a-basic-deployment-using-the-command-line-rust-client",children:[]},{value:"Check Deploy Status",id:"check-deploy-status",children:[]},{value:"A Note about Gas Prices",id:"a-note-about-gas-prices",children:[]},{value:"Advanced Deployments",id:"advanced-deployments",children:[]}]}],p={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploying-contracts"},"Deploying Contracts"),(0,r.kt)("p",null,"Ultimately, smart contracts are meant to run on the blockchain. Once your smart contract is complete, it's time to deploy the contract to the blockchain. There are a few pre-requisites to doing this:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("inlineCode",{parentName:"li"},"upgrade")," function to upgrade the smart contract, see ",(0,r.kt)("a",{parentName:"li",href:"../dapp-dev-guide/tutorials/upgrade-tutorial"},"Smart Contract Upgrade Tutorial")," for more information"),(0,r.kt)("li",{parentName:"ul"},"A Client that communicates with the network"),(0,r.kt)("li",{parentName:"ul"},"The private key for the account that pays for the deployment"),(0,r.kt)("li",{parentName:"ul"},"Token to pay for the deployment on the network in the account associated with the private key. Each token transfer costs exactly 0.0001 CSPR (10000 motes). Also, the amount transferred needs to be a minimum of 2.5 CSPR.")),(0,r.kt)("p",null,"This section will help you get set up with each prerequisite."),(0,r.kt)("h2",{id:"the-casper-client"},"The Casper Client"),(0,r.kt)("p",null,"You can find the default Casper client on ",(0,r.kt)("a",{parentName:"p",href:"https://crates.io/crates/casper-client"},"crates.io"),". This client communicates with the network to transmit your deployments."),(0,r.kt)("p",null,"Run the commands below to install the client on most flavors of Linux and macOS."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install casper-client\n")),(0,r.kt)("p",null,"The Casper client can print out ",(0,r.kt)("em",{parentName:"p"},"help")," information, which provides an up-to-date list of supported commands."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client --help\n")),(0,r.kt)("h3",{id:"building-the-client-from-source"},"Building the Client from Source"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node/tree/master/client"},"Instructions")),(0,r.kt)("h3",{id:"check-the-client-version"},"Check the Client Version"),(0,r.kt)("p",null,"There is an official Rust client, that works with the Casper ",(0,r.kt)("a",{parentName:"p",href:"https://testnet.cspr.live/"},"Testnet")," and ",(0,r.kt)("a",{parentName:"p",href:"https://cspr.live/"},"Mainnet"),"."),(0,r.kt)("p",null,"To check the client version run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client --version\n")),(0,r.kt)("p",null,"If you want to send your deployments to an external network, use the latest released version of the client. If you are building the client locally, check the gitHash and ensure it matches the gitHash of the network."),(0,r.kt)("h3",{id:"token-to-pay-for-deployments"},"Token to Pay for Deployments"),(0,r.kt)("p",null,'Blockchains are supported by infrastructure providers called "Validators". To use the Validator infrastructure, it\'s necessary to acquire token to pay for deployments (transactions). In a testnet, this is possible by using a faucet. Alternatively, accounts can be funded in Genesis, or token can be transferred from a Genesis account to a new account. In a production system, token is typically acquired by visiting an exchange.'),(0,r.kt)("h3",{id:"target-network"},"Target Network"),(0,r.kt)("p",null,"When sending a deploy, the client needs to know which host will receive the deployment. The ",(0,r.kt)("inlineCode",{parentName:"p"},"node-address")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"chain-name")," parameters provide this info."),(0,r.kt)("h3",{id:"creating-keys"},"Creating Keys"),(0,r.kt)("p",null,"Blockchains use asymmetric key encryption to secure transactions. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/dapp-dev-guide/keys"},"Working with Cryptographic Keys"),". The secret key used to sign the deployment will be the secret key of the account that is used to pay for the transaction. The transaction will execute in this account's context unless key delegation and the ",(0,r.kt)("inlineCode",{parentName:"p"},"from")," parameter is being used. To create keys using the rust client, execute the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client keygen <TARGET DIRECTORY>\n")),(0,r.kt)("p",null,"This process will create 3 files:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"secret-key.pem"),(0,r.kt)("li",{parentName:"ul"},"public-key.pem"),(0,r.kt)("li",{parentName:"ul"},"public_key_hex")),(0,r.kt)("p",null,"When passing in the public key as hex, it's recommended to ",(0,r.kt)("inlineCode",{parentName:"p"},"$(cat public_key_hex)")," in the transaction, or extract the contents of the file. Use the secret-key.pem file to sign transaction."),(0,r.kt)("h2",{id:"sending-a-deployment-to-the-testnet"},"Sending a Deployment to the Testnet"),(0,r.kt)("p",null,"The easiest way to deploy a contract is to use an existing public network. The Testnet is operated by external validators that can accept transactions."),(0,r.kt)("h3",{id:"obtain-token"},"Obtain Token"),(0,r.kt)("p",null,"To send a deploy to the network, create keys and obtain token. Token can be obtained via a faucet or by a participant that has token. Connect to our ",(0,r.kt)("a",{parentName:"p",href:"https://discordapp.com/invite/Q38s3Vh"},"Discord")," to get token via an existing participant."),(0,r.kt)("h3",{id:"a-basic-deployment-using-the-command-line-rust-client"},"A Basic Deployment using the Command Line (Rust Client)"),(0,r.kt)("p",null,"As described above, a basic deployment must provide some essential information. Here is an example deployment using the Rust client that will work with the basic contract we created using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/dapp-dev-guide/writing-contracts/rust"},"Contracts SDK for Rust"),". The default port is 7777:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client put-deploy \\\n--chain-name <NETWORK_NAME> \\\n--node-address http://<HOST:PORT> \\\n--secret-key /home/keys/secret_key.pem \\\n--session-path /home/casper-node/target/wasm32-unknown-unknown/release/do_nothing.wasm \\\n--payment-amount 10000000\n")),(0,r.kt)("p",null,"If your deployment command is correct, expect to see a success message that looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'{"api_version":"1.0.0","deploy_hash":"8c3068850354c2788c1664ac6a275ee575c8823676b4308851b7b3e1fe4e3dcc"}\n')),(0,r.kt)("p",null,"Note: Each deploy gets a unique hash. This is part of the cryptographic security of blockchain technology. No two deploys will ever return the same hash."),(0,r.kt)("h3",{id:"check-deploy-status"},"Check Deploy Status"),(0,r.kt)("p",null,"Once the network has received the deployment, it will queue up in the system before being listed in a block for execution. Sending a transaction (deployment) to the network does not mean that the transaction processed successfully. Therefore, it's important to check to see that the contract executed properly, and that the block was finalized."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-deploy \\\n--chain-name <NETWORK_NAME> \\\n--node-address http://<HOST:PORT> <DEPLOY_HASH>\n")),(0,r.kt)("p",null,"Which will return a data structure like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "api_version": "1.0.0",\n  "deploy": {\n    "approvals": [\n      {\n        "signature": "01350549b0e0173e8612100dc954dcb021e2c3de2161050d397cba8cad5607b2e234115c0f419aeae8ce6cef1464e54b76c857923c42015277f9dd6ae920842c00",\n        "signer": "016af0262f67aa93a225d9d57451023416e62aaa8391be8e1c09b8adbdef9ac19d"\n      }\n    ],\n    "hash": "8c3068850354c2788c1664ac6a275ee575c8823676b4308851b7b3e1fe4e3dcc",\n    "header": {\n      "account": "016af0262f67aa93a225d9d57451023416e62aaa8391be8e1c09b8adbdef9ac19d",\n      "body_hash": "03cd3112fd235f7e3e474338ec08e2a8019789e02396cc2eb63f0006ffca6925",\n      "chain_name": "casper-charlie-testnet-7",\n      "dependencies": [],\n      "gas_price": 10,\n      "timestamp": "2020-10-21T19:30:39.601Z",\n      "ttl": "1h"\n    },\n    "payment": {\n      "ModuleBytes": {\n        "args": "0100000006000000616d6f756e74040000000380969808",\n        "module_bytes": ""\n      }\n    },\n    "session": {\n      "ModuleBytes": {\n        "args": "00000000",\n        "Module_bytes":\nCONTRACT BYTECODE\n }\n    }\n  },\n  "execution_results": [\n    {\n      "block_hash": "75df7506a8d150c81ddcfe8303362e22cea3b2359e845b96bccee0735b774e17",\n      "result": {\n        "cost": "164645",\n        "effect": {\n          "operations": {\nLIST OF OPERATIONS\n                      },\n          "transforms": {\nLIST OF TRANSFORMS\n                          }\n            },\n            "hash-1e0c2b6c77bdfe707f9d452295b21b14196e74968886eecda16d68be4c298883": "WriteContract",\n            "hash-3284d00f39e9ceefa93884b7c171a8f7f9efc5d32b2104c41a12c77667ff03c3": "Identity",\n            "hash-439d5326bf89bd34d3b2c924b3af2f5e233298b473d5bd8b54fab61ccef6c003": "Identity",\n            "hash-46aa3a71a3824ccaa35273b9fa840f31400a1403d95f0e4c1caa992b272d15fc": "WriteContractWasm",\n            "hash-9f458c8e49b65a2e8cc1df2610d0639657f9b1010acfc94a08fd0be9962d3892": "Identity",\n            "hash-d4e7fc49e390a5789da70ff25a45fdf7348b1a72fdb37369f6d46f6fea65deff": "WriteContractPackage",\n            "hash-d74beacad19223c6f90953254b82e86d6499b0bb6824ed86a52e3c16491431d4": "Identity",\n            "hash-ebe6e4ad78c5913a4bca6d132d99b12df143f5129de946efca77d8d2a15174da": "Identity",\n            "uref-0994d1e6631ca447f5a324776175c8c98ffd8d46d964de3c67776804b61a7bdf-000": "Identity",\n            "uref-83b591182be016e97ba6640d9947b8358fbc106f97466e60fae9f10fa23737ee-000": {\n              "WriteCLValue": {\n                "bytes": "",\n                "cl_type": "Unit"\n              }\n            },\n            "uref-8dedcbbabf23d395dd7cc4933a862eda6335f1b9029394bce6df3e05f73d2061-000": {\n              "AddUInt512": "1646450"\n            },\n            "uref-a44cb28d40ac091da0c42f01d175ff10bae86e89457290e34ee7828ddbd32902-000": {\n              "WriteCLValue": {\n                "bytes": "",\n                "cl_type": "Unit"\n              }\n            },\n            "uref-c91b4bef8a426fff315aee6f05d6485ecf474296a9882f9bee8fa11e560e6c91-000": {\n              "WriteCLValue": {\n                "bytes": "1e0c2b6c77bdfe707f9d452295b21b14196e74968886eecda16d68be4c298883",\n                "cl_type": {\n                  "FixedList": [\n                    "U8",\n                    32\n                  ]\n                }\n              }\n            },\n            "uref-e2054113bc3d57386b3152d38ee774cb58dee3c87886d102ece04d9f3be274bf-000": {\n              "WriteCLValue": {\n                "bytes": "07c76fa8687e8d03",\n                "cl_type": "U512"\n              }\n            }\n          }\n        },\n        "error_message": null\n      }\n    }\n')),(0,r.kt)("p",null,"From this data structure we can observe some properties about the deploy (some of which can be set by the user):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Execution cost 164645 gas"),(0,r.kt)("li",{parentName:"ul"},"No errors were returned by the contract"),(0,r.kt)("li",{parentName:"ul"},"There were no dependencies for this deploy"),(0,r.kt)("li",{parentName:"ul"},"The Time to Live was 1 hour")),(0,r.kt)("p",null,"It is also possible to check the contract's state by performing a ",(0,r.kt)("inlineCode",{parentName:"p"},"query-state")," command using the client."),(0,r.kt)("h3",{id:"a-note-about-gas-prices"},"A Note about Gas Prices"),(0,r.kt)("p",null,"If you notice in the put-deploy command above, we supplied a payment amount argument:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--payment-amount 10000000\n")),(0,r.kt)("p",null,"But the actual execution cost was only ",(0,r.kt)("inlineCode",{parentName:"p"},"164645")," when it was run on the chain!"),(0,r.kt)("p",null,'A common question that frequently arises is: "How do I know what the payment amount (gas cost) should be?" The honest answer is that we are hard at work to create tools to help you estimate your costs. Currently, we recommend using the ',(0,r.kt)("a",{parentName:"p",href:"/docs/dapp-dev-guide/setup-nctl"},"NCTL")," tool on your local machine or the testnet to deploy your contracts in a test environment. As you just saw, you can check a deploy status and roughly see how much it would actually cost when deployed."),(0,r.kt)("p",null,"You can estimate the costs in this way, and then add a small buffer in case the network state has changed. So in this example above, you might have chosen to set the payment to 175000 or 200000, rather than the 10000000 that was used."),(0,r.kt)("p",null,"Refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/runtime#gas-allocation"},"runtime economics")," section for more details about gas usage, fees, and refunding mechanisms."),(0,r.kt)("h3",{id:"advanced-deployments"},"Advanced Deployments"),(0,r.kt)("p",null,"The Casper Network supports complex deployments."),(0,r.kt)("h4",{id:"using-arguments-with-deployments"},"Using Arguments with Deployments"),(0,r.kt)("p",null,"Casper contracts support arguments for deployments, which enables powerful capabilities for smart contract development. The casper client provides some examples on how to do this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client put-deploy --show-arg-examples\n")),(0,r.kt)("h4",{id:"creating-signing-and-deploying-contracts-with-multiple-signatures"},"Creating, signing, and deploying contracts with multiple signatures"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy")," command on its own provides multiple actions strung together optimizing for the common case, with the capability to separate concerns between your key management and deploy creation. See details about generating account key pairs in the Developer Guide."),(0,r.kt)("p",null,"Every account can associate multiple keys with it and give each a weight. Collective weight of signing keys decides whether an action of certain type can be made. To learn more about how weights and thresholds work, please review the ",(0,r.kt)("a",{parentName:"p",href:"/docs/design/accounts"},"Blockchain Design"),". In order to collect weight of different associated keys, a deploy has to be signed by corresponding private keys. The ",(0,r.kt)("inlineCode",{parentName:"p"},"put-deploy")," command creates a deploy, signs it and deploys to the node but doesn't allow for signing with multiple keys. Therefore, we split ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy")," into separate commands:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"make-deploy")," - creates a deploy from input parameters"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sign-deploy")," - signs a deploy with given private key"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"send-deploy")," - sends a deploy to a Casper node")),(0,r.kt)("p",null,"To make a deploy signed with multiple keys: first create the deploy with ",(0,r.kt)("inlineCode",{parentName:"p"},"make-deploy"),". This generates a deploy file that can be sent to the other signers, who then sign it with their keys by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"sign-deploy")," for each key. Signatures need to be gathered on the deploy one after another, until all requisite parties have signed the deploy. Finally the signed deploy is sent to the node with ",(0,r.kt)("inlineCode",{parentName:"p"},"send-deploy")," for processing by the network."))}u.isMDXComponent=!0}}]);