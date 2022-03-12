const EventEmitter = require('events');
const event = new EventEmitter();

 event.on('msg',() => {
     console.log('hello tansen how are you ');

 });

event.on('msg',() => {
    console.log('good morning ');

});

event.on('msg',(port,ms) => {
    console.log(`the code is running in signal port ${port} and it is ${ms}`);

});

 event.emit("msg",200,'success');