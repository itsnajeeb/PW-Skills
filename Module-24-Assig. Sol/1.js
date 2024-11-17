//Write a function called "addNumbers" that takes two numbers as arguments and returns their sum. Call the function before it is declared to demonstrate hoisting
console.log(addNumbers(4,10));


//function declaration 
function addNumbers(a,b){
    return a+b;
}
//Hoisting
//1. In JavaScript, function declarations are hoisted to the top of their scope. This means the function can be called before it is defined in the code.

//2. Only the declaration is hoisted, not the invocation.

//3. The function addNumbers can be safely invoked before its declaration because JavaScript's engine processes the declaration phase first, making the function available for use.



