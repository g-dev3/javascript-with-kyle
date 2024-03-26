function name(name) {
  console.log(name);
}

function argu(x) {
  x("hello World");
}

argu(name);
name("Gopal");

//  practical

function sayhi() {
  return "Hello ";
}

function WelCome(name, sayhi) {
  return console.log(sayhi + name);
}



// repeat practice

function printVarible(varible) {
  console.log(varible);
}

// printVarible("hii");

// console.log(printVarible)

function func(x) {
  x("hello World");
}

func(printVarible);

function sumCallback(a, b, callback) {
  callback(a + b);
}

function handleSum(sum) {
  console.log(sum);
}

sumCallback(1, 2, handleSum);


// one method
function newfun(name, callBack) {
  callBack("Hello " + name);
}

newfun("Gopal", printVarible);

// Second method

newfun("kyle", function(variable){
  console.log(variable);
})
