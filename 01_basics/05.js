// In this there is the summary of all the data type along with 
// what would be the return datatype 

// there are 2 main types:  
//  1. Primitive 
// Number => number
// String  => string
// Boolean  => boolean
// null  => object
// undefined  =>  undefined
// Symbol  =>  symbol
// BigInt  =>  bigint

const id = 654165;
const UserID = Symbol("123")
const EmpID = Symbol("123")
// though the symbol value is same but in reality it isnt

console.log(typeof id);
console.log(UserID === EmpID);


// 2.Non primitive
//  Arrays  =>  object
//  Object  =>  object
//  Function  =>  function

const heros = ["ironman", "spiderman", "shaktiman"] // array
console.log(heros);

let myfunction = function(){    // Function
    console.log("suiii");
}
console.log(myfunction);

const my_obj = {        // Object (key value pair)
    Name : "Yash Vishwakarma",
    Age : 19,
}
console.log(my_obj);



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack memory(used in primitive datatypes) and Heap memory(used in non primitive datatypes)
//   (chanegs are made in COPY)                   (chanegs are made in REFERENCE)

let userName = "Yash"
let nickname = userName
nickname = 'suiii'

console.log(userName);
console.log(nickname);

// Stack example  ^^

let userOne = {
    email: "yash@google.com",
    upi: "yash@sbi",
    contact: 35484651,
}

let userTwo = userOne

userTwo.email = "ansh@google.com"
userOne.contact = 6549882

console.log(userOne.email);
console.log(userTwo.contact);

// Heap example ^^