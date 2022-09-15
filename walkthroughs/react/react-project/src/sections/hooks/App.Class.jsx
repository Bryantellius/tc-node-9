import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      title: "React Hooks",
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>
            Title: {this.state.title} and Click Count: {this.state.count}
          </h1>
          <hr />
          <input
            value={this.state.title}
            onChange={(e) => this.setState({ title: e.target.value })}
          />
          <hr />
          <button
            onClick={(e) => this.setState({ count: this.state.count + 1 })}
          >
            Update Count
          </button>
        </div>
      </div>
    );
  }
}

export default App;
