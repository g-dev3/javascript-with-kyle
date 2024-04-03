function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2));

let sumArrow = (a, b) => a + b;

console.log(sumArrow(3, 4));

let printName = (name) => {
  console.log(name);
};

printName("Gopal");

// function printHi(name) => "hi" + name;

let printHello = (name) => "hello" + name;

console.log(printHello(" G dev"));

let printHiArrow = () => console.log("hii");

printHiArrow();

function func(x, callback) {
  callback(x);
}

console.log(func(4, variable => console.log(variable)));
