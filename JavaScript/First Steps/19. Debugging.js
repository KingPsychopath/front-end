// A certainty of coding (especially in JS):

// If you're not sure what's wrong, console.log() it

// console.log() (or .warn() or .error()) is one way to understand what's happening when your program runs
function whyIsntThisWorking(input) {
  console.log("Well at least we got this far");
  console.log(input);
  return thingThatDoesntWork(input);
} // This appears in the console as a log (white)

// .warn() is useful for logging warnings
function whyIsntThisWorking(input) {
  console.warn("This is a warning");
  console.log(input);
  return thingThatDoesntWork(input);
} // This appears in the console as a warning (yellow)

// .error() is useful for logging errors
function whyIsntThisWorking(input) {
  console.error("This is an error");
  console.log(input);
  return thingThatDoesntWork(input);
} // This appears in the console as an error (red)

// .assert() is useful for logging assertions
console.assert(1 === 2, "1 does not equal 2"); // This is an assertion (only appears if the assertion is false)
// Output: Assertion failed: 1 does not equal 2

// .table() is useful for logging tables
console.table([
  { name: "John", age: 23 },
  { name: "Owen", age: 21 },
]); // This logs a table
// Output:
// ┌─────────┬──────┬─────┐
// │ (index) │ name │ age │
// ├─────────┼──────┼─────┤
// │    0    │ John │ 23  │
// │    1    │ Owen │ 21  │
// └─────────┴──────┴─────┘

// .time() and .timeEnd() are useful for logging time
console.time("timer");
for (let i = 0; i < 1000000; i++) {}
console.timeEnd("timer"); // This logs the time it took to execute the code
// Output: timer: 4.5ms

// .group() and .groupEnd() are useful for logging groups
console.group("group");
console.log("Hello, world!");
console.groupEnd(); // This logs a group
// Output:
// group
// Hello, world!

// .clear() is useful for clearing the console
console.clear(); // This clears the console

// .count() is useful for counting
console.count("Hello");
console.count("Hello");
console.count("World");
console.count("Hello");
console.count("World"); // This logs the number of times the argument has been called
// Output:
// Hello: 1
// Hello: 2
// World: 1
// Hello: 3
// World: 2

// .dir() is useful for logging objects
console.dir(document.body); // This logs the object
// Output:
// <body>...</body>

// .dirxml() is useful for logging XML
console.dirxml(document.body); // This logs the XML
// Output:
// <body>...</body>

// .trace() is useful for logging a stack trace
function foo() {
  console.trace();
}
foo(); // This logs a stack trace

// You can use the browser's debugger to pause the execution of your code and inspect the state of the program
// The debugger statement creates a breakpoint in the code where JS will pause and allow you to inspect the state of the program
function sayHello() {
  debugger;
  console.log("Hello, world!");
}
sayHello(); // This logs a breakpoint




//                                                                      Debugging

// You can debug your code using the browser's built-in debugger with breakpoints, watches, and the call stack
// As well as the console object and the debugger statement

// Set a breakpoint by clicking on the line number in the source code or by adding the debugger statement to your code
function sayHello() {
  console.log("Hello, world!");
}
sayHello(); // This logs a breakpoint ()

// The call stack shows the order in which functions are called (LIFO - Last In, First Out)
function sayHello() {
  sayWorld();
}
function sayWorld() {
    console.log("World!");
    }
sayHello(); // This logs the call stack
// Output:
// sayWorld - gets added second, has to complete first before sayHello can complete
// sayHello - gets added first
// <anonymous>

// Watches allow you to monitor the value of a variable or expression as you step through your code
// You can add a watch by right-clicking on a variable or expression and selecting "Add to watch"
function sayHello() {
    let name = "John";
    console.log("Hello, " + name + "!");
    }
sayHello(); // This logs a watch
// Output:
// name: "John"

// You can step through your code using the "Step over next function call" button
// This goes to the next line of code, stepping over function calls

// You can step into a function call using the "Step into next function call" button
// This goes to the first line of the function, stepping into the function call

// You can step out of a function call using the "Step out of current function" button
// This goes to the line after the function call, stepping out of the function call

// You can resume the execution of your code using the "Resume script execution" button
// This resumes the execution of the code

// These options help you to control the flow of your code and inspect the state of your program as it runs
// You can see the state of all the variables in the scope of the current function at any line.
// You can see the call stack showing all the functions that have been called and the order in which they were called.
// You can watch the value of a specific variable or expression as you step through your code.

// The console object provides access to the browser's debugging console
// We can use console.log() to log messages to the console
// console.log() can take multiple arguments, and will concatenate them into a string
console.log("Hello", "world"); // Hello world
console.log("Hello", "world", 2); // Hello world 2
console.log("Hello", "world", [1, 2, 3]); // Hello world [1, 2, 3]
console.log("Hello", "world", { a: 1, b: 2 }); // Hello world {a: 1, b: 2}
console.log("Hello", "world", function () {
  console.log("Hello, world!");
}); // Hello world function() { console.log("Hello, world!"); }
console.log("Hello", "world", null); // Hello world null
console.log("Hello", "world", undefined); // Hello world undefined
console.log("Hello", "world", true); // Hello world true
console.log("Hello", "world", false); // Hello world false
console.log("Hello", "world", NaN); // Hello world NaN
console.log("Hello", "world", Infinity); // Hello world Infinity
console.log("Hello", "world", -Infinity); // Hello world -Infinity
console.log("Hello", "world", 0); // Hello world 0

