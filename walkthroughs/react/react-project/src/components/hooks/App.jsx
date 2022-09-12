import { useState, useEffect } from "react";

function App(props) {
  let [count, setCount] = useState(0);
  let [title, setTitle] = useState("React Hooks");
  let [films, setFilms] = useState([]);

  async function getFilms() {
    let res = await fetch("https://ghibliapi.herokuapp.com/films");
    let data = await res.json();
    setFilms(data);
  }

  useEffect(() => {
    // call the studio ghibli api for films
    getFilms();
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <h1>
          Title: {title} and Click Count: {count}
        </h1>
        <hr />
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <hr />
        <button onClick={(e) => setCount(count + 1)}>Update Count</button>
        <hr />
        <ul>
          {films.map((film) => (
            <li key={film.id}>{film.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
