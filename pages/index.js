import Head from 'next/head'
import Image from 'next/image'
import { useUser } from '@auth0/nextjs-auth0';
import NavbarComponent from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  const { user, error, isLoading } = useUser();
  console.log(user)

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Manager App</title>
        <meta name="description" content="A simple Password Manager" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarComponent />
      <main className={styles.main}>
        {user && (
          <div>
            <img src={user.picture} /> 
            <span>Welcome {user.nickname}</span> 
          </div>
          )}
        {!user && <a href="/api/auth/login">Login</a>}
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
