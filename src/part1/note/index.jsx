import React, { useRef, useState } from 'react';
import { generateUniqueId } from '../../utils/uniqueId';

export function Note() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState('');
  const [showAll, setShowAll] = useState(true);
  const inputRef = useRef(null);

  function onHandleSubmit(event) {
    event.preventDefault();
    if (!currentNote) {
      alert('You have to enter note');
      inputRef.current.focus();
      return;
    }
    const newNote = {
      id: notes.length + 1,
      date: new Date().toISOString(),
      content: currentNote,
      isImportant: Math.random() < 0.5,
    };
    setNotes([...notes, newNote]);
    setCurrentNote('');
  }

  function onHandleNote(event) {
    setCurrentNote(event.target.value);
  }
  function getCheckboxText() {
    return showAll ? 'Show Important' : 'Show All';
  }

  function onHandleCheckChanged() {
    setShowAll(!showAll);
  }

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.isImportant);
  return (
    <React.StrictMode>
      <form onSubmit={onHandleSubmit}>
        <input
          ref={inputRef}
          type='text'
          placeholder='enter note here...'
          value={currentNote}
          onChange={onHandleNote}
          required
        />
        <button type='submit'>Save</button>
        <br />
        <input
          id='checkInput'
          type='checkbox'
          onChange={onHandleCheckChanged}
          defaultChecked
        />
        <label htmlFor='checkInput'>{`${getCheckboxText()}`}</label>
      </form>

      <ul>
        {notesToShow.map((note) => (
          <li key={generateUniqueId()}>{note.content}</li>
        ))}
      </ul>
    </React.StrictMode>
  );
}
