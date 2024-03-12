// Strings are made up of characters. They can be defined using single, double quotes or backticks.
const singleQuoteString = "Hello, World!";
const doubleQuoteString = "Hello, World!";

let world = "World"; // String variable, we can interpolate it into a string using the ${} syntax.
const backtickString = `Hello, ${world}!`; // Useful for multiline strings and string interpolation
console.log(singleQuoteString); // Hello, World!
console.log(doubleQuoteString); // Hello, World!
console.log(backtickString); // Hello, World!

// Strings are immutable, meaning you can't change the characters in a string.
singleQuoteString[0] = "h"; // This will not work

// How many characters are in the string?
console.log(singleQuoteString.length); // 13

// Characters are in a specific order in a string. You can access a character using its index.
console.log(singleQuoteString[0]); // H
console.log(singleQuoteString[1]); // e

// What is the last character in the string?
console.log(singleQuoteString[singleQuoteString.length - 1]); // !

// What is the index of a specific character? (Get's the first occurrence)
console.log(singleQuoteString.indexOf("W")); // 7

// What is the index of a specific character? (Get's the last occurrence)
console.log(singleQuoteString.lastIndexOf("l")); // 10

// At what index does this substring begin?
console.log(singleQuoteString.indexOf("World")); // 7

// Does this string contain a specific character or some other string?
console.log(singleQuoteString.includes("World")); // true
console.log(singleQuoteString.includes("world")); // false

// Does this string start with a specific character or some other string?
console.log(singleQuoteString.startsWith("Hello")); // true
console.log(singleQuoteString.startsWith("world")); // false

// You can concatenate strings using the + operator.
const greeting = "Hello";
const name = "World";
const message = greeting + ", " + name + "!";
console.log(message); // Hello, World!

// You can also use the += operator to concatenate strings.
let message2 = greeting;
message2 += ", " + name + "!";
console.log(message2); // Hello, World!

// You can also use the template literal syntax to concatenate strings.
const message3 = `${greeting}, ${name}!`;
console.log(message3); // Hello, World!

// You can access a substring using the slice method. slice(inclusive, exclusive)
console.log(singleQuoteString.slice(7)); // World!
console.log(singleQuoteString.slice(7, 12)); // World

// You can replace a substring using the replace method.
console.log(singleQuoteString.replace("World", "Universe")); // Hello, Universe!

// You can convert a string to uppercase or lowercase using the toUpperCase and toLowerCase methods.
console.log(singleQuoteString.toUpperCase()); // HELLO, WORLD!
console.log(singleQuoteString.toLowerCase()); // hello, world!

// You can capitalize the first letter of a string using the charAt and toUpperCase methods.
console.log(
  singleQuoteString.charAt(0).toUpperCase() + singleQuoteString.slice(1)
); // Hello, World!

// You can split a string into an array of substrings using the split method.
console.log(singleQuoteString.split(" ")); // [ 'Hello,', 'World!' ]

// You can join an array of substrings into a single string using the join method.
console.log(["Hello,", "World!"].join(" ")); // Hello, World!

// You can trim whitespace from the beginning and end of a string using the trim method.
const stringWithWhitespace = "   Hello, World!   ";
console.log(stringWithWhitespace.trim()); // Hello, World!

// You can trim from the left or right using the trimStart and trimEnd methods.
console.log(stringWithWhitespace.trimStart()); // Hello, World! (Imagine the whitespace is there. It's just not visible in the console.)
console.log(stringWithWhitespace.trimEnd()); //    Hello, World!

// You can pad a string with a specific character using the padStart and padEnd methods.
console.log(singleQuoteString.padStart(20, "*")); // *****Hello, World!
console.log(singleQuoteString.padEnd(20, "*")); // Hello, World!*****
