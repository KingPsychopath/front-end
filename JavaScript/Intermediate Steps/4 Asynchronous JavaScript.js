// JavaScript is synchronous, meaning it executes code line by line.
// However tasks like reading files, making network requests, and other I/O operations are asynchronous.
// They take some time to complete, but JavaScript doesn't have to wait for them to finish before moving on to the next line of code.

// Almost everything you do over the internet is asynchronous, because it takes time to send and receive data.
// It all appears synchronous to the user, because the browser handles the asynchronous tasks in the background.
// A chat with a friend, with messages appearing in real time, and reacts to your friend's messages, is a good example of asynchronous behavior.
// You and your friend both send messages independently of each other, and they appear in real time.

// The event loop is JavaScripts way of organizing what is going to run next, and what is running.

//                                                              Synchronous Code

// Each line of code is executed one after the other, in order, and each function call is added to the call stack and only removed when the function returns.
// This is the journey of the thread of execution through typical synchronous code.
const num = 3; // 1. Defining a variable in the global scope
function multiplyBy2(inputNumber) {
  // 2. Defining a function in the global scope
  const result = inputNumber * 2; // 3. Define the result variable in the function scope
  return result; // 4. Return the result on function call
}

const output = multiplyBy2(num); // 5. Call the function and store the result in a variable (create a new execution context with result = 6)
const newOutput = multiplyBy2(10); // 6. Call the function again and store the result in a variable (create a new execution context with result = 20)

// Until we finished inside of the function call 'output = multiplyBy2(num)', we can't move on to the next line of code in the global scope.
// This is what is meant by JavaScript is synchronous, single-threaded and blocking.

// What if the line we are executing is asynchronous? What if it takes time to complete? What if it is a network request? What if it's really slow?
// We still want the rest of our code to run. This is where asynchronous code comes in.

//                                                           Asynchronous Code

// Literally just means doing code out of order from when you said it. Sync = in order, Async = out of order.(Js handles when that functionality comes back in)

// Since we want to keep the rest of our code running while we wait for the asynchronous task to complete, we need a way to handle this.
// When an asynchronous task is running, it is added to a separate queue, called the callback queue.
// The callback queue is a data structure that holds all the callback functions that are waiting to be executed.

// The event loop is constantly checking if the call stack is empty. If it is, it takes the first function in the callback queue and adds it to the call stack.
// This is how JavaScript handles asynchronous code. It doesn't wait for the asynchronous task to complete before moving on to the next line of code.
// It just adds the callback function to the callback queue and moves on.

// This behaviour is why you have to explicitly tell JavaScript when a function is asynchronous.

setTimeout(() => console.log("Hello"), 1000); // As far as JavaScript is concerned, this function is done as soon as it is added to the callback queue
console.log("Me first!"); // This will run first, because the setTimeout function is asynchronous

// At 0ms -> Call Stack: setTimeout
// At 0ms -> Web API: setTimeout (1000ms)
// At 0ms -> setTimeout is removed from the Call Stack
// At 0ms -> Call Stack: console.log("Me first!")
// At 0ms -> console.log("Me first!") is removed from the Call Stack
// At 1000ms -> setTimeout callback is added to the Callback Queue
// When the Call Stack is empty, the Event Loop pushes the setTimeout callback from the Callback Queue to the Call Stack
// Call Stack: console.log("Hello")
// console.log("Hello") is removed from the Call Stack

//                                                        Asynchronous Code Rules

// We have a problem though.
// We have to wait for the Call Stack to be empty before the Event Loop can push the setTimeout callback from the Callback Queue to the Call Stack.
// What if we had a lot of code synchronous running in the Call Stack?
// The setTimeout callback would have to wait a long time before it could be executed.
// This is not ideal, for the web, because we want to keep the user experience as smooth as possible.

// We need something to block the Call Stack from running other code, while we wait for the setTimeout callback to be executed.
// Kind of like how a for loop blocks the Call Stack from running other code until it is finished.
// This is where Promises come in.

// At a high-level what we want to happen is:
// 1. We want to run some asynchronous code
// 2. We want to wait for it to complete before moving on to the next line of code

