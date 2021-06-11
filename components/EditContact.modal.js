import BaseModal from './BaseModal'
import { useState } from 'react'

const EditContactModal = props  => {
  const [firstName, setFirstName] = useState(props.firstname)
  const [lastName, setLastName] = useState(props.lastname) 
  const [email, setEmail] = useState(props.email)
  const [phone, setPhone] = useState(props.phone) 
  const [address, setAddress] = useState(props.address)

  const onEdit = () => {
    const payload = {
      firstName,
      lastName,
      email,
      phone, 
      address
    }
    props.onEdit(payload)
  }

  return <BaseModal
    show={props.show}
    onHide={props.onHide}
    title={props.title}
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
    btnText="Edit"
    handleEdit={onEdit}
    create={false}
  />
}


export default EditContactModal