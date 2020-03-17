const Promise = require('promise')
const delay = require('delay')

// object accessed from different async processes in parallel
let context = {i: 0}

// create async functions
let funkMaker = function(i) { 
  return async function(context) { 
    let i = context.i += 1; 
    console.log(`Funk${i} at ${Date.now()}: Incremented argument 'context.i' to: ${context.i}`); 
    await delay(100);
    //return context.i 
    return i 
  } 
}

// create async processes
let funksArr = []; 
for (k=1; k<101; k++) { 
  funksArr.push(funkMaker(k)) 
}

// invoke async processes in parallel
Promise.all(
  funksArr.map(f => f(context))
).then(
  x => console.log(`Promise.all resolved with ${x}`)
).catch(
  e => console.log(`Promise.all raised an error:\n${e}`)
)
