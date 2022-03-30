import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import { uuid } from "uuidv4";
import { Header } from './components/Header';
import { ContactList } from './components/ContactList';
import { AddContact } from './components/AddContact';
import { ContactDetails } from './components/ContactDetails';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <BrowserRouter>
      <div className='ui container'>
        <header>
          <Header />
        </header>

        <main>
          <Routes>
            <Route path='/add' element={<AddContact addContactHandler={addContactHandler} />} />
            <Route path='/' element={<ContactList contacts={contacts} getContactId={removeContactHandler} />} />
            <Route path='/contact/:id' element={<ContactDetails />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
