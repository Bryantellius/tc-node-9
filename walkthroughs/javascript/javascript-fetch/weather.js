// State
let savedCities = [];
let currentData;

const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";

// Elements
let weatherHeading = document.querySelector("#weather");
let searchInput = document.querySelector("#searchInput");
let saveBtn = document.querySelector("#saveBtn");
let savedUl = document.querySelector("#saved > ul");
let form = document.querySelector("form");

// Listeners

form.addEventListener("submit", (event) => {
  event.preventDefault();

  getWeather(searchInput.value);

  searchInput.value = "";
});

saveBtn.addEventListener("click", () => {
  if (!savedCities.includes(currentData.name)) {
    updateSavedCities(currentData.name);
  }
});

// Functions

function updateSavedCities(name) {
  savedCities.push(name);
  let li = document.createElement("li");
  li.textContent = name;
  li.addEventListener("click", () => {
    getWeather(name);
  });
  savedUl.appendChild(li);
}

function getWeather(city) {
  fetch(
    `${WEATHER_URL}?appid=a5a839a780c1d61b9710aca75a4e11fa&units=imperial&q=${city}`
  )
    .then((res) => res.json())
    .then((body) => {
      currentData = body;
      weatherHeading.textContent = `${body.name}: ${body.main.temp} °F`;

      if (body.main.temp > 90) {
        document.body.classList.add("weather-hot");
      } else if (body.main.temp > 85) {
        document.body.classList.add("weather-warm");
      } else {
        document.body.classList.add("weather-normal");
      }

      saveBtn.disabled = false;
    })
    .catch((err) => {
      console.error(err);
      weatherHeading.textContent = err.message;
    });
}
