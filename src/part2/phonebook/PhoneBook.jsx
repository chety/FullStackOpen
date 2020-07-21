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
    const user = persons.find((person) => person.name === name);

    if (user) {
      // eslint-disable-next-line
      const shouldUpdate = confirm(
        `${user.name} is already added to phonebook, replace the old number with a new one?`
      );
      if (shouldUpdate) {
        updateUser(user);
      }
    } else {
      addUser();
    }
  }

  function addUser() {
    const id = Math.max(...persons.map((person) => person.id)) + 1;
    const person = {
      name,
      phone,
      id,
    };
    setPersons([...persons, person]);
    addPerson(person);
    emptyNameAndPhone();
  }

  function updateUser(user) {
    const updatedUser = { ...user, phone };
    axios
      .put(`http://localhost:3001/persons/${user.id}`, updatedUser)
      .then(({ data }) => {
        const updatedUsers = persons.map((person) =>
          person.id === data.id ? data : person
        );
        setPersons(updatedUsers);
        emptyNameAndPhone();
      });
  }

  function emptyNameAndPhone() {
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

  function onHandlePersonDeleted(id) {
    const person = persons.find((person) => person.id === id);
    // eslint-disable-next-line
    const shouldDelete = confirm(`Delete ${person.name}`);
    if (!shouldDelete) {
      return;
    }
    axios.delete(`http://localhost:3001/persons/${id}`).then((_) => {
      const remainedPersons = persons.filter((person) => person.id !== id);
      setPersons(remainedPersons);
    });
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
      <Persons persons={personToShow} onPersonDeleted={onHandlePersonDeleted} />
    </>
  );
}
