// more about arrays 
// how to join 2 or more arrays

arr1 = ['kohli', 'sharma', 'rahul']
arr2 = ['shami', 'siraj', 'bumrah']

arr3 = arr1.concat(arr2)
console.log(arr3);

//another method to do this is "SPREAD"
arr_best = [...arr1,...arr2] // similarly using 3dots can join many array together
console.log(arr_best);

const s1 = [2,3,5,6,[34,56],56,[3,46,6,[4,56,7,[45,67]]]]
console.log(s1);
console.log("to solve this prblm use .flat");
console.log(s1.flat(Infinity));

console.log(Array.isArray("yash")); // checks if it is array
console.log(Array.from("yash")); // converts to array

let score1 = 150
let score2 = 200
let score3 = 200
console.log(Array.of(score1,score2,score3)); // converts variables to array 