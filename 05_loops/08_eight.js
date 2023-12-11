// make a pull request to change nine.js to eight.js in 05_loops directory

const NUM = [1,2,3,4]

// acc = accumulator, currval = current value

// using normal function and object

// const total = NUM.reduce(function(acc, currval) {
//     console.log(`current vlaue is ${currval} and accumulator is ${acc}`);
//     return acc + currval
// },0)


// using arrow function

const total = NUM.reduce( (acc,currval) => acc+currval,0 )
// console.log(total);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const price = shoppingCart.reduce( (acc, currval) => acc+currval.price,0 )
console.log(price);