import React from 'react';
import './app.css';

export function PersonForm({
  name,
  phone,
  onSubmitChanged,
  onNameChanged,
  onPhoneChanged,
}) {
  const nameRef = React.createRef();

  function onSubmit(event) {
    event.preventDefault();
    nameRef.current.focus();
    onSubmitChanged();
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className='formField'>
          <label htmlFor='name'>Name: </label>
          <input
            type='text'
            placeholder='Enter Name...'
            value={name}
            onChange={onNameChanged}
            ref={nameRef}
            required
          />
        </div>
        <div className='formField'>
          <label htmlFor='phone'>Phone: </label>
          <input
            type='text'
            placeholder='Phone...'
            onChange={onPhoneChanged}
            value={phone}
            required
          />
        </div>
        <div>
          <button type='submit'>Add</button>
        </div>
      </form>
    </>
  );
}
