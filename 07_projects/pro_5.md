

# Project 5 solution


```

Whole project is on the stackblitz.com and the code provided here is 
just the JavaScript based solution to the problem 
refer the website and the forked project for more clear and better understanding 
this is the solution for problem 5


JavaScript PRO_5 SOLUTION

const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});

```
