const { Worker } = require('worker_threads');

const worker = new Worker(`
const { parentPort } = require('worker_threads');
parentPort.once('message',
    message => parentPort.postMessage({ pong: message }));  
`, { eval: true });
worker.on('message', message => console.log(message));      
worker.postMessage('ping'); 

const w1 = new Worker(`console.log('It is me, your worker')`, {eval: true})

let context = {i: 0}
for (k=0; k < 100; k++) {
  new Worker(`console.log('context.i: ' + context.i)`, {eval: true})
}
