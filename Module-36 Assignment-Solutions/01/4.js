
const fs = require('fs');

// File name
const fileName = 'nodejs_architecture.txt';

// Content to append
const additionalContent = `
Advantages of Node.js:

1. Scalability: Node.js can handle a large number of concurrent connections with high throughput, making it suitable for scalable applications.

2. Fast Performance: Thanks to the V8 JavaScript engine, Node.js executes JavaScript code quickly and efficiently.

3. Rich Ecosystem: Node.js has a vast package ecosystem (via npm), providing a wide range of modules to enhance development.

4. Community Support: A large and active community ensures continuous improvements and a plethora of learning resources.

`;

// Append the content to the file
fs.appendFile(fileName, additionalContent, (err) => {
    if (err) {
        console.error('Error appending to the file:', err);
        return;
    }
    console.log('Additional content appended successfully.');

    // Read and print the updated file content
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }
        console.log('Updated file content:');
        console.log(data);
    });
});
