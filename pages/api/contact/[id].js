// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { withApiAuthRequired ,getSession } from "@auth0/nextjs-auth0"
import { deleteContact, getContact, updateContact } from "../../../models"

export default withApiAuthRequired(async (req, res) => {
    const user = getSession(req, res).user
    if (req.method === 'PUT') {
        let contact = await updateContact(
            req.body, req.query.id
            )
            res.status(201).json({ 
                message: "Successfully updated contact",
                data: contact,
                status: 'ok'
            })
        } else if (req.method === 'GET') {
            let contact = await getContact(req.query.id)
        res.status(200).json({ 
            message: "Successfully retrieved contact",
            data: contact,
            status: 'ok'
        })
    } else if (req.method === 'DELETE') {
        let contacts = await deleteContact(req.query.id)
        res.status(200).json({ 
            message: "Successfully retrieved contacts",
            data: contacts,
            status: 'ok'
        })
    } else {
        res.status(405).json({
            message: 'Method not allowed',
            data: null,
            sttaus: false
        })
    }
})
  