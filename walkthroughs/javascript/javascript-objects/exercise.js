console.log("Hello Objects");

// Quiz App
// questions
// score

let game = {
  score: 0,
  questions: [
    {
      text: "What is the JavaScript keyword for creating a variable with a constant value?",
      answer: "const",
    },
    {
      text: "What is the JavaScript keyword for creating a block-scoped variable that can be re-assigned?",
      answer: "let",
    },
    {
      text: "What is the JavaScript keyword for creating a function-scoped variable that can be re-assigned?",
      answer: "var",
    },
  ],
  start: function () {
    this.questions.forEach((question) => {
      this.askQuestion(question);
    });

    alert(`You got ${this.score} of ${this.questions.length}.`);
  },
  askQuestion: function (question) {
    let answer = prompt(question.text);

    if (answer == question.answer) {
      this.score++;
    }
  },
};

game.start();
