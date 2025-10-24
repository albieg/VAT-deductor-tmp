import express from 'express'
import { addContact, deleteContact, updateContact, viewContact, viewContacts } from '../controllers/contactController.js'


const router = express.Router()

// Get all contacts
router.get('/contact', viewContacts)      // GET /contact

// Get a single contact by ID
router.get('/contact/:id', viewContact)   // GET /contact/:id

// Create a new contact
router.post('/contact', addContact)       // POST /contact

// Update a contact by ID
router.patch('/contact/:id', updateContact) // PATCH /contact/:id

// Delete a contact by ID
router.delete('/contact/:id', deleteContact) // DELETE /contact/:id


export default router