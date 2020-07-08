import React from 'react';
export function History({ allClicks }) {
  const result =
    allClicks && allClicks.length > 0
      ? allClicks.join(' ')
      : 'Press button to use app';
  return <p>{result}</p>;
}
