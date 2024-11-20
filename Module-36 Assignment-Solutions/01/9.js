const EventEmitter = require('events');  // Import the events module

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Define the event handler for the 'subscribe' event
function onSubscribe() {
    console.log('User has subscribed!');
}

// Attach the event handler to the 'subscribe' event
eventEmitter.on('subscribe', onSubscribe);

// Emit the 'subscribe' event (handler will be triggered)
console.log('First subscription event:');
eventEmitter.emit('subscribe');  // Output: User has subscribed!

// Remove the event handler
eventEmitter.removeListener('subscribe', onSubscribe);

// Emit the 'subscribe' event again (handler will NOT be triggered)
console.log('Second subscription event after removal:');
eventEmitter.emit('subscribe');  // No output, handler is removed
