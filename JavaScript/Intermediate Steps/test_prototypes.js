const userFunctionStore = {
  increment: function () {
    this.score++; // an implicit parameter reference to the object that calls the function.
  },
  login: function () {
    console.log("You're logged in");
  },
};

const newUser = Object.create(userFunctionStore);

console.log(newUser.constructor.name); // [Function: Object]
console.log(newUser.__proto__); // { increment: [Function: increment], login: [Function: login] }

console.log(newUser.__proto__ === userFunctionStore); // true
console.log(newUser.constructor === userFunctionStore.constructor); // true
console.log(newUser.constructor === Object); // false

// because Object creates every function in JavaScript.
