// The Map, Filter and Reduce Methods allow us to process the elements of an array without using a loop.

// Map is a higher-order function, which means it takes a function as an argument.
// Map calls said function on each item in the array, and returns a new array containing the results.
const spices = [
  { name: "Emma", nickname: "Baby" },
  { name: "Geri", nickname: "Ginger" },
  { name: "Mel B", nickname: "Scary" },
  { name: "Mel C", nickname: "Sporty" },
  { name: "Victoria", nickname: "Posh" },
];
const nicknames = spices.map((s) => s.nickname + " Spice");
console.log(nicknames); // ["Baby Spice", "Ginger Spice", "Scary Spice", "Sporty Spice", "Posh Spice"]

// Filter is a higher-order function, which means it takes a function as an argument.
// Filter calls said function on each item in the array, and returns a new array containing the items for which the function returned true.
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter((n) => n % 2 === 0); // n is even if n % 2 is 0
console.log(evens); // [2, 4]

const mels = spices.filter((s) => s.name.includes("Mel"));
console.log(mels); // [{name: "Mel B", nickname: "Scary"}, {name: "Mel C", nickname: "Sporty"}]

// Reduce is a higher-order function, which means it takes a function as an argument.
// Reduce calls said function on each item in the array, and returns a single value.
// The function takes two arguments: an accumulator and the current item.
// The accumulator is the result of the function so far.
// The function returns the new value of the accumulator.
const numbers2 = [1, 2, 3, 4, 5];
const sum = numbers2.reduce((acc, n) => acc + n, 0); // 0 is the initial value of the accumulator
console.log(sum); // 15

const longestName = spices.reduce(
  (acc, s) => (acc.length > s.name.length ? acc : s.name),
  ""
);
console.log(longestName); // "Victoria"

//                                          Exercises
/* From the spices array, use map and filter to:

1. create a new array names with only the name of each girl
2. create a new array endInY with just the girls whose nickname ends in "y" */

// 1.
const onlyNames = spices.map((s) => s.name);
console.log(onlyNames); // ["Emma", "Geri", "Mel B", "Mel C", "Victoria"]

// 2.
const endInY = spices.filter((s) => s.nickname.endsWith("y"));
console.log(endInY); // [{name: "Mel C", nickname: "Sporty"}]

//                                                   Spread Operator
// The spread operator (...) allows us to expand an array into its individual elements.

// It takes all the items in an array and "spreads" them out into individual arguments.
const numbers3 = [1, 2, 3];
console.log(...numbers3); // 1 2 3
console.log(numbers3) // [1, 2, 3]

const oldBurns = ["square", "wack"];
const newBurns = ["basic", "dusty", "sus"];
const burnBook = [...oldBurns, ...newBurns]; // ["square", "wack", "basic", "dusty", "sus"]

// Equivalent to:
const burnBook = oldBurns.concat(newBurns); // ["square", "wack", "basic", "dusty", "sus"]

// We can also use it to pass all the items in an array as arguments to a function.
const skills = ["HTML", "CSS", "JS"];
const newSkills = ["React", "TypeScript", "Node"];
skills.push(...newSkills); // ["HTML", "CSS", "JS", "React", "TypeScript", "Node"]
console.log(...skills); // HTML CSS JS React TypeScript Node
