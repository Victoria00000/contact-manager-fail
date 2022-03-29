import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ContactList } from './components/ContactList';
import { AddContact } from './components/AddContact';

function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
  };

  useEffect(() => {
  const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if(retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className='ui container'>
      <header>
        <Header />
      </header>

      <main>
        <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} />
      </main>
    </div>
  );
};

export default App;
