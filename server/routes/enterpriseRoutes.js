import express from 'express'
import { viewEnterprise, addEnterprise, updateEnterprise, deleteEnterprise } from '../controllers/enterpriseController.js'


const router = express.Router()

// Get enterprise by ID
router.get('/enterprise', viewEnterprise)      // GET /enterprise/:id

// Create a new enterprise
router.post('/enterprise', addEnterprise)       // POST /enterprise

// Update an enterprise by ID
router.patch('/enterprise/:id', updateEnterprise) // PATCH /enterprise/:id

// Delete an enterprise by ID
router.delete('/enterprise/:id', deleteEnterprise) // DELETE /enterprise/:id


export default router