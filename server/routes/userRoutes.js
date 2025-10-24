import express from 'express'
import { viewUser, updateUser, deleteUser} from '../controllers/userController.js'


const router = express.Router()

// Get user by ID
router.get('/user/:id', viewUser)      // GET /user/:id

// Update user by ID
router.post('/user/id', updateUser)       // PATCH /user:/id

// Delete user by ID
router.delete('/user/:id', deleteUser)   // DELETE //user//:id

export default router