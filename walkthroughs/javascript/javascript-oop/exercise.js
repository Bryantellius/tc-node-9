console.log("Hello OOP");

// Create a Person class
// // properties for a person: name, pets, residence, hobbies
// // methods for a person: greeting, addHobby, removeHobby
class Person {
  constructor(
    name = "Stranger",
    pets = 0,
    residence = "Nowhere",
    hobbies = []
  ) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }

  greet(name) {
    console.log(`Hello ${name}!`);
  }

  addHobby(newHobby) {
    this.hobbies.push(newHobby);
  }

  removeHobby(oldHobby) {
    // function filterHobby(hobby) {
    //   if (hobby === oldHobby) {
    //     return false;
    //   } else {
    //     return true;
    //   }
    // }

    this.hobbies = this.hobbies.filter((hobby) => hobby != oldHobby);
  }
}

let ben = new Person("Ben", 0, "Birmingham", [
  "coding",
  "ping pong",
  "running",
]);

ben.addHobby("reading");
ben.removeHobby("running");

console.log(ben);

// Create a Coder class

class Coder extends Person {
  occupation = "Full Stack Web Developer";

  greet(name) {
    console.log(`Hello world! ${name} say it with me!`);
  }
}

let seth = new Coder("Seth", 0, "Warrior", ["guitar", "video games", "coding"]);

seth.greet(ben.name);
ben.greet(seth.name);

class Character {
  name = "New Character";

  updateName(name) {
    this.name = name;
  }
}

class Warrior extends Character {}

let newPlayer = new Warrior();

newPlayer.name; // "New Character"

newPlayer.updateName("Ben");

newPlayer.name; // "Ben"

// Create a Calculator class
// asks for a couple numbers
// asks for some operation
// shows result

class Calculator {
  result = 0;
  a;
  b;
  op;
  shouldContinue = false;

  start() {
    do {
      this.a = this.getInput("First Number", true);
      this.b = this.getInput(
        "Second Number (give no number to use previous result)",
        true
      );
      this.op = this.getInput(
        "Operation: ('+' for addition, '-' for subtraction, '*' for multiplication, '/' for division)",
        false
      );

      if (isNaN(this.b)) {
        this.b = undefined;
      }

      switch (true) {
        case isNaN(this.a):
          alert("Invalid input");
          break;
        case this.op == "+":
          this.add(this.a, this.b);
          this.displayResult();
          break;
        case this.op == "-":
          this.subtract(this.a, this.b);
          this.displayResult();
          break;
        case this.op == "*":
          this.multiply(this.a, this.b);
          this.displayResult();
          break;
        case this.op == "/":
          this.divide(this.a, this.b);
          this.displayResult();
          break;
        default:
          alert("Invalid operation");
      }

      let continueInput = this.getInput("Again? (type 'yes')", false);

      this.shouldContinue = continueInput == "yes";
    } while (this.shouldContinue);
  }

  add(a, b) {
    if (b === undefined) {
      this.result += a;
    } else {
      this.result = a + b;
    }

    return this.result;
  }

  subtract(a, b) {
    if (b === undefined) {
      this.result -= a;
    } else {
      this.result = a - b;
    }

    return this.result;
  }

  multiply(a, b) {
    if (b === undefined) {
      this.result *= a;
    } else {
      this.result = a * b;
    }

    return this.result;
  }

  divide(a, b) {
    if (b === undefined) {
      this.result /= a;
    } else {
      this.result = a / b;
    }

    return this.result;
  }

  clear() {
    this.result = 0;
  }

  displayResult() {
    alert(this.result);
  }

  getInput(msg, isNumber) {
    let input = prompt(msg);

    if (isNumber) {
      return parseFloat(input);
    }

    return input;
  }
}

let calculator = new Calculator();

calculator.start();
