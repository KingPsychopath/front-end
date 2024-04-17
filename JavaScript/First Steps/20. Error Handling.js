// Once we've discovered where in our program an error is likely, we can do something about it!

//                                                                       Error Handling

// Usually errors will cause JS to stop running our code
thisThrowsAnError();
console.log("I'll never get here");

// Sometimes that's appropriate and what we want JS to do

// But sometimes we want to handle the error and keep running our code
// sometimes we might want to try again, or try a different way
// Or if it was optional, just skip it and move on with our (program's) lives

// try lets us "watch out" for potential errors
// its friend catch lets us manage errors when they occur¬
// and finally lets us run code after the try and catch, no matter what's happened
try {
  thisMightThrowAnError();
} catch (error) {
  console.error("As if! Error:", error);
  console.log("Whatever, let's press on anyway");
} finally {
  console.log("still rollin' with the homies");
}

// We can also throw our own errors
// This is useful for when we want to stop running our code
// and let the user know that something's gone wrong
function thisThrowsAnError() {
  throw new Error("I'm sorry, Dave. I'm afraid I can't do that");
}

// We can also create our own error types
class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

// And we can use them in our code
try {
  throw new MyError("This is my error");
} catch (error) {
  console.error("My error:", error);
}


