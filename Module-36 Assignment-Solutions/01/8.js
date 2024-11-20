const EventEmitter = require('events');  // Import the events module

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Define the "subscribe" event
eventEmitter.on('subscribe', () => {
    console.log('User has subscribed!');
});

// Simulate a user subscribing
eventEmitter.emit('subscribe');  // Emit the "subscribe" event
