{
    //pure JS
    let transaction = {
        description: "Deposit",
        amount: 23,
        date: new Date()
    };

    let myObj = {
        foo: "bar",
        description: "Deposit",
        amount: 23,
        date: new Date()
    }

    console.log(transaction);

    //with TS
    type TransactionType = {
        description?: string, //
        amount: number,
        date: Date
    };

    //same as type, not preferred
    interface TransactionTypeI {
        description: string,
        amount: number,
        date: Date
    };

    const transaction1: TransactionType = {
        description: "Deposit",
        amount: 23,
        date: new Date(),
    };

    const transaction2: TransactionType = transaction1; //this is allowed, because the var names map 1:1


    //pure JS
    const jsArray = ["can", "have", "any", "type", 1, ,true, null, {}];

    //with TS
    const numberOrStringArray: (number|string)[] = [1, 2, 3, "val"]
    const transactionArray: TransactionType[] = [{description:"a", amount:23, date:new Date()}, transaction2, transaction, myObj]
    console.log(transactionArray);

    //exercise
    type UserType = {
        name: string,
        age: number,
        isLoggedIn?: boolean
    };

    const user1: UserType = {
        name: "Michael",
        age: 22,
        isLoggedIn: true
    };
    
    const user2: UserType = {
        name: "Bob",
        age: 50,
        isLoggedIn: false
    };

    const user1Copy = user1 // this will make a reference copy
    const user3 = {user1} //is the same as {user1: user1} will not be the same Type

    //for a value copy, use:
    const user4: UserType = {...user1, age: 35} //will copy all values but override age
    console.log("user4", user4);

    //to pull out individual values, use:
    const name = 1;
    const {name: tempName, age: tempAge /*must exactly match fields from Type*/} = user1 

    console.log(user1.age, user2.age);

    const userArray: UserType[] = [user1, user2, {name: "Alice", age: 43}]
    console.log(userArray);
    console.log(userArray[0]);
    console.log(userArray[1].name);
    
    const transactionArea: HTMLDivElement = document.getElementById("transactions") as HTMLDivElement;
    const el1 = `<li>${transaction1.date}, ${transaction1.description}, ${transaction1.amount}</li>`
    const el2 = `<li>${transaction2.date}, ${transaction2.description}, ${transaction2.amount}</li>`
    const ul1 = `<ul>${el1}${el2}</ul>`

    transactionArea.innerHTML = ul1


    const logInUser = (user: UserType): void => {
        user.isLoggedIn = true;
        const userInfoBody: HTMLDivElement = document.getElementById("user-info") as HTMLDivElement;
        userInfoBody.innerHTML = `<h1>Welcome</h1>` + `<p>${user1.name} is ${user1.age} years old.</p>`;
    }


    const htmlBody: HTMLBodyElement = document.getElementsByTagName("body")[0] as HTMLBodyElement;
    user1.isLoggedIn = true;
    if (!user1.isLoggedIn) {
        htmlBody.innerHTML = `<div><p>User must be logged in to see transactions</p><button>Log In</button></div>`
    } else {
        const userInfoBody: HTMLDivElement = document.getElementById("user-info") as HTMLDivElement;
        userInfoBody.innerHTML = `<p>${user1.name} is ${user1.age} years old.</p>`
    }

    //2 ways to do functions:
    //old way
    function sayHello(): void {
        console.log("hello");
    }
    sayHello();

    //new way, `this` keyword works
    const sayHelloArrow = (): void => {
        console.log("hello from arrow");
    }
    sayHelloArrow();

    let userBalance: number = 0;
    const processTransaction = (transaction: TransactionType): number => {
        console.log(userBalance);
        return (userBalance + transaction.amount);
    }


    userBalance = processTransaction(transaction1);
    console.log(userBalance);
    
    const 
}