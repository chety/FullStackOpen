import React from 'react';
import './app.css';

export function Button({ text, onHandleClick }) {
  return (
    <button className='inner-button' onClick={onHandleClick}>
      {text}
    </button>
  );
}
