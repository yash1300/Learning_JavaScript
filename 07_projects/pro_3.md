

# Project 3



```

JAVASCRIPT PRO_3

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