function printHello() {
  console.log("Hello");
}
function blockFor1Sec() {
  // Blocks in the JavaScript thread for 1 second
}

// The initial setTimeout is added to the Call Stack, but the printHello function is added to the Callback Queue.
setTimeout(printHello, 0); // Asynchronous (after a delay the printHello function is added to the Callback Queue)
blockFor1Sec(); // Synchronous
console.log("Me first!"); // Synchronous

// At 0ms -> Call Stack: setTimeout(printHello, 0)
// At 0ms -> Web API: setTimeout (0ms)
// At 0ms -> setTimeout callback (printHello) is added to the Callback Queue
// At 0ms -> setTimeout(printHello, 0) is removed from the Call Stack
// At 0ms -> Call Stack: blockFor1Sec()
// At 1000ms -> blockFor1Sec() is removed from the Call Stack

// At 1001ms -> Call Stack: console.log("Me first!")
// At 1001ms -> console.log("Me first!") is removed from the Call Stack
// When the Call Stack is empty, the Event Loop pushes the setTimeout callback from the Callback Queue to the Call Stack
// At 1002ms -> Call Stack: printHello() -> ("Hello" is logged to the console)
// printHello() is removed from the Call Stack

// Functions are only allowed off the Call Queue when all global synchronous code on the Call Stack has been removed.
// You could have a million console.logs in the Call Stack, but the setTimeout callback would still have to wait for all of them to be removed before it could be executed.
// This little feature that checks whether the Call Stack is empty
// and moves functions from the Callback Queue to the Call Stack is known as the Event Loop.

// This is why we need Promises and the async/await keywords. (Until ES6 there was no way to block the Call Stack from running other code while we waited for an asynchronous task to complete.)

//                                                       Problems with the Callback Approach to Asynchronous Code
// Callbacks are not a great way to handle asynchronous code, because they can lead to callback hell and inversion of control.

//              Cons
//                                                              Callback Hell
// Callback hell is a term used to describe the situation where you have a lot of nested callbacks.
// This makes the code hard to read and understand, and can lead to bugs.

// A lot of the time our callback functions get some data and then call another function with that data.
// That data is only accessible inside the callback function.
// In order to manipulate that data, we have to nest our callback functions inside each other.
// This can lead to a lot of nested callbacks, which can be hard to read and understand.

//                                                              Inversion of Control
// Inversion of control is a programming principle where the flow of control is inverted.
// In synchronous code, the programmer controls the flow of the program.
// In asynchronous code, the flow of the program is controlled by the callbacks.
// This can make the code hard to read and understand.

// Our response data is only available inside the callback function.

//              Benefits
// Super explicit and clear once you understand how they work

//                                                          Async Browser Features

// A big part of what we are doing in JavaScript is not actually happening in JavaScript itself. It's JavaScript interacting with the browser.

// The browser has a lot of built-in asynchronous features, like the DOM API, AJAX, and setTimeout.
// These features allow you to interact with the browser and the internet in an asynchronous way.
// Most of the Async Features we use in JS are provided by the browser and not built-in to JavaScript itself.

// JS Labels -> Browser Features
// The DOM API allows you to interact with the HTML and CSS of a webpage. (document -> HTML DOM)
document.body.style.backgroundColor = "red"; // Synchronous and blocking (However rendering is asynchronous)
// AJAX allows you to make network requests to a server. (fetch/XHR -> Network Requests)
fetch("https://api.github.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data));

XHR = new XMLHttpRequest();
XHR.onreadystatechange = function () {
  if (XHR.readyState === 4 && XHR.status === 200) {
    console.log(XHR.responseText);
  }
};
// setTimeout allows you to run a function after a certain amount of time has passed. (setTimeout -> Timer)
// console.log is synchronous, but the browser handles it asynchronously. (console.log -> Console)
setTimeout(() => console.log("Hello"), 1000);

// This understanding is key because, once you understand most browser features are asynchronous, you can start to understand how to work with them.
// You have to prepare for the fact that most of the things you do in JavaScript are going to be asynchronous and you have to handle them accordingly.
// e.g. You can't just call fetch and expect the data to be there immediately. You have to wait for the network request to complete.
