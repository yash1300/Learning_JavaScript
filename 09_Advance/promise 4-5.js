
// 4. to get any single data from the whole data 


const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({name: "Ronaldo", password: "best", id: '7 SIUUU'})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000);
})

promiseFour.then((user) => {
    console.log(user);
    return user.id
}).then((id) => {
    console.log(id);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log("finally it s either resolved or rejected"))


// 5. 

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({name: "Messi", password: "2nd best", id: '10'})
        } else {
            reject('ERROR: Messi went wrong')
        }
    }, 1000);
})

async function consumepromiseFive (){
    try {
        const response = await promiseFive
        return response
    } catch (error) {
        console.log(error);
    }
} 

consumepromiseFive()



// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);                  // same as below but method is different 
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/yash1300')
.then((response) => {
    return response.json()
})
.then((data) => {                          // same as above but method is different 
    console.log(data);
})
.catch((error) => console.log(error))
