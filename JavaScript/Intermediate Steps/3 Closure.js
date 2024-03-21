// JavaScript has static or lexical scoping. (each language has it's own scoping rules)
// Lexical means the physical position of the code in the file/page.
// JavaScript's scope rule is that whereever you save/define a function, determines for the rest of the function's life, what variables it has access to.
// This is opposed to dynamic scoping where the scope is determined by where the function is called.

// When our functions get called, we create an execution context for that function
// Which is a live store of data (local memory/variable environment/state) for that function

// When a function finishes executing, it and it's local memory is deleted from the call stack.
// But what if our functions could hold on to live data even after the function finishes executing? (not just data that is returned
// Closure as a noun is a way of capturing state in a function and using it later in that function.

// A Closure as a verb is a function having access to the parent scope, even after the parent function has closed.
// Under the hood, JavaScript creates a closure every time a function is created.
// It's like a backpack that a function carries around with it, containing all the variables that were present in the parent scope. (lexical environment)
// Distinctly, the backpack only contains the variables that the inner function actually uses. (not all the variables in the parent scope - otherwise = memory leak)

// The function definition and its lexical environment are bundled together into a single entity in memory. (A closure)
// It's like a hidden property of a function.

// The term closure is a bit vague and imprecise. They refer to the thing that result in the backpack existing and the backpack itself the same thing.
// Just think of closure as the backpack that a function carries around with it.
// If the variable environment is where the variables live, the backpack is the closed over variables that the function has access to.

// The static nature of JavaScript's lexical scoping allows closures to work.

// Simply put, a function remembers the values from the place where it was initially defined/invoked.
function outerFunction(outerVariable) {
  // You can RETURN A function defintion WHICH IS a value that can be assigned and called later.
  return function innerFunction(innerVariable) {
    console.log("outerVariable:", outerVariable);
    console.log("innerVariable:", innerVariable);
  };
}

// Returned Function definition is stored in the newFunction variable.
// This allows you to call a function outside of the function it was defined in.
const newFunction = outerFunction("outside"); // outerFunction finishes execution here

// JavaScript doesn't have to go back to the outerFunction to get the outerVariable or innerFunction.
// It has stored all of that in memory in the newFunction variable's closure.
newFunction("inside"); // innerFunction still has access to outerVariable
// Output:
// outerVariable: outside
// innerVariable: inside

/*
Global Execution Context
|
|----> outerFunction Execution Context (outerVariable = "outside")
|      |
|      |----> innerFunction Execution Context (innerVariable = "inside")
|      |      |
|      |      |----> console.log("outerVariable:", outerVariable); // outerVariable is "outside"
|      |      |
|      |      |----> console.log("innerVariable:", innerVariable); // innerVariable is "inside"
|      |
|      |----> Return innerFunction
|
|----> newFunction = outerFunction("outside")
|
|----> newFunction("inside")

In this diagram, each arrow represents the flow of execution.
The outerFunction is first invoked in the global execution context with outerVariable set to "outside".
It then returns innerFunction, which is stored in newFunction.

When newFunction (which is innerFunction) is invoked with "inside", a new execution context is created.
In this context, innerVariable is "inside".
However, outerVariable is still accessible due to the closure,
even though the outerFunction execution context has already finished.

*/

//                                          Indepth-Explanations

// This is extremely useful for aggregating data over time.

// Example 1:
function outer() {
  let counter = 0;
  function incrementCounter() {
    counter++;
  }
  incrementCounter();
}
outer();
// With this first example, you don't explicitly know whether the incremented counter variable is being retrieved by
// going back up the call stack to the outer function or if it's being stored in the global memory or somewhere else...

// Example 2:
function outer() {
  let counter = 0;
  function incrementCounter() {
    // New execution context
    counter++; // Remember the counter variable from the outer function because of closure.
    console.log(counter);
  }
  return incrementCounter;
}
// However with this example, you can see that the counter variable is being stored in the incrementCounter function in the backpack.
// Both functions do the same thing, but the second example is more explicit about what is happening.

// From this line onwards, the outer function has finished executing and no longer has a role or execution context.
const myNewFunction = outer(); // myNewFunction is now the incrementCounter function with the backpack containing the counter variable.

// The counter variable is stored in the memory and is not garbage collected because the inner function is still using it.
myNewFunction(); // 1 - (brand new execution context)
myNewFunction(); // 2
myNewFunction(); // 3
// Each function call has a new execution context and a new closure.
// However, they all share the same counter variable. (Persistent data)
// Essentially we have memoized the counter variable.

