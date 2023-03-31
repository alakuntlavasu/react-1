import React, { useState } from 'react';
import axios from 'axios';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`
    );
    setWeatherData(response.data);
  };

  return (
    <div className="weather-app">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter city or zip code"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">
          
        </button>
      </form>
      {weatherData && (
        <div className="weather-display">
          <h2>{weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
          <p>{weatherData.main.temp}°C</p>
          <p>Wind: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp
