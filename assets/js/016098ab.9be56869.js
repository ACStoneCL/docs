"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8354],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=o,k=d["".concat(c,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1359:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),i=n(4996),l=["components"],c={},s="Prerequisites",p={unversionedId:"workflow/setup",id:"workflow/setup",title:"Prerequisites",description:"This section explains how to fulfill the prerequisites needed to interact with a Casper Network.",source:"@site/source/docs/casper/workflow/setup.md",sourceDirName:"workflow",slug:"/workflow/setup",permalink:"/workflow/setup",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/workflow/setup.md",tags:[],version:"current",frontMatter:{},sidebar:"workflow",previous:{title:"Funding Testnet Accounts",permalink:"/workflow/testnet-faucet"},next:{title:"Querying the Network",permalink:"/workflow/querying"}},u={},d=[{value:"Casper Command-line Client",id:"the-casper-command-line-client",level:2},{value:"Alternative Installation Methods",id:"alternative-installation",level:3},{value:"Debian / Ubuntu",id:"debian--ubuntu",level:4},{value:"Red Hat / CentOS",id:"red-hat--centos",level:4},{value:"Building the Client from Source",id:"building-the-client-from-source",level:2},{value:"Setting up an Account",id:"setting-up-an-account",level:2},{value:"Creating an Account",id:"creating-an-account",level:2},{value:"Option 1: Key generation using the Casper client",id:"option-1-key-generation-using-the-casper-client",level:3},{value:"Option 2: Key generation using a Block Explorer",id:"option-2-key-generation-using-a-block-explorer",level:3},{value:"Fund your Account",id:"fund-your-account",level:2},{value:"Acquiring a Node Address from the Network",id:"acquire-node-address-from-network-peers",level:2}],h={toc:d};function k(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"This section explains how to fulfill the prerequisites needed to interact with a Casper Network."),(0,r.kt)("p",null,"This section covers:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installing the official Casper command-line client"),(0,r.kt)("li",{parentName:"ol"},"Setting up an account on a Casper Network"),(0,r.kt)("li",{parentName:"ol"},"Acquiring the IP address of a peer on the official Testnet or Mainnet")),(0,r.kt)("h2",{id:"the-casper-command-line-client"},"Casper Command-line Client"),(0,r.kt)("p",null,"You can find the default Casper client on ",(0,r.kt)("a",{parentName:"p",href:"https://crates.io/crates/casper-client"},"crates.io"),". This client communicates with the network to transmit your deployments."),(0,r.kt)("p",null,"Run the commands below to install the Casper client on most flavors of Linux and macOS. You should have ",(0,r.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"Rust")," installed, otherwise check the ",(0,r.kt)("a",{parentName:"p",href:"#alternative-installation"},"alternative installation methods")," below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install casper-client\n")),(0,r.kt)("p",null,"The Casper client can print out ",(0,r.kt)("em",{parentName:"p"},"help")," information, which provides an up-to-date list of supported commands. To do so, use the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client --help\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Important"),": For each command, you can use ",(0,r.kt)("em",{parentName:"p"},"help")," to get the most up-to-date arguments and descriptions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client <command> --help\n")),(0,r.kt)("h3",{id:"alternative-installation"},"Alternative Installation Methods"),(0,r.kt)("h4",{id:"debian--ubuntu"},"Debian / Ubuntu"),(0,r.kt)("p",null,"Navigate to ",(0,r.kt)("a",{parentName:"p",href:"https://repo.casperlabs.io/"},"https://repo.casperlabs.io/")," and follow the instructions compatible with your distribution."),(0,r.kt)("h4",{id:"red-hat--centos"},"Red Hat / CentOS"),(0,r.kt)("p",null,"Head to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/casper-client-rs/releases"},"GitHub")," and download the ",(0,r.kt)("inlineCode",{parentName:"p"},".rpm")," file for the latest client release."),(0,r.kt)("p",null,"Run the following command by replacing the file's name with the one you downloaded."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo yum install casper-client-x-x-x*.rpm\n")),(0,r.kt)("p",null,"In RHEL 5 and previous versions, you need to use the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo yum localinstall casper-client-x-x-x*.rpm\n")),(0,r.kt)("p",null,"On Fedora, RedHat 8, and other more recent RPM-based distributions, you can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"dnf")," to install packages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dnf install casper-client-x-x-x*.rpm\n")),(0,r.kt)("h2",{id:"building-the-client-from-source"},"Building the Client from Source"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node/tree/master/client"},"Instructions")),(0,r.kt)("h2",{id:"setting-up-an-account"},"Setting up an Account"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/design/accounts"},"Account")," creation process consists of two steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Creating the account"),(0,r.kt)("li",{parentName:"ol"},"Funding the account")),(0,r.kt)("h2",{id:"creating-an-account"},"Creating an Account"),(0,r.kt)("p",null,"The Casper blockchain uses an on-chain account-based model, uniquely identified by an ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountHash")," derived from a specific ",(0,r.kt)("inlineCode",{parentName:"p"},"PublicKey"),"."),(0,r.kt)("p",null,"By default, a transactional interaction with the blockchain takes the form of a ",(0,r.kt)("inlineCode",{parentName:"p"},"Deploy")," cryptographically signed by the key-pair corresponding to the ",(0,r.kt)("inlineCode",{parentName:"p"},"PublicKey")," used to create the account."),(0,r.kt)("p",null,"Users can create an account through the Casper command-line client. Alternatively, some Casper networks such as the official Testnet and Mainnet provide a browser-based block explorer that allows account creation."),(0,r.kt)("p",null,"Using the Casper command-line client or a block explorer to create an account on the blockchain will also create a cryptographic key-pair. This process generates three files for each account:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A PEM encoded secret key"),(0,r.kt)("li",{parentName:"ul"},"A PEM encoded public key"),(0,r.kt)("li",{parentName:"ul"},"A hexadecimal-encoded string representation of the public key")),(0,r.kt)("p",null,"We recommend saving these files securely."),(0,r.kt)("h3",{id:"option-1-key-generation-using-the-casper-client"},"Option 1: Key generation using the Casper client"),(0,r.kt)("p",null,"This option describes how you can use the Casper command-line client to set up your accounts. For more information about cryptographic keys, see ",(0,r.kt)("a",{parentName:"p",href:"/dapp-dev-guide/keys"},"Working with Cryptographic Keys"),"."),(0,r.kt)("p",null,"Execute the following command to generate your keys:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client keygen .\n")),(0,r.kt)("p",null,"The above command will create three files in the current working directory:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"secret_key.pem")," - PEM encoded secret key"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"public_key.pem")," - PEM encoded public key"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"public_key_hex")," - Hexadecimal-encoded string of the public key")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": Save your keys to a safe place, preferably offline."),(0,r.kt)("p",null,"After generating keys for the account, you may add funds to finish the account creation process."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": Responses from the node contain ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountHashes")," instead of the direct hexadecimal-encoded public key. To view the account hash for a public key, use the account-address option of the client:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client account-address --public-key <path-to-public_key.pem/public-key-hex>\n")),(0,r.kt)("h3",{id:"option-2-key-generation-using-a-block-explorer"},"Option 2: Key generation using a Block Explorer"),(0,r.kt)("p",null,"This option is available on networks that have a block explorer."),(0,r.kt)("p",null,"For instance, on the official Testnet network, the ",(0,r.kt)("a",{parentName:"p",href:"https://testnet.cspr.live/"},"CSPR.live")," block explorer is available, and the following instructions assume you are using it."),(0,r.kt)("p",null,"Start by creating an account using the ",(0,r.kt)("a",{parentName:"p",href:"/workflow/signer-guide"},"Casper Signer"),". The Signer will prompt you to download the secret key of your new account by clicking on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Download")," option. The Signer will download the secret key in a file ending in ",(0,r.kt)("inlineCode",{parentName:"p"},"secret_key.cer"),". We recommend securely storing this file. Note that the account is not stored on chain."),(0,r.kt)("img",{src:(0,i.Z)("/image/workflow/download-prompt.png"),alt:"Signer Secret Key Download Prompt",width:"200"}),(0,r.kt)("p",null,"The Signer does not allow you to download the corresponding public key and hexadecimal representation of the public key. But, you can view them if you click the account details."),(0,r.kt)("img",{src:(0,i.Z)("/image/workflow/account-details.png"),alt:"Signer Account Details",width:"200",class:"inline-img"}),(0,r.kt)("p",null,"For ",(0,r.kt)("a",{parentName:"p",href:"/dapp-dev-guide/keys#eddsa-keys"},"ed25519")," keys, you can generate the ",(0,r.kt)("inlineCode",{parentName:"p"},"public_key.pem")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"public_key_hex")," using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node/wiki/ed25519-public-keys-from-secret_key.pem"},"these commands"),"."),(0,r.kt)("h2",{id:"fund-your-account"},"Fund your Account"),(0,r.kt)("p",null,"After generating the cryptographic key-pair for the account, you must then fund the account to create it on chain."),(0,r.kt)("p",null,"In Testnet, you can fund the account by using the ",(0,r.kt)("strong",{parentName:"p"},"Request tokens")," button on the ",(0,r.kt)("a",{parentName:"p",href:"https://testnet.cspr.live/tools/faucet"},"Faucet Page")," to receive tokens."),(0,r.kt)("p",null,"In Mainnet, a pre-existing account will have to transfer CSPR tokens to finalize the process of setting up an account. The ",(0,r.kt)("em",{parentName:"p"},"Source")," account needs to transfer CSPR tokens to the hexadecimal-encoded public key of the ",(0,r.kt)("em",{parentName:"p"},"Target")," account. This transfer will automatically create the ",(0,r.kt)("em",{parentName:"p"},"Target")," account if it does not exist. Currently, this is the only way to create an account on Mainnet."),(0,r.kt)("h2",{id:"acquire-node-address-from-network-peers"},"Acquiring a Node Address from the Network"),(0,r.kt)("p",null,"Clients can interact with a node on the blockchain via requests sent to that node's JSON-RPC endpoint, ",(0,r.kt)("inlineCode",{parentName:"p"},"http://<node-ip-address>:7777")," by default."),(0,r.kt)("p",null,"The node address is the IP of a peer node."),(0,r.kt)("p",null,"Both the official Testnet and Mainnet provide block explorers that list the IP addresses of nodes on their respective networks."),(0,r.kt)("p",null,"You can get the ",(0,r.kt)("inlineCode",{parentName:"p"},"node-ip-address")," of a node on the network by visiting the following block explorers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://testnet.cspr.live/tools/peers"},"Peers")," on Testnet"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cspr.live/tools/peers"},"Peers")," on Mainnet")),(0,r.kt)("p",null,"You will see a list of peers, and you can select the IP of any peer on the list."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": If the selected peer is unresponsive, pick a different peer and try again."))}k.isMDXComponent=!0}}]);