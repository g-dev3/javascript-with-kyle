// const btn = document.querySelector("[data-btn]");
// const input = document.querySelector("[data-input-text");
// const form = document.querySelector("[data-form]");
const home = document.querySelector("[data-home-page");

home.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clicked");
});

window.addEventListener("resize", () => {
  console.log("Window resized");
});

// form.addEventListener("submit", e => {
//     e.preventDefault()
//     console.log("Submited form")
// })

// input.addEventListener("input", (e) => {
//   console.log(e.target.value === "");
// });
// console.log(btn);

// function printClick() {
//   console.log("Clicked");
// }

// btn.addEventListener("click", printClick);

// // btn.addEventListener('click', ()=>{
// //     console.log("Clicked")
// // })

// btn.removeEventListener("click", printClick);

// btn.addEventListener("click", (e) => {
//   console.log(e);
// });
