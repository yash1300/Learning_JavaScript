// let myName = "yash     "
// let mychannel = "suiii     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.yash = function(){
    console.log(`yash is present in all objects`);
}

Array.prototype.heyYash = function(){
    console.log(`Yash says hello`);
}

// heroPower.Yash()
// myHeros.Yash()
// myHeros.heyYash()
// heroPower.heyYash()

// inheritance

const User = {
    name: "yash",
    email: "yash@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Ronaldoo SIUUUU     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()