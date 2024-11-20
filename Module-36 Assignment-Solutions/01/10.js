const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Check the default maximum listeners (before setting it)
console.log(`Default maximum listeners: ${eventEmitter.getMaxListeners()}`);

// Set the maximum number of listeners to 5
eventEmitter.setMaxListeners(5);

// Add multiple listeners for the 'subscribe' event
for (let i = 1; i <= 6; i++) {
    eventEmitter.on('subscribe', () => {
        console.log(`User has subscribed - Listener ${i}`);
    });
}

// Emit the event
eventEmitter.emit('subscribe');
