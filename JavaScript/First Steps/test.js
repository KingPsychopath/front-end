function exampleVariableScope() {
  if (true) {
    let letVariable = "I am only available in this block";
    const constVariable = "I am only available in this block";
    var varVariable = "I am available throughout the function";
  }
  console.log(varVariable); // I am available throughout the function
}

exampleVariableScope();
console.log(varVariable); // I am available throughout the function
