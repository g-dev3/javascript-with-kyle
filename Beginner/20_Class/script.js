let a = 10;

let b = "hI";

let c = a;

c = c + 1;

console.log(c);

let arr = [1, 2];

let arr2 = [1, 3];

let arr3 = arr;

console.log(arr3);

arr3.push(3);

console.log(arr);

console.log(arr3);

const arr4 = [1, 2, 5];

let element = 3;

console.log(arr4);

fun(arr4, element);

function fun(arr4, element) {
  arr4.push(element);
}

console.log(arr4);

const you = {
  name: "gopal",
};
console.log(you);

you.name = "john";

console.log(you);

const arr5 = [1, 2];

const elem = 3;

add(arr5, elem);

function add(element1, element2) {
  element2 = element2 + 1;
  element1.push(element2);
}

console.log(arr5);

const element1 = [5, 6, 7];

console.log(arr5);

console.log(element1)