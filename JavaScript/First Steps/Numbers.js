// Floating points, Integers and Doubles are all numbers in JavaScript
// JavaScript has only one type of number, which is a 64-bit floating point
// There is no separation of type based on number of values after the decimal point

// JavaScript implicitly converts the number to a string when it is added to a string (concatenation)
5 + "5"; // "55"

// JavaScript implicitly converts the string to a number when it is used in any other mathematical operation
5 - "5"; // 0
5 * "5"; // 25
5 / "5"; // 1

// JavaScript implicitly converts the string to a number when it is used in a comparison
5 > "5"; // false
5 < "5"; // false
5 == "5"; // true

// JavaScript has a special value called NaN (Not a Number)
// NaN is the RESULT of an invalid mathematical operation
0 / 0; // NaN
1 + NaN; // NaN

// NaN is a number type
typeof NaN === "number"; // true

// It's important to note that NaN doesn't check if a value is number type.
// It check if the value, when coerced to a number, is NaN
isNaN("123"); // false, "123" can be coerced into a number
typeof "123" === "number"; // false, "123" is not of the number type

// NaN is not equal to anything, including itself, so you can't check if a value is NaN by comparing it to NaN
// Instead, you can use the isNaN() function
NaN === NaN; // false
isNaN("hello"); // true
isNaN("123"); // false
isNaN(123); // false
isNaN(NaN); // true

// JavaScript has a special value called Infinity
// Infinity is displayed when a number exceeds the upper limit of the floating point numbers
// Infinity is also displayed when a number is divided by 0
