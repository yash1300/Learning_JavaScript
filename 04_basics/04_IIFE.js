//  IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)

function add(num1, num2) {
    return num1 + num2  // normal function
}
// console.log(add(2,3));

(function greet() {  // this is an example of named IIFE
    console.log(`hello everyone welcome to JavaScript`); // this is a IIFE 
})();  
// while writing multiple IIFE
// this ';' is very imp in this or else there would be an error

( (name) => {  // example of unnamed IIFE
    console.log(`${name}, how are you?`);
}) ('yash')