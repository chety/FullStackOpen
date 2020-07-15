import React from 'react';
import ReactDOM from 'react-dom';
import { NoteApp } from './part2/notes/NoteApp';
const App = () => {
  return <NoteApp />;
};

ReactDOM.render(<App />, document.getElementById('root'));
