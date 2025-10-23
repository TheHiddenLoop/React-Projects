import "../App.css"

export function WeatherInfo({ data }) {
  const { name, main, weather, wind } = data;

  return (
    <div className="weather-info">
      <h2>Weather in {name}</h2>
      <p>Temperature: {Math.round(main.temp)} °C</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind Speed: {wind.speed} m/s</p>
      <p>Description: {weather[0].description}</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt={weather[0].description}
      />
    </div>
  );
}
