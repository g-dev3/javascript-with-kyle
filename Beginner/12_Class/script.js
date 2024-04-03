// Scoping

function sayHi(name) {
  let a = 1;
  let result = "Hii " + name + a;
  console.log(result);
}

let name = "Gopal";
let a = 12;

sayHi(name);

let c = 3;

{
  let a = 1;
  {
    let b = 2;
    console.log(a);
    console.log(b);
    console.log(c);
  }
}
