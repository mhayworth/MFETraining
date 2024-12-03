var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
{
    //pure JS
    var transaction = {
        description: "Deposit",
        amount: 23,
        date: new Date()
    };
    var myObj = {
        foo: "bar",
        description: "Deposit",
        amount: 23,
        date: new Date()
    };
    console.log(transaction);
    ;
    var transaction1 = {
        description: "Deposit",
        amount: 23,
        date: new Date(),
    };
    var transaction2 = transaction1; //this is allowed, because the var names map 1:1
    //pure JS
    var jsArray = ["can", "have", "any", "type", 1, , true, null, {}];
    //with TS
    var numberOrStringArray = [1, 2, 3, "val"];
    var transactionArray = [{ description: "a", amount: 23, date: new Date() }, transaction2, transaction, myObj];
    console.log(transactionArray);
    var user1_1 = {
        name: "Michael",
        age: 22,
        isLoggedIn: true
    };
    var user2 = {
        name: "Bob",
        age: 50,
        isLoggedIn: false
    };
    var user1Copy = user1_1; // this will make a reference copy
    var user3 = { user1: user1_1 }; //is the same as {user1: user1} will not be the same Type
    //for a value copy, use:
    var user4 = __assign(__assign({}, user1_1), { age: 35 }); //will copy all values but override age
    console.log("user4", user4);
    //to pull out individual values, use:
    var name_1 = 1;
    var tempName = user1_1.name, tempAge = user1_1.age /*must exactly match fields from Type*/;
    console.log(user1_1.age, user2.age);
    var userArray = [user1_1, user2, { name: "Alice", age: 43 }];
    console.log(userArray);
    console.log(userArray[0]);
    console.log(userArray[1].name);
    var transactionArea = document.getElementById("transactions");
    var el1 = "<li>".concat(transaction1.date, ", ").concat(transaction1.description, ", ").concat(transaction1.amount, "</li>");
    var el2 = "<li>".concat(transaction2.date, ", ").concat(transaction2.description, ", ").concat(transaction2.amount, "</li>");
    var ul1 = "<ul>".concat(el1).concat(el2, "</ul>");
    transactionArea.innerHTML = ul1;
    var logInUser = function (user) {
        user.isLoggedIn = true;
        var userInfoBody = document.getElementById("user-info");
        userInfoBody.innerHTML = "<h1>Welcome</h1>" + "<p>".concat(user1_1.name, " is ").concat(user1_1.age, " years old.</p>");
    };
    var htmlBody = document.getElementsByTagName("body")[0];
    user1_1.isLoggedIn = false;
    if (!user1_1.isLoggedIn) {
        htmlBody.innerHTML = "<div><p>User must be logged in to see transactions</p><button>Log In</button></div>";
    }
    else {
        var userInfoBody = document.getElementById("user-info");
        userInfoBody.innerHTML = "<p>".concat(user1_1.name, " is ").concat(user1_1.age, " years old.</p>");
    }
    //2 ways to do functions:
    //old way
    function sayHello() {
        console.log("hello");
    }
    sayHello();
    //new way, `this` keyword works
    var sayHelloArrow = function () {
        console.log("hello from arrow");
    };
    sayHelloArrow();
    var userBalance_1 = 0;
    var processTransaction = function (transaction) {
        console.log(userBalance_1);
        return (userBalance_1 + transaction.amount);
    };
    userBalance_1 = processTransaction(transaction1);
    console.log(userBalance_1);
}
