import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { uuid } from 'uuidv4';
import Header from './Header';
import AddContacts from './AddContacts';
import EditContacts from './EditContacts';
import ContactLists from './ContactLists';
import ContactDetails from './ContactDetails';

import api from '../api/contacts.js';

function App() {
  const [contacts, setContacts] = useState([]);

  const retrieveContacts = async () => {
    const response = await api.get('/contacts');
    return response.data;
  };

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };
    getAllContacts();
  }, []);

  const addContactHandler = async (contact) => {
    const request = {
      id: uuid(),
      ...contact,
    };
    const response = await api.post('/contacts', request);
    setContacts([...contacts, response.data]);
  };

  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id } = response.data;
    setContacts(
      contacts.map((contact) => (contact.id === id ? { ...response.data } : contact)),
    );
  };

  const deleteContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => contact.id !== id);
    setContacts(newContactList);
  };

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <ContactLists
                {...props}
                contacts={contacts}
                getContactId={deleteContactHandler}
              />
            )}
          />

          <Route
            path="/add"
            render={(props) => (
              <AddContacts
                {...props}
                addContactHandler={addContactHandler}
              />
            )}
          />

          <Route
            path="/contact/:id"
            component={ContactDetails}
          />

          <Route
            path="/edit"
            render={(props) => (
              <EditContacts
                {...props}
                updateContactHandler={updateContactHandler}
              />
            )}
          />

        </Switch>
      </Router>

    </div>
  );
}

export default App;
