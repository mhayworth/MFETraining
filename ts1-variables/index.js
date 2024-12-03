{
    console.log("hello from index.js");
    //const = final
    var balance = 100;
    var account = "Michael";
    //separate with comma, automatic unpacks
    console.log(balance, account);
    var mutableBalance = 100;
    mutableBalance = 200;
    console.log(mutableBalance);
    var deposit = Number(prompt("deposit amount:"));
    if (Number.isNaN(deposit)) {
        deposit = 1;
    }
    mutableBalance += deposit;
    console.log("you have deposited", deposit, "balance is now", mutableBalance);
}
