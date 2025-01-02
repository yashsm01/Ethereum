const path = require("path");
const fs = require("fs");
const solc = require("solc"); // use solc to compile the contract

const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol");
const source = fs.readFileSync(inboxPath, "utf8");

let x = solc.compile(source, 1); // 1 is the number of contracts we want to compile
console.log(x);
