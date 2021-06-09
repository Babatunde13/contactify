import Head from 'next/head'
import { withPageAuthRequired, useUser } from '@auth0/nextjs-auth0'

const dashboard = () => {
    const { user, error, isLoading } = useUser();
    return (
        <div>
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