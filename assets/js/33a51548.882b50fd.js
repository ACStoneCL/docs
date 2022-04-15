"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8544],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,h=m["".concat(i,".").concat(d)]||m[d]||c[d]||s;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<s;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9912:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var a=n(3117),r=n(102),s=(n(7294),n(3905)),l=n(4996),o=["components"],i={},u="Testing Contracts",p={unversionedId:"dapp-dev-guide/testing",id:"dapp-dev-guide/testing",title:"Testing Contracts",description:"As part of the Casper local Rust contract development environment, we provide an in-memory virtual machine and a testing framework against which you can run your contract. You do not need to set up a full node for testing. We provide a testing framework that simulates deploy execution, enables monitoring global state changes using assertions, and confirms a successful deploy of the smart contract.",source:"@site/source/docs/casper/dapp-dev-guide/testing.md",sourceDirName:"dapp-dev-guide",slug:"/dapp-dev-guide/testing",permalink:"/dapp-dev-guide/testing",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/dapp-dev-guide/testing.md",tags:[],version:"current",frontMatter:{},sidebar:"dapp-dev-guide",previous:{title:"AssemblyScript",permalink:"/dapp-dev-guide/writing-contracts/assembly-script"},next:{title:"Local Network Testing",permalink:"/dapp-dev-guide/setup-nctl"}},c={},m=[{value:"Initialize the System and Create a Deploy",id:"initialize-the-system-and-create-a-deploy",level:2},{value:"Define Global Variables and Constants",id:"define-global-variables-and-constants",level:3},{value:"Import Builders and Constants",id:"import-builders-and-constants",level:3},{value:"Create a Deploy Item",id:"create-a-deploy-item",level:3},{value:"Deploy the Smart Contract",id:"deploy-the-smart-contract",level:2},{value:"Create the Builder",id:"create-the-builder",level:3},{value:"Create an Execute Request",id:"create-an-execute-request",level:3},{value:"Deploy the Contract",id:"deploy-the-contract",level:3},{value:"Query and Assert",id:"query-and-assert",level:2},{value:"Pre-Assert the Status",id:"pre-assert-the-status",level:3},{value:"Deploy the Contract",id:"deploy-the-contract-1",level:3},{value:"Post-Assertion to Confirm Deploy",id:"post-assertion-to-confirm-deploy",level:3},{value:"Final Test Sample",id:"final-test-sample",level:2}],d={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"testing-contracts"},"Testing Contracts"),(0,s.kt)("p",null,"As part of the Casper local Rust contract development environment, we provide an in-memory virtual machine and a ",(0,s.kt)("a",{parentName:"p",href:"https://docs.rs/casper-engine-test-support/latest/casper_engine_test_support"},"testing framework")," against which you can run your contract. You do not need to set up a full node for testing. We provide a testing framework that simulates deploy execution, enables monitoring global state changes using assertions, and confirms a successful deploy of the smart contract."),(0,s.kt)("p",null,"Here is the main testing flow:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Initialize the system and create a deploy"),(0,s.kt)("li",{parentName:"ol"},"Execute the deploy, which will call the smart contract"),(0,s.kt)("li",{parentName:"ol"},"Query the context for changes and verify that the result matches the expected values")),(0,s.kt)("p",null,"It is also possible to build scripts with this environment and set up continuous integration for contract code. This environment enables the testing of blockchain-enabled systems from end to end."),(0,s.kt)("h2",{id:"initialize-the-system-and-create-a-deploy"},"Initialize the System and Create a Deploy"),(0,s.kt)("p",null,"The following steps guide you through the initialization of the system and deploy creation."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"#define-global-variables-and-constants"},"Define global variables and constants")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"#import-builders-and-constants"},"Import builders and constants")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"#create-a-deploy-item"},"Create a deploy item"))),(0,s.kt)("h3",{id:"define-global-variables-and-constants"},"Define Global Variables and Constants"),(0,s.kt)("p",null,"You can use global variables and constants in later steps to derive values and create components."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Global Variables and Constants")),(0,s.kt)("p",null,"The framework uses global variables and constants to find the compiled WASM file and to create the deploy."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'use std::path::PathBuf;\nconst MY_ACCOUNT: [u8; 32] = [7u8; 32];\nconst KEY: &str = "my-key-name";\nconst VALUE: &str = "hello world";\nconst RUNTIME_ARG_NAME: &str = "message";\nconst CONTRACT_WASM: &str = "contract.wasm";\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"em"},"KEY"))," and ",(0,s.kt)("em",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"em"},"VALUE"))," : These constants are the global states we are using to test whether the deploy has been executed correctly. KEY acts as the input to the assertion and VALUE acts as the output from the assertion"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"em"},"PathBuff"))," : The contract uses this variable to find the compiled WASM file"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"em"},"RUNTIME_ARG_NAME"))," and ",(0,s.kt)("em",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"em"},"CONTRACT_WASM"))," : Variables used to build the deploy")),(0,s.kt)("h3",{id:"import-builders-and-constants"},"Import Builders and Constants"),(0,s.kt)("p",null,"We derive imports from the dependencies in the Cargo.toml file. If you see problems while importing, fix the dependency settings in the Cargo.toml file."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"use casper_engine_test_support::{\n    DeployItemBuilder, ExecuteRequestBuilder, InMemoryWasmTestBuilder,\n    ARG_AMOUNT, DEFAULT_ACCOUNT_ADDR, DEFAULT_ACCOUNT_INITIAL_BALANCE, DEFAULT_GENESIS_CONFIG, DEFAULT_PAYMENT,  DEFAULT_RUN_GENESIS_REQUEST,\n};\n\nuse casper_types::{\n    account::AccountHash, runtime_args, Key, PublicKey, RuntimeArgs, SecretKey, U512,\n};\n")),(0,s.kt)("h3",{id:"create-a-deploy-item"},"Create a Deploy Item"),(0,s.kt)("p",null,"The testing framework uses the ",(0,s.kt)("inlineCode",{parentName:"p"},"DeployItem")," to derive the ",(0,s.kt)("inlineCode",{parentName:"p"},"ExecuteRequest")," to send to the test contract."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Declaring Local Variables")),(0,s.kt)("p",null,"These are the variables used to construct the ",(0,s.kt)("em",{parentName:"p"},"deploy_item"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"let secret_key = SecretKey::ed25519_from_bytes(MY_ACCOUNT).unwrap();\nlet public_key = PublicKey::from(&secret_key);\nlet account_addr = AccountHash::from(&public_key);\nlet session_code = PathBuf::from(CONTRACT_WASM);\nlet session_args = runtime_args! {\n            RUNTIME_ARG_NAME => VALUE,\n};\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"Variable details"))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"em"},"secret_key"))," and ",(0,s.kt)("em",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"em"},"public_key"))," : Derives the account address"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"em"},"account address"))," : Gets authorization key and location"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"em"},"session_code"))," : Gets the path to your actual contract WASM file on your system"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"em"},"session_args"))," : Gets the values of runtime arguments")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Create Deploy Item")),(0,s.kt)("p",null,"Before deploying the contract in the framework, you need to have a ",(0,s.kt)("inlineCode",{parentName:"p"},"Deploy Item")," to send to the request. ",(0,s.kt)("inlineCode",{parentName:"p"},"DeployItemBuilder")," will directly instantiate the deploy item using associate builder methods."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"let deploy_item = DeployItemBuilder::new()\n    .with_empty_payment_bytes(runtime_args! {ARG_AMOUNT => *DEFAULT_PAYMENT})\n    .with_session_code(session_code, session_args)\n    .with_authorization_keys(&[account_addr])\n    .with_address(account_addr)\n    .build();\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"Constructor methods"))),(0,s.kt)("p",null,"The deploy item contains the following elements:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("em",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"em"},"payment details"))," : This can be standard payments or custom payments. Standard payment is the bare payment amount a user wishes to pay for the deploy. Custom payment comes with payment codes or functions that indicate payments by module bytes"),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"empty_payment_bytes"))," implies the module bytes inside the deploy item's payment part are empty. It directs the framework to use the standard payment contract that is the original amount (DEFAULT_PAYMENT)"))),(0,s.kt)("p",{align:"center"},(0,s.kt)("img",{src:(0,l.Z)("/image/EmptyModuleBytes.png"),width:"300"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("em",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"em"},"session_code"))," : Sets the session code for the deploy using session_code and session_args"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},"PathBuff")," : Helps to find the compiled WASM file in your WASM directory. This is a mutable path with some extended functionalities"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("em",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"em"},"authorization_keys"))," : Sets authorization keys to authorize the deploy. To check the list of keys that authorize the call. See: ",(0,s.kt)("a",{parentName:"p",href:"/design/accounts#accounts-permissions"},"Permissions model"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("em",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"em"},"address"))," : Sets the address of the deploy"))),(0,s.kt)("h2",{id:"deploy-the-smart-contract"},"Deploy the Smart Contract"),(0,s.kt)("p",null,"Follow these steps to deploy the smart contract:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"#create-the-builder"},"Create the builder")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"#create-an-execute-request"},"Create the execute request")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"#deploy-the-contract"},"Deploy the contract"))),(0,s.kt)("h3",{id:"create-the-builder"},"Create the Builder"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"InMemoryWasmTestBuilder")," is the builder for a simple WASM test that uses the state held entirely in memory. It provides methods to simulate deploys to the blockchain array and make queries to whatever state you find in the global state."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"let mut builder = InMemoryWasmTestBuilder::default();\n        builder.run_genesis(&DEFAULT_RUN_GENESIS_REQUEST).commit();\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Genesis")," : ",(0,s.kt)("em",{parentName:"p"},"run_genesis")," call will initialize the blockchain network to get your first block. When you initialize a blockchain network, there needs to be a genesis block as a starting point to the incoming blocks. The subsequent set of deploys will execute after the execution of the genesis block."),(0,s.kt)("h3",{id:"create-an-execute-request"},"Create an Execute Request"),(0,s.kt)("p",null,"After creating the ",(0,s.kt)("inlineCode",{parentName:"p"},"deploy_item"),", wrap it in an ",(0,s.kt)("inlineCode",{parentName:"p"},"ExecuteRequest")," created by the ",(0,s.kt)("inlineCode",{parentName:"p"},"ExecuteRequestBuilder"),"; then, the builder instance will construct the deploy item and return the execute_request."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"let execute_request = ExecuteRequestBuilder::from_deploy_item(deploy_item).build();\n")),(0,s.kt)("h3",{id:"deploy-the-contract"},"Deploy the Contract"),(0,s.kt)("p",null,"InMemoryWasmTestBuilder instance will execute the ",(0,s.kt)("em",{parentName:"p"},"execute_request"),", which carries the deploy details."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"builder.exec(execute_request).expect_success().commit();\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"Builder methods"))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"em"},"commit()"))," - This will process the execution result of the previous ",(0,s.kt)("em",{parentName:"li"},"execute_request")," on the latest post-state hash, which is the hash function's output"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"em"},"expect_success()"))," - This will assert the deploy as a successful execution. If it is not successful, it will crash the test")),(0,s.kt)("h2",{id:"query-and-assert"},"Query and Assert"),(0,s.kt)("p",null,"This is the final step of the test contract execution. In this step, you will create a query result to send to post-assertion, and execute the deploy using the previously created components and finally perform the post-assertion to confirm the expected change on the test contract."),(0,s.kt)("p",null,"Query and assertion steps are as below:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"#pre-assert-the-status"},"Pre-assert the state")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"#deploy-the-contract-1"},"Deploy the contract")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"#post-assertion-to-confirm-deploy"},"Post-assertion to confirm deploy"))),(0,s.kt)("p",null,"The smart contract creates a new value ",(0,s.kt)("em",{parentName:"p"},"hello world")," under the KEY, ",(0,s.kt)("em",{parentName:"p"},"my-key-name"),". You can extract this value from the global state of the blockchain using the ",(0,s.kt)("inlineCode",{parentName:"p"},"query_result"),"."),(0,s.kt)("h3",{id:"pre-assert-the-status"},"Pre-Assert the Status"),(0,s.kt)("p",null,"Pre-assertions are helpful to confirm the existing state has not changed before the test execution. To accomplish this, create a query result using the builder and assert that the result of the query should not be equal to the value of KEY."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"  let result_of_query = builder.query(None, Key::Account(account_addr), &[KEY.to_string()]);\n  assert!(result_of_query.is_err());\n")),(0,s.kt)("p",null,"Method ",(0,s.kt)("inlineCode",{parentName:"p"},"query()")," is to query the state for a stored value, KEY in this sample."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Parameters")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"em"},"maybe_post_state"))," : Not defined in this case"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"em"},"base_key"))," : Contact where you find the named-key - here default address"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"em"},"path"))," : Global KEY constant")),(0,s.kt)("h3",{id:"deploy-the-contract-1"},"Deploy the Contract"),(0,s.kt)("p",null,"Deploy is done by executing the previously created ",(0,s.kt)("inlineCode",{parentName:"p"},"execute_request")," instance."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"builder.exec(execute_request).expect_success().commit();\n")),(0,s.kt)("h3",{id:"post-assertion-to-confirm-deploy"},"Post-Assertion to Confirm Deploy"),(0,s.kt)("p",null,"This will query the post-deploy value and assert for its change."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'  let result_of_query = builder\n            .query(None, Key::Account(account_addr), &[KEY.to_string()])\n            .expect("should be stored value.")\n            .as_cl_value()\n            .expect("should be cl value.")\n            .clone()\n            .into_t::<String>()\n            .expect("should be string.");\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"Builder methods"))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("em",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"em"},"query()"))," : Queries the state for a given value")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("em",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"em"},"expect()"))," : Validates the query which contains the output message. This will unwrap the value; the test will panic and crash if the value can't be unwrapped. The string value inside the argument will output as the reason to crash")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("em",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"em"},"as_cl_value()"))," : Returns a wrapped ",(0,s.kt)("a",{parentName:"p",href:"design/serialization-standard#serialization-standard-values"},"CLValue")," if this is a CLValue variant")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("em",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"em"},"clone()"))," : Breaks the reference to the CLValue so that it will provide brand new CLValue")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("em",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"em"},"Into_t()"))," : Converts the CLValue back to the original type (i.e., a String type in this sample). Note that the ",(0,s.kt)("inlineCode",{parentName:"p"},"expected_value")," is a ",(0,s.kt)("inlineCode",{parentName:"p"},"String")," type lifted to the ",(0,s.kt)("inlineCode",{parentName:"p"},"Value")," type. It is also possible to map ",(0,s.kt)("inlineCode",{parentName:"p"},"returned_value")," to the ",(0,s.kt)("inlineCode",{parentName:"p"},"String")," type"))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Assertion")),(0,s.kt)("p",null,'Assert that the query\'s result matches the expected value; here, the expected value is "hello world".'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"assert_eq!(result_of_query, VALUE);\n")),(0,s.kt)("h2",{id:"final-test-sample"},"Final Test Sample"),(0,s.kt)("p",null,"The code below is the simple test generated by ",(0,s.kt)("a",{parentName:"p",href:"https://crates.io/crates/cargo-casper"},"cargo-casper")," (found in ",(0,s.kt)("inlineCode",{parentName:"p"},"tests/src/integration_tests.rs")," of a project created by the tool)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'#[cfg(test)]\nmod tests {\n   use casper_engine_test_support::{\n        DeployItemBuilder, ExecuteRequestBuilder, InMemoryWasmTestBuilder, ARG_AMOUNT,\n        DEFAULT_ACCOUNT_ADDR, DEFAULT_ACCOUNT_INITIAL_BALANCE, DEFAULT_GENESIS_CONFIG,\n        DEFAULT_PAYMENT, DEFAULT_RUN_GENESIS_REQUEST,\n    };\n    use casper_types::{\n        account::AccountHash, runtime_args, Key, PublicKey, RuntimeArgs, SecretKey, U512,\n    };\n    use std::path::PathBuf;\nconst MY_ACCOUNT: [u8; 32] = [7u8; 32];\n    // Define `KEY` constant to match that in the contract.\n    const KEY: &str = "my-key-name";\n    const VALUE: &str = "hello world";\n    const RUNTIME_ARG_NAME: &str = "message";\n    const CONTRACT_WASM: &str = "contract.wasm";\n#[test]\n    fn should_store_hello_world() {\n        let secret_key = SecretKey::ed25519_from_bytes(MY_ACCOUNT).unwrap();\n        let public_key = PublicKey::from(&secret_key);\n        let account_addr = AccountHash::from(&public_key);\n        let session_code = PathBuf::from(CONTRACT_WASM);\n        let session_args = runtime_args! {\n            RUNTIME_ARG_NAME => VALUE,\n        };\nlet deploy_item = DeployItemBuilder::new()\n            // .with_payment_bytes(module_bytes, args)\n            .with_empty_payment_bytes(runtime_args! {\n                ARG_AMOUNT => *DEFAULT_PAYMENT\n            })\n            .with_session_code(session_code, session_args)\n            .with_authorization_keys(&[account_addr])\n            .with_address(account_addr)\n            .build();\nlet execute_request = ExecuteRequestBuilder::from_deploy_item(deploy_item).build();\nlet mut builder = InMemoryWasmTestBuilder::default();\n        builder.run_genesis(&DEFAULT_RUN_GENESIS_REQUEST).commit();\n// prepare assertions.\n        let result_of_query = builder.query(None, Key::Account(account_addr), &[KEY.to_string()]);\n        assert!(result_of_query.is_err());\n// deploy the contract.\n        builder.exec(execute_request).expect_success().commit();\n// make assertions\n        let result_of_query = builder\n            .query(None, Key::Account(account_addr), &[KEY.to_string()])\n            .expect("should be stored value.")\n            .as_cl_value()\n            .expect("should be cl value.")\n            .clone()\n            .into_t::<String>()\n            .expect("should be string.");\nassert_eq!(result_of_query, VALUE);\n    }\n}\n\nfn main() {\n    panic!("Execute "cargo test" to test the contract, not "cargo run".");\n}\n')),(0,s.kt)("p",null,"You can see the result of the above test in this screen capture:"),(0,s.kt)("p",{align:"center"},(0,s.kt)("img",{src:(0,l.Z)("/image/test-compile-result.png"),width:"700"})))}h.isMDXComponent=!0}}]);