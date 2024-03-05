# Wordle

A simple word game where you have to guess a word in 6 tries.

# Learned

- `input.select()` for selecting the text in an input field, highlights the text which I did not want. So I used `input.setSelectionRange(len(input), len(input))` to set the cursor to the end of the input field, when refocusing an input field that already contains text.

- Used `input` event specficially because it fires before the `keydown` and `keyup` events so that I can prevent the default behavior of the `keydown` event and then manually update the input field value (prevents letters from being entered into the input field and showing up in lowercase)

- Used `.row:not(:has(input:disabled))` selector to select all rows that do not have a disabled input field, because all of the rows but the active one have disabled input fields by default in the HTML; this is a handy way to get the object of the active row.

# Objectives
