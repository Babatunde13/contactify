import { withPageAuthRequired, useUser } from '@auth0/nextjs-auth0'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Contacts from '../components/Contacts'

const dashboard = ({user}) => {
    const [contacts, setContacts] = useState([])
    useEffect(async () => {
        let res = await (await axios.get(`/api/contacts`)).data
        res = res.data
        setContacts(res)
    }, [])
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
            <Contacts 
                contacts={contacts}
                handleEdit={(id) => {
                // create an edit Modal
                    
                }}
                handleDelete={(id) => {
                setContacts(contacts.filter( ele =>  ele.id !== id)) 
                }}  
            />
      </div>
    )
}

export const getServerSideProps = withPageAuthRequired({
    // returnTo: '',
    async getServerSideProps(context) {
        return {
            props: {}, // will be passed to the page component as props
        }
    }

})

export default dashboard