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

let result = WelCome("Gopal", sayhi());
result2 = WelCome("Sunil", sayhi());

function printName(name, callback) {
  console.log(callback);
  callback("hello " + name);
}

printName("gopal", sayhi());
