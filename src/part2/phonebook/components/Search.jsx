import React from 'react';

export function Search({ searchChanged }) {
  return (
    <>
      <label htmlFor='search'>Search Person: </label>
      <input type='text' placeholder='...search' onChange={searchChanged} />
    </>
  );
}
