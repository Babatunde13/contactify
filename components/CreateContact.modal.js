import BaseModal from './BaseModal'
import { useState } from 'react'

const CreateContactModal = (props)  => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('') 
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('') 
  const [address, setAddress] = useState('')

  const handleCreate = () => {
    const payload = {
      firstName,
      lastName,
      email,
      phone, 
      address
    }
    props.onCreate(payload)
  }

  return <BaseModal
    show={props.show}
    onHide={props.onHide}
    firstName={firstName}
    lastName={lastName}
    email={email}
    phone={phone}
    address={address}
    updateFirstName={newInput => setFirstName(newInput)}
    updateLastName={newInput => setLastName(newInput)}
    updateEmail={newInput => setEmail(newInput)}
    updatePhone={newInput => setPhone(newInput)}
    updateAddress={newInput => setAddress(newInput)}
    header="Create New Contact"
    btnText="Create"
    handleCreate={handleCreate}
    create={true}
  />
}


export default CreateContactModal