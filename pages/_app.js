import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import 'bootstrap/dist/css/bootstrap.min.css';
import MetaData from '../components/MetaData'
import NavbarComponent from '../components/Navbar'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <MetaData />
      <NavbarComponent />
      <Component {...pageProps} />
    </UserProvider>
  );
}
