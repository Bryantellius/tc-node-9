// Exercise One
console.log("IGNORE EVENS: FOR");

let start = 0;
let end = 15;

for (let i = start; i <= end; i++) {
  if (i % 2 == 1) {
    console.log(i, "odd");
  }
}

// while rewrite
console.log("IGNORE EVENS: WHILE");

let whileI = 0;

while (whileI <= end) {
  if (whileI % 2 == 1) {
    console.log(whileI, "odd");
  }

  whileI++;
}

// do/while rewrite
console.log("IGNORE EVENS: DO/WHILE");

let doWhileI = 0;

do {
  if (doWhileI % 2 == 1) {
    console.log(doWhileI, "odd");
  }

  doWhileI++;
} while (doWhileI <= end);

// Exercise Two: FIZZBUZZ
console.log("FIZZBUZZ: FOR");

for (let i = start; i <= end; i++) {
  let output = "";

  if (i % 3 == 0) {
    // FIZZ
    output += "FIZZ";
  }

  if (i % 5 == 0) {
    // BUZZ
    output += "BUZZ";
  }

  output && console.log(i, output);
}

// while rewrite
console.log("FIZZBUZZ: while");

let whileF = start;

while (whileF <= end) {
  let output = "";

  if (whileF % 3 == 0) {
    // FIZZ
    output += "FIZZ";
  }

  if (whileF % 5 == 0) {
    // BUZZ
    output += "BUZZ";
  }

  output && console.log(whileF, output);

  whileF++;
}

// do/while rewrite
console.log("FIZZBUZZ: do/while");

let doWhileF = start;

do {
  let output = "";

  if (doWhileF % 3 == 0) {
    // FIZZ
    output += "FIZZ";
  }

  if (doWhileF % 5 == 0) {
    // BUZZ
    output += "BUZZ";
  }

  output && console.log(doWhileF, output);

  doWhileF++;
} while (doWhileF <= end);
