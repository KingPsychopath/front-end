// JavaScript is single-threaded, meaning it can only do one thing at a time.

// JavaScript runs code synchronously, meaning one line at a time, from top to bottom.
// This is fine for simple programs, but it can be slow for complex programs that need to do many things at once.
// For example, if you need to fetch data from a server, you don't want to wait for the data to arrive before you can do anything else.
// You want to start fetching the data, and then do other things while you wait for the data to arrive.
// This is called "asynchronous" programming.

// The event loop is a key component in how JavaScript handles asynchronous code (concurrency model).
// 1. The Call Stack is where JavaScript keeps track of what function is currently running.
// When a function is called, it's added to the Call Stack.
// When a function returns, it's removed from the Call Stack.
// 2. When asynchronous code is ready to run, it's added to the Task Queue (event queue).
// 3. The Event Loop checks the Call Stack and the Task Queue
// If the Call Stack is empty, the first item in the Task Queue is moved to the Call Stack and run.
// NOTE:  The Event loop constantly checks the Call Stack and the Task Queue, and moves items from the Task Queue to the Call Stack when the Call Stack is empty.


console.log("Start"); // This will run first (Get's pushed to the Call Stack First)

setTimeout(function () {
  // Pushes to the Task Queue (async function)
  console.log("Timeout"); // This will run third (Get's pushed to the Call Stack Third after the Call Stack is empty)
}, 0); // 0 means it will run after 0 milliseconds

console.log("End"); // This will run second // Get's pushed to the Call Stack Second

// You can use async functions anywhere, even inside a synchronous function.
// however, they are most useful when you need to wait for something to happen before you can continue.
// You also won't be able to use the result of an async function until it's done running.
// because you can't pause the code to wait for the result.

// Because of this, you'll often see async functions used with the await keyword,
// which waits for the async function to finish before moving on.
// You cannot use await outside of an async function.
function nonAsyncFunction() {
  async function asyncFunction() {
    return "Hello, World!";
  } // returns a promise

  asyncFunction().then((result) => console.log(result)); // Logs: 'Hello, World!'
}

nonAsyncFunction(); // Logs: 'Hello, World!'
