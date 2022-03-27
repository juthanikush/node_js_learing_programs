//Event module

import EventEmitter from 'events';

//Creating class
class MyEmitter extends EventEmitter { }

//creating object
const myEmitter = new MyEmitter();

// //Example 1
// //Register Event Listener
// myEmitter.on('event',()=>{
//     console.log("An Event Occured");
// })

// //Trigger Event
// myEmitter.emit('event');
// myEmitter.emit('event');

//Example 2
//Register Event Listener
myEmitter.once('event',()=>{
    console.log("An Event Occured");
})

//Trigger Event
myEmitter.emit('event');
myEmitter.emit('event');