// We can't do this with a normal function because the counter variable would be reset every time the function is called.
// We also can't access the hidden counter variable from the outside like we would with object properties.
myNewFunction.counter; // undefined
// The only way to access the counter variable is through the inner function that has a reference to the memory location of the counter variable.

myNewFunction2 = outer(); // myNewFunction2 is a new incrementCounter function with it's OWN separate backpack.
myNewFunction2(); // 1
myNewFunction(); // 4
// The counter variable is unique to each function because each function has it's own closure.

// This is useful for things like private variables and data encapsulation.
// It allows us to have a level of privacy and security in our code.
// Because the data a particular function operates on is encapsulated within the function and any functions that it returns.

// We now have a way to create a function that has a persistent memory of the data it has operated on.
// This is what makes things like Decorating, Currying, Partial Application, Function Composition and Chaining possible.

//                                       Practical Applications
// Closures give us an entirely new toolkit for writing clean, modular, and reusable code.
// They allow us to create functions that have persistent data and can be passed around like any other value.

//                                              Helper Functions

// Helper functions are functions that are used within other functions to help them perform their tasks.
// They are useful for breaking down complex problems into smaller, more manageable pieces.
// They can also be used to abstract away common functionality that is used in multiple places.

// once: This function ensures that a given function can only be called once.
function once(fn) {
  let hasRun = false;
  let result;

  return function (...args) {
    if (!hasRun) {
      hasRun = true;
      result = fn(...args);
    }

    return result;
  };
}

const addOnce = once((a, b) => a + b);
console.log(addOnce(1, 2)); // 3
console.log(addOnce(1, 2)); // Still 3, doesn't run the function again
// This is useful for things like caching, memoization, and preventing side effects.

// memoize: This function caches the results of a given function so that it doesn't have to be recalculated
function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }

    const result = fn(...args); // Run the function
    cache[key] = result;
    return result;
  };
}

const memoizedAdd = memoize((a, b) => a + b);
console.log(memoizedAdd(1, 2)); // 3
console.log(memoizedAdd(1, 2)); // Still 3, returns cached result

// (useful for expensive operations with the same arguments, e.g. nth Prime Number).
// You don't have to do all the calculations again, you can just return the cached result etc. (like a lookup table)

//                                           Iterators and Generators
// Wouldn't it be amazing if we could create a function that could remember where it was in a list of items?
// When run it would return the next item in the list, and then remember where it was for the next time it was called.
// We have a backpack that remembers the state of the function and the list of items. (So we can pick up where we left off)

//                                            Iterators

// An iterator is an object that allows us to traverse a sequence of values.
// It has a next method that returns an object with two properties: value and done.
// The value property is the next value in the sequence, and the done property is a boolean that indicates whether the iterator is done.

// Here's an example of an iterator that returns the next number in a sequence each time it's called:
function createCounter() {
  let i = 0;

  return {
    next: function () {
      return {
        value: i++,
        done: false,
      };
    },
  };
}

const counter = createCounter();
console.log(counter.next()); // { value: 0, done: false }
console.log(counter.next()); // { value: 1, done: false }
console.log(counter.next()); // { value: 2, done: false }
// This is useful for things like lazy evaluation, infinite sequences, and data processing.

// You can also create an iterator for a list of items:
function createListIterator(list) {
  let index = 0;

  return {
    next: function () {
      if (index < list.length) {
        return { value: list[index++], done: false };
      } else {
        return { done: true };
      }
    },
  };
}

const myList = ["apple", "banana", "cherry"];
const listIterator = createListIterator(myList);

console.log(listIterator.next().value); // 'apple'
console.log(listIterator.next().value); // 'banana'
console.log(listIterator.next().value); // 'cherry'
console.log(listIterator.next().done); // true

// You can also use the for...of loop to iterate over an iterator:
for (const value of listIterator) {
  console.log(value);
}
// Output:
// 'apple'
// 'banana'
// 'cherry'

// The for...of loop automatically calls the next method on the iterator until it's done.

//                                            Generators

// Generators are a special type of iterator that allows you to define an iterative algorithm by writing a single function.
// They use the yield keyword to pause and resume the execution of the function.
// When a yield statement is encountered, the function pauses and returns the value of the expression following the yield keyword to the caller.

// Here's an example of a generator that returns the next number in a sequence each time it's called:
function* createGen() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const generator = createGen();
console.log(generator.next().value); // 0
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2

