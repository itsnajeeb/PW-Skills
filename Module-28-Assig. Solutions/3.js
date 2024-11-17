//Create a Temperature class in JavaScript that manages both Celsius and Fahrenheit temperatures with getters and setters for each unit, allowing for automatic conversion between the two scales. The class should have an initial state of 0°C and 32°F, and it should validate input values for temperature updates, ensuring they are numeric. When setting the temperature in either Celsius or Fahrenheit, the class should correctly update the corresponding value in the other scale. For example, setting the Celsius temperature to 25°C should automatically update the Fahrenheit temperature to 77°F. Your challenge is to implement the Temperature class following the provided code structure and requirements while ensuring that it handles conversions and input validation accurately.

class Temperature {
    constructor() {
        this._celsius = 0;  // Initial temperature in Celsius
        this._fahrenheit = 32;  // Initial temperature in Fahrenheit (0°C = 32°F)
    }

    // Getter for Celsius
    get celsius() {
        return this._celsius;
    }

    // Setter for Celsius with automatic conversion to Fahrenheit
    set celsius(value) {
        if (isNaN(value)) {
            console.log("Invalid input. Celsius temperature must be a number.");
            return;
        }
        this._celsius = value;
        this._fahrenheit = (value * 9/5) + 32;  // Convert Celsius to Fahrenheit
    }

    // Getter for Fahrenheit
    get fahrenheit() {
        return this._fahrenheit;
    }

    // Setter for Fahrenheit with automatic conversion to Celsius
    set fahrenheit(value) {
        if (isNaN(value)) {
            console.log("Invalid input. Fahrenheit temperature must be a number.");
            return;
        }
        this._fahrenheit = value;
        this._celsius = (value - 32) * 5/9;  // Convert Fahrenheit to Celsius
    }
}

// Example usage:

const temp = new Temperature();

console.log(`Initial Celsius: ${temp.celsius}°C`);
console.log(`Initial Fahrenheit: ${temp.fahrenheit}°F`);

// Setting Celsius and observing the automatic conversion to Fahrenheit
temp.celsius = 25;
console.log(`Updated Celsius: ${temp.celsius}°C`);
console.log(`Converted Fahrenheit: ${temp.fahrenheit}°F`);

// Setting Fahrenheit and observing the automatic conversion to Celsius
temp.fahrenheit = 100;
console.log(`Updated Fahrenheit: ${temp.fahrenheit}°F`);
console.log(`Converted Celsius: ${temp.celsius}°C`);

// Attempting to set an invalid temperature value
temp.celsius = "invalid";  // This should trigger an error message
temp.fahrenheit = "invalid";  // This should also trigger an error message
