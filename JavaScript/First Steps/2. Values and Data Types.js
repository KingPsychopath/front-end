// "Tic Tac Toe", 9 and "#board" are all values.
// The first is a string, the second is a number, and the third is a string that represents a CSS selector.

// Values are pieces of data that are stored in variables.
// They can be of different types, such as strings, numbers, and booleans.

// Strings are sequences of characters, such as "Hello, World!".
// Numbers are numerical values, such as 42 or 3.14.
// Booleans are true or false values.

// Data types are categories of values. The three most common data types are strings, numbers, and booleans.

// The typeof operator can be used to find the data type of a value.
typeof "Hello, World!"; // "string"
typeof 42; // "number"
typeof true; // "boolean"

// JavaScript also has a special values, which are used to represent the absence of a value.
typeof undefined; // "undefined"
typeof null; // "object"

// Undefined and Null both represent the absence of a value
// However, null is deliberate and assigned by a programmer,
// while undefined is assigned by default by JavaScript itself (to uninitialized variables, for example).

// JavaScript has two kinds of data types: primitive and object.
// Primitive data types include strings, numbers, booleans, undefined, and null.
// Object data types include objects(e.g. document), arrays, and functions.

// typeof is a unary operator, it returns the type of the operand as a string
typeof 3; // "number"
typeof "3"; // "string"
typeof true; // "boolean"
typeof {}; // "object"
typeof []; // "object"
typeof null; // "object"
typeof undefined; // "undefined"
typeof function () {}; // "function"
typeof Symbol(); // "symbol"

// Truthy and Falsy values
// In JavaScript, a value is truthy if it converts to true when evaluated in a boolean context, and falsy if it converts to false.

// Falsy values include false, 0, "", null, undefined, and NaN
Boolean(false); // false
Boolean(0); // false
Boolean(""); // false
Boolean(null); // false
Boolean(undefined); // false
Boolean(NaN); // false

// Everything else is truthy
Boolean(true); // true
Boolean(1); // true
Boolean("hello"); // true
Boolean({}); // true
Boolean([]); // true
Boolean(function () {}); // true
Boolean(Symbol()); // true

// Use the !! operator to convert a value to a boolean
!!"hello"; // true
!!0; // false

// Use Case
// You can use truthy and falsy values to write more concise code.
// Instead of writing:
let name = "John";
if (name !== "") {
  console.log("Hello, " + name + "!");
}
// You can write:
if (name) {
  console.log("Hello, " + name + "!");
}
// Instead of writing:
let count = 0;
if (count === 0) {
  console.log("There are no items.");
}
// You can write:
if (!count) {
  console.log("There are no items.");
}