// Here is an example of a generator that returns the Fibonacci sequence:
function* fibonacci() {
  let [prev, curr] = [0, 1]; // Destructuring assignment
  while (true) {
    // Infinite loop
    yield curr; // Pause and resume the execution of the function
    [prev, curr] = [curr, prev + curr];
  }
}

const sequence = fibonacci();

// Each time we call next, the function resumes from where it left off.
// (The line after the yield statement) and runs until it hits the next yield statement.
// At which point it pauses again and returns the value of the expression following the yield keyword. (curr)
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2
console.log(sequence.next().value); // 3
console.log(sequence.next().value); // 5

// This allows you to create a sequence of values that are generated on-the-fly, as you need them, rather than all at once.

//                                                Module Patterns

var counterModule = (function () {
  var count = 0; // private state

  return {
    increment: function () {
      count++;
    },
    decrement: function () {
      count--;
    },
    getCount: function () {
      return count;
    },
  };
})();

counterModule.increment();
console.log(counterModule.getCount()); // 1
counterModule.decrement(); // 0
console.log(counterModule.getCount()); // 0

// This is a way to create private variables and functions in JavaScript.
// It allows you to encapsulate functionality and expose only the parts that you want to be public.
// In this example, counterModule is an object with methods that manipulate the private count variable.
// This variable is preserved for the life of the application, but it's not accessible from the global scope

//                                             Asynchronous JavaScript

// JavaScript is single-threaded and synchronous by default.
// This means that it can only do one thing at a time and it executes code line by line.
// However, JavaScript can also be asynchronous and non-blocking.
// This means that it can do multiple things at once and execute code in the background.

// This is useful for things like making network requests, reading files, and handling user input.
// It allows JavaScript to be more responsive and interactive.
// However, it can also make the code harder to read and reason about.
// Because JS is lexically scoped, an async function will remember the variables from the place where it was initially defined/invoked.
// However, it will not remember the execution context or the call stack.
// So in the case of loops, the default behaviour is to use the last value of the variable.
// Which is not always what we want.
// This is why we use callbacks, promises, and async/await to handle asynchronous code.
// So that we can wait for the Promise to resolve with the current value of the variable.
// If we don't want to wait, we can use the IIFE pattern to create a new execution context for each iteration of the loop.

//      Loops and Closures
// Loops do not create new execution contexts or closures.
// They only create new block scopes.

// They use the same memory space and overwrite identical variables in the outer block scope.
// When the loop is done executing,
// the memory within the block scope; that is not shared in the outer scope is garbage collected.

// Closures in JavaScript can be used to capture the state of a loop at each iteration.
// This is particularly useful when dealing with asynchronous code inside a loop.

// Here's an example:
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i); // This will output the value of i at the time the function was defined
    }, i * 1000);
  })(i); // IIFE
}

// The setTimeout function is asynchronous and will run after the loop has finished executing.
// So without the closure, the value of i would be 5 for all the setTimeout functions.

// By passing i as an argument to a self-invoking function (IIFE),
// we create a new execution context for each iteration of the loop.
// This way, each timeout function has a reference to the value of i at the time it was defined.

//                     IIFE (Immediately Invoked Function Expression)

// This is a function that is executed right after it's created.
// This is useful for things like data privacy and not polluting the global scope.
// It is also useful for things like closures and encapsulation.
(function () {
  let privateVariable = 0;
  function privateFunction() {
    console.log("IIFE");
  }
})();
// Output: IIFE

console.log(privateVariable); // Error: privateVariable is not defined
privateFunction(); // Error: privateFunction is not defined

//                                          Promise Example

// Therefore with the knowledge of Async Code, Loops and Closures we can now write the following code:
function createPromise(x) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(x), 1000);
    });
  }

  for (var i = 0; i < 5; i++) {
    createPromise(i).then(console.log); // thenables 
  }

  // 3 Major things are happening here.
  // 1. Promises an Asynchronous object is returning a function that resolves after 1 second.
  // 2. A loop that has no new execution context or closure, is creating a new Promise for each iteration.
  // 3. Each Promise is using the backpack/closure, to remember the value of i at the time it was created.

    // This will output the numbers 0 to 4, each after a delay of 1 second.
    // In this example, each Promise captures the value of i at the time it was created.
    // So when the Promise resolves, it logs the value of i at that time.
    // Even though Promises are asynchronous and i changes over time.
    // This is a common pattern when dealing with asynchronous code inside a loop.

