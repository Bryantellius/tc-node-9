import { useState } from "react";
import FilmsList from "./filmslist";
import Item from "../stateandprops/item";
import List from "../stateandprops/list";

function App(props) {
  let [list, setList] = useState(["ready", "set", "GO"]);
  let [text, setText] = useState("");

  function addItem(event) {
    event.preventDefault();

    let newItems = [...list, text];

    setList(newItems);
    setText("");
  }

  function deleteItem(item) {
    let filteredItems = list.filter((value) => value != item);
    setList(filteredItems);
  }

  let listItems = list.map((item, idx) => (
    <Item key={idx} content={item} onDelete={() => deleteItem(item)} />
  ));

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>

        <List>{listItems}</List>

        <form onSubmit={addItem}>
          <input
            type="text"
            name="newTask"
            id="newTask"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <button>Add</button>
        </form>

        <FilmsList />
      </header>
    </div>
  );
}

export default App;
