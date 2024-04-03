// In hoisting if we declare a function on the top of the line or very last of the line 
// "function" method works very ease but arrow function does not work because its hoisting 
// if i giving argument in a variable and the variable is under the declare arugument then its give error

console.log(sum(32, 13));

function sum(a, b) {
  return a + b;
}

// let a = 12 hoisting

// hoisting is not working in Arrow function

arrowFun("Gopal");


let arrowFun = (a) => console.log("hi " + a);


