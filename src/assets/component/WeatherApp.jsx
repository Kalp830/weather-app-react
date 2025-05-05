import React, { useState } from "react";
import "./weather.css";

const WeatherApp = () => {
  const [city, setCity] = useState();
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  return (
    <>
      <div className="appContainer">
        <div className="appInner">
          <input
            type="text"
            placeholder="Enter City Name"
            value={city}
            onChange={handleCityChange}
          />
        </div>
      </div>
    </>
  );
};

export default WeatherApp;
