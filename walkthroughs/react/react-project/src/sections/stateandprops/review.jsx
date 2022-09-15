import { Component } from "react";

export default class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: ["Eat", "Code", "Repeat"],
      task: "",
    };
  }

  updateItems() {
    let newItems = [...this.state.items, this.state.task];

    this.setState({ items: newItems, task: "" });
  }

  render() {
    return (
      <div>
        <h2>ToDo Items</h2>
        <div>
          {/* Controlled Input */}
          <input
            type="text"
            name="newItem"
            id="newItem"
            value={this.state.task}
            onChange={(e) => this.setState({ task: e.target.value })}
          />
          <button onClick={(e) => this.updateItems()}>Add</button>
        </div>
        <ul>
          {/* rendered list */}
          {this.state.items.map((item, idx) => {
            return <li key={idx}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}
