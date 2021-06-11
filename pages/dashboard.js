import { withPageAuthRequired, useUser } from '@auth0/nextjs-auth0'
import Contacts from '../components/Contacts'

const dashboard = ({contacts, user, deleteContact, editContact}) => {
    return (
        <div>
            <main className="mt-5 p-5">
            {user && (
                <div>
                    <img src={user.picture} className="rounded-circle m-3"/> 
                    <span>Welcome {user.name}</span> 
                    {!user.email_verified && <div>Your account is not verified</div>}
                </div>
            )}
            </main>
            <Contacts 
                contacts={contacts}
                handleEdit={(id) => editContact(id)}
                handleDelete={(id) => deleteContact(id)}  
            />
      </div>
    )
}

export const getServerSideProps = withPageAuthRequired()

export default dashboard