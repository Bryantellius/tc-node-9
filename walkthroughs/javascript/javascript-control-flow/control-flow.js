let account1 = 100;
let savings1 = 1000;
let transferAmount = 5;

// attempting to transfer $5 from account1 to savings1

if (account1 >= transferAmount) {
  // transfer money
  account1 -= transferAmount;
  // same as account1 = account1 - transferAmount;
  savings1 += transferAmount;
  // same as savings1 = savings + transferAmount;

  console.log("Account 1: " + account1);
  console.log("Savings 1: " + savings1);
} else {
  console.log("Not enough money to make transfer.");
}

console.log("ANOTHER TEST======");

transferAmount = 25;

// attempting to transfer $5 from account1 to savings1

if (account1 >= transferAmount) {
  // transfer money
  account1 -= transferAmount;
  // same as account1 = account1 - transferAmount;
  savings1 += transferAmount;
  // same as savings1 = savings + transferAmount;

  console.log("Account 1: " + account1);
  console.log("Savings 1: " + savings1);
} else {
  console.log("Not enough money to make transfer.");
}

console.log("ANOTHER TEST======");

// Rewritten as Switch/Case

switch (true) {
  case account1 >= transferAmount:
    // transfer money
    account1 -= transferAmount;
    // same as account1 = account1 - transferAmount;
    savings1 += transferAmount;
    // same as savings1 = savings + transferAmount;

    console.log("Account 1: " + account1);
    console.log("Savings 1: " + savings1);
    break;
  default:
    console.log("Not enough money to make transfer.");
}

// More on Switch/Case

let userInput = prompt("What is your month number?\n Ex: Jan. = 1");
// parseInt or parseFloat
let userMonth = parseInt(userInput); // returns the result of a string to an integer

switch (userMonth) {
  case 12:
  case 1:
  case 2:
    console.log("Winter");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Spring");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Summer");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Fall");
    break;

  default:
    console.log("Your month doesn't fall in the Gregorian Calendar..");
}

// same as

if (userMonth == 12 || userMonth == 1 || userMonth == 2) {
  console.log("Winter");
} else if (userMonth == 3 || userMonth == 4 || userMonth == 5) {
  console.log("Spring");
} else if (userMonth == 6 || userMonth == 7 || userMonth == 8) {
  console.log("Summer");
} else if (userMonth == 9 || userMonth == 10 || userMonth == 11) {
  console.log("Fall");
} else {
  console.log("Your month doesn't fall in the Gregorian Calendar..");
}

// same as

switch (true) {
  case userMonth == 12 || userMonth == 1 || userMonth == 2:
    console.log("Winter");
    break;
  case userMonth == 3 || userMonth == 4 || userMonth == 5:
    console.log("Spring");
    break;
  case userMonth == 6 || userMonth == 7 || userMonth == 8:
    console.log("Summer");
    break;
  case userMonth == 9 || userMonth == 10 || userMonth == 11:
    console.log("Fall");
    break;
  default:
    console.log("Your month doesn't fall in the Gregorian Calendar..");
}
