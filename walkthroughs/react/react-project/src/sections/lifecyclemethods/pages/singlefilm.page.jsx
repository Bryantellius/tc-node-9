import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SingleFilmPage(props) {
  let [item, setItem] = useState({});
  let [isLoading, setIsLoading] = useState(true);

  let { id } = useParams();

  async function getFilm() {
    // fetch request to Studio Ghibli for a single film
    let res = await fetch(`https://ghibliapi.herokuapp.com/films/${id}`);
    let film = await res.json();
    setItem(film);
    setIsLoading(false);
  }

  useEffect(() => {
    getFilm();
  }, []);

  if (isLoading) {
    <div>
      <h1>Loading...</h1>
    </div>;
  } else {
    return (
      <div>
        <div>
          <img src={`${item.image}`} alt={`${item.title} Poster`} />
        </div>
        <div>
          <h1>{item.title}</h1>
          <p>
            Directed by {item.director}. Produced by {item.producer}.
          </p>
          <p>
            The film was released in <strong>{item.release_date}</strong> and
            garnered a <strong>{item.rt_score}</strong> aggregate score on{" "}
            <a
              href="https://www.rottentomatoes.com/"
              target="_blank"
              rel="noreferrer"
            >
              Rotten Tomatoes
            </a>
            .
          </p>
          <h2>Description</h2>
          <p>{item.description}</p>
        </div>
      </div>
    );
  }
}
