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

