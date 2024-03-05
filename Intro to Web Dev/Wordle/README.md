# Wordle

A simple word game where you have to guess a word in 6 tries.

# Learned

- `input.select()` for selecting the text in an input field, highlights the text which I did not want. So I used `input.setSelectionRange(len(input), len(input))` to set the cursor to the end of the input field, when refocusing an input field that already contains text.

- Used `input` event specficially because it fires before the `keydown` and `keyup` events so that I can prevent the default behavior of the `keydown` event and then manually update the input field value (prevents letters from being entered into the input field and showing up in lowercase)

- Used `.row:not(:has(input:disabled))` selector to select all rows that do not have a disabled input field, because all of the rows but the active one have disabled input fields by default in the HTML; this is a handy way to get the object of the active row.

- Order of events for calling promises and network requests in my initialisation functions for web pages is important. I could await the promise that fetches the word from the server and call it first, but this would hold up the rest of the initialisation functions from running. Instead, I called the promise that fetches the word from the server last, so that the rest of the initialisation functions could run while the word was being fetched. (However for offline functionality, I would have to await the promise that fetches the `wordlist` from the server first, and then call the rest of the initialisation functions.)

# Objectives
