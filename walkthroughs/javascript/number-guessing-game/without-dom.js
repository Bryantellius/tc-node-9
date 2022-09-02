console.log("Hello Number Guessing Game");

// start

// Secret number
let secretNumber = 50;

// Are they still playing?
let isPlaying = true;

function turn() {
  // guess a number
  let guess = prompt("Guess a number"); // returns a string

  // get feedback
  // // too high, too low, correct
  if (secretNumber < guess) {
    alert("Your guess was too high");
  } else if (secretNumber > guess) {
    alert("Your guess was too low");
  } else {
    alert("Your guess was correct!");
    isPlaying = false;
  }
}

// repeat until correctly guessed secret number
while (isPlaying) {
  turn();
}

// end