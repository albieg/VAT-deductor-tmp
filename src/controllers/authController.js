import prisma from "../prismaClient.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


// POST /auth/register
export const register = async (req, res) => {
    const { username, password, firstName, lastName, email} = req.body

    // encrypt the password
    const hashedPassword = await bcrypt.hash(password, 12)

    // save the new user and hashed password in the DB
    try {
        const user = await prisma.user.create({
            data: {
                username,
                firstName,
                lastName,
                email,
                password: hashedPassword,
            }
        })

        // create a token
        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '24h'})
        res.json({ token })

    } catch (err) {
        console.log(err.message)
        res.sendStatus(503)
    }
}


// POST /auth/login
export const login = async (req, res) => {
    // Get their email, then look up the password associated with that email int he database
    // Once we get it back we see that's encrypted, therefore can't be compared the user input
    // Solution: encrypt the user input, and compare that to the original encryption made at registration

    const { username, password } = req.body

    try {
        const user = await prisma.user.findUnique({
            where: {
                username: username
            }
        })

        // if user doesn't match return out from the function
        if (!user) {return res.status(404).json({ message: 'Invalid credentials' })}

        const passwordIsValid = bcrypt.compareSync(password, user.password)
        // password doesn't match, return out of the function
        if (!passwordIsValid) {return res.status(401).json({ message: 'Invalid credentials' })}

        // password matches
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {expiresIn: '24h'})
        res.json({ token })

    } catch (err) {
        console.log(err.message)
        res.sendStatus(503)
    }
}

