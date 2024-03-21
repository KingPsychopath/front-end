//                                                          Currying
// is when a function only takes in one argument at a time.
// A function with multiple arguments is broken down into a series of functions that each take in one argument.
// This is useful for things like composition and chaining functions together.
function multiply(a, b, c) {
  return a * b * c;
} // This is a normal function that takes in 3 arguments and returns the product of them.

function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
} // This is a currying function that takes in a function and returns a function that takes in one argument
const curriedMultiply = curry(multiply);
console.log(curriedMultiply(2)(3)(4)); // Outputs: 24

//                                                      Partial application
// This is a technique where a function is called with fewer arguments than it expects.
// It returns a new function that takes the remaining arguments
function multiply(a, b, c) {
  return a * b * c;
}

function partialApply(fn, a) {
  // This is a partial application function that takes in a function and an argument
  return function (b, c) {
    // It returns a function that takes in the remaining arguments
    return fn(a, b, c); // It then calls the original function with the arguments
  };
}

const multiplyBy2 = partialApply(multiply, 2);
console.log(multiplyBy2(3, 4)); // Outputs: 24

//                                Function Composition and Chaining

//                                              Function Composition
// Function composition is the process of combining two or more functions to produce a new function.
// This is useful for creating more modular and reusable code.

const multiplyBy2 = (num) => num * 2;
const add3 = (num) => num + 3;
const compose = (f, g) => (x) => f(g(x));

// This is a composition of multiplyBy2 and add3.
// It first multiplies the number by 2 and then adds 3 to it.
const multiplyBy2AndAdd3 = compose(add3, multiplyBy2);
console.log(multiplyBy2AndAdd3(5)); // Outputs: 13

// Closures store the functions to be composed.

//                                             Function Chaining
// Function chaining is the process of calling multiple functions in sequence.
// It is made possible by having each function return the object it was called on.

const array = [1, 2, 3];
// Map returns a new array with each element multiplied by 2, which is immediately passed to filter.
const result = array.map((x) => x * 2).filter((x) => x > 2);
console.log(result); // Outputs: [4, 6]

// Closures store the intermediate results of the chained functions meaning that we can chain as many functions as we want.
