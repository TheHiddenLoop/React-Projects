import { useState } from "react";
import "../App.css"
export function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  function handleWeatherClick() {
    if (city.trim() !== "") {
      onSearch(city);  
    }
  }

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter a city name"
      />
      <button onClick={handleWeatherClick}>Submit</button>
    </div>
  );
}
