function bark() {
  console.log("woof");
}

const meow = () => {
  console.log("meow");
};

const purr = function purr()

() => {
  // doesn't get called
  console.log("hello");
};

meow();
bark();
