"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3149],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),h=o,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||s;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var l=2;l<s;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6849:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var a=n(3117),o=n(102),s=(n(7294),n(3905)),r=["components"],i={},c="Writing Session Code",l={unversionedId:"dapp-dev-guide/writing-contracts/session-code",id:"dapp-dev-guide/writing-contracts/session-code",title:"Writing Session Code",description:"This section explains the concept of session code, why we need it, and how to write it. The best use of session code is when the situation calls for a stateless execution. You can use session code when the logic requires very little or no internal data to be tracked. Session code is required when interacting and accepting values being returned across the Wasm boundary.",source:"@site/source/docs/casper/dapp-dev-guide/writing-contracts/session-code.md",sourceDirName:"dapp-dev-guide/writing-contracts",slug:"/dapp-dev-guide/writing-contracts/session-code",permalink:"/dapp-dev-guide/writing-contracts/session-code",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/dapp-dev-guide/writing-contracts/session-code.md",tags:[],version:"current",frontMatter:{},sidebar:"dapp-dev-guide",previous:{title:"Best Practices for Casper Smart Contract Authors",permalink:"/dapp-dev-guide/writing-contracts/best-practices"},next:{title:"Unit Testing Session Code",permalink:"/dapp-dev-guide/writing-contracts/testing-session-code"}},p={},d=[{value:"What is Session Code?",id:"what-is-session-code",level:2},{value:"Project Structure",id:"project-structure",level:2},{value:"Writing Session Code",id:"writing-session-code-1",level:2},{value:"Sample Session Code",id:"sample-session-code",level:2},{value:"Understanding the sample code",id:"understanding-the-sample-code",level:3},{value:"Compiling the Session Code",id:"compiling-the-session-code",level:2},{value:"Installing Session Code",id:"installing-session-code",level:2},{value:"Video Walkthrough",id:"video-walkthrough",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}],u={toc:d};function h(e){var t=e.components,n=(0,o.Z)(e,r);return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"writing-session-code"},"Writing Session Code"),(0,s.kt)("p",null,"This section explains the concept of session code, why we need it, and how to write it. The best use of session code is when the situation calls for a ",(0,s.kt)("a",{parentName:"p",href:"/glossary/S/#stateless"},"stateless")," execution. You can use session code when the logic requires very little or no internal data to be tracked. Session code is required when interacting and accepting values being returned across the Wasm boundary."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Session code can be written in any programming language that compiles to WebAssembly (Wasm). However, the examples in this topic use Rust."))),(0,s.kt)("p",null,"In the following sections we will explore the concept of session code, the project structure that is required for the session code to be tested and executed correctly, and a simple session code example."),(0,s.kt)("h2",{id:"what-is-session-code"},"What is Session Code?"),(0,s.kt)("p",null,"Session code is the simplest piece of logic you can execute on a Casper Network. It requires only one entry point, which is the ",(0,s.kt)("inlineCode",{parentName:"p"},"call")," function and it runs within the context of the account executing the session code. This means that the session code will run with the permissions of the account, such as having access to the main purse (the session code could transfer tokens out of the account's main purse)."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note"),": Before you sign and execute the session code, ensure that you know exactly what the session code is doing. If you don't know exactly what it is meant for, then it could be doing something malicious."),(0,s.kt)("p",null,"To understand the difference between session code and contract code, see ",(0,s.kt)("a",{parentName:"p",href:"/dapp-dev-guide/writing-contracts/rust/#difference-between-session-code-and-smart-contract"},"Difference Between Session Code and Smart Contract"),"."),(0,s.kt)("h2",{id:"project-structure"},"Project Structure"),(0,s.kt)("p",null,"For this guide, we are creating the project structure manually, however, you can use ",(0,s.kt)("inlineCode",{parentName:"p"},"cargo casper")," to set up this directory structure automatically."),(0,s.kt)("p",null,"Top-Level Directory |",(0,s.kt)("em",{parentName:"p"}," contract |")," src |",(0,s.kt)("em",{parentName:"p"}," main.rs |")," gitignore |",(0,s.kt)("em",{parentName:"p"}," Cargo.lock |")," Cargo.toml |",(0,s.kt)("em",{parentName:"p"}," tests |")," src |",(0,s.kt)("em",{parentName:"p"}," main.rs |")," gitignore |",(0,s.kt)("em",{parentName:"p"}," Cargo.lock |")," Cargo.toml"),(0,s.kt)("p",null,"In the above directory structure, the ",(0,s.kt)("inlineCode",{parentName:"p"},"contract")," folder contains the session code in the ",(0,s.kt)("inlineCode",{parentName:"p"},"main.rs")," file and the needed dependencies in the ",(0,s.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," file. The ",(0,s.kt)("inlineCode",{parentName:"p"},"tests")," folder contains the code required to test the session code before it is deployed on a Casper Network."),(0,s.kt)("h2",{id:"writing-session-code-1"},"Writing Session Code"),(0,s.kt)("p",null,"The following steps illustrate the process of writing session code and the important components to include:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Create a new top-level directory containing the session code and would also include another folder for tests, which will help us test the functionality of our session code.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Inside the new folder run the following command to create a new binary package called ",(0,s.kt)("em",{parentName:"p"},"contract"),":"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cargo new contract\n")),(0,s.kt)("p",{parentName:"li"},"This folder will contain the logic that will be compiled to Wasm and will be executed on a node within a Casper Network.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Within the contract package, you can find the ",(0,s.kt)("inlineCode",{parentName:"p"},"main.rs")," file inside the ",(0,s.kt)("inlineCode",{parentName:"p"},"src")," folder. You will write your session code in the ",(0,s.kt)("inlineCode",{parentName:"p"},"main.rs")," file.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In the ",(0,s.kt)("inlineCode",{parentName:"p"},"cargo.toml")," file include the following dependencies:"),(0,s.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"For the purposes of this guide, we are using only two dependencies; however, you can use more depending on the requirement of your session code."))),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},'casper-contract = "1.4.4"')," - You need to import the ",(0,s.kt)("a",{parentName:"li",href:"https://crates.io/crates/casper-contract"},"casper-contract")," as it provides the SDK for the execution engine (EE). You can read more about it ",(0,s.kt)("a",{parentName:"li",href:"https://docs.rs/casper-contract/latest/casper_contract/"},"here"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},'casper-types = "1.5.0"')," - You need to import the ",(0,s.kt)("a",{parentName:"li",href:"https://crates.io/crates/casper-types"},"casper-types")," crate as this crate includes the types that the node uses. This is necessary for the execution engine (EE) to understand and interpret the session code. You can read more about it ",(0,s.kt)("a",{parentName:"li",href:"https://docs.rs/casper-types/latest/casper_types/"},"here"),".")),(0,s.kt)("p",{parentName:"li"},"You can find the latest versions of the dependencies at ",(0,s.kt)("a",{parentName:"p",href:"https://crates.io/"},"https://crates.io/"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"A few things to note while writing session code:"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Include the following:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"#![no_std]")," - This indicates not to import the standard library."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"#![no_main]")," - This indicates that the ",(0,s.kt)("inlineCode",{parentName:"li"},"main")," function is not required, since the session code has only one entry point as the ",(0,s.kt)("inlineCode",{parentName:"li"},"call")," function."))),(0,s.kt)("li",{parentName:"ul"},"Import the casper contract API: ",(0,s.kt)("inlineCode",{parentName:"li"},"use casper_contract::contract_api::{account, runtime, storage, system};")," this example uses account, runtime, storage, and system crates. However, you might need to import the crates relevant to your session code.")))),(0,s.kt)("h2",{id:"sample-session-code"},"Sample Session Code"),(0,s.kt)("p",null,"This sample code demonstrates a simple session code passing arguments, processing the arguments, and storing the result. In general, you will use session code for such operations. In this example, we call a contract that gets returns a value and we store the result in a URef, within the account's named keys."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'#![no_std]\n#![no_main]\n\nuse casper_contract::contract_api::{account, runtime, storage, system};\nuse casper_contract::unwrap_or_revert::UnwrapOrRevert;\nuse casper_types::{runtime_args, ContractHash, Key, PublicKey, RuntimeArgs, URef, U512};\n\nconst FUNDRAISER_CONTRACT_HASH: &str = "fundraiser_contract_hash";\nconst ENTRY_POINT_GET_DONATION_COUNT: &str = "get_donation_count";\nconst DONATING_ACCOUNT_KEY: &str = "donating_account_key";\n\n#[no_mangle]\npub extern "C" fn call() {\n    let fundraiser_contract_hash: ContractHash = runtime::get_named_arg(FUNDRAISER_CONTRACT_HASH);\n    let donating_account_key: Key = runtime::get_named_arg(DONATING_ACCOUNT_KEY);\n\n    let donation_count: u64 = runtime::call_contract(\n        fundraiser_contract_hash,\n        ENTRY_POINT_GET_DONATION_COUNT,\n        runtime_args! {\n            DONATING_ACCOUNT_KEY => donating_account_key\n        },\n    );\n\n    let donation_count_uref = storage::new_uref(donation_count);\n    runtime::put_key("donation_count", donation_count_uref.into())\n}\n')),(0,s.kt)("h3",{id:"understanding-the-sample-code"},"Understanding the sample code"),(0,s.kt)("p",null,"Let's try to understand what each line of code in the above sample is trying to achieve."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"#![no_std]\n#![no_main]\n")),(0,s.kt)("p",null,"This indicates not to import the standard library and that the main function is not required, since the session code has only one entry point as the ",(0,s.kt)("inlineCode",{parentName:"p"},"call")," function."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"use casper_contract::contract_api::{account, runtime, storage, system};\nuse casper_contract::unwrap_or_revert::UnwrapOrRevert;\nuse casper_types::{runtime_args, ContractHash, Key, PublicKey, RuntimeArgs, URef, U512};\n")),(0,s.kt)("p",null,"Imports the casper contract API. This example uses account, runtime, storage, and system crates. However, you might need to import the crates relevant to your session code."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'const FUNDRAISER_CONTRACT_HASH: &str = "fundraiser_contract_hash";\nconst ENTRY_POINT_GET_DONATION_COUNT: &str = "get_donation_count";\nconst DONATING_ACCOUNT_KEY: &str = "donating_account_key";\n')),(0,s.kt)("p",null,"It is a good habit to define constants, because if you use the same argument in multiple places and you want to change the argument, you can do that where you just defined the constant. This change will reflect everywhere the argument is used."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"#[no_mangle]\n")),(0,s.kt)("p",null,"When the EE (that lives on each node of a Casper network), receives Wasm to execute, the ",(0,s.kt)("inlineCode",{parentName:"p"},"#[no_mangle]")," flag ensures that the function name following it is retained as a string in the Wasm binary. For session code, this retains the ",(0,s.kt)("inlineCode",{parentName:"p"},"call")," string and marks the entry point for the execution engine."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'pub extern "C" fn call()\n')),(0,s.kt)("p",null,"This initiates the ",(0,s.kt)("inlineCode",{parentName:"p"},"call")," function, which when compiled could be used from another library. For example, a C library could link to the resulting Wasm."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"let fundraiser_contract_hash: ContractHash = runtime::get_named_arg(FUNDRAISER_CONTRACT_HASH);\n    let donating_account_key: Key = runtime::get_named_arg(DONATING_ACCOUNT_KEY);\n\n    let donation_count: u64 = runtime::call_contract(\n        fundraiser_contract_hash,\n        ENTRY_POINT_GET_DONATION_COUNT,\n        runtime_args! {\n            DONATING_ACCOUNT_KEY => donating_account_key\n        },\n    );\n")),(0,s.kt)("p",null,"This code demonstrates how to get the contract hash and donating account key as arguments. It then performs a simple operation with them, such as getting the final donation count. The ",(0,s.kt)("inlineCode",{parentName:"p"},"runtime::get_named_arg()")," takes a string as an argument and returns the named argument to the host in the current runtime."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"let donation_count_uref = storage::new_uref(donation_count);\n")),(0,s.kt)("p",null,"Once you have the result, you might want to save it at a location that can be accessed later. This code puts the URef in the current context's ",(0,s.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/latest/casper_types/contracts/type.NamedKeys.html"},"NamedKeys"),", which is the context of the account calling this piece of session code."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'runtime::put_key("donation_count", donation_count_uref.into())\n')),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"put_key")," function stores the URef of the result in the current context's NamedKeys, which is the context of the account calling this piece of session code. Once this session code is executed, the account that called the session code will have a new named key ",(0,s.kt)("inlineCode",{parentName:"p"},"donation_count")," added to the account."),(0,s.kt)("h2",{id:"compiling-the-session-code"},"Compiling the Session Code"),(0,s.kt)("p",null,"Before you deploy the session code on a Casper Network, you need to compile it to Wasm."),(0,s.kt)("p",null,"Use the following command to move to the ",(0,s.kt)("em",{parentName:"p"},"contract")," directory:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cd contract\n")),(0,s.kt)("p",null,"Inside the ",(0,s.kt)("em",{parentName:"p"},"contract")," directory execute the following command to compile the session code."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cargo build --release --target wasm32-unknown-unknown\n")),(0,s.kt)("p",null,"Once the session code is compiled you can deploy it on a Casper Network."),(0,s.kt)("h2",{id:"installing-session-code"},"Installing Session Code"),(0,s.kt)("p",null,"Before you install the session code on the Mainnet or Testnet, you can do a trial run on the a local network using ",(0,s.kt)("a",{parentName:"p",href:"/dapp-dev-guide/building-dapps/setup-nctl"},"NCTL"),"."),(0,s.kt)("p",null,"You can install the session code on the Testnet using the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy \\\n    --node-address <HOST:PORT> \\\n    --chain-name casper-test \\\n    --secret-key <PATH> \\\n    --payment-amount <PAYMENT-AMOUNT> \\\n    --session-path <SESSION-PATH> \\\n    --session-arg <"NAME:TYPE=\'VALUE\'" OR "NAME:TYPE=null">\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"node-address")," - An IP address of a peer on the network. The default port for JSON-RPC servers on Mainnet and Testnet is 7777."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"secret-key")," - The file name containing the secret key of the account paying for the deploy."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"chain-name")," - The chain-name to the network where you wish to send the deploy. For Mainnet, use ",(0,s.kt)("em",{parentName:"li"},"casper"),". For Testnet, use ",(0,s.kt)("em",{parentName:"li"},"casper-test"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"payment-amount")," - The payment for the deploy in motes."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"session-path")," - The path to the contract Wasm, which should point to wherever you compiled the contract (.wasm file) on your computer."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"session-arg")," - A named and typed argument, which is passed to the Wasm code.")),(0,s.kt)("p",null,"You can use this command ",(0,s.kt)("inlineCode",{parentName:"p"},"casper-client put-deploy --help")," to view help information, which provides an updated list of supported arguments."),(0,s.kt)("h2",{id:"video-walkthrough"},"Video Walkthrough"),(0,s.kt)("p",null,"The following brief video describes ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/two-party-multi-sig/"},"sample session code")," for configuring an account."),(0,s.kt)("p",{align:"center"},(0,s.kt)("iframe",{width:"400",height:"225",src:"https://www.youtube.com/embed?v=sUg0nh3K3iQ&list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj&index=4",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,s.kt)("h2",{id:"whats-next"},"What's Next?"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Learn to ",(0,s.kt)("a",{parentName:"li",href:"/dapp-dev-guide/writing-contracts/testing-session-code"},"test your session code"))))}h.isMDXComponent=!0}}]);