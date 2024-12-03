{
    let myNum: number = 0;
    let myName: string = "Michael";
    let myBool: boolean = true;

    console.log(typeof(myNum), myNum);
    console.log(typeof(myName), myName);
    console.log(typeof(myBool), myBool);
    
    let greeting: string = "Hello";
    let userName: string = String(prompt("please enter your name:"))
    console.log(`${greeting}, ${userName}. Welcome!`);
    
}