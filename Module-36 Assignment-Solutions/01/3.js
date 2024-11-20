// File to read
const fileName = 'nodejs_architecture.txt';

// Read the content of the file
fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    // Print the content of the file to the console
    console.log('Content of the file:');
    console.log(data);
});