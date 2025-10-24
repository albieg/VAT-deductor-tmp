import express from 'express'
import { upload } from '../middleware/uploads.js';
import { generateInvoice } from '../controllers/invoiceController.js'


const router = express.Router()

// Post invoice
router.post("/generateInvoice", upload.single("receiptImage"), generateInvoice);


export default router