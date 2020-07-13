import React, { useEffect, useState } from 'react';

export function Country({ country }) {
  const { name, capital, population, languages, flag } = country;
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    debugger;
    fetch(
      `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${capital}`
    )
      .then((response) => response.json())
      .then(({ current }) => {
        setWeather(current);
      });
  }, [capital]);

  return (
    <div>
      <p style={{ color: 'green' }}>
        Project is running in {process.env.NODE_ENV} mode
      </p>
      <h1>{name}</h1>
      <p>Capital: {capital}</p>
      <p>Population: {population.toLocaleString('tr-TR')}</p>
      <h3>Languages</h3>
      <ul>
        {languages.map(({ name, iso639_1 }) => (
          <li key={iso639_1}>{name}</li>
        ))}
      </ul>
      <img src={`${flag}`} alt={`${name} flag`} width='100' />
      {weather ? (
        <div>
          <h2>Weather in {capital}</h2>
          <strong>temperature</strong> : {weather.temperature} Celcius
          <br />
          {weather.weather_icons.map((icon) => (
            <span>
              <img src={icon} alt={`${capital} weather icons`}></img>
            </span>
          ))}
          <br />
          <strong>wind: </strong> {weather.wind_speed} mph direction{' '}
          {weather.wind_dir}
        </div>
      ) : null}
    </div>
  );
}
