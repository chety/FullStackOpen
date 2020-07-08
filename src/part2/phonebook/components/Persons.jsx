import React from 'react';

export function Persons({ persons }) {
  return (
    <React.StrictMode>
      <ul>
        {persons.map(({ name, phone }) => (
          <li key={name}>
            {name} -- {phone}
          </li>
        ))}
      </ul>
    </React.StrictMode>
  );
}
