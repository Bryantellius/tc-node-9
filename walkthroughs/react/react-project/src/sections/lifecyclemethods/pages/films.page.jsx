import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  filterFilmsByDirector,
  getListOf,
  getFilmStats,
} from "../helpers/film.helper";

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
  let directors = getListOf(list, "director");
  let { total, latest, avg_score } = getFilmStats(filteredFilms);

  return (
    <div>
      <h1>Studio Ghibli Films</h1>
      <div>
        <label htmlFor="searchDirector">Filter by Director: </label>
        <select
          name="searchDirector"
          id="searchDirector"
          value={searchDirector}
          onChange={(event) => setSearchDirector(event.target.value)}
        >
          <option value="">All</option>
          {directors.map((director, idx) => (
            <option key={director + idx} value={director}>
              {director}
            </option>
          ))}
        </select>
      </div>
      <div>
        <div>
          <span># Of Films</span>
          <span>{total}</span>
        </div>
        <div>
          <span>Average Rating</span>
          <span>{avg_score.toFixed(2)}</span>
        </div>
        <div>
          <span>Latest Film</span>
          <span>{latest}</span>
        </div>
      </div>
      <ul>
        {/* only render the films by the searchDirector */}
        {filteredFilms.map((film) => {
          return (
            <li key={film.id}>
              <Link to={`/films/${film.id}`}>{film.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
