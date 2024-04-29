let divWithId = document.getElementById("div-id");

divWithId.style.color = "red";

// console.log(divWithId)

let divWithClass = document.getElementsByClassName("div-class");

const divWithClassArray = Array.from(divWithClass);


// console.log(divWithClass);

// divWithClassArray.forEach(div => div.style.color="green")

divWithClass[0].style.color = "green";