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

class Calculator {
  result = 0;

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
    console.log(this.result);
  }
}

let calculator = new Calculator();

calculator.multiply(4, 2);
calculator.displayResult(); // 8
calculator.subtract(3);
calculator.displayResult(); // 5
calculator.clear();
calculator.displayResult(); // 0
