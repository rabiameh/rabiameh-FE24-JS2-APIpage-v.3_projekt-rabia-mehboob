const API_KEY = "96309ba88f064056958171125251903"; 
const BASE_URL = "https://api.weatherapi.com/v1/current.json";

export async function fetchWeather(city) {
  try {
    const response = await fetch(
      `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(city)}`
    );
    if (!response.ok) throw new Error("City not found!");

    const data = await response.json();
    return {
      city: data.location.name,
      country: data.location.country,
      temperature: data.current.temp_c,
      condition: data.current.condition.text,
      icon: data.current.condition.icon,
      humidity: data.current.humidity,
      windSpeed: data.current.wind_kph,
    };
  } catch (error) {
    console.error("Error fetching weather:", error);
    return null;
  }
}
