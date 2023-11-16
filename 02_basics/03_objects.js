// there are 2 ways to declare a object
// singleton method using createobejct 

// object literals

const mySym = Symbol('Keys') // syntax to declare a symbol

const new_obj = {
    name: 'Yash',
    fullname: 'Yash Vishwakarma',
    [mySym]: 'my keys',  // syntax to declare a symbol in object **imp**
    age: 18,
    email: 'evyash03@gmial.com',
    contact: 8873093710247,
    isloggedin: false,
    lastlogin: ['sunday', 'wednesday']

}

console.log(new_obj.name); //  (same)    console.log(new)obj['name']  
console.log(new_obj.email);
console.log(new_obj[mySym]);

// console.log(new_obj);

// if you want to lock the data then

new_obj.email['yash@google.com']
Object.freeze(new_obj)
new_obj.email['yash@mss.com']
console.log(new_obj);

// using a function in object  

new_obj.greeting = function(){
    console.log("Hello new object");
} // this will print only hello new object

new_obj.greet = function(){
    console.log(`Hello new object,${this.name}`);
} // this will print with name

console.log(new_obj.greet());
console.log(new_obj.greeting());