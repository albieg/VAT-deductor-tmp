import express from 'express'
import { addContact, deleteContact, updateContact, viewContact, viewContacts } from '../controllers/contactController.js'


const router = express.Router()

// Get all contacts
router.get('/contacts', viewContacts)      // GET /contact

// Get a single contact by ID
router.get('/contacts/:id', viewContact)   // GET /contact/:id

// Create a new contact
router.post('/contacts/add', addContact)       // POST /contact

// Update a contact by ID
router.patch('/contacts/:id/edit', updateContact) // PATCH /contact/:id

// Delete a contact by ID
router.delete('/contacts/:id', deleteContact) // DELETE /contact/:id


export default router