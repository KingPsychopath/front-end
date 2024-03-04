function validate() {
  const inputs = getInputs();
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

function getWord() {
  const inputs = getInputs();
  return inputs.map((input) => input.value).join("");
}

function isValidWord(word) {
  console.log("API call to check if the word is valid");
}

function submitWord() {
  const isValid = validate();
  if (!isValid) {
    alert("Please fill in all the letters in the row.");
    return;
  }
  return isValid;
  //const word = getWord();
  //isValidWord(word);
}

/**
 * Checks if a given character is a letter.
 *
 * @param {string} letter - The character to check.
 * @returns {boolean} - Returns true if the character is a letter, otherwise false.
 */
function isLetter(letter) {
  return /^[a-zA-Z]$/.test(letter);
}

/**
 * Submits the current row and disables it,
 * calls program to perform validation and enables the next row.
 */
function submitRow() {
  // Store the current row before disabling it (to enable the next row later)
  const currentRow = getCurrentRow();

  // Validation Logic - Check if the current row is valid
  if (!submitWord()) {
    return;
  }

  // Set the "disabled" attribute of each element to true
  disableCurrentRow();

  // Enable the next row and set the focus to the first input
  enableNextRow(currentRow);
}

function getCurrentRow() {
  //   const currentRow = document.activeElement.parentElement.parentElement; //deprecated (requires focus on input field to get row)
  const activeRow = document.querySelector(".row:not(:has(input:disabled))");
  return activeRow;
}

/**
 * Disables all inputs in the current row.
 */
function disableCurrentRow() {
  const inputs = getInputs();
  inputs.forEach((input) => {
    input.setAttribute("disabled", true);
  });
}

/**
 * Enables the next row of inputs by removing the "disabled" attribute from each element.
 * @param {HTMLElement} previousRowObject - The previous row object from which to determine the next row.
 */
function enableNextRow(previousRowObject) {
  let nextRow = previousRowObject.nextElementSibling;
  const inputs = getInputs(false, nextRow);
  // Set the "disabled" attribute of each element to true
  inputs.forEach((input) => {
    input.removeAttribute("disabled");
  });
  registerInputs();
  refocusInput();
}

/**
 * Retrieves a list of input elements based on the specified enabled state.
 *
 * @param {boolean} enabled - Determines whether to retrieve enabled or disabled input elements.
 * @param {HTMLElement} [element=window.document] - The element to search within. Defaults to the entire document.
 * @returns {Array<HTMLElement>} - An array of input elements matching the specified enabled state.
 */
function getInputs(enabled = true, element = window.document) {
  switch (enabled) {
    case true:
      return Array.from(element.querySelectorAll(".cell-input:enabled"));
    case false:
      return Array.from(element.querySelectorAll(".cell-input:disabled"));
  }
}

/**
 * Refocuses the input element based on its value.
 * If there is an empty input, it will be focused.
 * If all inputs are filled, the last filled input will be focused and the selection highlight will be hidden.
 */
function refocusInput() {
  const inputs = getInputs();
  const firstEmptyInput = inputs.find((input) => input.value === "");
  const lastFilledInput = inputs.reverse().find((input) => input.value !== "");

  if (firstEmptyInput) {
    firstEmptyInput.focus();
  } else {
    lastFilledInput.focus();
    //Hides the selection highlight
    lastFilledInput.setSelectionRange(
      lastFilledInput.value.length,
      lastFilledInput.value.length
    );
  }
}

function registerInputs() {
  let timer;
  const inputs = getInputs();

  inputs.forEach((input) => {
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

/**
 * Registers event listeners to reset the cursor focus on the input field.
 */
function registerCursorResetListener() {
  window.addEventListener("focus", () => {
    refocusInput();
  });
  window.addEventListener("click", () => {
    refocusInput();
  });

  const container = document.querySelector(".container");
  if (container) {
    container.addEventListener("click", () => {
      refocusInput();
    });
  }
}

/**
 * Initializes the application.
 * This function registers the input, refocuses the input field, and sets up the cursor reset.
 */
function init() {
  registerInputs();
  refocusInput();
  registerCursorResetListener();
}

init();
