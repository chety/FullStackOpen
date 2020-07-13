import axios from 'axios';
import React, { useEffect, useState } from 'react';

export function Note() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const noteRef = React.createRef();

  function getNotes() {
    axios('http://localhost:3001/notes').then(({ data }) => {
      setNotes(data);
    });
  }

  useEffect(getNotes, []);

  function onHandleSubmit(event) {
    event.preventDefault();
    const id = Math.max(...notes.map((note) => note.id)) + 1;
    const noteObject = {
      id,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
    };
    axios
      .post('http://localhost:3001/notes', noteObject)
      .then(({ status, statusText }) => {
        if (status === 201 && statusText === 'Created') {
          alert(`${newNote} has successfully added`);
        }
        setNewNote('');
        getNotes();
      })
      .catch((err) => {
        alert(`Something went wrong. Please try again later. Err* ${err}`);
      });
  }

  function onHandleChangeNote(event) {
    setNewNote(event.target.value);
  }

  return (
    <React.StrictMode>
      <ul>
        {notes.map(({ id, content }) => (
          <li key={id}>{content}</li>
        ))}
      </ul>
      <form onSubmit={onHandleSubmit}>
        <input
          ref={noteRef}
          type='text'
          placeholder='Enter Note...'
          onChange={onHandleChangeNote}
          value={newNote}
        />
        <button type='submit'>Add</button>
      </form>
    </React.StrictMode>
  );
}
