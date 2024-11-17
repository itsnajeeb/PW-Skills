//Create an Inventory system in JavaScript to manage products using prototypes. Implement a Product constructor function that defines the properties of a product such as name, category, price, and stock. Develop an Inventory constructor function that initializes an empty inventory array. Extend the Inventory prototype with a method addProduct that adds a valid Product object to the inventory and logs a confirmation message. Additionally, implement a method deleteProduct that removes a product from the inventory by name and logs whether the deletion was successful.

// Product constructor function
function Product(name, category, price, stock) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.stock = stock;
}

// Inventory constructor function
function Inventory() {
    this.products = []; // Initialize an empty inventory array
}

// Add a method to Inventory prototype to add products
Inventory.prototype.addProduct = function(product) {
    if (product instanceof Product) {
        this.products.push(product);
        console.log(`Product ${product.name} added to inventory.`);
    } else {
        console.log("Invalid product. Product must be an instance of Product.");
    }
};

// Add a method to Inventory prototype to delete a product by name
Inventory.prototype.deleteProduct = function(productName) {
    const productIndex = this.products.findIndex(product => product.name === productName);
    if (productIndex !== -1) {
        this.products.splice(productIndex, 1);
        console.log(`Product ${productName} deleted from inventory.`);
    } else {
        console.log(`Product ${productName} not found in inventory.`);
    }
};

// Example Usage:

// Create a few product instances
const product1 = new Product("Laptop", "Electronics", 1000, 50);
const product2 = new Product("Chair", "Furniture", 150, 200);
const product3 = new Product("Shampoo", "Personal Care", 5, 300);

// Create an inventory instance
const inventory = new Inventory();

// Add products to the inventory
inventory.addProduct(product1);
inventory.addProduct(product2);
inventory.addProduct(product3);

// Log the current inventory
console.log("Current inventory:", inventory.products);

// Delete a product from the inventory
inventory.deleteProduct("Chair");

// Log the updated inventory
console.log("Updated inventory:", inventory.products);

// Try to delete a non-existing product
inventory.deleteProduct("NonExistentProduct");
