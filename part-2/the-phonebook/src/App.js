import React, { useState, useEffect } from 'react';
import Filter from './Components/Filter.js';
import PersonForm from './Components/PersonForm.js';
import Persons from './Components/Persons.js';
import { getAll, create, destroy, replace } from './Requests.js';
import Notification from './Components/Notification.js'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const [searchResults, setSearchResults] = useState([])
  const [search, setSearch] = useState('');
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);

  const handleNameChange = (evt) => {
    setNewName(evt.target.value);
  }

  const handleNumberChange = (evt) => {
    setNewNumber(evt.target.value);
  }

  const handleSearchChange = (evt) => {
    setSearch(evt.target.value);
  }

  useEffect(() => {
    if (search) {
      setSearchResults(persons.filter(person => person.name.slice(0, search.length).toLocaleLowerCase() === search.toLocaleLowerCase()))
    } else {
      setSearchResults([])
    }
  }, [search, persons]);

  useEffect(() => {
    const fetchData = async () => {
      let all = await getAll();
      setPersons(all);
    }

    fetchData();
  }, [])

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    let addedPerson = persons.find(person => person.name === newName);
    if (addedPerson) {
      try {
        if (window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)) {
          await replace(addedPerson.id, { name: newName, number: newNumber });
          setPersons(persons.map(person => {
            if (person.id === addedPerson.id) {
              return { ...person, number: newNumber };
            } else return person;
          }))
          setMessage(`Updated ${addedPerson.name}'s phone number`);
          setMessageType("success");
          setTimeout(() => {
            setMessage(null);
          }, 3000);
        }
      } catch (e) {
        setMessage(`Information of ${addedPerson.name} has already been removed from the server`);
        setMessageType("error");
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      }
    } else {
      let newPerson = await create({ name: newName, number: newNumber });
      setPersons([...persons, newPerson]);
      setMessage(`Added ${newPerson.name}`);
      setMessageType("success");
      setTimeout(() => {
        setMessage(null);
      }, 3000);
    }

    setNewName('');
    setNewNumber('');
  }

  const deletePerson = async (id) => {
    let delPerson = await destroy(id);
    setPersons(persons.filter(person => person.id !== id));
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} type={messageType}/>
      <Filter
        search={search}
        handleSearchChange={handleSearchChange}
        searchResults={searchResults} />

      <h2>add a new</h2>
      <PersonForm
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        handleSubmit={handleSubmit} />

      <h2>Numbers</h2>
      <Persons persons={persons} deletePerson={deletePerson} />
    </div>
  )
}

export default App;