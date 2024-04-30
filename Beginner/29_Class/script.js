// const test = document.querySelector("[data-test]");

// test.dataset.test = "5555";

// console.log(test.dataset)

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const clicksCount = parseInt(button.dataset.clicks);

    button.dataset.clicks = clicksCount + 1;
  });
});
