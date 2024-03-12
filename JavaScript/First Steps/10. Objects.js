// Objects collect multiple values into a single entity to describe more complex data.
// Objects are made up of key-value pairs, where the key is a string and the value can be any data type.
// The key is still a string, even if it's not in quotes. (It's a string literal.)
// The value can be a primitive, an array, or another object.
// The key-value pairs are separated by commas.
// The entire object is enclosed in curly braces.

// An object literal is a way to create an object using curly braces and key-value pairs.
// Objects allow us to point at related values using descriptive keys.
const js = {
  name: "JavaScript",
  abbreviation: "JS",
  isAwesome: true,
  officialSpec: "ECMAScript",
  birthYear: 1995,
  creator: "Brendan Eich",
};

// The order of the key-value pairs is not guaranteed.
// The key-value pairs are also called properties.
// The key is also called the property name.
// The value is also called the property value.

// Similar to arrays, we can access object properties using dot notation or bracket notation.
console.log(js.name); // "JavaScript"
console.log(js["name"]); // "JavaScript"

// Bracket notation is useful when the property name is stored in a variable.
let propertyName = "name";
console.log(js[propertyName]); // "JavaScript"

// Using property values
js.name.startsWith("Java"); // true
let age = 2022 - js.birthYear; // 27
console.log(`JavaScript is ${age} years old.`); // "JavaScript is 27 years old."

// Setting/Adding property values
const indecisive = {
  lunch: "sandwich",
};
indecisive.lunch = "tacos"; // We can change the value of an existing property.
indecisive.snack = "chips"; // We can add a new property.

console.log(indecisive); // { lunch: "tacos", snack: "chips" }

// Deleting property values
delete indecisive.lunch; // We can delete a property.
console.log(indecisive); // { snack: "chips" }

// Methods - properties can also point to functions.
const dog = {
  name: "Ein",
  breed: "Corgi",
  speak: function () {
    console.log("woof woof");
  },
};
// We can call the function using dot notation.
dog.speak();

// We can also call the function using bracket notation.
dog["speak"]();

// We can also add a method to an object after it's been created.
dog.fetch = function () {
  console.log("fetching");
};
dog.fetch(); // "fetching"

// We can also use the "this" keyword to reference other properties of the object.
const cat = {
  name: "Mittens",
  breed: "Tabby",
  speak: function () {
    console.log(`${this.name} says meow`); // Pulls the name from the context of the object itself.
  },
};
cat.speak(); // "Mittens says meow"

// Nesting
// We can also Nest objects within objects.
// We are basically getting the value of a property that is itself an object.
const menu = {
  lunch: {
    appetizer: "salad",
    main: "spaghetti",
    dessert: "tiramisu",
  },
  dinner: {
    appetizer: "samosa",
    main: "saag paneer",
    dessert: "gulab jamun",
  },
};
const tiramisu = menu.lunch.dessert; // Use dot notation menu -> lunch -> dessert
console.log(tiramisu); // "tiramisu"

// We can also use bracket notation.
const samosa = menu["dinner"]["appetizer"];
console.log(samosa); // "samosa"

// We can also use a mix of both.
const saagPaneer = menu.dinner["main"];
console.log(saagPaneer); // "saag paneer"

// We can also use objects as keys in other objects.
const user = {
  name: "John",
  age: 30,
};
const userDetails = {
  [user]: "user details",
};
console.log(userDetails); // { '[object Object]': 'user details' }

// We can also use objects as values in other objects.
const user1 = {
  name: "John",
  age: 30,
};
const user2 = {
  name: "Jane",
  age: 25,
};
const users = {
  user1: user1,
  user2: user2,
};
console.log(users); // { user1: { name: 'John', age: 30 }, user2: { name: 'Jane', age: 25 } }

// Objects in Arrays & Objects
const spices = [
  { name: "Emma", nickname: "Baby" },
  { name: "Geri", nickname: "Ginger" },
  { name: "Mel B", nickname: "Scary" },
  { name: "Mel C", nickname: "Sporty" },
  { name: "Victoria", nickname: "Posh" },
];
const spiceGirls = {
  albums: ["Spice", "Spiceworld", "Forever"],
  motto: "Girl Power",
  members: spices,
};
spiceGirls.members[0].name; // "Emma"
spiceGirls.members[1].nickname; // "Ginger"

/* From the spiceGirls object, how can we retrieve:

1. "Girl Power"
2. The object representing Ginger Spice
3. "Spiceworld"
4. "Victoria"
*/
// 1.
spiceGirls.motto; // "Girl Power"
spiceGirls["motto"]; // Both are valid.
// 2.
spiceGirls.members[1]; // { name: "Geri", nickname: "Ginger" }
// 3.
spiceGirls.albums[1]; // "Spiceworld"
// 4.
spiceGirls.members[4].name; // "Victoria"
spiceGirls.members[4]["name"]; // Both are valid.

