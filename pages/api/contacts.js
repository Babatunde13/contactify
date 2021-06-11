// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0"
import { createContact, getContactsByUserID } from "../../models"

export default withApiAuthRequired(async (req, res) => {
    const user = getSession(req, res).user
    if (req.method === 'POST') {
        let newContact = await createContact(
            ...req.body, user
        )
        res.status(201).json({ 
            message: "Successfully created contact",
            data: newContact,
            status: 'ok'
        })
    } else if (req.method === 'GET') {
        let contacts = await getContactsByUserID(user.sub)
        console.log('server', contacts)
        if (!contacts) return res.status(400).json({
            message: 'Something went wrong',
            data: null,
            status: false
        })
        res.status(200).json({ 
            message: "Successfully retrieved contacts",
            data: contacts,
            status: 'ok'
        })
    } else {
        res.status(405).json({
            message: 'Method not allowed',
            data: null,
            status: false
        })
    }
})
  