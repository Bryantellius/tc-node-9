console.log("Hello Objects");

let todoList = ["sleep", "code", "eat", "repeat"]; // length: 4
todoList.length; // 4

todoList[0]; // "sleep"
todoList[0] = "pull an all-nighter";

console.log(todoList);

let testScores = [99, 88, 67, 89, 100, 95, 92];
let sumOfScores = 0;

for (let idx = 0; idx < testScores.length; idx++) {
  sumOfScores += testScores[idx];
}

console.log(`The average test score was: ${sumOfScores / testScores.length}`);

const names = ["Ben", "Seth", "Cameron"];

const greet = (name) => {
  console.log(`Hello there, ${name}!`);
};

for (let idx = 0; idx < names.length; idx++) {
  greet(names[idx]);
}

function a() {
  console.log("a is called");
}

function b() {
  console.log("b is called");
}

function c() {
  console.log("c is called");
}

let actions = [a, b, c];

for (let idx = 0; idx < actions.length; idx++) {
  let func = actions[idx];
  func();
  // actions[idx]();
}

// Arrays can hold any values with different data types
let mixedBad = [1, true, "true", !null];

// What are arrays?

// // matrix of data
// // container for multiple variables
// // list of data
// // one structure for many values

// How to create an array?

// array literal syntax
let emptyArray = [];

let values = [1, 2, 3];

for (let i = 0; i < values.length; i++) {
  // access each array value
  // and perform logic
  values[i];
}

// let letters = [a, b, c, d];

// Objects

let hobbit = {};

hobbit.firstName = "Samwise";
hobbit.lastName = "Gamgee";
hobbit.isFellowship = true;

console.log(hobbit);

let product = {
  description: "Describes product",
  name: "Product Name",
  manufacturer: "WhoMadeIt Inc",
  price: 19.99,
  discount: 0,
  total: 19.99,
  images: ["image1.jpg", "image2.jpg"],
  size: {
    width: 30,
    length: 55,
  },
  updatePrice: function (newPrice) {
    // updates price property
    this.price = newPrice;

    // update total
    this.updateTotal();
  },
  updateDiscount: function (newDiscount) {
    // updates discount property
    this.discount = newDiscount;

    // update total
    this.updateTotal();
  },
  updateTotal: function () {
    this.total = this.price - this.price * this.discount;
  },
};

console.log(`${product.name} is $${product.total}`);

product.updatePrice(29.99);

console.log(`${product.name} is $${product.total}`);

product.updateDiscount(0.5);

console.log(`${product.name} is $${product.total}`);

// Math

Math.floor(19.99); // 19
Math.ceil(19.01); // 20
Math.round(19.5); // 20
Math.max(12, 21, 19, 91); // 91
Math.min(12, 21, 19, 91); // 12

// Date

console.log(Date.now());
console.log(new Date().toLocaleDateString());

// Strings

let str = "Hello World";
str.length; // 11

let hobbits = [
  {
    name: "Frodo",
  },
  {
    name: "Sam",
  },
  {
    name: "Pippin",
  },
  {
    name: "Merry",
  },
];

console.log(hobbits);

// Total length of hobbit names
let total = 0;

for (let i = 0; i < hobbits.length; i++) {
  total += hobbits[i].name.length;
}

console.log(`Total characters in hobbit names: ${total}`);

let strExample = "Hello,World";

for (let i = 0; i < strExample.length; i++) {
  console.log(strExample[i]);
}

// split: string to an array
let characters = strExample.split(" "); // takes seperator
console.log(characters);

// join: array to a string
let sentence = characters.join(" "); // takes seperator
console.log(sentence);

function reverseStr(str) {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

let test1 = reverseStr("Hello World");
let test2 = reverseStr("Ben Bryant");

console.log(test1, test2);

// Quiz App
// questions
// score

let game = {
  score: 0,
  questions: [
    {
      text: "What is the JavaScript keyword for creating a variable with a constant value?",
      answer: "const",
    },
    {
      text: "What is the JavaScript keyword for creating a block-scoped variable that can be re-assigned?",
      answer: "let",
    },
    {
      text: "What is the JavaScript keyword for creating a function-scoped variable that can be re-assigned?",
      answer: "var",
    },
  ],
  start: function () {
    this.questions.forEach((question) => {
      this.askQuestion(question);
    });

    alert(`You got ${this.score} of ${this.questions.length}.`);
  },
  askQuestion: function (question) {
    let answer = prompt(question.text);

    if (answer == question.answer) {
      this.score++;
    }
  },
};

game.start();
