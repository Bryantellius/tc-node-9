"use strict";

console.log("Hello Fetch API!");

const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";

// Query parameters follow a ?
// name=value pairs
// each pair separated by a &
const QUERY_PARAMS =
  "?q=hoover&appid=a5a839a780c1d61b9710aca75a4e11fa&units=imperial";

fetch(WEATHER_URL + QUERY_PARAMS)
  .then((response) => {
    return response.json();
  })
  .then((weather) => {
    console.log(weather);
    // do anything with the weather data
    displayWeather(weather);
  })
  .catch((err) => console.error(err));

function displayWeather(weather) {
  document.querySelector(
    ".title"
  ).textContent = `It is currently ${weather.main.temp} °F in ${weather.name}`;
}

// Async/Await
async function getWeather() {
  try {
    let response = await fetch(WEATHER_URL + QUERY_PARAMS);
    let weather = await response.json();

    // update dom
    displayWeather(weather);
  } catch (err) {
    console.error(err);
  }
}

// Giphy Example

let form = document.querySelector("form");
let input = document.querySelector("#searchInput");
let img = document.querySelector("#gif");

const GIPHY_URL = "https://api.giphy.com/v1/gifs/translate";
const GIPHY_KEY = "54f0MhTKuI2nxwD9nhEvN4ifNwephcpz";

async function getGif(event) {
  event.preventDefault();

  try {
    let res = await fetch(`${GIPHY_URL}?api_key=${GIPHY_KEY}&s=${input.value}`);
    let body = await res.json();

    console.log(body);
    img.src = body.data.images.original.url;
    img.alt = body.data.title;
  } catch (err) {
    console.error(err);
  } finally {
    input.value = "";
  }
}

form.addEventListener("submit", getGif);
