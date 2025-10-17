import express from 'express'
import { login, register } from '../controllers/authController.js'


const router = express.Router()


router.post('/register', register)   //POST /auth/register
router.post('/login', login)         //POST /auth/login



export default router