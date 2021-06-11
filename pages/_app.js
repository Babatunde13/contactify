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
    console.log(res)
    setContacts(res)
}, [])
  return (
    <UserProvider>
      <MetaData />
      <NavbarComponent />
      <Component {...pageProps} contacts={contacts} />
    </UserProvider>
  );
}
