import React, { useEffect, useState } from 'react'
import { UserProvider } from '@auth0/nextjs-auth0';
import axios from 'axios'
import MetaData from '../components/MetaData'
import NavbarComponent from '../components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  const [contacts, setContacts] = useState([])

  useEffect(async () => {
    let res = (await axios.get(`/api/contacts`)).data
    res = res.data
    setContacts(res.reverse())
  }, [])

  const createContact = async payload => {
    let newContact = (await axios.post(`/api/contacts`, payload)).data
    setContacts([newContact.data, ...contacts])
  }

  const editContact = async payload => {
    let id = payload.id
    delete payload.id
    let replacedContact = (await axios.put(`/api/contacts/${id}`, payload)).data
    setContacts(contacts.map(contact => contact.id === id? replacedContact.data : contact))
  }

  const deleteContact = async id => {
    (await axios.delete(`/api/contacts/${id}`)).data
    setContacts(contacts.filter(contact => contact.id !== id))
  }

  return (
    <UserProvider>
      <MetaData />
      <NavbarComponent onCreate={createContact} />
      <Component 
        {...pageProps} 
        contacts={contacts} 
        deleteContact={deleteContact} 
        editContact={editContact}
      />
    </UserProvider>
  );
}
