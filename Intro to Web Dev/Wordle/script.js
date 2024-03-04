window.addEventListener("focus", () => {
  refocusInput();
});

function validate() {
  const inputs = document.querySelectorAll(".cell-input");
  let isValid = true;
  inputs.forEach((input) => {
    if (input.value === "") {
      isValid = false;
      input.classList.add("invalid");
    } else {
      input.classList.remove("invalid");
    }
  });
  return isValid;
}

function isLetter(letter) {
  return /^[a-zA-Z]$/.test(letter);
}

function submitRow() {
  const currentRow = document.activeElement.parentElement.parentElement;
  //alert(`Parent Element: ${currentRow.className}`);

  // Validation Logic Here

  let inputs = document.querySelectorAll(".cell-input:enabled");
  // Set the "disabled" attribute of each element to true
  inputs.forEach((input) => {
    input.setAttribute("disabled", true);
  });

  enableNextRow(currentRow);
}

function enableNextRow(previousRowObject) {
  let nextRow = previousRowObject.nextElementSibling;
  let inputs = nextRow.querySelectorAll(".cell-input:disabled");
  // Set the "disabled" attribute of each element to true
  inputs.forEach((input) => {
    input.removeAttribute("disabled");
  });
  renderInput();
  refocusInput();
}

function refocusInput() {
  // Selects the last input if it exists, otherwise selects the first input
  const inputs = Array.from(document.querySelectorAll(".cell-input:enabled"));
  const firstEmptyInput = inputs.find((input) => input.value === "");

  //const lastFilledInput = inputs.reverse().find((input) => input.value !== "");

  if (firstEmptyInput) {
    firstEmptyInput.focus();
  } 

  /*if (lastFilledInput) {
    lastFilledInput.focus();
    //Hides the selection highlight
    lastFilledInput.setSelectionRange(
      lastFilledInput.value.length,
      lastFilledInput.value.length
    );
  }*/
}

function renderInput() {
  let timer;

  document.querySelectorAll(".cell-input:enabled").forEach((input) => {
    input.addEventListener("input", (e) => {
      if (isLetter(e.data)) {
        input.value = e.data.toUpperCase();
        const nextInput =
          input.parentElement.nextElementSibling?.querySelector(".cell-input");
        if (nextInput) {
          nextInput.focus();
        }
      } else {
        input.value = "";
      }
    });
    input.addEventListener("mousedown", (e) => {
      e.preventDefault();
      refocusInput();
    });
    input.addEventListener("keyup", () => {
      clearTimeout(timer);
    });
    input.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "Enter":
          e.preventDefault();
          submitRow();
          break;
        case "Backspace":
          if (input.value === "") {
            timer = setTimeout(() => {
              const previousInput =
                input.parentElement.previousElementSibling?.querySelector(
                  ".cell-input"
                );
              if (previousInput) {
                previousInput.focus();
                previousInput.value = "";
              }
            }, 0); // Delay the focus to avoid the input value in previous field being deleted too early
            // Prevent the default backspace behavior to avoid deleting characters in the previous input
            e.preventDefault();
          }
          break;
      }
    });
  });
}

function init() {
  renderInput();
  refocusInput();
}

init();
