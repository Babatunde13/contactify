import { useEffect, useState } from 'react'
import { withPageAuthRequired, useUser } from '@auth0/nextjs-auth0'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import CreateContactModal from '../components/CreateContact.modal'
import Contacts from '../components/Contacts'
import MetaData from '../components/MetaData'
import styles from '../styles/Home.module.css'

const Dashboard = () => {
    const {user} = useUser()
    console.log(user)
    const [contacts, setContacts] = useState([])
    const [createModalShow, setCreateModalShow] = useState(false);
    const handleHide = () => {
        let n = window.confirm("Your changes won't be saved...")
        if (n) setCreateModalShow(false)
    }

  useEffect(async () => {
    let res = (await axios.get(`/api/contacts`)).data
    res = res.data
    setContacts(res.reverse())
  }, [])

  const createContact = async payload => {
    payload.avatar = `https://ui-avatars.com/api/?background=random&name=${payload.firstName}+${payload.lastName}`
    let newContact = (await axios.post(`/api/contacts`, payload)).data
    setContacts([newContact.data, ...contacts])
  }

  const editContact = async payload => {
    let id = payload.id
    delete payload.id
    let replacedContact = (await axios.put(`/api/contacts/${id}`, payload)).data
    setContacts(contacts.map(contact => contact.id === id? replacedContact.data : contact))
  }

  const deleteContact = async id => {
    (await axios.delete(`/api/contacts/${id}`)).data
    setContacts(contacts.filter(contact => contact.id !== id))
  }
    return (
        <div>
            <MetaData title="Dashboard" />
            <main className="mt-5 p-5">
            {user && (
                <div className={styles.dashboardContainer}>
                    <div>
                        <img src={user.picture} className="rounded-circle m-3"/> 
                        <span>Welcome {user.nickname.toLowerCase().charAt(0).toUpperCase()+user.nickname.toLowerCase().slice(1)}</span> 
                        {!user.email_verified && <div>Your account is not verified</div>}
                    </div>
                    <div>
                        <Button variant="primary" onClick={() => setCreateModalShow(true)}>
                            Create New Contact
                        </Button>
                        <CreateContactModal
                            show={createModalShow}
                            onHide={handleHide}
                            onCreate ={(payload) => {createContact(payload); setCreateModalShow(false)}}
                        />
                    </div>
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

export default Dashboard