console.log("Hello HOF");

// Exercise 1

function createPlus(refNumber) {
  return function (num) {
    return num + refNumber;
  };
}

let add10 = createPlus(10);
let add2 = createPlus(2);

console.log(add10(100)); // 110
console.log(add2(100)); // 102

let users = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];

// Exercise 2
// Print the names the of the users
// for, for/of, for/in, forEach, while, do/while

function logName(user) {
  console.log(user.name);
}

// pass function reference
users.forEach(logName);

// inline
users.forEach(function (user) {
  console.log(user.name);
});

// inline arrow
users.forEach((user) => {
  console.log(user.name);
});

// Exercise 3

function trimUser(user) {
  return {
    name: user.name,
    score: user.score,
  };
}

let userScores = users.map(trimUser);

console.log(userScores);

// Exercise 4

// Exercise 5

// Exercise 6
