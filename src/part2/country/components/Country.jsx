import React from 'react';
import { Weather } from './Weather';

export function Country({ country }) {
  const { name, capital, population, languages, flag } = country;

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
      <Weather city={capital} />
    </div>
  );
}
