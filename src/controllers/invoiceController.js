import prisma from "../prismaClient.js";
import { afterVAT, totRetention } from "../utils/vatOps.js";


// POST /invoice
export const generateInvoice = async (req, res) => {
    const { vendRif, vendName, vendAddr, vendPhone, rcptNum, rcptName, rcptUrl, ctrlNum, taxBase, vatPerc, total} = req.body


    // save receipt data in the DB
    try {
        const receipt = await prisma.invoice.create({
            data: {
                vendRif,
                vendName,
                vendAddr,
                vendPhone,
                rcptNum,
                rcptName,
                rcptUrl,
                ctrlNum,
                taxBase,
                vatPerc,
                total,
            }
        })

    } catch (err) {
        console.log(err.message)
        res.sendStatus(503)
    }


}

