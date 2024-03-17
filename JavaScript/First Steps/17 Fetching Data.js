// URL's point to resources on the web, such as web pages, images, and videos.
// API's provide URLs that point to data we care about and we can query/fetch that data.

// URL: https://dog.ceo/api/breed/hound/list
// This URL points to a list of all the breeds of hound dogs.
let houndList = {
  message: [
    "afghan",
    "basset",
    "blood",
    "english",
    "ibizan",
    "plott",
    "walker",
  ],
  status: "success",
}; // JSON data (JavaScript Object Notation) from the URL

//                                                        Fetch and Promises

// fetch() let's us make network requests similar to XMLHttpRequest (XHR), and fetch this data from the URL.
// But if we run it in the console, we see something weird...
fetch("https://dog.ceo/api/breed/hound/list");
// Output: Promise {<pending>}

// Fetch is an Async Function, so it takes a while to get the data, so it returns a promise.
// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A promise can be in one of three states:
// 1. Pending: initial state, neither fulfilled nor rejected.
// 2. Fulfilled: meaning that the operation completed successfully.
// 3. Rejected: meaning that the operation failed.
// It takes time for Promises to resolve, so they are "asynchronous".

// When a Promise is created using the fetch() method, it's in the pending state.
// Once the Async operation is complete, the Promise is either fulfilled or rejected.
// It is then added to the Task Queue, and the Event Loop moves it to the Call Stack when the Call Stack is empty
// If the Promise is fulfilled, the then() method is called with the result.
// If the Promise is rejected, the catch() method is called with the error.

// But what if our program needs the data and we want to stop and wait for the data to arrive? (wait for the Promise to Resolve)
// The await keyword lets us tell JS to wait for an async operation to complete before moving on.
// We can ONLY use the await keyword inside an async function. (Or at the top-level of a module from ECMAScript 2022)
async function fetchData() {
  let response = await fetch("https://dog.ceo/api/breed/hound/list");
  console.log(response); // {message: Array(7), status: "success"}
}

// The Promise we get from fetch() resolves to a Response object
// The body of the Response object is a ReadableStream, which is a stream of data that we can read from.
let responseObject = {
  message: [
    "afghan",
    "basset",
    "blood",
    "english",
    "ibizan",
    "plott",
    "walker",
  ],
  status: "success",
};

// We can use the json() method to parse the JSON data from the Response Object body as a JSON object.
let jsonData = responseObject.json(); // Returns another promise
console.log(jsonData); // Promise {<pending>}

// But that gives us another Promise, so we use await again to wait for it to resolve.
async function fetchData2() {
  let response = await fetch("https://dog.ceo/api/breed/hound/list"); // fetch() returns a Promise, so we use await to wait for it to resolve
  let data = await response.json(); // json() is an async function, so we use await to wait for it to complete
  console.log(data); // {message: Array(7), status: "success"}
}

//                                                        Destructuring
// Now we have to use the Data we got from the URL

//                                                  Destructuring  Objects
// De-structuring is a way to unpack values from arrays, or properties from objects, into distinct variables.
// We can use de-structuring to unpack the message property from the data object.
// We can use the message property to get the list of breeds of hound dogs.
async function fetchData3() {
  let response = await fetch("https://dog.ceo/api/breed/hound/list");
  let data = await response.json();
  let { message } = data; // De-structuring
  console.log(message); // (7) ["afghan", "basset", "blood", "english", "ibizan", "plott", "walker"]
}

// We can use de-structuring to unpack the message property and give it a different name.
async function fetchData4() {
  let response = await fetch("https://dog.ceo/api/breed/hound/list");
  let data = await response.json();
  let { message: breeds } = data; // De-structuring
  console.log(breeds); // (7) ["afghan", "basset", "blood", "english", "ibizan", "plott", "walker"]
}

// As long as the property exists on the object, we can use de-structuring to unpack it into a variable.
const spices = [
  { name: "Emma", nickname: "Baby" },
  { name: "Geri", nickname: "Ginger" },
  { name: "Mel B", nickname: "Scary" },
  { name: "Mel C", nickname: "Sporty" },
  { name: "Victoria", nickname: "Posh" },
];

let { name, nickname } = spices[0];
console.log(name, nickname); // Emma Baby

// If we only care about some of the properties, we can omit the others
let { nickname: n } = spices[2];
console.log(n); // Scary

//                                                Destructuring  Arrays

// We can use de-structuring to unpack the first and second elements of the message array.
// We can also destructure Arrays, assigning variables for their items
const [baby, ginger, scary, sporty, posh] = spices;
console.log(baby); // { name: 'Emma', nickname: 'Baby' }    // The first element
console.log(ginger); // { name: 'Geri', nickname: 'Ginger' } // The second element
console.log(scary); // { name: 'Mel B', nickname: 'Scary' }  // The third element
console.log(sporty); // { name: 'Mel C', nickname: 'Sporty' } // The fourth element
console.log(posh); // { name: 'Victoria', nickname: 'Posh' } // The fifth element

