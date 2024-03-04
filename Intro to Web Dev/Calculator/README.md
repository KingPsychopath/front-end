# Calculator

This is a simple calculator that can perform basic arithmetic operations such as addition, subtraction, multiplication, and division.

It uses a `Stack` to keep track of the operations and numbers entered by the user.

It was built to look similar to the default calculator app on iOS.

# Demo

![Calculator Demo](./assets/Calculator%20Demo.gif)

While there are still some kinks, and I have not implemented the exponents properly, I am proud of the progress I have made so far.

# Learned

- `input.select()` for selecting the text in an input field, highlights the text which I did not want. So I used `input.setSelectionRange(len(input), len(input))` to set the cursor to the end of the input field.

- Used `input` event specficially because it fires before the `keydown` and `keyup` events so that I can prevent the default behavior of the `keydown` event and then manually update the input field value (prevents letters from being entered into the input field and showing up in lowercase)
