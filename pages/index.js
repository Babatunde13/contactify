import Image from 'next/image';
import { useUser } from '@auth0/nextjs-auth0';
import MetaData from '../components/MetaData'
import styles from '../styles/Home.module.css'

export default function Home() {
  const { error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  
  return (
    <div>
      <MetaData title="" />
      <main className={styles.container}>
        <Image className={styles.img} alt="home" src="/home.jpeg" width="400" height="200" />
      </main>
    </div>
  )
}
