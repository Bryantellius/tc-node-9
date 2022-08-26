"use strict";

console.log("Hello Error Handling!");

// TODO: Enable strict mode

// TODO: Fix the following parameter list
function parseToJSON(data) {
  try {
    // TODO: Add a try/catch block to
    // attempt to convert 'data' to JSON
    return JSON.parse(data);
  } catch (error) {
    // TODO: if an exception is raised
    // print the error to the console
    // and return null
    console.error(error);
    return null;
  }
}

let failData = "<h1>Hello World!</h1>";

let passData = JSON.stringify({ success: true });

console.log(parseToJSON(failData)); // null

console.log(parseToJSON(passData)); // { success: true }
