// Operations in JS

let value = 69
let NegValue = -value

console.log(NegValue)

console.log(2+2,2_2,2*2,2/2,3%2,2**3)


// Increment in JS 
let x = 3;
const y = x++; // prefix increment (substitute then increment original value)

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;  // suffix increment (increment in substituted value)

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"


// Compsrison 

// basics are ==, <, >, <=, >=, !=  all these dont check the datatypes

// for strict checking in JS === 
//source mdn JS notes


console.log("2" === 2); // in this it will also check the datatype
// expt o/p: False

console.log("2" == 2);  // expt o/p: true
console.log(null > 0);  // expt o/p: false
console.log(null >= 0); // expt o/p: true