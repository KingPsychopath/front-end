// The two main things that are done in coding are:

// 1. Saving Data (e.g. In a Quiz game the scores of the users)
// 2. Performing Operations on Data (e.g. Increase a user score by 2)

// That's it, however it becomes complex because even in the simplest Quiz Game.
// We need to save a lot of users. All of those users have a ton of properties e.g. name, score, email, etc.
// And we need to perform a lot of operations on those users e.g. increase score, decrease score, etc.

// So, we need a way to save data and perform operations on that data in a way that is easy to manage and understand.
// That is where Classes and Prototypes come in.

// Classes and Prototypes make code easy to add features to and are relatively performant.

//                                                        Encapsulation
// Classes and Prototypes are a way to encapsulate data and operations on that data.


// Say we have a method to increment a score of a user by 2.
// We do this a lot so we need this function to be easy to access wherever we are storing the user data.
// We also don't want that function to be used to increment any other value like say age, so we need to restrict it to only the user score.
// The encapsulation is the concept of bundling the data and the operations on that data together in a single unit. (e.g. a class)
const user1 = {
  // An Object literal that represents a user
  name: "Phil",
  score: 4,
  increment: function () {
    this.score++;
  },
};

// Now using dot notation we can access the increment function and increment the score of the user1 specifically.
user1.increment();
console.log(user1.score); // 5

// You can also explicitly assign properties to the object to create a user.
const user2 = {};
user2.name = "Julia";
user2.score = 6;
user2.increment = function () {
  this.score++;
};

// A built-in function of JS that let's us create an empty object.
const user3 = Object.create(null);
console.log(user3); // {}

user3.name = "Eva";
user3.score = 9;
user3.increment = function () {
  this.score++;
};

console.log(user3); // { name: 'Eva', score: 9, increment: [Function (anonymous)] }

//                                                          Using Functions to Create Users

// None of these options are optimal because we have to rewrite the same code for every user. It's an anti-pattern. (Don't Repeat Yourself)
// Whenever we have code that we use over and over again, we typically wrap it in a function; you can think of a class as a function that creates objects.
// We can create a function that creates users for us.
function userCreator(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function () {
    newUser.score++;
  };
  return newUser;
}

const user4 = userCreator("Will", 12);
user4.increment();
console.log(user4.score); // 13
// This get's rid of the repetition but it's still not optimal in practice because we are creating the increment function for every user. (Memory Inefficient)
// This is where Classes and Prototypes come in.
// Everything else we do from now is about making this idea more efficient and easier to use.

//                                                          Using Prototype Chains
// We can use the prototype chain to make the code more memory efficient.
// The prototype chain is a way to make objects inherit properties from other objects.
// We can create a single increment function and have all the users inherit that function. (Point to the Object containing the function)
// The prototype is an object that is shared among all instances of a class. (It's like a blueprint for methods)
const userFunctionStore = {
  increment: function () {
    this.score++; // an implicit parameter reference to the object that calls the function.
  },
  login: function () {
    console.log("You're logged in");
  },
};

