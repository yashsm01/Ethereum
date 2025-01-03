// const assert = require("assert");
// const ganache = require("ganache");
// const { Web3 } = require("web3");
// const web3 = new Web3(ganache.provider());

// // //Promise-based approach
// // beforeEach(() => {
// //   // Get a list of all accounts
// //   web3.eth.getAccounts().then((fetchedAccounts) => {
// //     //getAccounts is a function that returns a list of accounts
// //     //web3.eth is a module that provides a set of APIs to interact with the Ethereum blockchain
// //     console.log(fetchedAccounts);
// //   });
// //   // Use one of those accounts to deploy
// //   // the contract
// // });

// // describe("Inbox", () => {
// //   it("deploys a contract", () => {});
// // });

// //Async-await approach
// let accounts;
// beforeEach(async () => {
//   accounts = await web3.eth.getAccounts();
// });

// describe("Inbox", () => {
//   it("deploys a contract", () => {
//     console.log(accounts);
//   });
// });
