import { useState } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import Notiflix from 'notiflix';
import { nanoid } from 'nanoid';
import {useLocalStorage} from '../hooks/useLocalStorage'


export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const addContacts = (name, number) => {
    const contact = { id: nanoid(10), name, number };
      
    contacts.find(item => item.name.toLowerCase() === name.toLowerCase())
      ?
      Notiflix.Notify.failure(`${name} is already in contacts`)
      :
      setContacts([...contacts, contact])
 
  };
  
  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId))
   
  };

  const filterContacts = e => {
    setFilter(e.currentTarget.value)
  }
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(
    contact => contact.name.toLowerCase().includes(normalizedFilter))

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmitForm={addContacts} contacts={contacts} />
      <h2>Contacts</h2>
      <Filter onFilter={filterContacts} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  )

};
