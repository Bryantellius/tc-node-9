import { getRandomNum, updateEleText, countDuplicates } from "./utils";
import Timer from "./timer";

export default class Game {
  guesses = [];
  number;
  score = 0;

  start() {
    // generate a random number
    this.number = getRandomNum(1, 100);

    // start timer
    new Timer().start(180, () => this.end(false));

    // start turns (start listening for guesses)
    document.querySelector("#form").onsubmit = (event) => {
      event.preventDefault();

      this.turn();
    };
  }

  turn() {
    // take a guess
    let inputEle = document.querySelector("#guess");
    let guess = Number(inputEle.value);

    this.score++;
    this.guesses.push(this.guesses);

    // compare guess to number
    // and give feedback
    if (guess > this.number) {
      updateEleText("#feedback", `${guess} is too high`);
    } else if (guess < this.number) {
      updateEleText("#feedback", `${guess} is too low`);
    } else {
      updateEleText("#feedback", `${guess} is correct`);

      this.end();
    }
  }

  end(didWin = true) {
    // ask to play again
    // display score, other stats, etc
    updateEleText(
      "#feedback",
      `Your score: ${this.score + countDuplicates(this.guesses)}`
    );
    // reset game values
    this.guesses = [];
    this.score = 0;
    document.querySelector("#form").onsubmit = undefined;
  }
}
