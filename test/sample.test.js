// const assert = require("assert"); //used to make assertions
// //assert is a built-in Node.js module that provides a simple set of assertion tests that can be used to test invariants.
// const ganache = require("ganache"); //local ethereum test network
// const { Web3 } = require("web3"); //constructor function to create instances of web3

// const web3 = new Web3(ganache.provider()); //instance of web3

// class Car {
//   park() {
//     return "stopped";
//   }

//   drive() {
//     return "wroom";
//   }
// }

// let car; //variable to store the instance of Car
// beforeEach(() => {
//   //beforeEach is a global function that is used to run some code before each test case
//   //create a new instance of Car
//   car = new Car();
// });

// describe("Car", () => {
//   // it is a global function that is used to define a test case
//   it("can park", () => {
//     //test case
//     //assertion means to check if the value is equal to the expected value
//     assert.equal(car.park(), "stopped");
//   });

//   it("car drive", () => {
//     assert.equal(car.drive(), "wroom");
//   });
// });
