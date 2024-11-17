//Write a function that takes in an array of integers and a callback function, and returns a new array where each element is doubled using the callback.


function processArray(arr, callback) {
    return arr.map(callback);
}

// Callback function to double a number
function doubleNumber(num) {
    return num * 2;
}

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = processArray(numbers, doubleNumber);

console.log(doubledNumbers); 
