function hello() {
  console.log("hello World");
}

hello();

function sum(a, b) {
  console.log(a + b);
}

sum(2, 1);

// Return function

function ssum(a, b = 0) {
  return a + b;
}

let result = ssum(12);

console.log(result);
