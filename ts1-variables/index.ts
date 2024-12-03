{
    console.log("hello from index.js");

    //const = final
    const balance: number = 100;
    const account: string = "Michael";

    //separate with comma, automatic unpacks
    console.log(balance, account);

    let mutableBalance: number = 100;
    mutableBalance = 200;
    console.log(mutableBalance);

    let deposit: number = Number(prompt("deposit amount:"));
    
    if (Number.isNaN(deposit)) {
        deposit = 1;
    }

    mutableBalance += deposit;
    console.log("you have deposited", deposit, "balance is now", mutableBalance);
}