console.log("More on objects and destructuring");

let user = {
  name: "Ben",
  username: "brbry",
  email: "bb@mail.com",
  avatar: "path/to/image.jpg",
  greet(name) {
    console.log(`Hello ${name}!`);
  },
};

user.greet("Seth"); // "Hello Seth!"

let { greet } = user;

greet("Hunter"); // "Hello Hunter!"

function greetUser({ name, username }, greeting) {
  console.log(`${greeting}, ${name}, known as ${username}!`);
}

// single-line comment
/*
    multi-
    line
    comment
*/
greetUser(user, "Hello there"); // "Welcome back, Ben!"
greetUser({ name: "Seth" }, "Howdy");

// Object Destructuring

// destructure name, username, and phone properties from user
// create and assign local variables to hold those values
let { name, username, phone } = user;

name; // "Ben"
username; // "brbry"
phone; // undefined

// Array Destructuring
let hobbits = ["Frodo", "Sam", "Merry"];

// destructure values from 0, 1, 2
// create and assign local variables that are assigned those values in the order in which they exist in the array
let [frodo, sam, merry] = hobbits;

frodo; // "Frodo"
sam; // "Sam"
merry; // "Merry"

// Save time logging with this example

// let { log } = console; DON'T DO THIS

// Do this
console.log("Hello World!");

// Changing Prototypes
// Same reason you shouldn't change built-in prototypes

// Accessing the last value of an array
// For let hobbits = ["Frodo", "Sam", "Merry"];

// In Python: hobbits[-1]; // "Merry"

// In JavaScript
hobbits[0]; // "Frodo"

hobbits[hobbits.length - 1]; // "Merry"

Object.defineProperty(Array.prototype, "-1", {
  get: () => this[this.length - 1],
});

hobbits[-1]; // "Merry"
