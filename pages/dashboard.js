import { withPageAuthRequired, useUser } from '@auth0/nextjs-auth0'

const dashboard = ({user}) => {
    return (
        <div>
            <main className="mt-5 p-5">
            {user && (
                <div>
                    <img src={user.picture} className="rounded-circle m-3"/> 
                    <span>Welcome {user.name}</span> 
                    {!user.email_verified && <div>Your account is not verified</div>}
                    <button className="d-flex justify-content-end bg-black">New Contact</button>
                </div>
            )}
            </main>
      </div>
    )
}

export const getServerSideProps = withPageAuthRequired({
    // returnTo: '',
    async getServerSideProps(context) {
        console.log(await fetch('http://localhost:3000/api/contacts'))
        return {
            props: {}, // will be passed to the page component as props
        }
    }

})

export default dashboard