// Functions??

// What is a function?

// self-contained block of statements that can receive input, perform a specific task, and return an output
// series of instructions that you can refer/call to by name

// Too Simple Calculator

// Math Functions
function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    return a / b;
  }
  
  // ask the user for two numbers
  // ask the user for an operation
  // give result
  
  function getInput(msg, isNumber = false) {
    let input = prompt(msg);
  
    if (isNumber) {
      return parseFloat(input);
    } else {
      return input;
    }
  }
  
  function calculate(a, b, operator) {
    switch (operator) {
      case "add":
        return add(a, b);
      case "subtract":
        return subtract(a, b);
      case "multiply":
        return multiply(a, b);
      case "divide":
        return divide(a, b);
      default:
        return NaN;
    }
  }
  
  function runProgram() {
    let num1 = getInput("First number:", true);
    let num2 = getInput("Second number:", true);
    let operator = getInput(
      "What operation?\n Options: (add, subtract, multiply, divide)"
    );
  
    if (
      operator != "add" &&
      operator != "subtract" &&
      operator != "multiply" &&
      operator != "divide"
    ) {
      alert("Not a valid operation.");
    } else {
      let result = calculate(num1, num2, operator);
  
      if (isNaN(result)) {
        alert("Invalid input");
      } else {
        alert(`Result: ${result}`);
      }
    }
  
    let againInput = getInput("Again? \nType 'yes' to go again.");
  
    if (againInput == "yes") {
      runProgram();
    }
  }
  
  runProgram();
  