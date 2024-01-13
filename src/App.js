import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="weatherAppBody">
      <form>
        <input
          type="search"
          placeholder="Type a city..."
          className="searchBar"
        ></input>
        <input type="submit" value="Search" className="searchBarButton"></input>
      </form>
      <div className="weatherContainer">
        <div className="currentTemperature">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="weather-icon"
            width={64}
            height={64}
          />
          <p className="degrees">-4</p>
          <p className="celsius">°C</p>
        </div>

        <ul className="weatherDescription">
          <li>Nedbør: 0%</li>
          <li>Luftfuktighet: 76%</li>
          <li>Vind: 1 m/s</li>
        </ul>

        <ul className="dateDescription">
          <h2>Været</h2>
          <li>lørdag kl 21:00</li>
          <li>For det meste skyet</li>
        </ul>
      </div>
    </div>
  );
}
