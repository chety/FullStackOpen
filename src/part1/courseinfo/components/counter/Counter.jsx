import React, { useState } from 'react';
import { Button } from '../../../common/Button/Button';
export function Counter() {
  const [counter, setCounter] = useState(0);

  function increase() {
    setCounter(counter + 1);
  }
  function decrease() {
    setCounter(counter - 1);
  }
  function reset() {
    setCounter(0);
  }
  return (
    <React.StrictMode>
      <p>Counter: {counter}</p>
      <Button onHandleClick={increase} text='increase' />
      <Button onHandleClick={decrease} text='decrease' />
      <Button onHandleClick={reset} text='reset' />
    </React.StrictMode>
  );
}
