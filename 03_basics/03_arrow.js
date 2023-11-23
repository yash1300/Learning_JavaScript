const user = {
    username: 'Yash',
    price: 999,

   // this keyword is used to refer to a particular or current context
   // as in this case it refers to the username in user object

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the system.`);
    }

}
// user.welcomeMessage()
// user.username = 'ansh'
// user.welcomeMessage()

// now about the arrow function in JS
// declaration of arrrow is as follow

// const bank = function() {
//     Fname: 'yash',           // normal function declaration
//     acc_no = 793687,
//     console.log(this);
// }
// bank()

// const bank = () => {
//     Fname: 'yash',           // arrow function declaration
//     acc_no = 793687          // 'this' keyword works same as of normal function
//     console.log(this);
// }

// bank()

// const addtwo = (num1, num2) => {
//     return num1+num2  // when we use {} then return keyword complusory
// }
// console.log(addtwo(2,3))

const addTwo = (num1, num2) => (num1+num2)
console.log(addTwo(2,3));