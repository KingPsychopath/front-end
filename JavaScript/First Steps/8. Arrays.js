// Arrays let us store multiple values together in a single collection
let synonyms = ["plethora", "array", "assortment", "variety", "multitude", "cornucopia"];
// An array is mutable, meaning we can change the values in the array; however you can not reassign the array itself.
// You can use const to declare an array, and you can still change the values in the array; but you can not reassign the array itself.

// Like strings, arrays have a length (The number of elements in the array)
console.log(synonyms.length); // 6

// And each value has an index (The position of the value in the array) starting at 0
console.log(synonyms[0]); // "plethora"
console.log(synonyms.indexOf("cornucopia")); // 5

// Also like strings, we can check if an array contains a certain value
console.log(synonyms.includes("array")); // true

// Unlike strings, arrays are mutable, meaning we can change the values in the array
synonyms[0] = "abundance";
console.log(synonyms[0]); // "abundance" instead of "plethora"

// We can remove values from the end of an array using the pop method (This method returns the value that was removed)
let lastItem = synonyms.pop(); // ["abundance", "array", "assortment", "variety", "multitude", "cornucopia"]
console.log(lastItem); // "cornucopia"

// We can also add values to the end of an array using the push method
synonyms.push("profusion"); // ["abundance", "array", "assortment", "variety", "multitude", "profusion"]
console.log(synonyms);

// We can also remove values from the beginning of an array using the shift method (This method returns the value that was removed)
let firstItem = synonyms.shift(); // ["array", "assortment", "variety", "multitude", "profusion"]
console.log(firstItem); // "abundance"

// We can also add values to the beginning of an array using the unshift method
synonyms.unshift("abundance"); // ["abundance", "array", "assortment", "variety", "multitude", "profusion"]

// Arrays can be empty, or hold any number of values
let emptyArray = [];
let arrayWithOneValue = [1];
console.log(emptyArray.length); // 0
console.log(arrayWithOneValue.length); // 1

// Arrays can hold any type of value, including other arrays
let mixedArray = [1, "two", true, ["four", 5]];
console.log(mixedArray[0]); // 1
console.log(mixedArray[3]) // ["four", 5"]
console.log(mixedArray[3][0]); // "four"

// Arrays can do a lot of things, including sorting, reversing, and joining
["c", "a", "d", "b"].sort() // ["a", "b", "c", "d"]
["c", "a", "d", "b"].reverse() // ["b", "d", "a", "c"]
["c", "a", "d", "b"].join() // "c,a,d,b"
["c", "a", "d", "b"].join("-") // "c-a-d-b"
["lions", "tigers", "bears oh my!"].join(" & ") // "lions & tigers & bears oh my!"
[1, 2, 3].concat([4, 5, 6]) // [1, 2, 3, 4, 5, 6]


// We can also use the spread operator to copy an array
let synonymsCopy = [...synonyms];
console.log(synonymsCopy); // ["abundance", "array", "assortment", "variety", "multitude", "profusion"]

// We can also use the spread operator to combine arrays
let moreSynonyms = ["wealth", "plenty", "excess"];
let allSynonyms = [...synonyms, ...moreSynonyms];
console.log(allSynonyms); // ["abundance", "array", "assortment", "variety", "multitude", "profusion", "wealth", "plenty", "excess"]

// For primitive types, the spread operator performs a deep copy
// For reference types, the spread operator performs a shallow copy
// This means that if the array contains objects, the objects are not copied, only the references to the objects are copied.
let objects = [{ name: "object1" }, { name: "object2" }];
let objectsCopy = [...objects];
objectsCopy[0].name = "newName";
console.log(objects[0].name); // "newName"
// If you want to perform a deep copy, you can use the JSON object to convert the array to a string and then back to an array


