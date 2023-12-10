const myObject = {
    js : 'JavaScript',
    cpp : 'C++',
    rb : 'ruby',
    py : 'python',
    swift : 'swift by apple' 
}

for (const key in myObject) {
    console.log(`${key} is shortcut for ${myObject[key]}`);
}