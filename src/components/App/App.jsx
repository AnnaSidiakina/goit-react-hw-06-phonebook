import React from 'react';
import styles from './App.module.css';
import Form from '../AddContactsForm/AddContactsForm';
import ContactsList from '../ContactsList/ContactsList';
import Filter from '../Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from 'redux/contactsSlice';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(store => store.contacts.contactsList);
  const myFilter = useSelector(store => store.contacts.filter);

  const normalizedFilter = myFilter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const userName = contacts.find(
      contact =>
        contact.name.toLowerCase() === form.elements.name.value.toLowerCase()
    );
    if (userName) {
      alert(`${userName.name} is already in contacts`);
    } else {
      dispatch(
        addContact({
          id: nanoid(),
          name: form.elements.name.value,
          number: form.elements.number.value,
        })
      );
    }

    form.reset();
  };

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Phonebook</h1>
        <Form handleSubmit={handleSubmit} />
        <Filter />
        <ContactsList contacts={filteredContacts} />
      </div>
    </>
  );
};

export default App;
