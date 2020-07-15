import React from 'react';

export function Note({ content, important, onToggleChanged }) {
  const label = important ? 'Make Unnecessary' : 'Make Important';
  return (
    <>
      <li>
        {content} {'  '} <button onClick={onToggleChanged}>{label}</button>
      </li>
    </>
  );
}
