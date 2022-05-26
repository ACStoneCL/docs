"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5175],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),l=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=l(t.components);return a.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=l(n),h=r,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(m,i(i({ref:e},p),{},{components:n})):a.createElement(m,i({ref:e},p))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},924:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=(n(4996),["components"]),s={},c="Writing a Basic Smart Contract in Rust",l={unversionedId:"dapp-dev-guide/writing-contracts/rust",id:"dapp-dev-guide/writing-contracts/rust",title:"Writing a Basic Smart Contract in Rust",description:"What is a Smart Contract?",source:"@site/source/docs/casper/dapp-dev-guide/writing-contracts/rust.md",sourceDirName:"dapp-dev-guide/writing-contracts",slug:"/dapp-dev-guide/writing-contracts/rust",permalink:"/dapp-dev-guide/writing-contracts/rust",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/dapp-dev-guide/writing-contracts/rust.md",tags:[],version:"current",frontMatter:{},sidebar:"dapp-dev-guide",previous:{title:"Unit Testing Session Code",permalink:"/dapp-dev-guide/writing-contracts/testing-session-code"},next:{title:"Testing Contracts",permalink:"/dapp-dev-guide/writing-contracts/testing"}},p={},u=[{value:"What is a Smart Contract?",id:"what-is-a-smart-contract",level:2},{value:"Why Do You Want to Use a Smart Contract?",id:"why-do-you-want-to-use-a-smart-contract",level:2},{value:"Smart Contracts on Casper",id:"smart-contracts-on-casper",level:2},{value:"Writing a Basic Smart Contract",id:"writing-a-basic-smart-contract",level:2},{value:"Step 1. Creating the Directory Structure",id:"step-1-creating-the-directory-structure",level:3},{value:"Step 2. Configuring the Main.rs File",id:"step-2-configuring-the-mainrs-file",level:3},{value:"Step 3. Defining the Global Constants",id:"step-3-defining-the-global-constants",level:3},{value:"Step 4. Defining the Contract Entry Points",id:"step-4-defining-the-contract-entry-points",level:3},{value:"Step 5. Defining the Call Function",id:"step-5-defining-the-call-function",level:3},{value:"Locked Contracts",id:"locked-contracts",level:4},{value:"What&#39;s Next?",id:"whats-next",level:2}],d={toc:u};function h(t){var e=t.components,n=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"writing-a-basic-smart-contract-in-rust"},"Writing a Basic Smart Contract in Rust"),(0,o.kt)("h2",{id:"what-is-a-smart-contract"},"What is a Smart Contract?"),(0,o.kt)("p",null,"A smart contract is a self-contained program installed on a blockchain. In the context of a Casper Network, a smart contract consists of contract code installed on chain using a ",(0,o.kt)("a",{parentName:"p",href:"../../../design/execution-semantics/#execution-semantics-deploys"},"deploy"),"."),(0,o.kt)("p",null,"Before writing smart contracts on a Casper Network, developers should be familiar with the difference between contract code and session code. Session code executes entirely within the context of the initiating account, while contract code executes within the context of its own state. Any action undertaken by a contract must initiate through an outside call, usually via session code."),(0,o.kt)("h2",{id:"why-do-you-want-to-use-a-smart-contract"},"Why Do You Want to Use a Smart Contract?"),(0,o.kt)("p",null,"Smart contracts exist as stored on-chain logic, thereby allowing disparate users to call the included entry points. These contracts can, in turn, call one another to perform interconnected operations and create more complex programs. The decentralized nature of blockchain technology means that these smart contracts do not suffer from any single point of failure. Even if a Casper node leaves the network, other nodes will continue to allow the contract to operate as intended."),(0,o.kt)("p",null,"Further, the Casper platform allows for ",(0,o.kt)("a",{parentName:"p",href:"dapp-dev-guide/writing-contracts/upgrading-contracts/"},"upgradable contracts")," and implementation through a variety of developer-friendly programming languages."),(0,o.kt)("h2",{id:"smart-contracts-on-casper"},"Smart Contracts on Casper"),(0,o.kt)("p",null,"Casper smart contracts are programs that run on a Casper Network. They interact with accounts and other contracts through entry points and allow for various triggers, conditions and logic."),(0,o.kt)("p",null,"On the Casper platform, developers may write smart contracts in any language that compiles to Wasm binaries. In this tutorial, we will focus specifically on writing a smart contract in the Rust language. The Rust compiler will compile the contract code into Wasm binary. After that, we will send the Wasm binary to a node on a Casper Network using a ",(0,o.kt)("inlineCode",{parentName:"p"},"put_deploy"),". Nodes within the network then ",(0,o.kt)("a",{parentName:"p",href:"../../../design/p2p/#communications-gossiping"},"gossip deploys"),", include them within a block and finalize them. After finalizing, deploys within the block are executed by the network."),(0,o.kt)("p",null,"A ContractPackage is created through the ",(0,o.kt)("inlineCode",{parentName:"p"},"new_contract")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"new_locked_contract")," methods. Through these methods, the Casper execution engine creates the new contract package automatically and assigns a ",(0,o.kt)("a",{parentName:"p",href:"dapp-dev-guide/understanding-hash-types#hash-and-key-explanations"},(0,o.kt)("inlineCode",{parentName:"a"},"ContractPackageHash")),". The new contract is added to this contract package with a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/latest/casper_types/contracts/struct.ContractHash.html"},(0,o.kt)("inlineCode",{parentName:"a"},"ContractHash"))," key. The execution engine stores the new contract within the contract package, alongside any previously installed versions of the contract, if applicable."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"new_contract")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"new_locked_contract")," methods are a convenience that automatically creates the package associated with a new contract. Developers choosing not to use these methods must first create a contract package to function as a container for their new contract."),(0,o.kt)("p",null,"The contract contains required metadata and it is primarily identified by its hash, known as the contract hash. The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/latest/casper_types/contracts/struct.ContractHash.html"},(0,o.kt)("inlineCode",{parentName:"a"},"contractHash"))," identifies a specific ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/latest/casper_types/contracts/type.ContractVersion.html"},"version of a contract")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"contractPackageHash")," serves as a more stable identifier for the most recent version."),(0,o.kt)("h2",{id:"writing-a-basic-smart-contract"},"Writing a Basic Smart Contract"),(0,o.kt)("p",null,"As stated, this tutorial covers the process of writing a smart contract in the Rust programming language. Casper provides a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/index.html"},"contract API")," within our ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/latest/casper_contract/index.html"},(0,o.kt)("inlineCode",{parentName:"a"},"casper_contract"))," crate."),(0,o.kt)("p",null,"This tutorial creates a simple smart contract that allows callers to donate funds to a purse owned by the contract, as well as track the total funds received and the number of individual contributions."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"step-1-creating-the-directory-structure"},"Step 1. Creating the Directory Structure"),(0,o.kt)("p",null,"First, create the directory for the new contract. This folder should have two sub-directories named ",(0,o.kt)("inlineCode",{parentName:"p"},"contract")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"test"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contract")," - This directory contains the code that becomes the Wasm, which is eventually sent to the network."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"test")," - This is an optionial directory that will contain tests for unit testing and asserting that the behavior of the contract matches expectations. As users must pay for execution, these tests should be considered a best practice. However, they are not required.")),(0,o.kt)("p",null,"Use the below command to create a new contract folder. This creates the ",(0,o.kt)("inlineCode",{parentName:"p"},"contract")," folder with ",(0,o.kt)("em",{parentName:"p"},"/src/main.rs")," file and ",(0,o.kt)("em",{parentName:"p"},"cargo.toml")," file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\ncargo new [CONTRACT_NAME]\n\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"step-2-configuring-the-mainrs-file"},"Step 2. Configuring the Main.rs File"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Remove the auto-generated main function and add file configurations.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Adjust the file attributes to support the Wasm execution environment."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"#![no_main]")," - This attribute tells the program not to use the standard main function as its entry point."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"#![no_std]")," - This attribute tells the program not to import the standard libraries.")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Import the required dependencies.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"`casper-contract - A library for developing Casper network smart contracts. This crate contains the API required to author smart contracts"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"casper_types")," - These are the types shared by many Casper crates for use on a Casper Network.")),(0,o.kt)("p",null,"Add these dependencies to the ",(0,o.kt)("em",{parentName:"p"},"Cargo.toml")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'\n[dependencies]\n// A library for developing Casper network smart contracts.\ncasper-contract = "1.4.4"\n// Types shared by many Casper crates for use on a Casper Network.\ncasper-types = "1.4.6"\n\n')),(0,o.kt)("p",null,"Then, add your imports in the main.rs file along with other imports."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"\n// This code imports necessary aspects of external crates that we will use in our contract code.\n\nextern crate alloc;\n\n// Importing Rust types.\nuse alloc::string::{String, ToString};\nuse alloc::vec;\n// Importing aspects of the Casper platform.\nuse casper_contract::contract_api::storage::dictionary_get;\nuse casper_contract::contract_api::{runtime, storage, system};\nuse casper_contract::unwrap_or_revert::UnwrapOrRevert;\n// Importing specific Casper types.\nuse casper_types::account::AccountHash;\nuse casper_types::contracts::NamedKeys;\nuse casper_types::{runtime_args, CLType, CLValue, EntryPoint, EntryPointAccess, EntryPointType, EntryPoints, Key, Parameter, ApiError, RuntimeArgs};\n\n")),(0,o.kt)("h3",{id:"step-3-defining-the-global-constants"},"Step 3. Defining the Global Constants"),(0,o.kt)("p",null,"After importing the necessary dependencies, you should define the constants that you will use within the contract itself. This includes both entry points and values. The following example outlines the necessary constants for our example contract."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'\n// Creating constants for the various contract entry points.\nconst ENTRY_POINT_INIT: &str = "init";\nconst ENTRY_POINT_DONATE: &str = "donate";\nconst ENTRY_POINT_GET_DONATION_COUNT: &str = "get_donation_count";\nconst ENTRY_POINT_GET_FUNDS_RAISED: &str = "get_funds_raised";\n\n// Creating constants for values within the contract.\nconst DONATING_ACCOUNT_KEY: &str = "donating_account_key";\nconst LEDGER: &str = "ledger";\nconst FUNDRAISING_PURSE: &str = "fundraising_purse";\n\n')),(0,o.kt)("h3",{id:"step-4-defining-the-contract-entry-points"},"Step 4. Defining the Contract Entry Points"),(0,o.kt)("p",null,"Entry points serve as a means to access contract code installed on global state. These functions may be called by either session code or another instance of contract code. When creating contract code, you should clearly define entry point functions by using meaningful names that describe the actions that they perform."),(0,o.kt)("p",null,"When defining entry points, begin with a ",(0,o.kt)("inlineCode",{parentName:"p"},"#[no_mangle]")," line to ensure that the system does not change critical syntax within the method names. Each entry point should contain the contract code that drives the action you wish the function to accomplish. Finally, include any storage or return values needed as applicable."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'\n// This entry point initializes the donation system, setting up the fundraising purse\n// and creating a dictionary to track the account hashes and the number of donations\n// made.\n#[no_mangle]\npub extern "C" fn init() {\n    let fundraising_purse = system::create_purse();\n    runtime::put_key(FUNDRAISING_PURSE, fundraising_purse.into());\n    // Create a dictionary to track the mapping of account hashes to number of donations made.\n    storage::new_dictionary(LEDGER).unwrap_or_revert();\n}\n\n// This is the donation entry point. When called, it records the caller\'s account\n// hash and returns the donation purse, with add access, to the immediate caller.\n#[no_mangle]\npub extern "C" fn donate() {\n    let donating_account_key: Key = runtime::get_named_arg(DONATING_ACCOUNT_KEY);\n    if let Key::Account(donating_account_hash) = donating_account_key {\n        update_ledger_record(donating_account_hash.to_string())\n    } else {\n        runtime::revert(FundRaisingError::InvalidKeyVariant)\n    }\n    let donation_purse = *runtime::get_key(FUNDRAISING_PURSE)\n        .unwrap_or_revert_with(FundRaisingError::MissingFundRaisingPurseURef)\n        .as_uref()\n        .unwrap_or_revert();\n    // The return value is the donation_purse URef with `add` access only. As a result\n    // the entity receiving this purse URef may only add to the purse, and cannot remove\n    // funds.\n    let value = CLValue::from_t(donation_purse.into_add()).unwrap_or_revert();\n    runtime::ret(value)\n}\n\n// This entry point returns the amount of donations from the caller.\n#[no_mangle]\npub extern "C" fn get_donation_count() {\n    let donating_account_key: Key = runtime::get_named_arg(DONATING_ACCOUNT_KEY);\n    if let Key::Account(donating_account_hash) = donating_account_key {\n        let ledger_seed_uref = *runtime::get_key(LEDGER)\n            .unwrap_or_revert_with(FundRaisingError::MissingLedgerSeedURef)\n            .as_uref()\n            .unwrap_or_revert();\n        let donation_count = if let Some(donation_count) =\n            storage::dictionary_get::<u64>(ledger_seed_uref, &donating_account_hash.to_string())\n                .unwrap_or_revert()\n        {\n            donation_count\n        } else {\n            0u64\n        };\n        runtime::ret(CLValue::from_t(donation_count).unwrap_or_revert())\n    } else {\n        runtime::revert(FundRaisingError::InvalidKeyVariant)\n    }\n}\n\n// This entry point returns the total funds raised.\n#[no_mangle]\npub extern "C" fn get_funds_raised() {\n    let donation_purse = *runtime::get_key(FUNDRAISING_PURSE)\n        .unwrap_or_revert_with(FundRaisingError::MissingFundRaisingPurseURef)\n        .as_uref()\n        .unwrap_or_revert();\n    let funds_raised = system::get_purse_balance(donation_purse)\n        .unwrap_or_revert();\n    runtime::ret(CLValue::from_t(funds_raised).unwrap_or_revert())\n}\n\n')),(0,o.kt)("h3",{id:"step-5-defining-the-call-function"},"Step 5. Defining the Call Function"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"call")," function starts the code execution and is the function responsible for installing the contract. In this case, it also initializes the contract by creating a donation purse and ledger for record-keeping."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Define the runtime arguments.")),(0,o.kt)("p",null,"At the time of contract installation, pass in parameters as runtime arguments. Use this pattern of variable definition to collect any sentinel values that dictate the behavior of the contract. If the entry point takes in arguments, you must declare those as part of the definition of the entry point."),(0,o.kt)("p",null,"In the donation contract example, the only variable parameter is the ",(0,o.kt)("inlineCode",{parentName:"p"},"DONATING_ACCOUNT_KEY"),"."),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Insert the function entry points into the ",(0,o.kt)("inlineCode",{parentName:"li"},"call")," function.")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"call")," function replaces a traditional ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," function and executes automatically when a caller interacts with the contract code. Within the ",(0,o.kt)("inlineCode",{parentName:"p"},"call")," function, we define entry points that the caller can access using another instance of code. The calling code may be an instance of session or contract code. When writing code that will call an entry point, there must be a one-to-one mapping of the entry point name. Otherwise, the execution engine will return an error that the entry point does not exist."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'\n//This is the full `call` function as defined within the donation contract.\n#[no_mangle]\npub extern "C" fn call() {\n    // This establishes the `init` entry point for initializing the contract\'s infrastructure.\n    let init_entry_point = EntryPoint::new(\n        ENTRY_POINT_INIT,\n        vec![],\n        CLType::Unit,\n        EntryPointAccess::Public,\n        EntryPointType::Contract,\n    );\n\n    // This establishes the `donate` entry point for callers looking to donate.\n    let donate_entry_point = EntryPoint::new(\n        ENTRY_POINT_DONATE,\n        vec![Parameter::new(DONATING_ACCOUNT_KEY, CLType::Key)],\n        CLType::URef,\n        EntryPointAccess::Public,\n        EntryPointType::Contract,\n    );\n\n    // This establishes an entry point called `donation_count` that returns the amount of\n    // donations from a specific account.\n    let get_donation_count_entry_point = EntryPoint::new(\n        ENTRY_POINT_GET_DONATION_COUNT,\n        vec![Parameter::new(DONATING_ACCOUNT_KEY, CLType::Key)],\n        CLType::U64,\n        EntryPointAccess::Public,\n        EntryPointType::Contract,\n    );\n\n    // This establishes an entry point called `funds_raised` that returns the total amount\n    // donated by all participants.\n    let funds_raised_entry_point = EntryPoint::new(\n        ENTRY_POINT_GET_FUNDS_RAISED,\n        vec![],\n        CLType::U512,\n        EntryPointAccess::Public,\n        EntryPointType::Contract,\n    );\n}\n\n')),(0,o.kt)("p",null,"The entry point should have the below arguments:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"name")," - Name of the entry point, which should be the same as the initial definition.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"arguments")," - A list of runtime arguments declared as part of the definition of the entry point.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"return type")," - CLType that is returned by the entry point. Use type ",(0,o.kt)("em",{parentName:"p"},"Unit")," for empty return types.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"access level")," - Access permissions of the entry point.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"entry point type")," - This can be ",(0,o.kt)("inlineCode",{parentName:"p"},"contract")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"session")," code."))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Add the entry points.")),(0,o.kt)("p",null,"This step adds the individual entry points using the ",(0,o.kt)("inlineCode",{parentName:"p"},"add_entry_point")," method to one object and returns it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"new_contract")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"\n    let mut entry_points = EntryPoints::new();\n    entry_points.add_entry_point(init_entry_point);\n    entry_points.add_entry_point(donate_entry_point);\n    entry_points.add_entry_point(get_donation_count_entry_point);\n    entry_points.add_entry_point(funds_raised_entry_point);\n\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Create the contract.")),(0,o.kt)("p",null,"Use the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/storage/fn.new_contract.html"},"new_contract")," method to create the contract, with its ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/latest/casper_types/contracts/type.NamedKeys.html"},"named keys")," and entry points. This method creates the contract object and saves the access URef and the contract package hash in the context of the caller. The execution engine automatically creates a contract package and assigns it a ",(0,o.kt)("inlineCode",{parentName:"p"},"contractPackageHash"),". Then, it adds the contract to the package with a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/latest/casper_types/contracts/struct.ContractHash.html"},(0,o.kt)("inlineCode",{parentName:"a"},"contractHash")),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'\nlet (contract_hash, _contract_version) = storage::new_contract(\n        entry_points,\n        None,\n        Some("fundraiser_package_hash".to_string()),\n        Some("fundraiser_access_uref".to_string()),\n    );\n\n    runtime::put_key("fundraiser_contract_hash", contract_hash.into());\n    // Call the init entry point to setup and create the fundraising purse\n    // and the ledger to track donations made.\n    runtime::call_contract::<()>(contract_hash, ENTRY_POINT_INIT, runtime_args! {})\n\n')),(0,o.kt)("p",null,"Usually, these contracts are upgradable with the ability to add new ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/latest/casper_types/contracts/type.ContractVersion.html"},"versions"),". To add a new contract version, you will need the access URef to the contract package. This can be accomplished by passing the ",(0,o.kt)("inlineCode",{parentName:"p"},'Some("fundraiser_access_uref".to_string())')," argument to the ",(0,o.kt)("inlineCode",{parentName:"p"},"new_method")," contract. If you want to prevent any upgrades to a contract, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"new_locked_contract")," method to create the contract inside the call function."),(0,o.kt)("h4",{id:"locked-contracts"},"Locked Contracts"),(0,o.kt)("p",null,"Locked contracts cannot contain other ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/latest/casper_types/contracts/type.ContractVersion.html"},"versions")," in the same contract package; thus, they cannot be upgraded. In this scenario, the Casper execution engine will create a contract package, add a contract to that package and prevent any further upgrades to the contract. Use locked contracts when you need to ensure high security and will not require updates to your contract."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"\npub fn new_locked_contract(\n    entry_points: EntryPoints,\n    named_keys: Option<NamedKeys>,\n    hash_name: Option<String>,\n    uref_name: Option<String>,\n) -> (ContractHash, ContractVersion) {\n    create_contract(entry_points, named_keys, hash_name, uref_name, true)\n}\n\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"entry_points")," - The set of entry points defined inside the smart contract."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"named_keys")," - Any ",(0,o.kt)("a",{parentName:"li",href:"https://docs.rs/casper-types/latest/casper_types/contracts/type.NamedKeys.html"},"named-key")," pairs for the contract."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"hash_name")," - Contract hash value. Puts ",(0,o.kt)("a",{parentName:"li",href:"https://docs.rs/casper-types/latest/casper_types/contracts/struct.ContractHash.html"},"contractHash")," in the current context's named keys under ",(0,o.kt)("inlineCode",{parentName:"li"},"hash_name"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"uref_name")," - Access URef value. Puts access_uref in the current context's named keys under ",(0,o.kt)("inlineCode",{parentName:"li"},"uref_name"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": The current context is the context of the person who initiated the ",(0,o.kt)("inlineCode",{parentName:"p"},"call")," function, usually an account."),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Create the ",(0,o.kt)("inlineCode",{parentName:"li"},"NamedKeys"),".")),(0,o.kt)("p",null,"You can create ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/latest/casper_types/contracts/type.NamedKeys.html"},(0,o.kt)("inlineCode",{parentName:"a"},"NamedKeys"))," as the last step to store any record or value as needed. Generally, ",(0,o.kt)("inlineCode",{parentName:"p"},"Contract_Hash")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Contract_Version")," are saved as ",(0,o.kt)("inlineCode",{parentName:"p"},"NamedKeys"),", but you are not limited to these values."),(0,o.kt)("h2",{id:"whats-next"},"What's Next?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Learn to ",(0,o.kt)("a",{parentName:"li",href:"dapp-dev-guide/writing-contracts/testing"},"test your contract")),(0,o.kt)("li",{parentName:"ul"},"Learn to ",(0,o.kt)("a",{parentName:"li",href:"/dapp-dev-guide/writing-contracts/installing-contracts"},"install a contract and query global state")," with the Casper command-line client")))}h.isMDXComponent=!0}}]);