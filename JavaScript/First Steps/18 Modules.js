// Modules let us split big codebases across multiple files
// They are a more modern way to include JS code in a web page

// A script is the traditional way to include JS code in a web page, when you use a script,
// The browser will download and execute the script immediately before it continues parsing the HTML
// Scripts are executed in the global scope,
// so variables and functions declared in a script are visible throughout the web page.
// This can lead to naming conflicts and other problems when including multiple scripts in a page

// Importing a JS file as a script
//                                                      <script>...</script>
//                                                      <script src="file.js"></script>

// Modules are deferred by default
// They don't download or run until the entire HTML document is parsed

// Top-level Await (outside of an async function) is only allowed in modules
let response = await fetch("/article/promise-chaining/user.json");
let user = await response.json();

// Modules are always in "strict mode" (no need to declare "use strict")
// At the end of our doggo program we had to use the await keyword outside of a function
// This isn't usually possible in normal JS Scripts... but it is in both Modules and Node.js 14.8.0 and later

// Importing a JS file as a module
//                                              <script type="module">//...</script>;
//                                              <script type="module" src="file.js"></script>;

//                                                                      Module Scope
// Modules have their own scope
// Top-level variables and functions are not visible outside of the module
// file1.js
let message = "Hello";
// file2.js
alert(message); // Error: message is not defined

//                                                                      Export and Import

// Export lets us export variables and functions from a module scope to the outside world
// file.js
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}

// Import lets us import variables and functions from other modules
// main.js
import { sayHi } from "./file.js";
alert(sayHi); // function...
sayHi("John"); // Hello, John!

//                                                                      Multiple Exports and Imports

// We can export and import multiple things at once
// file.js
export { sayHi, sayBye };
function sayHi(user) {
  alert(`Hello, ${user}!`);
}
function sayBye(user) {
  alert(`Bye, ${user}!`);
}

// You can use the export keyword as many times as you want in a single module,
// However, you can only use the export default keyword once in a single module
// file2.js
export const a = 1;
export const b = 2;
export default function sayYo() { console.log("Yo!"); }

// We can import everything into an object using * into an object
// We can call properties and methods via objectName.propertyName
// main.js
import * as say from "./file.js";
say.sayHi("John"); // Hello, John!
say.sayBye("John"); // Bye, John!

import sayYo, {a, b} from "./file2.js";
console.log(a, b); // 1 2
sayYo(); // Yo!

//                                                                     Renaming Exports and Imports

// We can rename things while exporting and importing
// main2.js
import { sayHi as hi, sayBye as bye } from "./file.js"; // Rename the function while importing
hi("John"); // Hello, John!
bye("John"); // Bye, John!

//                                                                     Export Default
// A default export can be imported without curly braces
// There can only be one default export per module, this is useful for exporting a single value
// file.js
export default function sayHi(user) {
  alert(`Hello, ${user}!`);
}
// main.js
import sayHi from "./file.js"; // No need for curly braces
sayHi("John"); // Hello, John!


// In Node.js, each file is treated as a separate module by default (CommonJS)
// Variables and functions are local to the module
// To use them in another module, they must be exported
// And then imported into the other module

//                                                                      Module Paths
// Modules can be imported from other directories
// file.js
import { sayHi } from "/path/to/file.js";
// main.js
import { sayHi } from "/path/to/file.js";

//                                                                      Module Loading
// Modules are loaded asynchronously when imported using import
// This means that the rest of the code is not blocked while the module is being fetched
// However, the module is guaranteed to be fully loaded and executed before the rest of the code (weird, idgi)

// export.mjs
function sayHello() {
    console.log("Hello, John! ");
  }

  export default sayHello; // Exporting a single value
// main.js
import sayHello from "./export.mjs";
sayHello(); // Hello, John!
console.log("Hello, Owen!");

// Output:
// Hello, John!
// Hello, Owen!

//                                                                      Dynamic Imports

// We can load modules dynamically ("during run-time" or "on-the-fly", not "statically" as in "at the beginning")
// main.js
let modulePath = prompt("Which module to load?");
import(modulePath)
  .then((obj) => {
    console.log(obj); // Do something with the module object
  })
  .catch((err) => {
    console.error("Loading error:", err); // Handle the loading error
  });
// We can use import() to load modules dynamically  (returns a promise)
// The module path can be any string, including a variable
// The module is loaded asynchronously
// The promise is resolved with the module object
// The promise is rejected if the module can't be loaded

//                                                                     CommonJS and ES Modules
// CommonJS is the module system used in Node.js 13.1.0 and earlier for loading & managing dependencies
// ES Modules is the module system used in modern browsers and in Node.js 13.2.0 and later
// They are not compatible with each other
// (ESM can consume and use CommonJS modules, but CommonJS cannot consume ESM modules)

// CommonJS uses require() and module.exports
// math.js
const add = (a, b) => a + b;
module.exports = add;

// multiple exports
const subtract = (a, b) => a - b;
module.exports = { add, subtract };

// app.js
const add = require("./math.js");
console.log(add(1, 2)); // Outputs: 3

// multiple imports
const { add, subtract } = require("./math.js");

// CommonJS is synchronous, meaning it blocks subsequent code from running until a module is fully loaded
// This is fine for server-side code, but is not ideal for client-side code (web browsers)
// where you want to load scripts asynchronously to avoid blocking the main thread

// For this reason, ES Modules were introduced to the JavaScript language
// ES Modules uses import and export (default and named, introduced in ES6)

// math.js
export const add = (a, b) => a + b;
// app.js
import { add } from "./math.js";
console.log(add(1, 2)); // Outputs: 3

// ES Modules are asynchronous, meaning they load in the background and only execute once fully loaded
// This is ideal for client-side code, as it allows the rest of the page to load while the scripts are being fetched

// When running something via Node.js, you can use the .mjs extension to use ES Modules instead of CommonJS
// .js files are treated as CommonJS modules by default when using Node.js
// It's either that or you can use the "type": "module" field in the package.json file to use ES Modules

let packageJson = {
    "name": "my-project",
    "version": "1.0.0",
    "type": "module",
    "scripts": {
      "start": "node your-script.js"
    },
    "dependencies": {
      // your dependencies
    }
  }


//                                                                      Module Scripts

// Modules are deferred by default
// They don't run until the entire document is parsed
// This is different from regular scripts, which run immediately
// We can use the defer attribute to defer a regular script
// We can use the async attribute to make a module run pseudo-immediately

//                 Default
//            <script src="file.js"></script> // Immediate (Download and execute immediately block the HTML parsing as soon as the script tag is encountered)
//            <script type="module" src="file.js"></script> // Deferred (Download and execute after the HTML parsing)

//                  Defer
//             <script src="file.js" defer></script> // Deferred (Download immediately, execute after the HTML parsing)
//             <script type="module" src="file.js" defer></script> // Deferred (Doesn't matter, modules are deferred by default)

//                  Async
//             <script src="file.js" async></script> // Async (Download in parallel with HTML parsing, execute immediately after download is complete, regardless of the HTML parsing)
//             <script type="module" src="file.js" async></script> // Async

// Async executes when downloaded entirely, not when the script tag is encountered, doesn't block the HTML parsing.
// Leading to perceived faster page load times

//                                                                      Summary

// Modules let us split big codebases across multiple files
// Modules have their own scope
// Top-level variables and functions are not visible outside of the module
// Modules can export and import functions and variables
// There can be a default export
// Modules can be imported from other directories
// Modules are loaded asynchronously
// We can load modules dynamically using import()
// Modules are deferred by default
// We can use async to make a module run immediately
