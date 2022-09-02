// DOM Elements
// Select the form
let form = document.querySelector("#submitForm");
// Select the input for car make
let makeInput = document.querySelector("#makeInput");
// Select the input for car model
let modelInput = document.querySelector("#modelInput");
// Select the input for car year
let yearInput = document.querySelector("#yearInput");
// Select the paragraph element for car make
let makeDisplay = document.querySelector("#car-make");
// Select the paragraph element for car model
let modelDisplay = document.querySelector("#car-model");
// Select the paragraph element for car year
let yearDisplay = document.querySelector("#car-year");
// Select the remove button
let removeBtn = document.querySelector("#removeBtn");
// Select the wishlist unordered list element
let listUl = document.querySelector("#wishListContainer > ul");

export default {
  form,
  makeInput,
  modelInput,
  yearInput,
  makeDisplay,
  modelDisplay,
  yearDisplay,
  removeBtn,
  listUl,
};
