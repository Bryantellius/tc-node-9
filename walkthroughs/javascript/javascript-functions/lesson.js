// Scope
// Global => file/program
// Local => function bodies, local code blocks
// // Function - function body
// // Block - any other code block

let isOn = false;
let message;

if (isOn) {
  message = "Light is on";
} else {
  message = "Light is off";
}

console.log(message); // Light is off

// function definitions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

const toPow = (a, b) => {
  return a ** b;
};

// Single parameter rule
// You can omit the parentheses if you only have one parameter
// Implicit return
// You can omit the curly braces and return keyword to return the result of the single line of code
let createGreeting = (name) => `Howdy, ${name}!`;

createGreeting("Cameron"); // "Howdy, Cameron!"
createGreeting("Seth"); // "Howdy, Seth!"

toPow(add(12, 12), add(1, 1)); // 576

const sumToLengthPow = (a, b) => {
  let sum = add(a, b);
  let result = toPow(sum, 2);

  return result;
};

sumToLengthPow(2, 3); // 25
