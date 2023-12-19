
// 1. to make a promise using another variable

const PromiseOne = new Promise(function (resolve, reject){
    setTimeout(() => {
        console.log("Task one is completed");
        resolve()
    }, 1000);
    
})

PromiseOne.then(()=>{
    console.log("async one resolved");
})

// 2. to make a promise without storing in a variable

new Promise(function(resolve, reject){
    console.log('task two is completed')
    resolve()                                // promise two
}).then(function(){
    console.log('async teo resolved');
})


// 3. to take the data using promise recieved from the database

const PromiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({name: 'Yash', Lname: 'Vishwakarma', mail: 'evyash03@gmail.com'})
    }, 1000);
})
PromiseThree.then(function(user){
    console.log((user));
})


