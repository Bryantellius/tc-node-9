console.log("Hello World!");

// Exercise One

let min = 1;
let max = 100;
let numToGuess = 50;

// String Interpolation
// let name = "Ben";
// `My name is ${name}` => "My name is Ben"

// let input = prompt("Guess a whole number between " + min + " and " + max); // return a STRING

// the above concatenation example is the same result as the below string interpolation example

let input = prompt(`Guess a whole number between ${min} and ${max}:`); // return a STRING

// You could prompt and parse in the same line, as below
// let input = parseFloat(prompt("Guess a whole number between 1 and 100:")); // return a STRING

input = parseFloat(input);

// check if their input is invalid
if (isNaN(input) || input > max || input < min) {
  // no an appropriate guess
  alert(
    `Your guess was not a whole number between ${min} and ${max}. Try again.`
  );
} else {
  if (numToGuess > input) {
    alert("too low");
  } else if (numToGuess < input) {
    alert("too high");
  } else {
    alert("correct");
  }
}

// Exercise Two

// let birthMonth = prompt("What is your birth month number?\n (ex: January = 1)"); // returns a string
// birthMonth = parseInt(birthMonth);

// switch (birthMonth) {
//   case 12:
//   case 1:
//   case 2:
//     alert("Winter");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     alert("Spring");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     alert("Summer");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     alert("Fall");
//     break;
//   default:
//     alert("That month doesn't exist on my calendar...");
// }

let birthMonth = prompt(
  "Enter your birth month:\n Format Examples: ('January', 'July', 'December')"
);

birthMonth = birthMonth.toLowerCase(); // converts a string to all lowercase letters

switch (birthMonth) {
  case "december":
  case "january":
  case "february":
    alert("Winter");
    break;
  case "march":
  case "april":
  case "may":
    alert("Spring");
    break;
  case "june":
  case "july":
  case "august":
    alert("Summer");
    break;
  case "september":
  case "october":
  case "november":
    alert("Fall");
    break;
  default:
    alert(
      "Not a valid month. Check the spelling for the entire month name and retry."
    );
}

// Exercise Three

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

// if (typeId == "01") {
//   type = "Tank top";
// } else if (typeId == "02") {
//   type = "T-Shirt";
// } else if (typeId == "03") {
//   type = "Long Sleeve";
// } else if (typeId == "04") {
//   type == "Sweat Shirt";
// } else {
//   type = "Other";
// }

switch (typeId) {
  case "01":
    type = "Tank top";
    break;
  case "02":
    type = "T-Shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type = "Sweat Shirt";
    break;
  default:
    type = "Other";
}

// if (colorId == "BL") {
//   color = "Black";
// } else if (colorId == "BL") {
//   color = "Blue";
// } else if (colorId == "RD") {
//   color = "Red";
// } else if (colorId == "PU") {
//   color = "Purple";
// } else {
//   color = "White";
// }

switch (true) {
  case colorId == "BL":
    color = "Black";
    break;
  case colorId == "BL":
    color = "Blue";
    break;
  case colorId == "RD":
    color = "Red";
    break;
  case colorId == "PU":
    color = "Purple";
    break;
  default:
    color = "White";
}

// if (sizeId == "S") {
//   size = "Small";
// } else if (sizeId == "M") {
//   size = "Medium";
// } else if (sizeId == "L") {
//   size = "Large";
// } else if (sizeId == "XL") {
//   size = "Extra Large";
// } else {
//   size = "One Size Fits All";
// }

switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  default:
    size = "One Size Fits All";
}

console.log(`Product: ${size} ${color} ${type}`);
// Product: Large Purple Tank Top
