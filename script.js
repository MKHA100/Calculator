let displayBox = document.querySelector(".display");

function showDisplay(event) {
  const x = event.target.innerHTML;
  const numbers = document.querySelector(".display");

  // if (numbers.textContent.length > 12) {
  //   document.querySelector(".display").style.cssText = `font-size: ${
  //     numbers.textContent.length / 3
  //   }px;`;
  //   // console.log("too many letters");
  // }

  if (displayBox.innerHTML == 0) {
    return (displayBox.innerHTML = x);
  }
  return (displayBox.innerHTML += x);
}

function calculate() {
  let result = displayBox.innerHTML;
  displayBox.innerHTML = eval(result);
}

function allclear() {
  displayBox.innerHTML = 0;
}

function clear() {
  let text = displayBox.innerHTML;
  if (text.length === 1) {
    displayBox.innerHTML = 0;
  } else {
    displayBox.innerHTML = text.substring(0, text.length - 1);
  }
}

const keys = document.querySelectorAll(".key");

document.addEventListener("keydown", function (e) {
  keys.forEach(function (value) {
    if (value.textContent === e.key) value.click();
  });

  if (e.key === "Enter") calculate();
  else if (e.key === "c") allclear();
  else if (e.key === "Backspace") clear();
});

let list = document.querySelectorAll(".show-display");
list.forEach((item) => item.addEventListener("click", showDisplay));

document.querySelector(".calculate").addEventListener("click", calculate);
document.querySelector(".all-clear").addEventListener("click", allclear);
document.querySelector(".clear-last").addEventListener("click", clear);
