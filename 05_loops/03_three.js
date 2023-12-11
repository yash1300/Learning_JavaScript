// for of

const arr = [1,3,4,6,7,8]
for (const num of arr) {
    //console.log(num);
}

const greetings = 'hello everyone how are you?'
for (const greet of greetings) {
    //console.log(`each char in greeting is: ${greet}`);
    
}

//MAPS  (dictionary from python)

const map = new Map()
map.set('IN','INDIA')
map.set('USA','AMERICA')
console.log(map);

for (const j of map) {
    console.log(`these are the key and pair stored in this variable: ${j}`);
    console.log('--------------------------------------');
}
for (const [key, value] of map) {
    console.log(`these are the values in the map: ${value}`);
    console.log(`these are the keys in the map: ${key}`);
    console.log('--------------------------------------');
}
