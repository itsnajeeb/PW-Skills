// Function to generate a random password
function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

    let characters = "";
    if (includeUppercase) characters += uppercase;
    if (includeLowercase) characters += lowercase;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    if (characters.length === 0) return "Select at least one option";

    let password = "";
    for (let i = 0; i < length; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }
    return password;
}

// Generate button functionality
document.getElementById("generateBtn").addEventListener("click", () => {
    const length = parseInt(document.getElementById("length").value);
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeLowercase = document.getElementById("lowercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;

    const password = generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
    document.getElementById("passwordDisplay").value = password;
});

// Copy to clipboard functionality
document.getElementById("copyBtn").addEventListener("click", () => {
    const passwordDisplay = document.getElementById("passwordDisplay");
    passwordDisplay.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
});
