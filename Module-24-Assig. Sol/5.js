//Declare a variable using let inside a block scope and attempt to log its value to the console before it is assigned a value to demonstrate the temporal dead zone.


{
    console.log(x);
    let x=10;
    console.log(x);
}

// The TDZ is the time between the start of the block scope and the point where the variable is declared and initialized.


// Any attempt to access a let or const variable during the TDZ results in a ReferenceError.