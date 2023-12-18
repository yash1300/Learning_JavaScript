

# Project 3



```

Whole project is on the stackblitz.com and the code provided here is 
just the JavaScript based solution to the problem 
refer the website and the forked project for more clear and better understanding 
this is the solution for problem 3


JavaScript PRO_3 SOLUTION

const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);



// const clock = document.getElementById('clock');
// // const clock = document.querySelector('#clock');  same as above

// setInterval(function () {
//   let date = new date();
//   //console.log(date.toLocaleTimeString())
//   clock.innerHTML = date.toLocaleTimeString();
// }, 1000); //1000 refers to 1 sec

```
