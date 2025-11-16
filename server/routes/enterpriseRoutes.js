import express from 'express'
import { viewEnterprise, addEnterprise, updateEnterprise, deleteEnterprise } from '../controllers/enterpriseController.js'


const router = express.Router()

// Get enterprise by ID
router.get('/enterprises/:id', viewEnterprise)      // GET /enterprise/:id

// Create a new enterprise
router.post('/enterprises/:id/add', addEnterprise)       // POST /enterprise

// Update an enterprise by ID
router.patch('/enterprises/:id/edit', updateEnterprise) // PATCH /enterprise/:id

// Delete an enterprise by ID
router.delete('/enterprises/:id', deleteEnterprise) // DELETE /enterprise/:id


export default router