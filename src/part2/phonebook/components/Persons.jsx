import React from 'react';

export function Persons({ persons }) {
  if (!persons) {
    return <strong>Loading ... </strong>;
  }
  return (
    <React.StrictMode>
      <ul>
        {persons.map(({ id, name, phone }) => (
          <li key={id}>
            {name} -- {phone}
          </li>
        ))}
      </ul>
    </React.StrictMode>
  );
}