// We can ignore elements we don't care about by leaving them out of the de-structuring.
const [emma, geri] = spices;
console.log(emma); // { name: 'Emma', nickname: 'Baby' }'
console.log(geri); // { name: 'Geri', nickname: 'Ginger' }

// We can use commas to skip elements we don't care about.
const [first, , third] = spices;
console.log(first); // { name: 'Emma', nickname: 'Baby' }
console.log(third); // { name: 'Mel B', nickname: 'Scary' }

const [, , melB] = spices;
console.log(melB); // { name: 'Mel B', nickname: 'Scary' }

// We can use the rest parameter to collect the remaining elements of the array.
const [a, b, ...rest] = spices;
console.log(a); // { name: 'Emma', nickname: 'Baby' }
console.log(b); // { name: 'Geri', nickname: 'Ginger' }
console.log(rest); // (3) [{ name: 'Mel B', nickname: 'Scary' }, { name: 'Mel C', nickname: 'Sporty' }, { name: 'Victoria', nickname: 'Posh' }]

//                                   Using Fetch Outside of an Async Function

// We can use the then() method to handle the result of the fetch.
// We typically do not await the .then() method, because it's not an async function.

// This flexibility, allows you to do other things while you wait for the Promise to resolve.
// This allows us to use it in a synchronous functions.

// You typically use the .then() method precisely because you don't know when the Promise will resolve.
// You're scheduling a callback to run when the Promise resolves, whenever it does.
// The timing of the Promise resolving is not mission-critical to your code, but you want to do something when it does.
fetch("https://dog.ceo/api/breed/hound/list")
  .then((response) => response.json())
  .then((data) => console.log(data));
// {message: Array(7), status: "success"}
// message: (7) ["afghan", "basset", "blood", "english", "ibizan", "plott", "walker"]
// status: "success"
// __proto__: Object
// This is the JSON data we wanted.
// The first then() method takes a callback function that takes the response as an argument.
// The response is an object that represents the response to the request.
// The second then() method takes a callback function that takes the data as an argument.
// The data is the JSON data we wanted.
// We can use the data to do whatever we want, such as display it on a web page.

//                                   Custom Promises

// We can create our own promises using the Promise object.
// You'd typically create your own Promises in order to wrap an asynchronous operation.
// For example, you might wrap a fetch() call in a Promise; basically anything that takes time to complete.
const promise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("The operation completed successfully.");
  } else {
    reject("The operation failed.");
  }
});

// The Promise object takes a callback function as an argument.
// The callback function takes two arguments, resolve and reject.
// The resolve and reject functions are used to change the state of the promise.
// If the operation is successful, we call resolve with the result.
// If the operation fails, we call reject with the error.
// We can use the then() method to handle the result of the promise.
promise.then((result) => console.log(result));

// This simulates an asynchronous operation (like fetching data) and waits 2 seconds before resolving the Promise.
// Signalling that the data is ready.
let promise2 = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation (like fetching data)
  setTimeout(() => {
    resolve("Data is ready!"); // Resolve the Promise after 2 seconds
  }, 2000);
});

// We can use the then() method to handle the result of the promise.
promise2.then((data) => console.log(data)); // Logs "Data is ready!" after 2 seconds

// We can use the catch() method to handle the error if the promise is rejected.
const promise3 = new Promise((resolve, reject) => {
  const success = false;
  if (success) {
    resolve("The operation completed successfully.");
  } else {
    reject("The operation failed.");
  }
});

promise3
  .then((result) => console.log(result))
  .catch((error) => console.log(error)); // Logs "The operation failed."

// We can use the finally() method to run code after the promise is settled.
// The finally() method takes a callback function as an argument.
// The callback function runs after the promise is settled, whether it's fulfilled or rejected.
promise3
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => console.log("The promise is settled.")); // Logs "The promise is settled."


//                                                      Exercise
/* Follow TODO 2 to complete the getBreedFromURL function with destructuring

The string method .split() will be useful -
it returns an array of substrings by splitting a string at a certain character:
 */
let [first, middle, last] = "Anjana Sofia Vakil".split(" ");
console.log(first); // Anjana
console.log(middle); // Sofia
console.log(last); // Vakil

// TODO 2
// Given a URL such as "https://images.dog.ceo/breeds/poodle-standard/n02113799_2280.jpg"
// return the breed name string as formatted in the breed list, e.g. "standard poodle"
function getBreedFromURL(url) {
  // The string method .split(char) may come in handy
  let parts = url.split("/"); // ["https:", "", "images.dog.ceo", "breeds", "poodle-standard", "n02113799_2280.jpg"]
  let breedList = parts[4].split("-"); // ["poodle", "standard"]

  //let breed = parts[4].split("-").join(" "); // "poodle standard"
  // Try to use destructuring as much as you can
  const [breed, subBreed] = breedList; // "poodle", "standard"
  return `${subBreed} ${breed}`;
}
