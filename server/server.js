import express from 'express'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import authRoutes from './routes/authRoutes.js'
import contactRoutes from './routes/contactRoutes.js'
import enterpriseRoutes from './routes/enterpriseRoutes.js'
import userRoutes from './routes/userRoutes.js'
import invoiceRoutes from './routes/invoiceRoutes.js'
import authMiddleware from './middleware/authMiddleware.js'

const app = express()
const PORT = process.env.PORT || 3000

// get the file path from the url of the current module
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Middleware
app.use(express.json())

// Serve uploaded files statically
app.use('/uploads', express.static('uploads'))

// API Routes
app.use('/auth', authRoutes)
app.use('/contacts', authMiddleware, contactRoutes)
app.use('/enterprises', authMiddleware, enterpriseRoutes)
app.use('/users', authMiddleware, userRoutes)
app.use('/invoice', authMiddleware, invoiceRoutes)

// Serve React build in production
app.use(express.static(path.join(__dirname, '../client/dist')))

// Handle React routing, return all requests to React app
app.get('/*path', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})

app.listen(PORT, () => {
  console.log(`Server has started on port: ${PORT}`)
})