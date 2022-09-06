import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    // Feedback
    // Number to guess
    // Guessed number

    this.correctNum = Math.round(Math.random() * (100 - 1) + 1); // random number between 1 and 100
    this.score = 100;

    this.state = {
      feedback: "",
      guess: "",
    };

    this.handleGuess = this.handleGuess.bind(this);
  }

  handleGuess(event) {
    event.preventDefault();

    console.log(this.state.guess, this.correctNum);

    let feedback;

    if (this.state.guess < this.correctNum) {
      feedback = "Too low";
    } else if (this.state.guess > this.correctNum) {
      feedback = "Too high";
    } else {
      feedback = `Correct! You finished with a score of ${this.score}.`;
    }

    this.setState({ feedback });
    this.score--;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Number Guessing Game</h1>
          <p>{this.state.feedback}</p>
          <form onSubmit={this.handleGuess}>
            <label htmlFor="guess">Enter a guess:</label>
            <input
              type="number"
              name="guess"
              id="guess"
              value={this.state.guess}
              onChange={(event) =>
                this.setState({ guess: Number(event.target.value) })
              }
            />
            <button type="submit">Submit</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
