import Head from 'next/head'
import { useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router'
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
      <main className={styles.main}>
        Hello
      </main>
    </div>
  )
}
