console.log("Hello Functions!");

// Print Odds from 1 to n
function printOdds(n) {
  console.log("Start of printOdds");
  let sign = 1;

  if (n < 0) {
    sign = -1;
  }

  for (let num = 1; num <= n * sign; num++) {
    if (num % 2 == 1) {
      console.log(num * sign);
    }
  }

  console.log("End of printOdds");
}

printOdds(10);
printOdds(20);
printOdds(-30);

// let input = parseInt(prompt("Give me n"));

// if (!isNaN(input)) {
//   printOdds(input);
// }

// Check age

function checkAge(age = -1, name = "Guest") {
  if (age < 0) {
    return null;
  }

  let ofAgeMsg = `Congrats ${name}, you are old enough to drive`;
  let underAgeMsg = `Sorry ${name}, you'll have to wait ${
    16 - age
  } year(s) to drive`;

  if (age >= 16) {
    console.log(ofAgeMsg);
  } else {
    console.log(underAgeMsg);
  }
}

// let name = prompt("What's your name?");
// let age = parseInt(prompt("What's your age?"));

// if (!isNaN(age)) {
//   checkAge(age, name);
// }

checkAge(17); // yes
checkAge(); // nothing
checkAge(15, "Cameron"); // no

// Which quadrant?

const determinePosition = (x, y) => {
  switch (true) {
    case x > 0 && y > 0:
      // Quadrant 1
      return "Q1";
    case x < 0 && y > 0:
      // Quadrant 2
      return "Q2";
    case x < 0 && y < 0:
      // Quadrant 3
      return "Q3";
    case x > 0 && y < 0:
      // Quadrant 4
      return "Q4";
    case x == 0 && y != 0:
      // x axis
      return "x axis";
    case x != 0 && y == 0:
      // y axis
      return "y axis";
    default:
      return "origin";
  }
};

let position = determinePosition(0, 0);
console.log(position); // origin

// Type of Triangle
// equilateral: all side lengths equal
// isosceles: only two side lengths equal
// scalene: all different side lengths

const isValidTriangle = (a, b, c) => {
  return a + b > c && a + c > b && b + c > a;
};

const determineTriangle = (a, b, c) => {
  let isValid = isValidTriangle(a, b, c); // return true of false

  if (isValid) {
    if (a == b && b == c) {
      // all sides the same
      return `Equilateral`;
    } else if (a == b || b == c || a == c) {
      // two sides the same
      return `Isosceles`;
    } else {
      return `Scalene`;
    }
  } else {
    return `Not a valid triangle`;
  }
};

console.log(determineTriangle(1, 1, 2)); // not valid
console.log(determineTriangle(2, 2, 1)); // isos
console.log(determineTriangle(3, 3, 3)); // equ
console.log(determineTriangle(3, 4, 5)); // sca
