// There are so many variables still in play.

// In JavaScript, it doesn't just matter what variables we declare,
// but also where we declare them.
// Scope, determines where the variables are available for use/in play/in context.

// There are two types of scope:
// 1. Global Scope (widest scope)
// 2. Local Scope (narrowest scope)

// Global Scope
// Variables declared outside of a function are in the global scope.
// They are available everywhere in the program within the same file(module).
let globalVariable = "I live in global scope";

// Local Scope
// Variables declared inside a function are in the local scope.
// They are only available inside the function.
function narrowerScope() {
  let localVariable = "I live in the function scope";
}

//                                                  Function Scope

function declareBankruptcy() {
  let bankruptcy = true; // bankruptcy is only available inside this function
  // So Bankruptcy is assigned a value but never used.
}
declareBankruptcy(); // This function is called but the value of bankruptcy is never used.
console.log(bankruptcy); // ReferenceError: bankruptcy is not defined

// Each function gets its own new scope within the scope where it was declared
let planet = "Jupiter";
function scopeOut() {
  console.log("Inner planet:", planet); // Inner planet: Jupiter
  let planet = "Mars";
  console.log("Inner planet:", planet); // Inner planet: Mars
}
scopeOut();
console.log("Outer planet:", planet); // Outer planet: Jupiter

// Scopes are nested within the program
// The inner scope has access to the outer scope, but not vice versa.
let globalVariable = "I live in global scope";
function narrowerScope() {
  console.log(globalVariable); // I live in global scope
  let localVariable = "I live in the function scope";
}
narrowerScope(); // I live in global scope
console.log(localVariable); // ReferenceError: localVariable is not defined

// Variables declared with let can be modified from within a narrower scope
// This can be useful, but also dangerous!

// Typically, we want to avoid modifying variables from a wider scope within a narrower scope
// It makes it harder to understand what's going on in the program, and can lead to bugs.
let feeling = "free";
function trap() {
  feeling = "boxedIn";
}
trap();
console.log(feeling); // boxedIn

//                                              Block & Variable Scope

// Variables declared with var are function scoped or globally scoped.
// They are either available throughout the entire function
// or the entire program if they are declared outside of a function.
function getBalance() {
  if (balance > 0) {
    var message = "I have money";
    console.log(message); // I have money
  }
  console.log(message); // I have money
}
getBalance();

// Variables declared with var are hoisted, to the top of the function or the top of the program at runtime.
// They are initialized with the value undefined, until they are assigned a value.

// This means that they are available throughout their scope, even before they are declared.
// This can lead to bugs, so it's best to avoid using var. Use let instead. (It is not hoisted)

// Typically people used to make a habit of declaring and assiging variables at the top of the function when using var.
// This helped prevent using variables before they were declared.

function getBalance() {
  console.log(message); // undefined
  if (balance > 0) {
    var message = "I have money";
    console.log(message); // I have money
  }
  console.log(message); // I have money
}

getBalance();

// Variables declared with let and const are block scoped.
// A block is a set of curly braces {}.
// Variables declared with let and const are only available within the block they were declared in.

// This is a good thing, because it makes it easier to understand what's going on in the program.
// It also helps prevent bugs.

function exampleVariableScope() {
  if (true) {
    let letVariable = "I am only available in this block";
    const constVariable = "I am only available in this block";
    var varVariable = "I am available throughout the function";
    console.log(letVariable); // I am only available in this block
    console.log(constVariable); // I am only available in this block
    console.log(varVariable); // I am available throughout the function
  }
  console.log(letVariable); // ReferenceError: blockVariable is not defined
  console.log(constVariable); // ReferenceError: letVariable2 is not defined
  console.log(varVariable); // undefined
}
exampleVariableScope();
console.log(letVariable); // ReferenceError: letVariable is not defined
console.log(constVariable); // ReferenceError: constVariable is not defined
console.log(varVariable); // ReferenceError: varVariable is not defined


// Let and Const are hoisted, BUT not initialized with a value.
// Accessing them before they are declared will result in a ReferenceError.

function getBalance() {
  if (balance > 0) {
    let message = "I have money";
    console.log(message); // I have money
  }
  console.log(message); // ReferenceError: message is not defined
}

//                                      Loops
// Loops do not create new execution contexts or closures.
// They only create new block scopes.

// As of ES6 we can use let and const to create block scoped variables.
// This means that if you declare a variable inside a block,
// it will only be available within that iteration of said block.
for (let i = 0; i < 5; i++) {
  let x = i * 2;
  console.log(x); // x is accessible here
}
console.log(x); // Error: x is not defined

// In Summary, use let and const instead of var. They are block scoped, and help prevent bugs.
// This is especially important when working with loops, and if statements.
// It gives you more control over variable scope and re-assignment.

// Use let when you plan to reassign the variable, and const when you don't.
// This provides you with a clear signal about the intended usage of the variable.
