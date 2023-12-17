

# Project 2 solution

<a href="https://stackblitz.com/edit/dom-project-chaiaurcode-8fqn7y">FULL PROJECT</a>

```


!-- Projects realted to DOM -->

Whole project is on the stackblitz.com and the code provided here is 
just the JavaScript based solution to the problem 
refer the website and the forked project for more clear and better understanding 
this is the solution for BMI generator problem>


JavaScript PRO_2 SOLUTION

const form = document.querySelector('form');

// this will provide you with an empty value
// const height = parseInt(document.querySelector("#height").value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid input ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid input ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});

```
