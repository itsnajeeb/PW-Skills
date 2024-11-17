//Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign them values and log their values to the console before and after they are declared to demonstrate variable hoisting
console.log("Value of a is : ",a);
console.log("Value of b is : ",b);
console.log("Value of c is : ",c);

{
    let a=10;
    var b=20;
    const c=30;
}
console.log("Value of a is : ",a);
console.log("Value of b is : ",b);
console.log("Value of c is : ",c);

//Variables declared with var are hoisted to the top of their scope and initialized with undefined.

//When we log var Variable before its declaration, we see undefined.

//Variables declared with let and const are also hoisted to the top of their block scope, but they are not initialized.

//Accessing them before the declaration results in a ReferenceError because they are in the temporal dead zone (TDZ) until the line of code where they are declared and initialized is executed.
