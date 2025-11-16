import express from 'express'
import { viewUser, updateUser, deleteUser} from '../controllers/userController.js'


const router = express.Router()

// Get user by ID
router.get('/users/:id', viewUser)      // GET /user/:id

// Update user by ID
router.post('/users/id/edit', updateUser)       // PATCH /user:/id

// Delete user by ID
router.delete('/users/:id', deleteUser)   // DELETE //user//:id

export default router