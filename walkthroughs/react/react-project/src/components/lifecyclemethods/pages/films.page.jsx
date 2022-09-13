import React, { useState, useEffect } from "react";
import { filterFilmsByDirector, getListOf } from "../helpers/film.helper";

export default function FilmsPage() {
  const [list, setList] = useState([]);
  const [searchDirector, setSearchDirector] = useState("");

  function getFilms() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((films) => setList(films))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getFilms();
  }, []);

  let filteredFilms = filterFilmsByDirector(list, searchDirector);

  return (
    <div>
      <h1>Studio Ghibli Films</h1>
      <div>
        <label htmlFor="searchDirector">Filter by Director:{" "}</label>
        <select
          name="searchDirector"
          id="searchDirector"
          value={searchDirector}
          onChange={(event) => setSearchDirector(event.target.value)}
        >
          <option value="">All</option>
          {/* get the director options */}
        </select>
      </div>
      <ul>
        {/* only render the films by the searchDirector */}
        {filteredFilms.map((film) => {
          return <li key={film.id}>{film.title}</li>;
        })}
      </ul>
    </div>
  );
}
