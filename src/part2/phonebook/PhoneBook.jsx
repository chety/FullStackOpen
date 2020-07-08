import React, { useState } from 'react';
import { PersonForm } from './components/PersonForm';
import { Persons } from './components/Persons';
import { Search } from './components/Search';

export function PhoneBook() {
  const [persons, setPersons] = useState([
    {
      name: 'Chety Clooney',
      phone: '+90 (534) 273 48 31',
    },
  ]);

  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [search, setSearch] = useState('');

  function onHandleSubmit(event) {
    event.preventDefault();
    const isUserExist = persons.some((person) => person.name === newName);
    if (isUserExist) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    setPersons([...persons, { name: newName, phone: newPhone }]);
    setNewName('');
    setNewPhone('');
  }

  function onHandleNameChange(event) {
    setNewName(event.target.value);
  }

  function onHandlePhoneChange(event) {
    setNewPhone(event.target.value);
  }

  function onHandleSearchChange(event) {
    setSearch(event.target.value.toLocaleLowerCase('tr-TR'));
  }
  const personToShow = search
    ? persons.filter(({ name }) =>
        name.toLocaleLowerCase('tr-TR').includes(search)
      )
    : persons;
  return (
    <>
      <h2>PhoneBook</h2>
      <Search searchChanged={onHandleSearchChange} />

      <h2>Add A New</h2>
      <PersonForm
        onSubmitChanged={onHandleSubmit}
        onNameChanged={onHandleNameChange}
        onPhoneChanged={onHandlePhoneChange}
        name={newName}
        phone={newPhone}
      />

      <h2>Numbers</h2>
      <Persons persons={personToShow} />
    </>
  );
}
