// A simple HTML document looks like this:
/**
 * <!doctype html>
 * <html lang="en-US">
 * <head>...</head>
 * <body>
 * <header> ... </header>
 * <div id="content"> ... </div>
 * </body>
 * </html>
 */

// The DOM Tree looks like this: (Document Object Model)
/**
html
│
├── head
│
└── body
    │
    ├── header
    │
    └── div (with id "content")
 */

// The DOM is a tree-structure representation of all the elements of a web page.
// It is a programming interface for HTML and XML documents.
// It represents the page so that programs can change the document structure, style, and content.
// The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.

// Given that each element in the DOM is a node/object you can manipulate the DOM by adding, removing, and changing nodes/object properties.
// All of this can be done using JavaScript.

// The document object represents the entire HTML document. (It is the root node of the HTML document)
// The document object has properties and methods that allow you to access and manipulate the content of the document.
document;

// The document object model typically returns a collection of elements in the form of an array.
document.title; // Returns the title of the document
document.body; // Returns the body of the document
document.head; // Returns the head of the document
document.images; // Returns a collection of all images in the document
document.links; // Returns a collection of all links in the document
document.URL; // Returns the URL of the document (the address of the current document, not the URL of the document that loaded the current document)
document.forms; // Returns a collection of all forms in the document
document.scripts; // Returns a collection of all scripts in the document


// HTML Attributes for selection will typically look like this
// <div id="content" class="content" name="randomName"> ... </div>
// Each element in the DOM also has properties and methods that you can access and manipulate
document.body.children // Returns a collection of all the child elements of the body element
document.getElementById("content"); // Returns the element with the specified id
document.getElementsByClassName("content"); // Returns a collection of all elements with the specified class name
document.getElementsByTagName("p"); // Returns a collection of all elements with the specified tag name
document.getElementsByName("name"); // Returns a collection of all elements with the specified name (name attribute)

// The querySelector() and querySelectorAll() methods are used to select elements in the DOM using CSS selectors.
document.querySelector("p"); // Returns the first element that matches the specified CSS selector(s)
document.querySelector("#content"); // Returns the first element that matches the specified id
document.querySelector(".content"); // Returns the first element that matches the specified class name

// Returns the first element that matches the specified group of selectors
document.querySelector("p.content"); //  (p with class content
document.querySelector("div p"); //  (p that is a descendant of div)
document.querySelector("div > p"); // (p that is a direct child of div)
document.querySelector("div + p"); // (p that is immediately preceded by a div)
document.querySelector("div ~ p"); // (p that is preceded by a div)
document.querySelector("div, p"); // (div or p)
document.querySelector("div p, div p"); // (p that is a descendant of div or p that is a descendant of div)

// (Returns the first element that is a descendant of the element on which it is invoked that matches the specified group of selectors. If no matches are found, null is returned.)
document.querySelectorAll("p"); // Returns a collection of all elements that match the specified CSS selector(s)
document.querySelectorAll("#content"); // Returns a collection of all elements that match the specified id
document.querySelectorAll(".content"); // Returns a collection of all elements that match the specified class name
document.querySelectorAll("p.content"); // Returns a collection of all elements that match the specified group of selectors

// Get n-th child of an element
document.getElementById("content").children[0]; // Returns the first child of the element with the specified id
// Get the parent of an element
document.getElementById("content").parentNode; // Returns the parent node of the element with the specified id
// Get the next sibling of an element
document.getElementById("content").nextSibling; // Returns the next sibling node of the element with the specified id
// Get the previous sibling of an element
document.getElementById("content").previousSibling; // Returns the previous sibling node of the element with the specified id
// Get the first child of an element
document.getElementById("content").firstChild; // Returns the first child node of the element with the specified id
// Get the last child of an element
document.getElementById("content").lastChild; // Returns the last child node of the element with the specified id

// Test Yourself
/*
Type commands in the console to retrieve:

1. all the p elements
2. the text "X"
3. the number of squares in the board
4. the text "A game you know"
 */

// 1.
document.querySelectorAll("p");

// 2. Assuming the text "X" is in a p element
document.querySelector("p").textContent; // This will return the text of the p element
// OR
document.querySelector("p").innerText; // This will return the text of the p element
// OR
document.querySelector("p").innerHTML; // This will return the entire HTML of the p element

// Select every element in the DOM and find the one with the text "X"
Array.from(document.querySelectorAll("*")).find(el => el.innerText === "X"); // This will return the element with the text "X"

// 3. Assuming the squares are divs represented by the class "square".
let squareCount = document.querySelectorAll(".square").length;
console.log(squareCount);

// 4. Assuming the text "A game you know" is in a p element
document.querySelector("p").textContent; // This will return the text of the p element
Array.from(document.querySelectorAll("*")).find(el => el.innerText === "A game you know");



// Mutating the DOM (note: use double-quotes not single-quotes for the value of the attribute)
// You can change the content of the document by changing the properties of the document object.
// You can also change the content of an element by changing the properties of the element object.
// You can also add, remove, or replace elements in the DOM.

// Changing the content of the document
document.title = "New Title"; // Changes the title of the document
document.body.textContent = "New Content"; // Changes the content of the body of the document
document.body.className = "newClass"; // Changes the class of the body of the document to newClass
document.body.id = "newId"; // Changes the id of the body of the document to newId

// Changing classes of an element
document.getElementById("content").classList.add("newClass"); // Adds a class to the element with the specified id
document.getElementById("content").classList.remove("oldClass"); // Removes a class from the element with the specified id
document.getElementById("content").classList.toggle("newClass"); // Toggles a class for the element with the specified id

// Changing styles of an element
document.getElementById("content").style.backgroundColor = "red"; // Changes the background color of the element with the specified id to red
document.getElementById("content").style.color = "blue"; // Changes the color of the element with the specified id to blue
document.getElementById("content").style.fontSize = "20px"; // Changes the font size of the element with the specified id to 20px


// Changing the content of an element
document.getElementById("content").textContent = "New Content"; // Changes the content of the element with the specified id
document.getElementById("content").className = "newClass"; // Changes the class of the element with the specified id to newClass
document.getElementById("content").id = "newId"; // Changes the id of the element with the specified id to newId

// CSS properties can also be changed (style, class, id, etc.) (note background-color is camelCased)
document.body.style.backgroundColor = "red"; // Changes the background color of the body of the document to red

// Adding elements to the DOM
// The appendChild() method appends a node as the last child of a node.
let newElement = document.createElement("p"); // Creates a new p element
newElement.textContent = "New Paragraph"; // Adds text to the new p element
document.body.appendChild(newElement); // Appends the new p element to the body of the document

// The insertBefore() method inserts a node before a specified child node as a child of a specified parent node.
let referenceElement = document.getElementById("content"); // Gets the element with the specified id
document.body.insertBefore(newElement, referenceElement); // Inserts the new p element before the reference element

// Removing elements from the DOM
// The removeChild() method removes a specified child node from the DOM.
document.body.removeChild(newElement); // Removes the new p element from the body of the document

// The replaceChild() method replaces a child node with a new node in the DOM.
let anotherNewElement = document.createElement("p"); // Creates another new p element
anotherNewElement.textContent = "Another New Paragraph"; // Adds text to the another new p element
document.body.replaceChild(anotherNewElement, referenceElement); // Replaces the reference element with the another new p element

