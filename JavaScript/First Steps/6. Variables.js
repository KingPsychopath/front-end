// Variables are containers for storing data values.
// It is less of a box and more of a label that points to a value.
// Meaning, the value is stored in memory and the variable points to that value.
// Another variable can point to the same value.

// Variables let us remember values. We can use variables to store values and use them later in our code.
let remember = "I remember this value!"; // Declaring & Assiging at the same time
console.log(remember);

// Declaring a variable
let bankrupcy; // Because we haven't assigned a value to the variable, it's value is equal to undefined

// Assigning a value to a variable
bankrupcy = "I'm broke! I have no money!";
console.log(bankrupcy);

// let and const differ in that let allows reassignment, while const does not.
// const is short for constant, it declares & assigins a variable forever.
const rickroll = "Never gonna give you up!"; // You have to declare and assign a value to a const at the same time.
console.log(rickroll);

// Using a variable
let name = "Rick";
let number = 42;
number - 10; // 32
name.toUpperCase(); // "RICK"

// Naming variables
// Variable names must begin with a letter, $, or _.
// Variable names can contain letters, numbers, $, and _.
// Variable names are case-sensitive.
// Variable names cannot be reserved words. (e.g. let, const, var, function, return, if, else, while, for, etc.)
// Variable names should be descriptive and meaningful.
// Variable names should be camelCase. (e.g. myVariable, myName, myNumber, etc.)
let myVariable;
console.log(myVariable); // undefined

// Pass by Reference and Pass by Value
// Primitive values are passed by value, meaning the value is copied.
// Objects are passed by reference, meaning the reference is copied.
let a = 5;
let b = a; // b is a copy of the "value" of a
b = 10;
console.log(a); // 5
console.log(b); // 10

let c = { name: "Rick" };
let d = c; // d is a reference to c
d.name = "Morty";
console.log(c.name); // "Morty"
console.log(d.name); // "Morty"
