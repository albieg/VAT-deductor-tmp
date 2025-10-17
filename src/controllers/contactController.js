import prisma from "../prismaClient.js";


// GET /contact
export const viewContacts = async (req, res) => {
    try {
        
        const contacts = await prisma.contact.findMany()
        res.json({ contacts })

    } catch (err) {
        console.log(err.message)
        res.sendStatus(503)
    }
}

// GET /contact/:id
export const viewContact = async (req, res) => {
  const { id } = req.params

  try {
    const contact = await prisma.contact.findUnique({
      where: { id: Number(id) }
    })

    if (!contact) return res.status(404).json({ message: "Contact not found" })

    res.json( contact )

  } catch (err) {
    console.log(err.message)
    res.sendStatus(503)
  }
}

// POST /contact
export const addContact = async (req, res) => {
    const { contName, contType, contEmail, contPhone } = req.body

    // save new contact in the DB
    try {
        const newContact = await prisma.contact.create({
            data: {
                contName,
                contType,
                contEmail,
                contPhone,
            }
        })

        res.json({ newContact })

    } catch (err) {
        console.log(err.message)
        res.sendStatus(503)
    }
}


// PATCH /contact/:id
export const updateContact = async (req, res) => {
    const { id } = req.params

    const dataToUpdate = Object.fromEntries(
        Object.entries(req.body).filter(([_, value]) => value !== undefined)
    )

    try {
        const updatedContact = await prisma.contact.update({
            where: { id: Number(id) },
            data: dataToUpdate,
        })

        res.json( updatedContact )

    } catch (err) {
        console.log(err.message)
        res.sendStatus(503)
    }
}


// DELETE /contact/:id
export const deleteContact = async (req, res) => {
    const { id } = req.params

    try {
        const deletedContact = await prisma.contact.delete({
            where: { id: Number(id) }
        })

        res.json( deletedContact )

    } catch (err) {
        console.log(err.message)
        res.sendStatus(503)
    }
}