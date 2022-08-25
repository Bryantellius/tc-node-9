// Passed by Value vs Passed by Reference
// Primitive values passed by value
// Structured values passed by reference

// x is 12
let x = 12;

// y is 12
let y = x;

x = 11;

y; // 12

// a refers to an object in memory
let a = {
  value: 12,
};

// b refers to that same object in memory
let b = a;

a.value = 11;

b.value; // 11

// Immutability
let nums = [3, 2, 5, 4, 1];

function sortArray(arr) {
  let sortedArr = Array.from(arr);

  sortedArr.sort((a, b) => (a > b ? 1 : -1));

  return sortedArr;
}

sortArray(nums); // [1, 2, 3, 4, 5]
nums; // [3, 2, 5, 4, 1]

// Conditional (Ternary) Operator
// Inline if/else
// Syntax condition ? result 1 : result 2

let isOnline = true;
// let message;

// if (isOnline) {
//   message = "Welcome back";
// } else {
//   message = "Good bye!";
// }

let message = isOnline ? "Welcome back" : "Good bye";

// if (12 > 11) {
//     return 1
// } else {
//     if (12 < 11) {
//         return -1
//     } else {
//         return 0
//     }
// }

let sortResult = 12 > 11 ? 1 : 12 < 11 ? -1 : 0;

// Rest/Spread Operator
// ...

// Rest
// "gather" many elements into a single array

function add(...nums) {
  return nums.reduce((sum, value) => sum + value, 0);
}

add(); // 0
add(1); // 1
add(1, 2, 3, 4, 5); // 15

// Spread
// individually spread items from an iterable object

// Can be used to copy and merge arrays
let anotherNums = [12, 13, 41, 52, 56];
let allNums = [...nums, ...anotherNums]; // [3, 2, 5, 4, 1, 12, 13, 41, 52, 56]

// Can be used to copy and merge objects
let user = {
  name: "Ben Bryant",
  email: "bb@mail.com",
};

let updateDetails = {
  phone: "123",
  avatar: "link.jpg",
  name: "Benjamin Bryant",
};

let updatedUser = { ...user, ...updateDetails };

/*
{
    name: "Benjamin Bryant",
    email: "bb@mail.com",
    phone: "123",
    avatar: "link.jpg",
}
*/

console.log(allNums);
console.log(updatedUser);

// Can be used to spread values from an array into a parameter list
let arguments = [1, 2];

function subtract(a, b) {
  return a - b;
}

subtract(...arguments);
