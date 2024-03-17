// if Statements let us execute code under a certain condition.

// code in the if block only runs if the (condition) is true
const you = { wannaBeMyLover: true };
if (you.wannaBeMyLover) {
  // if the condition is true (the object property === true)
  you.gottaGetWithMyFriends = true;
}

// we can use else to run other code if (condition) is false
if (you.reallyBugMe) {
  // even if the object property is undefined, it's still false (truthy/falsy)
  console.log("Goodbye");
} else {
  console.log("Hello");
}
// What will happen when this code runs?
if (5 > 4) {
  // true
  console.log("greater than"); // this will run
} else {
  console.log("less than");
}

// We can chain else and if blocks to account for multiple conditions
function compare(x, y) {
  if (x > y) {
    console.log(x, "is greater than", y);
  } else if (x < y) {
    console.log(x, "is less than", y);
  } else {
    console.log(x, "is equal to", y);
  }
}

// The (condition) is usually an expression that evaluates to a boolean
let forecast = "rain";
if (forecast === "rain") {
  console.log("bring an umbrella");
}
// However if (condition) is not a boolean, JavaScript will implicitly convert it to one based on its "truthiness"
// This implicit coercion is called "truthy" and "falsy"
if (0) {
  console.log("zero is falsy"); // this will not run
}
if (1) {
  console.log("one is truthy"); // this will run
}
if ("hello") {
  console.log("all strings are truthy"); // this will run
}

// We can use the logical operators && (and), || (or), and ! (not) to combine conditions
let temperature = 10;
if (forecast === "rain" && temperature < 15) {
  // both conditions must be true
  console.log("bring an umbrella and a jacket");
}

// We can use the ternary operator to write an if statement in a single line
// Syntax: (condition) ? (if true) : (if false)
const message =
  forecast === "rain" ? "bring an umbrella" : "leave the umbrella at home";
console.log(message); // "bring an umbrella"

// This is equivalent to:
if (forecast === "rain") {
  console.log("bring an umbrella");
} else {
    console.log("leave the umbrella at home");
}

// We can use the switch statement to write an if...else if...else statement in a more compact way
// The switch statement evaluates an expression and executes the code for the matching case
// If there is no matching case, it executes the code for the default case
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("back to work");
    break;
  case "Friday":
    console.log("GTFO");
    break;
  default:
    console.log("just another day");
}
// The break statement stops the execution of the switch statement
// If we omit the break statement, the code for the next case will run
// This is called "falling through"

// Exercises
/*
1. Write a conditional that logs a message saying whether your first name or last name is longer
2. Write a function isEmpty(array) that returns whether a given array is empty or not
3. Is an empty array truthy or falsy? Write a conditional to find out
*/

// 1.
const firstName = "Emma";
const lastName = "Bunton";
if (firstName.length > lastName.length) {
  console.log("first name is longer");
}

// 2.
function isEmpty(array) {
  return array.length === 0;
}

// 3.
if ([]) {
  // this is truthy
  console.log("truthy");
}
if (isEmpty([])) {
  // this is true
  console.log("empty");
}
if (isEmpty([1])) {
  // this is false
  console.log("not empty");
}

//                                                Boolean Operators (Logical Operators)
// Logical Operators let us combine or modify boolean values.

// The && operator returns the first operand if it is falsy, and the second operand otherwise
console.log(false && "hello"); // false
console.log(true && "hello"); // hello

// The || operator returns the first operand if it is truthy, and the second operand otherwise
console.log("hello" || "world"); // hello
console.log("" || "world"); // world (empty string is falsy)

// The ! operator negates a boolean (inverts it)
// It returns true if the operand is falsy or true otherwise
console.log(!"hello"); // false (truthy inverts to false)
console.log(!""); // true (falsy inverts to true)

if (!"hello") {
  // this is false
  console.log("this will not run");
}

// Use Case
// You can use boolean operators to write more concise code.
// Instead of writing:
let name2 = "John";
let greeting2;
if (name2) {
  greeting2 = "Hello, " + name2 + "!";
}

// You can write:
let name3 = "John";
let greeting3 = name3 && "Hello, " + name3 + "!";
console.log(greeting3); // "Hello, John!"

/*
Logical "and" (&&) requires both values to be truthy

A	    B	    A && B
true	true	true
true	false	false
false	true	false
false	false	false

Logical "or" (||) requires only one value to be truthy

A	    B	    A || B
true	true	true
true	false	true
false	true	true
false	false	false
 */
