// a specific part of a class when you create it

// predefined method for targeting the object that you are working with

// refers to the argument that is passed through a function

// related to the piece/thing that you are working with

// only refers to (global) objects?

// refers to the objects executing the current piece of code

// --- good

// "this" refers to the caller (instance/object) of a method

// --- better

// "this" is a dynamic value that refers to the containing scope at the point of execution (unless otherwise bound*)

function greet(name) {
  console.log(`Hello ${name}, my name is ${this.firstName}!`);
}

// type error because this is undefined, meaning I can't treat it as an object

// firstName is undefined because this IS an object, but doesn't have that property

// Arrow Notation vs Function Declaration
// Function Declaration functions: "this" refers to the containing scope of execution
// Arrow Notation functions: "this" refers to the containing scope at definition

const sayHello = (name) => {
  console.log(`Hello ${name}, my name is ${this.firstName}!`);
};

greet("Function Declaration");
sayHello("Arrow Notation");

let obj = {
  firstName: "Seth",
  greet,
  sayHello,
};

obj.greet("Function Declaration");
obj.sayHello("Arrow Notation");

// Implementations

let clicker = {
  button: document.getElementById("clickMe"),
  count: 0,
  onClick() {
    this.count++;
    this.button.textContent = `Clicked: ${this.count}`;
  },
};

clicker.button.addEventListener("click", () => clicker.onClick());
