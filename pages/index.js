import Head from 'next/head'
import Image from 'next/image'
import { useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router'
import NavbarComponent from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter()
  const { user, error, isLoading } = useUser();
  console.log(user)

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (user) router.push('/dashboard') 
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Manager App</title>
        <meta name="description" content="A simple Password Manager" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarComponent />
      <main className={styles.main}>
        Hello
      </main>
    </div>
  )
}
