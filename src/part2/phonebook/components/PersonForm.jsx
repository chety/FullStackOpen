import React from 'react';
import './app.css';

export function PersonForm({
  name,
  phone,
  onSubmitChanged,
  onNameChanged,
  onPhoneChanged,
}) {
  return (
    <>
      <form onSubmit={onSubmitChanged}>
        <div className='formField'>
          <label htmlFor='name'>Name: </label>
          <input
            type='text'
            placeholder='Enter Name...'
            value={name}
            onChange={onNameChanged}
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
