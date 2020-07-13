import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PersonForm } from './components/PersonForm';
import { Persons } from './components/Persons';
import { Search } from './components/Search';

export function PhoneBook() {
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(({ data }) => setPersons(data));
  }, []);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [search, setSearch] = useState('');

  function onHandleSubmit() {
    const isUserExist = persons.some((person) => person.name === name);
    if (isUserExist) {
      alert(`${name} is already exist`);
      return;
    }
    const id = Math.max(...persons.map((person) => person.id)) + 1;
    const person = {
      name,
      phone,
      id,
    };
    setPersons([...persons, person]);
    addPerson(person);
    setName('');
    setPhone('');
  }

  function addPerson(person) {
    axios
      .post('http://localhost:3001/persons', person)
      .then((_) => {
        alert(`${person.name} has successfully added`);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function onHandleNameChange(event) {
    setName(event.target.value);
  }

  function onHandlePhoneChange(event) {
    setPhone(event.target.value);
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
        name={name}
        phone={phone}
      />

      <h2>Numbers</h2>
      <Persons persons={personToShow} />
    </>
  );
}
