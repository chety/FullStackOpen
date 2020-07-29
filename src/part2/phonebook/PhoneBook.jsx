import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Footer } from '../../common/Footer/Footer';
import { Notification } from '../../common/Notification/Notification';
import { PersonForm } from './components/PersonForm';
import { Persons } from './components/Persons';
import { Search } from './components/Search';

export function PhoneBook() {
  const [persons, setPersons] = useState([]);
  const [message, setMessage] = useState({ text: null, type: null });
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
      })
      .catch(({ stack }) => {
        setMessage({
          text: stack,
          type: 'error',
        });
      })
      .finally((_) => {
        setTimeout(() => {
          setMessage({ text: null });
        }, 3000);
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
        setMessage({
          text: `${person.name} has successfully added`,
          type: 'info',
        });
        setPersons([...persons, person]);
      })
      .catch(({ stack }) => {
        setMessage({
          text: stack,
          type: 'error',
        });
      })
      .finally((_) => {
        setTimeout(() => {
          setMessage({ text: null });
        }, 3000);
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
    axios
      .delete(`http://localhost:3001/persons/${id}`)
      .then((_) => {
        const remainedPersons = persons.filter((person) => person.id !== id);
        setPersons(remainedPersons);
        setMessage({
          text: `${person.name} deleted successfully`,
        });
      })
      .finally((_) => {
        setTimeout(() => {
          setMessage({ text: null });
        }, 3000);
      });
  }

  const personToShow = search
    ? persons.filter(({ name }) =>
        name.toLocaleLowerCase('tr-TR').includes(search)
      )
    : persons;
  const { type, text } = message;
  return (
    <>
      <h2>PhoneBook</h2>
      <Notification message={text} type={type} />
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
      <Footer appName='PhoneBook App' />
    </>
  );
}
