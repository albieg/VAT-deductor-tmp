import prisma from "../prismaClient.js";


// GET /serialNum
export const getSeralNum = async (res) => {
    try {
        const enterprise = await prisma.enterprise.findUnique({
            where: { id },
            select: { invSerial: true}
        });

        if (!enterprise) throw new Error("Enterprise not found");

        const serial = enterprise.invSerial;
        res.json(serial)
        
    } catch (err) {
        console.log(err.message)
        res.sendStatus(503)
    }
}


// PATCH /serialNum
export const setSerialNum = async (req, res) => {
    const { id } = req.params;
    const { invSerial } = req.body;

    let regex = /^\d{8}$/;
    const invSerialStr = String(invSerial).trim();
    
    if (!regex.test(invSerial)) {return res.status(400).json({ message: 'Invalid Serial Number' })}

    try {
        const serialNum = await prisma.enterprise.update({
            where : { id },
            data: { invSerial },
        })

        res.json( serialNum )

    } catch (err) {
        console.log(err.message)
        res.sendStatus(503)
    }
}