//Write a function called "multiplyNumbers" that takes two numbers as arguments and returns their product. Use function expressions to define the function and call the function before it is declared to demonstrate hoisting
console.log(multiplyNumbers(10,20));

let multiplyNumbers= function (a,b){
    return a*b;
}
//HOISTING :-
//1. In a function expression, the function is assigned to a variable. The variable is hoisted to the top of its scope, but its value (the function definition) is not initialized until the code execution reaches the assignment.

//2. When you try to call multiplyNumbers before it is defined, JavaScript knows about the variable multiplyNumbers (due to hoisting), but it does not yet have the function assigned to it. This results in a ReferenceError.