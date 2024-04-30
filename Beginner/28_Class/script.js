const buttn = document.querySelector("button");

buttn.addEventListener("click", (e) => {
  console.log("Arrow This :");

  console.log(this);
});

buttn.addEventListener("click", function (e) {
  console.log("Function This");

  console.log(this);
});
