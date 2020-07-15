import React, { useEffect, useState } from 'react';

export function Weather({ city }) {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${city}`
    )
      .then((response) => response.json())
      .then(({ current }) => {
        setWeather(current);
        setError(null);
      })
      .catch((err) => {
        setError(err);
      });
  }, [city]);

  function generateWeather() {
    if (error) {
      return (
        <span>Error occured when getting weather info. Details: {error}</span>
      );
    }
    if (!weather) {
      return <span>Weather info loading....</span>;
    }
    const { temperature, weather_icons, wind_speed, wind_dir } = weather;
    return (
      <div>
        <h2>Weather in {city}</h2>
        <strong>temperature</strong> : {temperature} Celcius
        <br />
        {weather_icons.map((icon) => (
          <span>
            <img src={icon} alt={`${city} weather icons`}></img>
          </span>
        ))}
        <br />
        <strong>wind: </strong> {wind_speed} mph direction {wind_dir}
      </div>
    );
  }

  return <React.Fragment>{generateWeather()}</React.Fragment>;
}
