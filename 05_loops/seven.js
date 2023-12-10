const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const nums = myNumbers.map( (num) => num+10) // using single map function

const nums = myNumbers
.map( (num) => num*10)  // output(1) 
.map( (num) => num+1)  // uses output(1) as input and gives output(2)
.filter( (num) => num>=40)  // uses output(2) as input and gives output

console.log(nums);