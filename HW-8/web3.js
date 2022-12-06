const Web3 = require('web3')
var web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/eba4b903abec40bb935c5bb9c8d3ee4d"));
const address = "0x8ab5be4b62a42c64a5e832df764769c2c56e21eb";
const ABI = "[\n" +
    "\t{\n" +
    "\t\t\"anonymous\": false,\n" +
    "\t\t\"inputs\": [\n" +
    "\t\t\t{\n" +
    "\t\t\t\t\"indexed\": false,\n" +
    "\t\t\t\t\"name\": \"name\",\n" +
    "\t\t\t\t\"type\": \"string\"\n" +
    "\t\t\t},\n" +
    "\t\t\t{\n" +
    "\t\t\t\t\"indexed\": false,\n" +
    "\t\t\t\t\"name\": \"age\",\n" +
    "\t\t\t\t\"type\": \"uint256\"\n" +
    "\t\t\t}\n" +
    "\t\t],\n" +
    "\t\t\"name\": \"Person\",\n" +
    "\t\t\"type\": \"event\"\n" +
    "\t},\n" +
    "\t{\n" +
    "\t\t\"constant\": false,\n" +
    "\t\t\"inputs\": [\n" +
    "\t\t\t{\n" +
    "\t\t\t\t\"name\": \"_name\",\n" +
    "\t\t\t\t\"type\": \"string\"\n" +
    "\t\t\t},\n" +
    "\t\t\t{\n" +
    "\t\t\t\t\"name\": \"_age\",\n" +
    "\t\t\t\t\"type\": \"uint256\"\n" +
    "\t\t\t}\n" +
    "\t\t],\n" +
    "\t\t\"name\": \"setInfo\",\n" +
    "\t\t\"outputs\": [],\n" +
    "\t\t\"payable\": false,\n" +
    "\t\t\"stateMutability\": \"nonpayable\",\n" +
    "\t\t\"type\": \"function\"\n" +
    "\t},\n" +
    "\t{\n" +
    "\t\t\"constant\": true,\n" +
    "\t\t\"inputs\": [],\n" +
    "\t\t\"name\": \"getInfo\",\n" +
    "\t\t\"outputs\": [\n" +
    "\t\t\t{\n" +
    "\t\t\t\t\"name\": \"\",\n" +
    "\t\t\t\t\"type\": \"string\"\n" +
    "\t\t\t},\n" +
    "\t\t\t{\n" +
    "\t\t\t\t\"name\": \"\",\n" +
    "\t\t\t\t\"type\": \"uint256\"\n" +
    "\t\t\t}\n" +
    "\t\t],\n" +
    "\t\t\"payable\": false,\n" +
    "\t\t\"stateMutability\": \"view\",\n" +
    "\t\t\"type\": \"function\"\n" +
    "\t}\n" +
    "]";

const myContract = new web3.eth.Contract(ABI, address)
myContract.getPastEvents(
    "Person",
    {
        fromBlock: 0,
        toBlock: "latest"
    },
    (error, events) => {
        console.log(events)
    }
);