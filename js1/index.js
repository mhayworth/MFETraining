console.log("hello from index.js");

//const = final
const balance = 100;
const account = "Michael";

//separate with comma, automatic unpacks
console.log(balance, account);

let mutableBalance = 100;
mutableBalance = 200;
console.log(mutableBalance);

let deposit = prompt("deposit amount:");
mutableBalance += parseInt(deposit);
console.log("you have deposited", deposit, "balance is now", mutableBalance);