const fs = require('fs');

const content=`Node.js Architecture

1. Event-Driven: Node.js operates on an event-driven architecture, where an event loop handles asynchronous operations.

2. Non-Blocking I/O: Node.js uses a non-blocking I/O model that allows it to process multiple requests simultaneously without waiting for previous requests to complete.

3. Single-Threaded: Node.js uses a single-threaded model for event looping while delegating heavy tasks to worker threads as needed.

4. V8 Engine: Node.js uses the V8 JavaScript engine to execute JavaScript code with high performance.

5. Module-Based: Node.js organizes functionality into modules for better structure and reusability.
`

//Question No - 2
// Write content to 'nodejs_architecture.txt'
fs.writeFile('nodejs_architecture.txt', content, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
    console.log('File created and content written successfully!');
});

