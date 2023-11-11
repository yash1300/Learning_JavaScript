// Nums and maths in JS

const score = 400
console.log(score);
console.log(typeof score);
                              // two methods to define a variable with number datatype
const amt = new Number(6000)
console.log(amt);
console.log(typeof amt);

// methods attached to above things

console.log(amt.toPrecision(2));
console.log(amt.toString());
console.log(amt.toFixed(1));

const hundreds = 1000000
console.log(hundreds);  //  difficult to understand the number or amt 
console.log(hundreds.toLocaleString());  // modifies it with ',' U.S. style
console.log(hundreds.toLocaleString('en-IN')); // modifies it with ',' Indaian style

// +++++++++++++++++++++  MATHS  +++++++++++++++++++++++++++++++++++++

console.log(Math.round(68.9))
// similarly there are many methods in maths module 
console.log(Math.floor(9.87)); // this gives the index number 

console.log(Math.random());// this always provide a random number in range 0 to 1
console.log(Math.random()*10); // for number between 1 to 10

const min = 13 
const max = 26
// below formula will provide me with randomo number between min and max
console.log(Math.floor(Math.random() * (max-min+1))+min); 