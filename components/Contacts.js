import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import { useState } from 'react'
import EditContactModal from './EditContact.modal'

const Contact = ({
  id,
  firstName,
  lastName,
  email,
  phone,
  address,
  handleDelete,
  handleEdit
}) => {
  const [editModal, setEditModal] = useState(false)

  const editContact = () => {
    setEditModal(true)
  }

  const deleteContact = () => {
    console.log(id)
    handleDelete(id)
    alert('Contact deleted successfully')
  }

  return (
      <tr>
        <td>{firstName} {lastName}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{address}</td>
        <td><Button onClick={editContact}>Edit</Button></td>
        <td><Button onClick={deleteContact}>Delete</Button></td>
        
        <EditContactModal
          show={editModal}
          firstname={firstName}
          lastname={lastName}
          email={email}
          phone={phone}
          address={address}
          title={"Edit Contact for "+firstName}
          onHide={() => {
            let n = window.confirm("Your changes won't be saved...")
            if (n) setEditModal(false)
          }}
          onEdit ={(contact) => {
            contact.id = id
            handleEdit(contact)
            alert(`Contact for ${firstName} updated successfully`)
            setEditModal(false)
          }}
        />
      </tr>
  )
}

const Contacts = ({contacts, handleEdit, handleDelete}) => {
  return (
    <>
      {!contacts && 'Fetching contacts...'}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        {contacts.map(ele => <Contact {...ele} 
          key={ele.id} 
          handleEdit={handleEdit} 
          handleDelete={handleDelete} />)} 
        </tbody>
      </Table>
    </>
  )
}

export default Contacts