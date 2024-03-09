const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adoption Page"),
    React.createElement("p", {}, "Welcome to the adoption page!"),
    React.createElement(
      "button",
      { onClick: () => alert("You clicked the button!") },
      "Click me!",
    ),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mixed" }),
  ]);
};

const container = document.getElementById("root"); // Get the root element
const root = ReactDOM.createRoot(container); // Create a root
root.render(React.createElement(App)); // Render the app (App component
