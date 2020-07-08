import React, { useState } from 'react';
import { Button } from '../../../common/Button/Button';
import { History } from './History';

export function ClickCounter() {
  const [click, setClick] = useState({
    left: 0,
    right: 0,
  });
  const [allClicks, setAllClicks] = useState([]);

  function handleLeftClick() {
    setAllClicks(allClicks.concat('L'));
    setClick({ ...click, left: click.left + 1 });
  }
  function handleRightClick() {
    setAllClicks(allClicks.concat('R'));
    setClick({ ...click, right: click.right + 1 });
  }

  return (
    <React.StrictMode>
      <div>
        {click.left}
        <Button onHandleClick={handleLeftClick} text='Left' />
        <Button onHandleClick={handleRightClick} text='Right' />
        {click.right}
        <History allClicks={allClicks} />
      </div>
    </React.StrictMode>
  );
}
