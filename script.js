// script.js

let display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}
document.addEventListener("keydown", function (e) {
    const key = e.key;
  
    if (!isNaN(key) || "+-*/.".includes(key)) {
      append(key);
    } else if (key === "Enter") {
      calculate();
    } else if (key === "Backspace") {
      display.value = display.value.slice(0, -1);
    } else if (key.toLowerCase() === "c") {
      clearDisplay();
    }
  });
  
