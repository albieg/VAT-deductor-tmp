import prisma from "../prismaClient.js";


// GET /enterprise/:id
export const viewEnterprise = async (req, res) => {
    const { id } = req.params

    try {
        const enterprise = await prisma.enterprise.findUnique({
            where: { id: Number(id) }
        })
        
        res.json( enterprise )

    } catch (err) {
    console.log(err.message)
    res.sendStatus(503)
  }
}


// POST /enterprise
export const addEnterprise = async (req, res) => {
    const { entRif, entName, entAddr, entPhone, retPerc } = req.body

    try {
        const newEnterprise = await prisma.enterprise.create({
            data: {
                entRif,
                entName,
                entAddr,
                entPhone, 
                retPerc
            }
        })

        res.json( newEnterprise )

    } catch (err) {
        console.log(err.message)
        res.sendStatus(503)
    }
}


// PATCH /enterprise/:id
export const updateEnterprise = async (req, res) => {
    const { id } = req.params

    const dataToUpdate = Object.fromEntries(
        Object.entries(req.body).filter(([_, value]) => value !== undefined)
    )

    try {
        const updatedEnterprise = await prisma.enterprise.update({
            where: { id: Number(id) },
            data: dataToUpdate,
        })

        res.json( updatedEnterprise )

    } catch (err) {
        console.log(err.message)
        res.sendStatus(503)
    }
}


// DELETE /enterprise/:id
export const deleteEnterprise = async (req, res) => {
    const { id } = req.params

    try {
        const deletedEnterprise = await prisma.enterprise.delete({
            where: { id: Number(id) }
        })

        res.json( deletedEnterprise )

    } catch (err) {
        console.log(err.message)
        res.sendStatus(503)
    }
}