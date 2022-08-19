console.log("Hello HOF");

let numbers = [1, 2, 3, 4, 5];
let obj = {
  name: "Ben",
  isOnline: true,
};

// iterates over values
for (let value of numbers) {
  console.log(value);
}

// iterates over keys (properties)
for (let property in obj) {
  console.log(property);
}

// HOF
// a function that takes in a function value as a parameter

function calculate(a, b, action) {
  let num1 = parseFloat(a);
  let num2 = parseFloat(b);

  if (isNaN(a) || isNaN(b)) {
    return null;
  }

  return action(a, b);
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

calculate(2, 2, add); // 4
calculate(2, 10, subtract); // -8

// a function that returns a function value

function createGreeting(greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}!`);
  };
}

let greetHi = createGreeting("Hi");
let greetHello = createGreeting("Hello");
let greetHelloThere = createGreeting("Hello there");

greetHi("Ben");
greetHello("Cameron");
greetHelloThere("Seth");

function generateLessThan(refNumber) {
  return function (checkNumber) {
    return checkNumber < refNumber;
  };
}

let under10 = generateLessThan(10);
let under100 = generateLessThan(100);

under10(2); // true
under100(101); // false

// Assert that a value is of a specific data type

function createTypeAssertion(type) {
  return function (value) {
    return typeof value == type;
  };
}

let isNumber = createTypeAssertion("number");
let isNull = createTypeAssertion("null");
let isUndefined = createTypeAssertion("undefined");
let isString = createTypeAssertion("string");

let msg;

isUndefined(msg); // true

// HOF: prioritize action over details
numbers.forEach((val) => {}); // (value, index, array) => // logic

// .reduce
// two params - callback, initial value (optional)
// reduces an array to a single value

function findSum(list) {
  let sum = 0;

  for (let num of list) {
    sum += num;
  }

  return sum;
}

let sum = numbers.reduce((sum, value) => {
  return sum + value;
}, 0);

function updateStats(stats, value) {
  stats.data.push(value);
  stats.length++;
  stats.sum += value;
  stats.getAvg();

  return stats;
}

let initialStats = {
  data: [],
  length: 0,
  sum: 0,
  avg: null,
  getAvg: function () {
    this.avg = this.sum / this.length;
    return this.avg;
  },
};

let result = numbers.reduce(updateStats, initialStats);

console.log(result);
