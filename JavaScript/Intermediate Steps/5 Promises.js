// Promises are a way of saying to JavaScript, "Hey, I'm going to run some asynchronous code,
// and I want you to wait for it to finish before you move on to the next line of code."

// When you trigger something async, don't just wait for the main thread to be free,
//  but also do something when it's done (like a callback, but better).

// It is a tight consistency between some background tasks and the main thread.
// The Promise Object is a placeholder for the eventual result of an asynchronous operation.
// It is returned immediately as pending, and then settles to either fulfilled when the operation is successful, or rejected if the operation fails.

// Fetch is a Promise-based API for making HTTP requests.
// The Fetch Function is a two-pronged facade function that both makes requests(XMLHTTP) and returns a Promise(in-main memory).
// It has a consequence out in the browser, but also a consequence in the JavaScript runtime.
function display(data) {
  console.log(data);
}
const futureData = fetch("https://twitter.com/will/tweets/1"); // Returns a Promise
futureData.then(display); // Passes the data to the display function when the Promise resolves
console.log("Me first!");

// At 0ms -> Call Stack: fetch
// At 0ms -> Returns a Promise<pending>
// At 0ms -> Web API: fetch (network request)
// At 0ms -> fetch is removed from the Call Stack
// At 0ms -> Call Stack: console.log("Me first!")
// At 0ms -> console.log("Me first!") is removed from the Call Stack
// At 2000ms -> fetch is done, Promise is resolved (Promise<fulfilled>)
// At 2000ms -> display is added to the Callback Queue
// At 2000ms -> Event Loop pushes display from the Callback Queue to the Call Stack
// Call Stack: display(data)
// display is removed from the Call Stack

// Fetch automatically creates a Promise Object that has two properties: status and value.
// The status is initially pending, and the value is undefined.
// When the fetch is done, the status changes to fulfilled, and the value is the data that was fetched.

// The promise resolves to a Response Object, which is a representation of the response to the request.
// The Response Object does not contain the actual data yet, but it has methods for working with the data.
// The Response Object has a method called json() that returns a Promise that resolves to the actual data.
// The json() method reads the response to completion and returns a Promise that resolves with the result of parsing the body text as JSON.
fetch('https://api.example.com/data')
  .then(response => response.json()) // this returns a promise
  .then(data => console.log(data)) // this logs the data when the promise is resolved
  .catch(error => console.error('Error:', error));

//                                                         Microtask Queue (Promise Queue (Callbacks vs Promises))
// The difference between callbacks and promises is that; callbacks add a callback function to the callback queue, while promises add a promise object to the promise queue.

// The promise queue is a data structure that holds all the promise objects that are waiting to be resolved, it's a hidden property of the browser, mirrored in the JS runtime
// Promise objects are not managed in a global "promise queue" in the same way that callbacks are managed in the callback queue
// Instead, each Promise object independently tracks its own state and result.
// When a Promise is settled (either fulfilled or rejected),
// its associated handlers (callback functions registered via then, catch, or finally) are scheduled to run in the `microtask queue`.

// This is a separate queue from the callback queue(aka the task queue), and it has a higher priority.

async function addToCallbackQueue() {
  console.log("I'm a callback function");
}
function addToPromiseQueue() {
  console.log("I'm a promise object");
}

setTimeout(addToCallbackQueue, 0);
new Promise((resolve, reject) => {
  resolve();
}).then(addToPromiseQueue);

// At 0ms -> Call Stack: setTimeout(addToCallbackQueue, 0)
// At 0ms -> Web API: setTimeout
// At 0ms -> setTimeout is removed from the Call Stack
// At 0ms -> Call Stack: new Promise
// At 0ms -> Returns a Promise<pending>
// At 0ms -> Web API: Promise
// At 0ms -> new Promise is removed from the Call Stack
// At 0ms -> Callback Queue: addToCallbackQueue

// At 0ms -> Microtask Queue: addToPromiseQueue
// At 0ms -> Event Loop pushes addToPromiseQueue from the Microtask Queue to the Call Stack
// Call Stack: addToPromiseQueue
// addToPromiseQueue is removed from the Call Stack

// At 0ms -> Event Loop pushes addToCallbackQueue from the Callback Queue to the Call Stack
// Call Stack: addToCallbackQueue
// addToCallbackQueue is removed from the Call Stack


function display(data) {
  console.log(data);
}
function printHello() {
  console.log("Hello");
}
function blockFor300ms() {
  // blocks in the JavaScript runtime for 300ms
}

