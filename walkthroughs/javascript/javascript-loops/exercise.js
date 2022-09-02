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

// Exercise 4: Find Value
console.log("FIND VALUE: FOR");

let value = Math.round(Math.random() * 500); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

// search for value
for (let num = 0; num <= n; num++) {
  if (num == value) {
    console.log("Found Value");
    break;
  } else if (num == n) {
    console.log("Didn't find value");
  }
}

// Exercise 5: Custom FIZZ BUZZ
console.log("VARIABLE FIZZ BUZZ: FOR");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
n = Math.round(Math.random() * (1000 - 1) + 1);
start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i <= n; i++) {
  if (i % fizzDivisor == 0 && i % buzzDivisor == 0) {
    console.log(i, "FIZZBUZZ");
  } else if (i % fizzDivisor == 0) {
    console.log(i, "FIZZ");
  } else if (i % buzzDivisor == 0) {
    console.log(i, "BUZZ");
  }
}

// DEBUG

value = Math.round(Math.random() * 500);
n = Math.round(Math.random() * (500 - 100) + 100);

// check to see if the value is in the range of 0-n
if (value > n) {
  // if not, don't go on to start the loop
  console.log("Did not find value");
} else {
  // if yes, search for value in the loop
  for (let m = 0; m != n; m++) {
    if (m == value) {
      console.log(m + " Found value!");
      break;
    }
  }
}
