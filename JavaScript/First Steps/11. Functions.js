// Values are things
// Variables point to things
// Functions do things


//                                          Functions
// Functions are a way to group together a set of instructions to perform a specific task
// Functions are reusable, and can be called multiple times

// Declaring a function
function half(x) {
  return x / 2;
}

const divideByTwo = (x) => {
  return x / 2;
};

// Calling a function (Using a function)
const result = half(10); // 5
const five = divideByTwo(10); // 5
console.log(result, five); // 5 5

// Functions are hoisted (moved to the top of their containing scope during execution/compilation)
// so they can be called before they are declared
console.log(double(5)); // 10
function double(x) {
    return x * 2;
}


//                                        Parameters and Arguments
// Some functions need more than one value to do their job
// Functions can take in parameters/arguments (inputs) and return a value (output)
function add(x, y) {
  return x + y;
}

add(1, 2); // 3
// Parameters are the names listed in the function definition, (x, y) (the input a function expects)
// Arguments are the real values passed to the function (1, 2)

// Parameters are like and behave as variables for the function, and should be named something that makes sense
function doesThisWork("literally a value") { // SyntaxError: Unexpected string
    return true;
}

function howAboutThis(1weirdVariable!) { // SyntaxError: Unexpected token !
    return true;
}

// What happens if we don't call a function with the intended argument(s)?
// JS is pretty "loosey-goosey" about missing/extra arguments
add(1); // NaN
add(); // NaN
add("Hello"); // Helloundefined
add(1, 2, 3) // 3 (the third argument is ignored)
getRandomNumber("unexpected") // 0.123456789 (the argument is ignored)


//                                          The Return Keyword
// Functions can return a value
function square(x) {
    return x * x;
}
const nine = square(3);

// Some functions don't even need parameters
function getRandomNumber() {
  return Math.random(); // returns a random number between 0 and 1
}
getRandomNumber(); // 0.123456789

// Some functions don't return anything
function sayHello() {
  console.log("Hello");
}
sayHello(); // Hello

// What value is returned when there's no return?
const hm = sayHello("Marc"); // undefined


//                                  Function Expressions and Anonymous Functions (First-Class Functions)
// Functions can be stored in variables (Functions are first-class citizens so they can be treated like any other value)
// This is called a function expression
const myFunction = function() {
  console.log("Hello");
};

const myFunction2 = () => {
    console.log("Hello");
    };

// What happens if we call a function before it's declared?
console.log(myFunction3()); // Hello
function myFunction3() {
  return "Hello";
}

// Function declarations are hoisted (moved to the top of the file) so they can be called before they are declared
// This is unique to function declarations and not function expressions
// Function expressions are not hoisted
// This behavior is not recommended and can lead to bugs, it is also unique to JavaScript
console.log(myFunction4()); // TypeError: myFunction4 is not a function
const myFunction4 = function() {
  return "Hello";
};

// Functions can be passed as arguments to other functions
function callTwice(func) {
  func();
  func();
}

function callTenTimes(f) {
  for (let i = 0; i < 10; i++) {
    f();
  }
}

function rollDie() {
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}

callTwice(rollDie); // 4 1
callTenTimes(rollDie); // 3 5 2 6 1 4 1 6 3 2


//                                  Functions as Return Values (Higher Order Functions)
// High Order Functions are functions that operate on/with other functions (term from Mathematics)
// They can accept other functions as arguments and return a function or both
// The ability to treat functions as values, and pass them around is a key feature of Functional Programming

// Functions can also return other functions
function makeMysteryFunc() {
  const rand = Math.random();
  if (rand > 0.5) {
    return function() {
      console.log("Congrats, I am a good function");
    };
  } else {
    return function() {
      console.log("You have been duped");
    };
  }
}

const mystery = makeMysteryFunc();
mystery(); // Congrats, I am a good function

// Functions can also return other functions
function makeBetweenFunc(min, max) {
  return function(num) {
    return num >= min && num <= max;
  };
}

const isChild = makeBetweenFunc(0, 18);
const isAdult = makeBetweenFunc(19, 64);
const isSenior = makeBetweenFunc(65, 120);
console.log(isChild(5)); // true
console.log(isAdult(5)); // false
console.log(isSenior(5)); // false

// setTimeout(): This function takes a function as an argument and calls it after a specified delay.
setTimeout(() => {
  console.log('This message is displayed after 2 seconds.');
}, 2000);

// Array.prototype.map(): This function takes a function as an argument and applies it to every element in an array.
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(number => number * number);
console.log(squares);  // Outputs: [1, 4, 9, 16, 25]

//                                            Methods vs Functions

// Methods are functions that are stored as object properties
// Functions are not stored as object properties


// Functions are called using their name
function myFunction() {
  console.log("Hello");
}

// Methods are called using the object they are stored in using the dot notation
// Dot notation : objectName.methodName(), objectName.methodName(argument...arguments)
// The property name in the object is the method name
const myObj = {
  myMethod: function() {
    console.log("Hello");
  }
};

myFunction(); // Hello
myObj.myMethod(); // Hello

// Methods can be added to objects after they are created
const myObj2 = {};
myObj2.sayHello = function() {
  console.log("Hello");
};
myObj2.sayHello(); // Hello


//                                           Prototype Methods
// Methods can also be added to the prototype of an object
// This is a way to add methods to all instances of an object

// This is the constructor function for a Dog
function Dog(name, age) {
  this.name = name;
  this.age = age;
}

