import React, { useEffect, useState } from 'react';
import { CustomLoader } from '../../common/Loader/Loader';
import { create, getAll, update } from '../../services/notes';
import { Note } from './Note';
export function NoteApp() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const noteRef = React.createRef();

  function getNotes() {
    getAll()
      .then((data) => {
        setNotes(data);
        setError('');
      })
      .catch((err) => {
        const message = `Error occured while getting note list. Detail: ${err.message}`;
        setError(message);
      })
      .finally((_) => {
        setLoading(false);
      });
  }

  useEffect(getNotes, []);

  function onHandleSubmit(event) {
    event.preventDefault();
    const foundedNote = notes.find((note) => note.content === newNote);
    if (foundedNote) {
      alert(`A note with ${newNote} is already exists`);
      return;
    }
    const id = Math.max(...notes.map((note) => note.id)) + 1;
    const noteObject = {
      id,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
    };
    create(noteObject)
      .then((_) => {
        setNewNote('');
        getNotes();
      })
      .catch((err) => {
        alert(
          `Something went wrong when add note. Please try again later. Err* ${err}`
        );
        setError(err.toString());
      })
      .finally((_) => {
        setLoading(false);
      });
  }

  function onHandleChangeNote(event) {
    setNewNote(event.target.value);
  }

  function onHandleToggleChanged(id) {
    return function () {
      const note = notes.find((note) => note.id === id);
      const modifiedNote = { ...note, important: !note.important };

      update(id, modifiedNote).then((data) => {
        const newNotes = notes.map((note) => (note.id !== id ? note : data));
        setNotes(newNotes);
      });
    };
  }

  function render() {
    return (
      <React.StrictMode>
        {loading ? <CustomLoader /> : null}
        {error ? <p style={{ color: 'red' }}>{error}</p> : null}
        <ul>
          {notes.map(({ id, content, important }) => (
            <Note
              key={id}
              important={important}
              content={content}
              onToggleChanged={onHandleToggleChanged(id)}
            />
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

  return render();
}
