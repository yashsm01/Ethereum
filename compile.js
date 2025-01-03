const path = require("path");
const fs = require("fs");
const solc = require("solc"); // Import the Solidity compiler

// Define the path to the Inbox.sol contract file
const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol");
// Read the contents of the Inbox.sol file
const source = fs.readFileSync(inboxPath, "utf8");

// Define the input format for the Solidity compiler
const input = {
  language: "Solidity", // Specify the language as Solidity
  sources: {
    "Inbox.sol": {
      content: source, // Provide the source code of the contract
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"], // Specify that we want to output all parts of the compiled contract
      },
    },
  },
};

// Compile the contract using the Solidity compiler
const output = JSON.parse(solc.compile(JSON.stringify(input)));
console.log(output);
// Check for errors in the compilation output
if (output.errors) {
  output.errors.forEach((err) => {
    console.error(err.formattedMessage);
  });
}

// Extract the compiled contract from the output
const contract = output.contracts["Inbox.sol"].Inbox;

// Export the compiled contract for use in other files
module.exports = contract;