// The increment and login functions are now methods on the prototype of the user object.
function userCreator2(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

// This function is able to be used by all users respectively on their own data.
const user5 = userCreator2("Eva", 9);
user5.increment; // [Function: increment]
const user6 = userCreator2("Will", 12);
user6.increment; // [Function: increment]
user6.login; // [Function: login]

// This is the absolute core of what a class is in JavaScript.
// Classes are just syntactic sugar for this pattern.

//                                                         What are Prototypes?
// Prototypes are objects that are shared among multiple instances of a class.
// An object can only have one prototype. (All objects have a prototype except the base object & arrow functions)

// It contains the properties and methods that are SHARED among all instances of the class.
// Any variables defined within a prototype are essentially class-level properties otherwise known as static properties or constants.

// JavaScript has a __proto__ property implicitly defined on every object that points to the prototype object.
// The prototype object has a constructor property that points back to the function that created the object.
const newUser = Object.create(userFunctionStore);
// This means that when JS does not find a property on an object it looks up the prototype chain to find it.
// e.g. userFunctionStore is the prototype of user5 and user6. (user5.__proto__ === userFunctionStore)

// __proto__ is a getter/setter for the [[Prototype]] of an object.
console.log(newUser.__proto__ === userFunctionStore); // true
// This is how we can share methods among objects.
// This is how we can create a class in JavaScript.

// class.constructor is a reference to the function that created the object.
console.log(user5.constructor === userCreator2); // true
console.log(newUser.constructor === Object); // true

//                                                         Using the 'this' keyword
// The this keyword in JavaScript is a special identifier that is automatically defined in the scope of every function.
//  It refers to the object that is the "owner" of the current execution context.

// this is the context of sayHello refers to the object that is before the dot so this === user.
user.sayHello(); // this === user
// It allows the sayHello method to access other properties of the user object such as this.name.
function sayHello() {
  console.log("Hello, " + this.name);
} // basically imagine this.name === user.name in this context.

//                                                                Summary of 'this'
// 1. Function Context

// The implicit value of 'this' can change depending on how a function is called.
// e.g. as a method:
user.sayHello(); // this === user
// e.g. as a function:
sayHello(); // this === global object (window in the browser, global in Node)
// e.g. as a constructor:
new User(); // this === the new object being constructed (User)
// e.g. using call, apply, or bind:
sayHello.call(userImPointingTo); // this === userImPointingTo

// 2. Global Context
// In the global execution context, 'this' refers to the `global` object. In a browser, this is the window object, in Node this would be `global`

// 3. Arrow Functions
// Arrow functions do not have their own 'this' value. They inherit `this` from the surrounding parent scope.

//                       Arrow Functions override the 'this' keyword's default binding
// Arrow functions do not have their own 'this' value.
// They inherit the 'this' value from the enclosing lexical context.
// This makes them unsuitable for methods or constructors.
// Arrow functions are best suited for non-method functions.

// This is because arrows functions do not create a new execution context.
// Every default function call however, creates a new execution context.

//etc.
const user = {
  name: "Phil",
  sayHello: () => {
    console.log(this);
    console.log("Hello, " + this.name);
  },
};
user.sayHello(); // this === global object (window in the browser, global in Node)
// this.name = undefined

// The 'this' keyword is a common source of bugs in JavaScript.
// It is important to understand how it works and how to use it correctly.

//                                                             Classes
// A class is a blueprint for creating objects with pre-defined properties and methods.
// It's a short-hand way of creating objects that share the same properties and methods. but with different instance-specific values.

// When you create an object using a constructor function with the 'new' keyword, you are creating an instance of a class.
// The new object is linked to the prototype of the constructor function; this allows inheritance of properties and methods.
const user1 = new User("Phil", 4);
const user2 = new User("Julia", 5);

// The 'new' keyword creates a new object instance and sets the prototype of the new object to the prototype of the constructor function.
// Abstracting away all the prototype chain stuff and making it easier to create objects.

//                                                         All Functions in JavaScript are Objects
function multiplyBy2(num) {
  return num * 2;
}

// This is the same as:
const multiplyBy2 = new Function("num", "return num * 2");

// Therefore, we can add properties to functions.
multiplyBy2.result = 10;
console.log(multiplyBy2.result); // 10

// As a result all functions have a prototype property.
multiplyBy2.prototype; // {}

//                                                     new Keyword

function userCreator(name, score) {
  this.name = name;
  this.score = score;
}

// Therefore when you create a new object using the 'new' keyword, the prototype of the object is set to the prototype of the constructor function.
const user1 = new userCreator("Phil", 4);
user1.__proto__ === userCreator.prototype; // true (__proto__ is not the prototype property itself but a getter/setter for the [[Prototype]] of an object)

// Prefer Object.getPrototypeOf(obj) or Object.setPrototypeOf(obj, prototype) over obj.__proto__.

userCreator.prototype.increment = function () {
  this.score++;
};
const user2 = new userCreator("Julia", 5);

// We can therefore increment the score of both users in spite of the fact that the increment function was added after the creation of the latter user.
// JS will search the object for the property and if it doesn't find it, it will search the prototype chain.
user1.increment(); // user1.score === 5
user2.increment(); // user2.score === 6

//                                                class Keyword
// Because we are using a this.name in the function, this points to the global object; this is not what we want.
function userCreator(name, score) {
  this.name = name; // this === global object name is a variable in the global object.
  this.score = score;
}

// A common pattern is to capitalize the first letter of the class name.
// This is because there is no explicit difference between a constructor function and a regular function.
// This just helps avoid errors.
function User(name, score) {
  this.name = name;
  this.score = score;
} // This is a constructor function.

// The class keyword is a way to create a constructor function.
// The whole idea of prototypes is while functions and variables are packaged together, they are still separately declared.
// Classes try to make this more explicit, by declaring the functions and variables in the same place.
class User {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  increment() {
    this.score++;
  }
  login() {
    console.log("login");
  }
}

// The class keyword is just syntactic sugar for the constructor function.
// We can still perform the same operations on the class as we would on the constructor function.
const user1 = new User("Phil", 4); // user1 === { name: 'Phil', score: 4 }
user1.increment(); // user1.score === 5
user1.login(); // Output: login
