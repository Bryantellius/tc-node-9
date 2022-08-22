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
  constructor(name, pets, residence, hobbies) {
    super(name, pets, residence, hobbies);

    this.occupation = "Full Stack Web Developer";
  }

  greet(name) {
    console.log(`Hello world! ${name} say it with me!`);
  }
}

let seth = new Coder("Seth", 0, "Warrior", ["guitar", "video games", "coding"]);

seth.greet(ben.name);
ben.greet(seth.name);

// Create a Calculator class
