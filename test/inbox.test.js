// Import the necessary modules
const assert = require("assert"); // Assertion library for testing
const ganache = require("ganache"); // Ganache for local Ethereum blockchain
const { Web3 } = require("web3"); // Web3 library for interacting with Ethereum

// Initialize Web3 with the ganache provider
const web3 = new Web3(ganache.provider());

// Import the ABI and bytecode from the compiled contract
const { abi, evm } = require("../compile");

let accounts; // Variable to hold the list of accounts
let inbox; // Variable to hold the deployed contract instance

// This function runs before each test
beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();

  // Use one of those accounts to deploy the contract
  inbox = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object, arguments: ["Hi there!"] }) // Deploy the contract with initial message
    .send({ from: accounts[0], gas: "1500000" }); // Send the transaction from the first account with specified gas
});

// Describe block for the Inbox contract tests
describe("Inbox", () => {
  // Test case to check if the contract is deployed
  it("deploys a contract", () => {
    assert.ok(inbox.options.address); // Check if the contract has an address
  });
});