// Built-in Object Methods
// Objects have built-in methods that allow us to perform common tasks.

// Object - a built-in object that has properties and methods for creating and manipulating objects.
// Object.keys() - returns an array of a given object's own property names.
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2005,
};
Object.keys(car); // [ 'make', 'model', 'year' ]

// Object.values() - returns an array of a given object's own property values.
Object.values(car); // [ 'Toyota', 'Corolla', 2005 ]

// Object.entries() - returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
Object.entries(car); // [ [ 'make', 'Toyota' ], [ 'model', 'Corolla' ], [ 'year', 2005 ] ]

// Object.fromEntries() - transforms a list of key-value pairs into an object.
const entries1 = [
  ["name", "John"],
  ["age", 30],
];

Object.fromEntries(entries1); // { name: 'John', age: 30 }

// Have we worked with any complex objects already?
// What properties & methods did we use?

// A method is a function that is a property of an object.
// You can call a method using dot notation or bracket notation (Just like any other property.)
// You have seen methods before: push(), pop(), shift(), unshift(), etc.
// Properties without the () are called accessors(variables), and properties with the () are called methods.

// window - the global object in a web browser.
// It contains properties and methods that are available globally.
// It's also the default object for JavaScript in the browser.
window.innerHeight; // Get the height of the window.
window.innerWidth; // Get the width of the window.
window.alert("Hello, world!"); // Shows an alert dialog box with the specified content and an OK button.

// Document Object Model (DOM) - a programming interface for web documents.
// It represents the page so that programs can change the document structure, style, and content.
// What other properties does document have?
// How can you find out? MDN > Web APIs > Document
document.title = "Tic Tac Toe";
document.querySelector("h2").append(" and love");

// Console - a global object that provides access to the browser's debugging console.
// It provides methods for logging information, warning, error, and other messages to the console.
// MDN > Web APIs > Console
console.log("Hello, world!"); // Log a message to the console.
console.warn("This is a warning!"); // Log a warning to the console.
console.error("This is an error!"); // Log an error to the console.
console.clear(); // Clear the console.

// Math - a built-in object that has properties and methods for mathematical constants and functions.
// MDN > JS > Standard built-in objects > Math
let randomNumber = Math.random(); // Get a random number between 0 and 1.
console.log(randomNumber); // 0.123456789
const pi = Math.PI; // Get the value of pi.
console.log(pi); // 3.141592653589793
const five = Math.abs(-5); // Get the absolute value of a number.
console.log(five); // 5

// String - a built-in object that represents a sequence of characters.
// strings themselves are primitive values, however JavaScript automatically wraps them in String objects when necessary.
// MDN > JS > Standard built-in objects > String
const hello = "hello"; // A string literal, primitive value.
console.log(hello.length); // hello is wrapped in a String object to use the length property.
const yello = hello.toUpperCase(); // hello is wrapped in a String object to use the toUpperCase method.
console.log(yello); // "HELLO"

// Date - a built-in object that represents a date and time.
// MDN > JS > Standard built-in objects > Date
const now = new Date(); // Get the current date and time.
console.log(now); // 2022-01-01T00:00:00.000Z
const year = now.getFullYear(); // Get the year.
console.log(year); // 2022
const month = now.getMonth(); // Get the month (0-11).
console.log(month); // 0
const day = now.getDate(); // Get the day of the month (1-31).
console.log(day); // 1

// Object.assign() - copies the values of all enumerable own properties from one or more source objects to a target object.
const defaults = {
  theme: "dark",
  fontSize: 16,
};
const userPrefs = {
  theme: "light",
  fontSize: 14,
};
Object.assign({}, defaults, userPrefs); // { theme: 'light', fontSize: 14 }

// Object.freeze() - freezes an object: other code can't delete or change any properties.
const frozen = Object.freeze({ name: "John" });
frozen.name = "Jane"; // This will not work.
console.log(frozen.name); // "John"

// Object.seal() - seals an object: other code can't delete or change any properties.
const sealed = Object.seal({ name: "John" });
sealed.name = "Jane"; // This will work.

// Object.is() - compares if two values are the same value.
Object.is(42, 42); // true
Object.is("hello", "hello"); // true
Object.is(42, "42"); // false
Object.is({}, {}); // false

// Object.getOwnPropertyNames() - returns an array of all properties (enumerable or not) found directly upon a given object.
Object.getOwnPropertyNames(car); // [ 'make', 'model', 'year' ]
