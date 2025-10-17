import prisma from "../prismaClient.js";


// GET /user/:id
export const viewUser = async (req, res) => {
    const { id } = req.params

    try {
        const user = await prisma.user.findUnique({
            where: { id: Number(id) }
        })

        if (!user) return res.status(404).json({ message: "User not found" })

        res.json( user )

    } catch (err) {
        console.log(err.message)
        res.sendStatus(503)
    }
}


// PATCH /user/:id
export const updateUser = async (req, res) => {
    const { id } = req.params
    
    const dataToUpdate = Object.fromEntries(
        Object.entries(req.body).filter(([_, value]) => value !== undefined)
    )

    try {
        const updatedUser = await prisma.user.update({
            where: { id: Number(id) },
            data: dataToUpdate,
        })

        res.json( updatedUser )

    } catch (err) {
        console.log(err.message)
        res.sendStatus(503)
    }
}


// DELETE /user/:id
export const deleteUser = async (req, res) => {
    const { id } = req.params

    try {
        const deletedUser = await prisma.user.delete({
            where: { id: Number(id) }
        })

        res.json( deletedUser )

    } catch (err) {
        console.log(err.message)
        res.sendStatus(503)
    }
}