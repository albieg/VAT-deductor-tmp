import express from 'express'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import authRoutes from './routes/authRoutes.js'
import contactRoutes from './routes/contactRoutes.js'
import enterpriseRoutes from './routes/enterpriseRoutes.js'
import userRoutes from './routes/userRoutes.js'
import authMiddleware from './middleware/authMiddleware.js'

const app = express()
const PORT = process.env.PORT || 3000

// get the file path from the url of the current module
const __filename = fileURLToPath(import.meta.url)
// get the directory name from the file path
const __dirname = dirname(__filename)


// Middleware
app.use(express.json())

// Serves the html file from the public directory
// tell express to serve all files from the public folder as static assets / file. Any request for the css files will be resolved to the public directory.

app.use(express.static(path.join(__dirname, '../public')))


// serving up the html file from the public directory
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// Routes
app.use('/auth', authRoutes)
app.use('/contact', authMiddleware, contactRoutes)
app.use('/enterprise', authMiddleware, enterpriseRoutes)
app.use('/user', authMiddleware, userRoutes)

app.listen(PORT, () => {
    console.log(`Server has started on port: ${PORT}`)
})