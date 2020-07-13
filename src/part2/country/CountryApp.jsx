import React, { useEffect, useState } from 'react';
import { Country } from './Country';

export function CountryApp() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((err) => {
        console.error(`Error while fetching countries data*  ${err}`);
      });
  }, []);

  function onHandleSearch(event) {
    setSearch(event.target.value.toLocaleLowerCase('tr-TR'));
    if (selectedCountry) {
      setSelectedCountry(null);
    }
  }

  const showAvailableContries = () =>
    countries.filter((country) =>
      country.name.toLocaleLowerCase('tr-TR').includes(search)
    );

  function renderCountries() {
    const countriesToShow = showAvailableContries();
    const countryCount = countriesToShow.length;
    if (countryCount === 0) {
      return <strong>No countries found. Change your filter</strong>;
    }
    if (countryCount > 10) {
      return <strong>Too many matches, specify another filter</strong>;
    }
    if (countryCount <= 10 && countryCount > 1) {
      return (
        <ul style={{ listStyle: 'none' }}>
          {countriesToShow.map((country) => (
            <li key={country.alpha2Code}>
              {country.name}
              <button onClick={() => setSelectedCountry(country)}>show</button>
            </li>
          ))}
        </ul>
      );
    }
    return <Country country={countriesToShow[0]} />;
  }

  return (
    <React.StrictMode>
      <label htmlFor='country-name'>Find Countries</label>
      <input
        name='country-name'
        type='input'
        placeholder='search...'
        onChange={onHandleSearch}
        value={search}
      />
      {search ? renderCountries() : null}
      {selectedCountry ? <Country country={selectedCountry} /> : null}
    </React.StrictMode>
  );
}
