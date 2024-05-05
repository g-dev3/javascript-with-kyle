const arr1 = [1, 2, 3, 6, 5, 5, 7, 8];

if (arr1.length === 0) {
  console.log("empty");
} else if (arr1.length < 5) {
  console.log("small");
} else if (arr1.length < 10) {
  console.log("medium");
} else {
  console.log("large");
}
