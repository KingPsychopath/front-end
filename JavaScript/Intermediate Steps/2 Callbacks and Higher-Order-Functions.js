// Functions in JavaScript are first-class citizens, meaning they can be
// 1. saved to memory (assigned to a variable or property of an object)
// 2. passed as arguments
// 3. and returned as values other functions.

// Higher order functions are functions that take in other functions as arguments or return functions as values.
// Functions that operate on other functions.
// Callbacks are the actual functions that are passed in as arguments to higher order functions.

// This is the basis of functional programming.

// It is a way to edit a function without changing the original function (after it has been written).

const callback = () => {
  console.log("Callback");
};
function higherOrderFunction(callback) {
  console.log("Higher Order Function");
  // High Order Functions allow us to specify logic that we want to run at a later point in time.
  callback();
}

higherOrderFunction(callback); // Output: Higher Order Function, Callback

// This is useful for things like events, callbacks, promises and async/await.
// By creating a level of abstraction that allows us to write more modular and reusable code. (what we want to happen is separated from how we want it to happen)
// Abstraction in this context meaning hiding the implementation details of a function and only showing the interface.

//                                Example Higher Order Function and Callback

// This enables functions like map, filter, reduce, sort, find, forEach, etc.
// Here we pass in an array and a function that multiplies each number by 2.
map([1, 2, 3], (num) => num * 2); // [2, 4, 6]
// map is a function that takes in an array and a callback function.
// The callback function is the logic that we want to run on each element of the array.
// It returns a new array with the results of the callback function.

// This caller is a higher order function because it takes in a function as an argument.
// The Argument is a callback function because it's a function that is passed into another function.

// This is equivalent to the following:
function timesby2(num) {
  return num * 2;
}

map([1, 2, 3], timesby2); // [2, 4, 6]

//                                               Reusable Functions

// This makes our code more declarative and easier to read, as well as more modular and reusable.
// Declarative meaning we are declaring what we want to happen, not how we want it to happen.
// This is the opposite of imperative programming which tells the computer how to do something.

function nineSquared() {
  return 9 * 9;
}
nineSquared(); // 81

function eightSquared() {
  return 8 * 8;
}
eightSquared(); // 64

// This is not very DRY (Don't Repeat Yourself)

// We can make this more DRY by creating a function that takes in a number and returns the square of that number.
// We generalize the function to make it reusable.

function square(num) {
  return num * num;
}

square(9); // 81
square(8); // 64

//                                              Anonymous and Arrow Functions

// We can make the function even more concise by using an anonymous function.
// Anonymous functions are functions that don't have a name.
// They are useful when we only need to use the function once.

// Syntax: function() {} or () => {}

// Filters out numbers greater than 2 using an anonymous function.
filter([1, 2, 3], function(num) {
  return num > 2;
}); // [3]

// This is equivalent to the following:
filter([1, 2, 3], (num) => num > 2); // [3]


//                                      Thenables

// A thenable is an object that has a then method.
// The then method takes in a callback function and returns a new thenable.
// This allows us to chain multiple thenables together.

// This is the basis of promises in JavaScript.

