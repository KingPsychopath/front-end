// Mutable data can be edited after it's created (Objects and Arrays).
// Immutable data cannot be edited after it's created. (Primitives)

// Do these do the same thing?
let abcArray = ["a", "b", "c"];
abcArray[1] = "d";
abcArray; // ["a", "d", "c"]

let abcString = "abc";
abcString[1] = "d";
abcString; // "abc"

// No, they don't. The array is mutable, so we can change the value at a specific index.
// The string is not mutable, so we can't change the value at a specific index.

abcString = "adc"; // We can only change the entire string by reassigning the variable to a new string.
console.log(abcString); // "adc"

// Do these do the same thing?

let numbers1 = [1, 2, 3];
let result1 = numbers1.push(4); // The push method returns the new length of the array, not the array itself.
console.log(result1); // 4
console.log(numbers1); // [1, 2, 3, 4]

let numbers2 = [1, 2, 3];
let result2 = numbers2.concat([4]); // The concat method returns a new array, it doesn't mutate the original array.
console.log(result2); // [1, 2, 3, 4]
console.log(numbers2); // [1, 2, 3]

// Some actions "mutate" the original array, aka. change the array in-place.
let oldArray = [1, 2, 3];
oldArray.push(4); // [1, 2, 3, 4]

// Other actions return a new array(a new copy), leaving the original array unchanged.
oldArray.concat([5]); // [1, 2, 3, 4, 5]

// Variables themselves can also be (im)mutable
let letVariable = "original value";
letVariable = "new value";
console.log(letVariable); // "new value"

const constVariable = "original value";
constVariable = "new Value"; // TypeError: Assignment to constant variable.
console.log(constVariable); // "original value"

// The const keyword makes the variable immutable, but it doesn't make the data immutable.
const array = [1, 2, 3];
array.push(4);
console.log(array); // [1, 2, 3, 4]

const operands = [4, 6];
const sum = operands[0] + operands[1];
console.log(sum); // 10

operands[0] = 5;
const newSum = operands[0] + operands[1];
console.log(newSum); // 11

// To make the data immutable, we can use Object.freeze() or a library like Immutable.js.
const immutableArray = Object.freeze([1, 2, 3]);
immutableArray.push(4); // TypeError: Cannot add property 3, object is not extensible
