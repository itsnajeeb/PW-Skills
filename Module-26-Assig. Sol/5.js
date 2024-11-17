//You need to write a function that takes a name as input and returns a promise that resolves with a greeting message. The function should greet the person using their name, with a message in the format "Hello, {name}!". 
//For example, if the input to the function is "Mithun", the promise should resolve with the string "Hello, Mithun!".

function greetPerson(name) {
    return new Promise((resolve, reject) => {
        if (typeof name === "string" && name.trim() !== "") {
            resolve(`Hello, ${name}!`);
        } else {
            reject("Invalid name. Please provide a valid string.");
        }
    });
}

greetPerson("Mithun")
    .then(message => console.log(message)) 
    .catch(error => console.error(error));
