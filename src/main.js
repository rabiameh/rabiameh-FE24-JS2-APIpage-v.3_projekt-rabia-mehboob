import { fetchWeather } from "./api/weatherApi.js";

const form = document.getElementById("weatherForm");
const cityInput = document.getElementById("cityInput");
const resultDiv = document.getElementById("weatherResult");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (!city) return;

  const weatherData = await fetchWeather(city);
  if (weatherData) {
    displayWeather(weatherData);
  } else {
    resultDiv.innerHTML = `<p>Error: Could not fetch weather data.</p>`;
  }
});

function displayWeather(data) {
  resultDiv.innerHTML = `
    <h2>${data.city}, ${data.country}</h2>
    <img src="${data.icon}" alt="${data.condition}" />
    <p>Temperature: ${data.temperature}°C</p>
    <p>Condition: ${data.condition}</p>
    <p>Humidity: ${data.humidity}%</p>
    <p>Wind Speed: ${data.windSpeed} km/h</p>
  `;
}
