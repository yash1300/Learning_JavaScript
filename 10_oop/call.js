function setUserName (username){
    this.username = username
}

function createUser (username, email, password){
    setUserName.call(this, username)
    this.email = email
    this.password = password
}

const neww = new createUser('yash', 'yash@fb.com', '3452')
console.log(neww);