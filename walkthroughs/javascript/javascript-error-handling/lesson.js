"use strict";

// attempting to create a global variable

// strict mode throws an error
// name = "Ben";

console.log("Hello Error Handling!");

// strict mode throws an error
// function add(num, num) {
//   return num + num;
// }

// add(1, 5); // 2 or 10???

// Most syntax errors are early errors

if (true) {
}

// Type Error

// let allDivs = document.getElementsByTagName("div"); // returns an HTMLCollection

// allDivs.forEach(/* ... */); // throws a type error

// Reference Error

if (true) {
  let name = "Ben";
}

// console.log(name); // throw reference error

// add(1, 1); // throws reference error

class InvalidInputError extends Error {
  constructor(message) {
    super(message);

    this.name = "InvalidInputError";
  }
}

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns The result of adding a and b.
 */
const add = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new InvalidInputError("Either a or b inputs are not numbers.");
  }

  // debugger;

  let sum = a + b;

  // debugger;

  return sum;
};

let num1;

try {
  let result = add(num1, 3);

  console.log(result);
} catch (err) {
  if (err.name == "InvalidInputError") {
    // handle it this way
    alert(err.message);
  } else {
    // handle any other error this way
    console.error(err);
  }
}

const doSomething = () => {
  let isError = Boolean(Math.round(Math.random()));

  if (isError) {
    throw Error("broke");
  } else {
    console.log("Successfully did something");
  }
};

try {
  doSomething();
} catch (error) {
  console.log("Doing something else as backup...");
}

console.log("running the rest of my program...");
