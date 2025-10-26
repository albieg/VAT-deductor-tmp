import jwt from 'jsonwebtoken'

function authMiddleware (req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {return res.status(401).json({ message: 'No token provided' })}

    jwt.verify(token, process.snv.JWT_SECRET, (err, user) => {
        if (err) {return res.status(401).json({ message: 'Invalid token' })}

        req.userId = user.id 
        next()
    })
}

export default authMiddleware