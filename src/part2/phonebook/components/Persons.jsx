import React from 'react';

export function Persons({ persons, onPersonDeleted }) {
  if (!persons) {
    return <strong>Loading ... </strong>;
  }

  function personDeleted(id) {
    return function () {
      onPersonDeleted(id);
    };
  }

  return (
    <React.StrictMode>
      <ul>
        {persons.map(({ id, name, phone }) => (
          <li key={id}>
            {name} -- {phone}
            <button onClick={personDeleted(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </React.StrictMode>
  );
}