setTimeout(printHello, 0);

const futureData = fetch("https://twitter.com/will/tweets/1");
futureData.then(display);

blockFor300ms();
console.log("Me first!");

// Output: "Me first! -> display(data) -> "Hello"

// At 0ms -> Call Stack: setTimeout(printHello, 0)
// At 0ms -> Web API: setTimeout
// At 0ms -> setTimeout is removed from the Call Stack
// At 0ms -> Callback Queue: printHello

// At 1ms -> Call Stack: fetch
// At 1ms -> Returns a Promise<pending>
// At 1ms -> Web API: fetch (network request)
// At 1ms -> fetch is removed from the Call Stack

// At 270ms -> fetch is done, Promise is resolved (Promise<fulfilled>)
// At 270ms -> display is added to the Microtask Queue

// At 2ms -> Call Stack: blockFor300ms
// At 302ms -> blockFor300ms is removed from the Call Stack
// At 302ms -> Call Stack: console.log("Me first!")
// At 302ms -> Call Stack is empty

// At 303ms -> Event Loop pushes display from the Microtask Queue to the Call Stack (higher priority than the Callback Queue)
// Call Stack: display(data)
// display is removed from the Call Stack

// At 304ms -> Event Loop pushes printHello from the Callback Queue to the Call Stack
// Call Stack: printHello
// printHello is removed from the Call Stack

// Summary:
// Any function returned via an async operation is added to the Callback Queue. (The main Task Queue)
// Any function attached to a Promise Object using 'then' or 'catch' are added to the Microtask Queue. (The Promise Queue)



// The Promise object is a built-in object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// The Promise object has several properties and methods, including then and catch for handling fulfillment and rejection, respectively
// It also has an internal [[PromiseState]] property that can be "pending", "fulfilled", or "rejected", (initially pending)
// and an internal [[PromiseResult]] property that holds the promise's current value or reason for rejection.
// When the promise is resolved, the status changes to fulfilled, and the value is the data that was fetched.

// Resolving a promise means that the async operation associated with the promise is completed.
// The [[PromiseState]] has transitioned from 'pending' to 'fulfilled' in the Promise object.
// The resulting value of the promise is the value that you pass to the resolve function (when you create it)
let promise = new Promise((resolve, reject) => {
  // some asynchronous operation
  let data = "Hello, world!";
  resolve(data); // The Promise is resolved with the value of `data`
  reject("Something went wrong!"); // The Promise is rejected with the value of "Something went wrong!"
});
// The Promise object is resolved with the value of `data`
// Meaning when you call `promise.then`, the callback function will be called with the value of `data`
promise.then((data) => {
  console.log(data); // Hello, world!
})
// The Promise object is rejected with the value of "Something went wrong!"
// Meaning when you call `promise.catch`, the callback function will be called with the value of "Something went wrong!"
.catch((error) => {
  console.error(error);
})
// The promise object also has a 'finally' method that takes a callback function as an argument.
// 'finally' is executed when the promise is settled automatically, and it receives no arguments.
.finally(() => {
  console.log("Promise settled");
}


//                                                                 Then

// The promise object also has a 'then' method that takes a callback function as an argument.
// 'then' is executed when the promise is resolved automatically, and it receives the value of the promise as an argument.
// 'then' returns and assigns a new promise object to the calling variable.

// The callback function is 'then' added to the microtask queue, and executed after the current call stack is empty. (higher priority than the callback queue)
// This function is called a fulfillment handler, and it is used to handle the data returned by the promise.

// If you think of it this way, a single Promise is like a single callback function
futureData = fetch("https://twitter.com/will/tweets/1");
// The left hand side resolves to a Promise Object, and the right hand side is the callback function.
// The Promise Object is a placeholder for the eventual result of an asynchronous operation.
// This is beneficial because rather than the task just being added to a arbitrary queue, the Promise Object is created immediately and can be used to handle the result when it is ready.
// { status: "pending", value: undefined }

// The then method is used to add a callback function to the promise object.
futureData.then(display);
// The then method returns a new promise object, which is resolved with the return value of the callback function.
// { status: "fulfilled", value: data }

// Each then method is essentially a callback function operating on the value of the previous promise assigned to futureData.
// This is why you can chain then methods together.
futureData.then(display).then(printHello);
// { status: "fulfilled", value: data }
// { status: "fulfilled", value: undefined } - because printHello does not return anything

// API's = any functionality that are not in my world but someone elses
// And I can interface with them through a set of rules(parameters) and functions that they provide me.
