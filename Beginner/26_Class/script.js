const dataAttributeElement = document.querySelector("[data-test]");

// console.log(dataAttributeElement);

// const divWithClasses = document.querySelector(".div-class");

dataAttributeElement.style.color = "red";

const input = document.querySelector("body > input[type='text']");

console.log(input);

const divWithClasses = document.querySelectorAll(".div-class");

divWithClasses.forEach((div) => (div.style.color = "green"));

// console.log(divWithClasses);
