<!-- Projects realted to DOM -->

<!-- Whole project is on the stackblitz.com and the code provided here is 
just the JavaScript based solution to the problem 
refer the website and the forked project for more clear and better understanding 
this is the solution for color changing problem-->

# Project 1

```
JAVASCRIPT PRO_1

const buttons = document.querySelectorAll(".button")
// console.log("buttons")
const body = document.querySelector("body")

buttons.forEach(function (button){
  console.log(button)
  button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)
    if  (e.target.id == 'grey'){
      body.style.backgroundColor = e.target.id 
    }
    if  (e.target.id == 'white'){
      body.style.backgroundColor = e.target.id 
    }
    if  (e.target.id == 'blue'){
      body.style.backgroundColor = e.target.id 
    }
    if  (e.target.id == 'yellow'){
      body.style.backgroundColor = e.target.id 
    }
    if  (e.target.id == 'skyblue'){
      body.style.backgroundColor = e.target.id 
    }
  })
})

```