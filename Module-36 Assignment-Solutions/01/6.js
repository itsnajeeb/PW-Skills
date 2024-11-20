const os = require('os');

// Get the OS name
const osName = os.type(); // Returns the OS name (e.g., 'Linux', 'Darwin', 'Windows_NT')

// Get the OS release version
const osRelease = os.release(); // Returns the release version of the OS

// Print the OS name and release version
console.log(`Operating System: ${osName}`);
console.log(`OS Release Version: ${osRelease}`);
