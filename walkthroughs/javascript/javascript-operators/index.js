console.log("Hello World");

// Exercise 1

let a = 20;
let b = 4;
let c = 10;
let d = 25;

let addition = a + b; // -> 24
let subtraction = a - b; // -> 16
let multiplication = a * b; // -> 80
let division = a / b; // -> 5

let remainder = d % c; // -> 5
let power = c ** b; // -> 10,000

let special = (((a + b) * (b - c)) / c ** d) % true;

console.log(addition, subtraction, multiplication, division, remainder, power);

// Exercise 2

let num = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Frodo";
let lastName = "Baggins";

console.log(num + str); // -> "1111"
console.log(num + str2); // -> "11eleven"
console.log(num + isPresent); // -> 12
console.log(firstName + num); // -> "Frodo11"
console.log(isPresent + str); // -> "true11"
console.log(firstName + lastName); // -> "FrodoBaggins"

// Exercise 3

let val = 5;
let str3 = "5";
let str4 = "five";
let isAwake = false;

console.log(val == str3); // -> true
console.log(val === str3); // -> false
console.log(!isAwake); // -> true
console.log("eleven" == str4 && val >= str3); // -> false
console.log(!isAwake || isAwake); // -> true
console.log(0 == false); // -> true
console.log(0 === false); // -> false
console.log(0 != false); // -> false
console.log(0 !== false); // -> true
