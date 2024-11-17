//Create a BankAccount class in JavaScript using Object-Oriented Programming (OOP) principles. The class should have methods for depositing, withdrawing, and checking the account balance. Ensure that account balances cannot go below zero and that both deposit and withdrawal amounts must be positive.

class BankAccount {
    constructor(owner, initialBalance = 0) {
        this.owner = owner; // Account owner's name
        this.balance = initialBalance; // Initial account balance (default is 0)
    }

    // Method to deposit money into the account
    deposit(amount) {
        if (amount <= 0) {
            console.log("Deposit amount must be positive.");
            return;
        }
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }

    // Method to withdraw money from the account
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Withdrawal amount must be positive.");
            return;
        }
        if (amount > this.balance) {
            console.log("Insufficient funds. Withdrawal denied.");
            return;
        }
        this.balance -= amount;
        console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
    }

    // Method to check the current account balance
    getBalance() {
        console.log(`Current balance: $${this.balance}`);
        return this.balance;
    }
}

// Example usage:
const account = new BankAccount("Alice", 100); // Creating an account with an initial balance of $100

account.getBalance(); // Check balance
account.deposit(50);  // Deposit $50
account.withdraw(30); // Withdraw $30
account.withdraw(150); // Try to withdraw more than the current balance
account.deposit(-20); // Invalid deposit
account.withdraw(-10); // Invalid withdrawal


