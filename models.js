import faunadb, {query as q} from 'faunadb'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'

dotenv.config()
const client = new faunadb.Client({secret: process.env.REACT_APP_FAUNA_KEY})

export const createContact = async (
  firstName, 
  lastName, 
  email, 
  phone,
  user, 
  jobTitle, 
  company
) => {
  let user = await getUser(userId)
  const date = new Date()
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]
  let newContact = await client.query(
    q.Create(
      q.Collection('contacts'),
      {
        data: {
          firstName,
          lastName,
          email,
          phone,
          company,
          jobTitle,
          created__at: `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`,
          user: {
            name:user.name, 
            email: user.email, 
            avatar:user.picture,
            id: user.sub
          }
        }
      }
    )
  )
  if (newContact.name === 'BadRequest') return
  newContact.data.id = newContact.ref.value.id
  return newContact.data
}

export const getContactsByUserID = async id => {
  let userContacts = await client.query(
    q.Get(
      q.Match(q.Index('user_contacts'), id)
    )
  )
  if (userContacts.name === "NotFound") return
  if (userContacts.name === "BadRequest") return "Something went wrong"
  userContacts.data.id = userContacts.ref.value.id
  return userContacts.data
}

export const getContact = async id => {
  let contact = await client.query(
    q.Get(q.Ref(q.Collection('contacts'), id))
  )
  if (contact.name === "NotFound") return
  if (contact.name === "BadRequest") return "Something went wrong"
  contact.data.id = contact.ref.value.id
  return contact.data
}

export const updateContact = async (payload, id) => {
  let contact = await client.query(
    q.Update(
      q.Ref(q.Collection('contacts'), id),
      {data: {payload}}
    )
  )
  if (contact.name === "NotFound") return
  if (contact.name === "BadRequest") return "Something went wrong"
  contact.data.id = contact.ref.value.id
  return contact.data
}

export const deleteContact = async (payload, id) => {
  let contact = await client.query(
    q.Delete(
      q.Ref(q.Collection('contacts'), id)
    )
  )
  if (contact.name === "NotFound") return
  if (contact.name === "BadRequest") return "Something went wrong"
  contact.data.id = contact.ref.value.id
  return contact.data
}