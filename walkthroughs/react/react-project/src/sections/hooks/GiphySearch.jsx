import { useState, useEffect } from "react";
import { apiService } from "../../helpers/data";

const GIPHY_URL = "https://api.giphy.com/v1/gifs/translate";
const GIPHY_KEY = "x3GD2qwyZrpuRSv9wsRgkfcqNGm4MquS";

export default function GiphySearch(props) {
  let [imgData, setImgData] = useState({ title: "", url: "" });
  let [search, setSearch] = useState("coding");

  async function searchGif(event) {
    if (event) event.preventDefault();

    let results = await apiService(
      `${GIPHY_URL}?s=${search}&api_key=${GIPHY_KEY}`
    );

    if (!results || results.data.length == 0) {
      alert("No results");
    } else {
      console.log(results.data);

      setImgData({
        title: results.data.title,
        url: results.data.images.original.url,
      });
    }
  }

  useEffect(() => {
    searchGif();
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <img src={imgData.url} alt={imgData.title} />
        <form onSubmit={searchGif}>
          <label htmlFor="search">Gif Keyword</label>
          <input
            type="text"
            name="search"
            id="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <button>Search</button>
        </form>
      </div>
    </div>
  );
}
