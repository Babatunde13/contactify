import Head from 'next/head'
import { withPageAuthRequired, useUser } from '@auth0/nextjs-auth0'
import NavbarComponent from '../components/Navbar'

const dashboard = () => {
    const { user, error, isLoading } = useUser();
    return (
        <div>
            <Head>
                <title>Contact Manager App</title>
                <meta name="description" content="A simple Password Manager" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavbarComponent />
            <main className="mt-5 p-5">
            {user && (
                <div>
                    <img src={user.picture} className="rounded-circle m-3"/> 
                    <span>Welcome {user.nickname}</span> 
                </div>
            )}
            </main>
      </div>
    )
}


export const getServerSideProps = withPageAuthRequired()

export default dashboard