import { useState } from "react";
import "./App.css";

import { SearchBar } from "./components/SearchBar.jsx";
import { WeatherInfo } from "./components/WeatherInfo.jsx";
import { ErrorMessage } from "./components/ErrorMessage.jsx";
import { fetchWeather } from "./services/weatherApi.js";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSearch(cityName) {
    try {
      setError("");
      setLoading(true);
      const data = await fetchWeather(cityName);
      setWeatherData(data);
    } catch (err) {
      setError("City not found or network error");
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app-container">
      <SearchBar onSearch={handleSearch} />

      {loading && (
        <div className="loader">
          <div className="spinner"></div>
        </div>
      )}

      {!loading && error && <ErrorMessage message={error} />}
      {!loading && weatherData && <WeatherInfo data={weatherData} />}
    </div>
  );
}

export default App;
