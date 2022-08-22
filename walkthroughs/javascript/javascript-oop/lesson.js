console.log("Hello OOP");

let nums = [1, 2, 3, 4, 5];

console.log(nums);

class Character {
  health = 100;

  // constructor method creates an instance (object) from a class/prototype
  constructor(name, age) {
    // this will refer to the object created from the class
    this.name = name;
    this.age = age;
  }

  greet(name) {
    console.log(`Hello ${name}! My name is ${this.name}.`);
  }

  takeDamage() {
    this.health -= 10;
    console.log(`${this.name} is now at ${this.health} health.`);
  }
}

class Hobbit extends Character {
  constructor(name, age, shireResident) {
    // super refers to the parent class constructor
    super(name, age);

    this.shireResident = shireResident;
  }

  // redefine a method that is inherited
  // this is called Method Overriding
  greet(name) {
    console.log(`Ho ${name}! When's second breakfast?`);
  }

  takeDamage() {
    this.health -= 25;
    console.log(`${this.name} is now at ${this.health} health.`);
  }
}

class Elf extends Character {
  constructor(name, age, type) {
    super(name, age);

    this.type = type;
  }

  // redefine a method that is inherited
  // this is called Method Overriding
  greet(name) {
    console.log(`asdaf ${name}, asdflkajs;dflkasjd ${this.name}.`);
  }

  takeDamage() {
    this.health -= 8;
    console.log(`${this.name} is now at ${this.health} health.`);
  }
}

// create an instance (object) from a class
// new User("Frodo", 50);

let list = [
  new Character("Aragorn", 87),
  new Hobbit("Frodo", 50, true),
  new Hobbit("Sam", 38, true),
  new Hobbit("Merry", 36, true),
  new Hobbit("Pippin", 26, true),
  new Hobbit("Outsider", 30, false),
  new Elf("Legolas", 2931, "Mirkwood"),
];

console.log(list);

list.forEach((user) => {
  user.takeDamage();
});

let newCharacter = new Character("Gandalf", 100);

newCharacter.takeDamage(); // "Gandalf is now at 90 health."
