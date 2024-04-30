// const grandParent = document.getElementById("grand-parent");

// grandParent.style.color = "red";

// const parentOne = grandParent.children[0];
// const parentTwo = parentOne.nextElementSibling
// const childOne = parentOne.children[0]
// const childTwo = parentOne.children[1]

// parentOne.style.color = "red";
// parentTwo.style.color = "red";
// childTwo.style.color = "red";

// console.log(grandParent.children[0].style.color= "red");

const childOne = document.querySelector("#childOne");

// childOne.style.color = "red"

const childTwo = childOne.nextElementSibling;

// childTwo.style.color= "red"

const parentOne = childOne.parentElement;

// parentOne.style.color = "red"

const parentTwo = parentOne.nextElementSibling;

// parentTwo.style.color = "red";

const grandParent = parentOne.parentElement;

// grandParent.style.color = "red"

const directTogranParent = childOne.closest("#grand-parent");

directTogranParent.style.color = "red";
