// App State
let questions = [
  {
    q: "___ is the declaration keyword for declaring function scoped variables that can be reassigned.",
    a: "var",
  },
  {
    q: "___ is the declaration keyword for declaring block scoped variables that cannot be reassigned.",
    a: "const",
  },
  {
    q: "___ is the declaration keyword for declaring block scoped variables that can be reassigned.",
    a: "let",
  },
];
let currentQIdx = 0;
let score = 0;

// Select Elements
let questionElement = document.getElementById("question");
let formElement = document.querySelector("form");
let inputElement = document.getElementById("answer");
let submitBtn = document.querySelector("#submit");
let startBtn = document.querySelector("#startBtn");
let nextBtn = document.querySelector("#nextBtn");
let quizContainer = document.querySelector("#quiz");
let infoContainer = document.querySelector("#info");
let messageElement = document.querySelector("#message");
let correctAnswerElement = document.querySelector("#correctAnswer");

function updateQuestion() {
  // Load question
  questionElement.textContent = questions[currentQIdx].q;
}

function startGame() {
  // loads initial question
  updateQuestion();

  toggleShowContainers();
}

function toggleShowContainers() {
  // toggle next button
  quizContainer.classList.toggle("hide");

  // toggle submit button
  infoContainer.classList.toggle("hide");
}

function toggleShowQuizButtons() {
  // toggle next button
  nextBtn.classList.toggle("hide");

  // toggle submit button
  submitBtn.classList.toggle("hide");
}

function endGame() {
  // next question is undefined
  // meaning I'm out of questions
  messageElement.textContent = `Finished. You scored a ${score}/${questions.length}`;

  toggleShowContainers();

  // reset game values
  score = 0;
  currentQIdx = 0;
}

function showAnswer(input, answer) {
  let innerHTML = `<span class="correct">${answer}</span>`;

  if (input != answer) {
    innerHTML = `<s class="incorrect">${input}</s>` + innerHTML;
  }

  correctAnswerElement.innerHTML = innerHTML;

  toggleShowQuizButtons();
}

function nextQuestion() {
  // update next question
  currentQIdx++;

  // check to see if there is another question
  if (questions[currentQIdx]) {
    updateQuestion();
  } else {
    endGame();
  }

  // Clear the input value
  inputElement.value = "";

  // Clear answer value
  correctAnswerElement.innerHTML = "";

  toggleShowQuizButtons();
}

// Add event listeners
// HTMLClickEvent
startBtn.addEventListener("click", (event) => {
  startGame();
});

// HTMLSubmitEvent
formElement.addEventListener("submit", (event) => {
  // prevents the submission behavior to send values a url-encoded data and refresh
  event.preventDefault();

  // Check answer
  if (inputElement.value.toLowerCase() == questions[currentQIdx].a) {
    score++;
  }

  // show feedback
  showAnswer(inputElement.value.toLowerCase(), questions[currentQIdx].a);
});

nextBtn.addEventListener("click", (event) => {
  // load next question or end the game
  nextQuestion();
});
