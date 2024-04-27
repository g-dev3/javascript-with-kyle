const a = [1, 2, 3, 4, 5];

a.forEach((number, index) => {
  console.log(number + " " + index);
  // console.log(index)
});

let newArr = a.map((number) => {
  return number * 2;
});

console.log(newArr);

let newArr2 = a.filter((number) => {
  return number >= 3;
});

console.log(newArr2);

let n = a.find((number) => {
  return number > 2;
});

console.log(n);

let isSum = a.some((number) => {
  return number > 2;
});

console.log(isSum);

let Sum = a.reduce((sum, number) => {
  return sum + number;
}, 0);

console.log(Sum);

let isTrue = a.includes(2);

console.log(isTrue);
