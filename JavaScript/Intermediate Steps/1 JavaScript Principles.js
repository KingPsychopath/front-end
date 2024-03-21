//                                      Thread of Execution

// Java Script is a single threaded language, synchronous and blocking.
// This means it goes through the code line by line and executes each line - this is the thread of execution.

// It saves 'data' like strings and arrays assigned to variables so that we can use it later - in the memory.
// We can even save 'functions' in the memory and execute them later - this is called a 'callback' (First Class Functions / Function Expressions).

// JAVA SCRIPT HAS A SINGLE THREAD OF EXECUTION
// A SINGLE CALL STACK
// A SINGLE MEMORY HEAP (Variable, Object and Function Storage Environment)

//                                          Execution Context
// It is the environment in which the current code/statement/function is evaluated and executed.
// All the variables a piece of code has access to in it's current state.

// When a function is invoked, a new execution context is created and added to the 'call stack'.
// Each execution context has it's own memory space and thread of execution.

// 1. Variable Environment - where the variables live and how they are accessed. 
let num = 3; // Saved to memory
function multiplyBy2(inputNumber) {
  // Saved to memory
  const result = inputNumber * 2;
  return result; // Locate the block of memory pointing to the result and ship it back to the call site
}
num = multiplyBy2(num); // 6 - The result is saved to memory
// This was the caller and the thread of execution goes to the function above and executes it.

// 2. This keyword (binding) - a reference to the object that the function is a method of.
const calculator = {
  factor: 2,
  multiplyBy2: function(inputNumber) {
    return inputNumber * this.factor;
  }
};

console.log(calculator.multiplyBy2(3)); // Outputs: 6

//                                          Call Stack
// The 'call stack' is the place where the thread of execution keeps track of where it is in the code.
// It keeps track of all the functions that are currently running and needs to run.
// It does this by adding the function to the call stack and then removing it when it's done. (Last In First Out)

// 1. Run a function - add it to the call stack
// 2. Finish running the function - remove it from the call stack
// 3. What ever is now on top of the call stack is the function that is currently running.

// multiplyBy2 is called with the input and the thread of execution goes to the function above and executes it.
const output = multiplyBy2(num);
// After the previous function is done, the thread of execution goes back to the previous line and executes it.
// The output is then saved to the memory.
// The thread of execution then goes to the next line and executes it, repeating the process.
const newOutput = multiplyBy2(10);

// JavaScript can be asynchronous and non-blocking. (It can do multiple things at once).
// It can also execute code in the background and then run it when it's ready. (I'll cover this in Promises and Async/Await)

//                                          Web Browser APIs
// The web browser has web APIs that can do some background work (like making requests or setTimeout).
// When the web APIs are done with the code, they send it to the 'callback queue'.

//                                          Callback Queue
// The 'callback queue' is used to keep track of the async code that is ready to be run.
// It's like a waiting area for the async code.
// The 'event loop' then checks if the 'call stack' is empty and if it is, it sends the code from the 'callback queue' to the 'call stack'.

const response = fetch("https://api.com");
// The fetch function is sent to the web APIs to be executed.
// This now resolves to a promise and is sent to the callback queue.

// The thread of execution then goes to the next line and executes it.
console.log("response", response);
// The response is not ready yet, so it's not in the callback queue yet.
// This is because async code is non-blocking and the thread of execution doesn't wait for it to be ready.
// A few milliseconds later, the response is ready and is sent to the callback queue.
// But by then, the thread of execution has already moved on to the next line of code.

// We use await to tell the thread of execution to wait for the response to be ready.
// But we cover that later.
