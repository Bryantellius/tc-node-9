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
