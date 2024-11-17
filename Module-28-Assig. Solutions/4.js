//Develop a set of classes in JavaScript for calculating the area and perimeter of various shapes. Begin with a base class Shape that provides default methods for area and perimeter calculation and includes subclasses like Circle, Rectangle, and Triangle. Each subclass should inherit from Shape and override the area and perimeter calculation methods to provide accurate results for their respective shapes.

// Base class for all shapes
class Shape {
    // Default methods for area and perimeter (to be overridden by subclasses)
    area() {
        throw "Area method must be implemented by subclass";
    }

    perimeter() {
        throw "Perimeter method must be implemented by subclass";
    }
}

// Circle class inheriting from Shape
class Circle extends Shape {
    constructor(radius) {
        super(); // Call the parent constructor
        this.radius = radius; // Set the radius of the circle
    }

    // Overridden method to calculate the area of the circle
    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    // Overridden method to calculate the perimeter (circumference) of the circle
    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}

// Rectangle class inheriting from Shape
class Rectangle extends Shape {
    constructor(width, height) {
        super(); // Call the parent constructor
        this.width = width;
        this.height = height;
    }

    // Overridden method to calculate the area of the rectangle
    area() {
        return this.width * this.height;
    }

    // Overridden method to calculate the perimeter of the rectangle
    perimeter() {
        return 2 * (this.width + this.height);
    }
}

// Triangle class inheriting from Shape
class Triangle extends Shape {
    constructor(sideA, sideB, sideC) {
        super(); // Call the parent constructor
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }

    // Overridden method to calculate the area of the triangle using Heron's formula
    area() {
        const s = (this.sideA + this.sideB + this.sideC) / 2; // Semi-perimeter
        return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
    }

    // Overridden method to calculate the perimeter of the triangle
    perimeter() {
        return this.sideA + this.sideB + this.sideC;
    }
}

// Example Usage:

// Create a circle with radius 5
const circle = new Circle(5);
console.log("Circle area:", circle.area()); // Should print area of the circle
console.log("Circle perimeter:", circle.perimeter()); // Should print perimeter (circumference) of the circle

// Create a rectangle with width 4 and height 7
const rectangle = new Rectangle(4, 7);
console.log("Rectangle area:", rectangle.area()); // Should print area of the rectangle
console.log("Rectangle perimeter:", rectangle.perimeter()); // Should print perimeter of the rectangle

// Create a triangle with sides 3, 4, and 5
const triangle = new Triangle(3, 4, 5);
console.log("Triangle area:", triangle.area()); // Should print area of the triangle
console.log("Triangle perimeter:", triangle.perimeter()); // Should print perimeter of the triangle
