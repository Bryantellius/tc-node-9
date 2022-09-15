import { useState, useEffect } from "react";

function FilmsList(props) {
  let [list, setList] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  function getFilms() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((list) => {
        setList(list);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getFilms();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <ul>
        {list.map((film) => (
          <li key={film.id}>{film.title}</li>
        ))}
      </ul>
    );
  }
}

export default FilmsList;
