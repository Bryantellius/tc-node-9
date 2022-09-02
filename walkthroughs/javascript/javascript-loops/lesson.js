console.log("Hello Loops!");

// for loop

let sum = 0;
let count = 0;

for (let num = 1; num <= 10; num++) {
  // loop body
  count++;
  sum += num;
}

console.log(`The average number between 1 and 10 is: ${sum / count}`);

for (let num = 1; num <= 10; num++) {
  console.log(num);
}

let num = 1;

while (num <= 10) {
  // loop body
  console.log(num);
  num++;
}

// as a do/while

let x = 11;

do {
  console.log(x);
  x++;
} while (x <= 10);

let min = 1;
let max = 12;

for (let num = min; num <= max; num++) {
  for (let multiplier = min; multiplier <= max; multiplier++) {
    console.log(`${num} x ${multiplier} = ${num * multiplier}`);
  }
}

num % 2 == 0; // even
