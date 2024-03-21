// Loops let us run the same chunk of code multiple times.
// There are a few different types of loops, but they all essentially do the same thing:
// they repeat an action some number of times.

// The most basic type of loop is the while loop.
while (condition) {
  // code to run
}

// The condition is evaluated before the loop runs.
// If the condition is true, the code inside the loop runs.
// If the condition is false, the code inside the loop doesn't run.
// The condition is evaluated again, and the process repeats.
// This is called an "entry-controlled" loop.
// The condition is checked before the loop runs, so it's possible that the code inside the loop never runs.
// If the condition is false to begin with, the code inside the loop won't run at all.
// If the condition is false after the first time the code inside the loop runs, the code inside the loop won't run again.
// The code inside the loop should change the condition at some point, so that the loop eventually stops.
// If the condition never changes, the loop will run forever, which is called an "infinite loop".
// Infinite loops are bad because they can crash your program or your computer.
// Here's an example of a while loop:
let count = 0;
while (count < 10) {
  console.log(count);
  count++;
}
// This loop counts from 0 to 9.
// The condition is count < 10, so the loop runs as long as count is less than 10.

// This is called an "exit-controlled" loop.
// The condition is checked after the loop runs, so the code inside the loop always runs at least once.
// The condition is checked again after each iteration, and the process repeats.
// The code inside the loop should change the condition at some point, so that the loop eventually stops.
// If the condition never changes, the loop will run forever, which is called an "infinite loop".
// Infinite loops are bad because they can crash your program or your computer.
// Here's an example of a do...while loop:
let count = 0;
do {
  console.log(count);
  count++;
} while (count < 10);
// This loop counts from 0 to 9.
// The condition is count < 10, so the loop runs as long as count is less than 10.

// The for loop is a more compact way to write a loop.
// It has three parts, separated by semicolons:
// 1. The initialization runs once, before the loop starts. It usually sets up a counter variable.
// 2. The condition is checked before each iteration of the loop. If it's true, the loop runs. If it's false, the loop stops.
// 3. The final expression runs after each iteration of the loop. It usually changes the counter variable.
// Each stage of a loop is called an iteration.
for (let rep = 0; rep < 10; rep += 1) {
  console.log("now doing rep", rep);
}
console.log("do you even lift bro");

// The for ... of loop lets us easily iterate over items in a collection, such as an array.
const numbers = [1, 2, 3];
for (let i = 0; i < numbers.length; i++) {
  // Using for loop (to iterate by index)
  console.log(numbers[i]); // 1, 2, 3
}
for (let n of numbers) {
  // Using for ... of loop
  console.log(n); // 1, 2, 3
}

// We can use for...of to iterate over characters in a string
for (let char of "ALOHA") {
  console.log(char); // A, L, O, H, A
}
// Or items in an array
for (let item of ["pop", 6, "squish"]) {
  console.log(typeof item);
}
// Or keys/values in an object
const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  console.log(key); // a, b, c
}
for (let value of Object.values(obj)) {
  // Not recommended (Use for...in loop instead)
  console.log(value); // 1, 2, 3
}

// Because strings, arrays, and objects are collections, and collections are iterable types.

// The for...in loop lets us easily iterate over keys in an object.
const obj2 = { a: 1, b: 2, c: 3 };
for (let key in obj2) {
  console.log(key); // a, b, c
}
// The for...in loop is not recommended for iterating over arrays or array-like objects.
// Use the for...of loop instead.

// The for...in is usually used for iterating enurmerable properties of an object.

// Enumerable means that something can be counted or listed one by one.
// In JavaScript, when we say a property is enumerable, 
// it means we can include it in a list or a loop to look at each item individually.
// It's like having a bag of toys and being able to take each one out to look at it.
