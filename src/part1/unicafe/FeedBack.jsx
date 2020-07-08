import React from 'react';
import { Button } from '../../common/Button/Button';

export function FeedBack({ feedBack, onButtonClicked }) {
  function buttonClicked(e) {
    const buttonName = e.target.innerText.toLowerCase();
    onButtonClicked(buttonName);
  }

  const buttonNames = ['Good', 'Neutral', 'Bad', 'Reset'];

  return (
    <React.StrictMode>
      <h2>Give Feedback</h2>

      {buttonNames.map((name, i) => (
        <Button text={name} onHandleClick={buttonClicked} key={i} />
      ))}
    </React.StrictMode>
  );
}
