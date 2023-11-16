// ARRAY in JavaScript

const heros = ['shaktimaan', 'ironman', 'spiderman']
console.log(heros);
console.log(heros[1]);
console.log(heros[2][1]);

// also there are many methods related to array

heros.push(3)
console.log(heros);
heros.pop()
console.log(heros);
heros.unshift(9)  // this enters the value at the start of the array
console.log(heros);


const new_arr = [0,12,3,4,5,6,7]
const random = new_arr.join()  // this converts the array elemnt datatype to string
console.log(new_arr);
console.log(random);
console.log(typeof random)

// Slice and splice


// slice: in this it acts same as range in python
// returns the elements between the range
// no changes in the original array 
const n1 = new_arr.slice(1,4)
console.log('A ', n1); 
console.log(new_arr);


// in splice it returns the value of the range including the upper limit
// and also changes the original array by popping this elements 
const n2 = new_arr.splice(1,4)
console.log('B ', n2);
console.log(new_arr);   