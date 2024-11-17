//Write a function that takes two numbers as arguments and returns their sum. Declare a variable inside the function using the var keyword and log its value to the console before it is assigned a value to demonstrate variable hoisting

function addNumbers(a,b){
    var x;
    console.log("value of x : ",x);
    return a+b;    
}
addNumbers(10,20);
//VARIABLE HOISTING :- 
//1. When you declare a variable using the var keyword inside a function, the variable is hoisted to the top of its function scope.

//2. This means the variable is known to exist throughout the function, but its value remains undefined until the assignment line is executed.