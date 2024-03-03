let stack = [];
const operators = ["+", "-", "*", "/", "%", "^"];

function appendNumber(number) {
  let display = document.querySelector("#display");
  display.value += number;
}

function appendOperator(operator) {
  let lastElement = stack[stack.length - 1];
  let display = document.querySelector("#display");

  if (operators.includes(lastElement) && display.value === "") {
    return;
  }

  stack.push(display.value);
  display.value = "";
  stack.push(operator);
}

function clearDisplay() {
  let display = document.getElementById("display");
  display.value = "";

  stack = [];
}

function backspace() {
  stack.pop();
}

function calculate() {

  // Push the last element onto the stack
  let display = document.querySelector("#display");
  stack.push(display.value);

    // Loop through the stack
    let result = stack[0]
    for (let i = 1; i < stack.length; i+= 2) {
        let operator = stack[i];
        let number = stack[i + 1];
        result = operate(result, operator, number);
    }

    clearDisplay();
    display.value = result;
}

function operate(a, operator, b) {
  a = parseFloat(a);
  b = parseFloat(b);

  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    case "%":
      return a % b;
    case "^":
      return Math.pow(a, b);
  }

}

document.querySelector(".container").addEventListener("click", () => {
  let stackDisplay = document.getElementById("stackDisplay");
  stackDisplay.value = stack.join(" ");
});

document.querySelector("#backspace").addEventListener("click", () => {
  let stackDisplay = document.querySelector("#stackDisplay");

  stackDisplay.classList.add("animate");

  setTimeout(() => {
    stackDisplay.classList.remove("animate");
  }, 100);
});


let stackDisplay = document.querySelector("#stackDisplay");
stackDisplay.scrollRight = stackDisplay.scrollWidth;

