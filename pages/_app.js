import React, { useEffect, useState } from 'react'
import { UserProvider } from '@auth0/nextjs-auth0';
import axios from 'axios'
import MetaData from '../components/MetaData'
import NavbarComponent from '../components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'

const background = {
  background: 'linear-gradient(to right, rgb(50, 50, 121), rgb(204, 211, 225));'
}

export default function App({ Component, pageProps }) {

  return (
    <UserProvider style={background}>
      {/* <MetaData /> */}
      <NavbarComponent />
      <Component {...pageProps} />
    </UserProvider>
  );
}