const rusty = new Dog("Rusty", 3);
rusty.bark(); // TypeError: rusty.bark is not a function

// Adding a method to the prototype of the Dog object
Dog.prototype.bark = function() {
  console.log(`${this.name} says Woof`);
};
const fido = new Dog("Fido", 1);

rusty.bark(); // Rusty says Woof
fido.bark(); // Fido says Woof

//                                          Task: Function Exercises 1

/* In the console, declare the following functions:

multiply: given 2 numbers, return their product
yell: given a lowercase string, log it in all caps to the console
longerThan: given 2 arrays, return whether the first is longer than the second
 */

// multiply

function multiply(x, y) {
    return x * y;
}
console.log(multiply(2, 3)); // 6

// yell
function yell(str) {
    return str.toUpperCase();
}
console.log(yell("hello")); // HELLO

// longerThan
function longerThan(arr1, arr2) {
    return arr1.length > arr2.length;
}
console.log(longerThan([1, 2, 3], [1, 2])); // true

//                                          Arrow Functions

// Arrow functions are a more concise way to write function expressions
// They are not hoisted
// They are anonymous (no name)
// They are not ideal for methods in objects
// They are ideal for short, single-line functions

// Arrow functions are great when we just want to return a value

// The => "fat arrow" syntax is used to define them

// Regular function expression
const square = function(x) {
  return x * x;
};

// Arrow function
const square2 = (x) => {
  return x * x;
};

// Arrow function with implicit return
// The return keyword is not needed for single-line arrow functions
const square3 = (x) => x * x;

// For one-parameter functions, the parentheses are optional
const square4 = x => x * x;

// Arrow function with no parameters
const singASong = () => {
  return "LA LA LA";
};

// Arrow function with one parameter
const greet = (name) => {
  return `Hey ${name}!`;
};

// Arrow function with one parameter and implicit return
const greet2 = (name) => `Hey ${name}!`;

// Arrow function with two parameters, parentheses are required for multiple parameters
const add = (a, b) => a + b;

// If we need to do more than just return a value, we need to use the curly braces and the return keyword
const addAndLog = (x, y) => {
    let sum = x + y;
    console.log('The sum is', sum);
    return sum;
}

//                                          Task: Function Exercises 2
/* In the console, declare the following functions using arrow functions:

divide: given 2 numbers, return the first divided by the second
whisper: given an uppercase string, log it in all lowercase to the console
shorterThan: given 2 arrays, return whether the first is shorter than the second */

// divide
const divide = (x, y) => x / y;

// whisper
const whisper = (str) => str.toLowerCase();

// shorterThan
const shorterThan = (arr1, arr2) => arr1.length < arr2.length;

//                                         Callback Functions

// A callback function is a function that is passed as an argument to another function
// The callback function is called inside the other function
// Callback functions are used to perform an action after a certain task is completed

function greet(name, formatter) {
    return `Hello, ${formatter(name)}`;
  }

    function upperCaseName(name) {
        return name.toUpperCase();
    }

    greet('Tim', upperCaseName); // 'Hello, TIM'

    function lowerCaseName(name) {
        return name.toLowerCase();
    }

    greet('Tim', lowerCaseName); // 'Hello, tim'


//                                                  Rest Parameters

// Rest parameters are used to represent an indefinite number of arguments as an array
// They are indicated by the ... before the parameter name
// Rest parameters are used to collect all the remaining arguments into an array
// The rest parameter must be the last parameter in the function definition

function sumAll(...nums) { // nums is an array
    let total = 0;
    for (let n of nums) total += n;
    return total;
}

console.log(sumAll(1, 2, 3, 4, 5)); // 15

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }

  console.log(sum(1, 2, 3, 4, 5)); // Outputs: 15


//                                          The Arguments Object
// Arrows functions do not have their own this, arguments, super, or new.target

// this, refers to the object that the function is a method of (the object that the function is stored in)
// Arrow functions do not have their own this, so they use the this of the surrounding code
// This is useful when we want to use the this of the surrounding code, and not the this of the function itself
// i.e. in event listeners, setTimeout, setInterval, callbacks in object methods etc.

let obj = {
    value: 'Hello, world!',
    print: function() {
      setTimeout(() => {
        console.log(this.value); // Outputs: 'Hello, world!'
      }, 1000);
    }
  };

  obj.print(); // 'Hello, world!' is printed after 1 second

// arguments, for a traditional function behaves like an array, and contains all the arguments passed to the function
// Arrow functions do not have their own arguments object
// If you need to use arguments, use a traditional function or the rest parameter syntax

function traditionalFunction() {
    console.log(arguments[0]); // Outputs: 'Hello'
  }

  traditionalFunction('Hello', 'world');

  let arrowFunction = (...args) => {
    console.log(args[0]); // Outputs: 'Hello'
  };

  arrowFunction('Hello', 'world');

// super, is used to call methods on an object's parent
// Arrow functions do not have their own super.
// because they cannot be used as methods in objects
// Therefore they cannot be constructors
// If you need to use super, use a traditional function

class Parent {
    constructor() {
      this.value = 'Hello, world!';
    }
  }

  class Child extends Parent {
    constructor() {
      super();
      console.log(this.value); // Outputs: 'Hello, world!'
    }
  }

  new Child();

// new.target, is used to determine if a function was called with the new keyword
// Arrow functions cannot be constructors, so they do not have their own new.target
function TraditionalFunction() {
    console.log(new.target); // Outputs: [Function: TraditionalFunction]
  }

  new TraditionalFunction();



