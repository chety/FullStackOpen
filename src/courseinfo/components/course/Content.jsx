import React from 'react';
import { Part } from './Part';
export function Content({ exerciseArr }) {
  return (
    <React.StrictMode>
      {exerciseArr.map(({ name, exercises }, i) => (
        <Part name={name} count={exercises} key={i} />
      ))}
    </React.StrictMode>
  );
}
