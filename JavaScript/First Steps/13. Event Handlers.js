// A web browser fires different events when things happen on the page or a user interacts with it.
// These events can be handled by JavaScript to trigger functionality.

// For example, the click event is fired when a user clicks on an element/node/area of the page.
// We can detect events and handle them using an event listener.
// The event listener is a function that listens for a specific event and triggers a callback function when the event is detected.

// The .addEventListener((event type), (handler function)) method is used to attach an event listener to an element.
// The event type is a string that specifies the type of event to listen for, such as "click", "mouseover", "keydown", etc.
// The handler function is a callback function that is executed when the event is detected.
document.addEventListener("click", () => {
  console.log("clicked");
});

// You can do whatever you want in the event handler function, such as changing the style of an element,
// updating the content of the page, or triggering other functions.

// The event object is automatically passed to the event handler function as an argument when the event is detected.
// If we accept this as a parameter, we can access the event object and its properties.
document.addEventListener("click", (event) => {
  console.log(event);
});

// event.target is the element the event fired on (in this case, the element that was clicked).
document.addEventListener("click", (event) => {
  console.log(event.target);
});

// click isn't the only type of event we can listen for.
// There are many other events, such as "mouseover", "keydown", "submit", and "load".
// You can find a full list of events on the MDN web docs. (https://developer.mozilla.org/en-US/docs/Web/Events)

// You can also remove an event listener using the .removeEventListener() method.
// It takes the same arguments as .addEventListener(), but it removes the event listener instead of adding it.
// The event handler function must be a named function to be removed.
function handleClick(event) {
  console.log(event);
}
document.addEventListener("click", handleClick);
document.removeEventListener("click", handleClick);

// You can also use the .removeEventListener() method to remove an anonymous function by passing the same function to .removeEventListener().
document.addEventListener("click", () => {
  console.log("clicked");
});
document.removeEventListener("click", () => {
  console.log("clicked");
});

// The .removeEventListener() method will not work if you pass a different anonymous function to it.
// This is because the function is not the same as the one that was passed to .addEventListener().
