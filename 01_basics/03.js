// Conversion Operations

let score = 33

console.log(typeof score)

// this is used when we need to type cast any datatype
// there are some exceptions too where a string can be converted into number but the 
// value it will store or show would be NaN (not a number)

let name = 'yash'
let sui = Number(name)
console.log(sui)
console.log(typeof sui)

// conversion from 1 to boolean value
let loggedin = true
let login = Boolean(loggedin)
console.log(login)
console.log(typeof(login))  // 1 >> true  0 >> false
