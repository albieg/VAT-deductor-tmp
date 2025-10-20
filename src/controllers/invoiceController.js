import prisma from "../prismaClient.js";
import fs from "fs";
import { afterVAT, totDeduction, } from "../utils/vatOps.js";
import { generateSerial } from "./serialController.js";


// POST /invoice
export const generateInvoice = async (req, res) => {
    const file = req.file
    const { enterpriseId, vendRif, vendName, vendAddr, vendPhone, rcptNum, debNote, credNote, affecNum, vatFree, ctrlNum, taxBase, vatPerc, total} = req.body

    const emission = new Date();

    const enterprise = await prisma.enterprise.findUnique({
        where: { id: Number(enterpriseId) },
    });

    if (!enterprise) {
        return res.status(404).json({ message: "Enterprise not found" });
    }

    // save receipt data in the DB
    try {
        const invSerial = await generateSerial(enterpriseId);
        const invoice = await prisma.invoice.create({
            data: {
                enterpriseId,
                vendRif,
                vendName,
                vendAddr,
                vendPhone,
                rcptNum,
                debNote,
                credNote,
                affecNum,
                vatFree,
                rcptName: file.filename,
                rcptUrl: file.path,
                ctrlNum,
                taxBase,
                vatPerc,
                total,
                emission,
                serial: invSerial,
            }
        });

    // VAT calculations
    const postVAT = afterVAT(invoice.total, invoice.vatPerc);
    const deduction = totDeduction(postVAT)

    // Create new workbook & worksheet
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile("utils/invoiceTemplate.xlsx");

    const sheet = workbook.getWorksheet(1);


    // Invoice serial number // (N° Comprobante)
    sheet.getCell("K3").value = invSerial;

    // Invoice emission date // (Fecha)
    sheet.getCell("N3").value = emission.toLocaleDateString();

    // Enterprise name // (Nombre del Agente de Retencion)
    sheet.getCell("A8").value = enterprise.entName;

    // Enterprise RIF num // (Registro de In... del Agente de Retencion)
    sheet.getCell("K8").value = `R.I.F: ${enterprise.entRif}`;
    sheet.getCell("C34").value = `R.I.F: ${enterprise.entRif}`;

    // Entreprise address // (Direccion... del Agente de Retencion)
    sheet.getCell("A11").value = enterprise.entAddr;

    // Vendor name // (Nombre del Sujeto de Retenido)
    sheet.getCell("A17").value = invoice.vendName;

    // Vendor RIF num // (Registro de In... Sijeto de Retenido)
    sheet.getCell("L17").value = `R.I.F: ${invoice.vendRif}`;

    // Vendor address // (Direccion Fiscal del Sujeto de Retenido)
    sheet.getCell("A19").value = invoice.vendAddr;

    // Doc date // (Fecha del Documento)
    sheet.getCell("B23").value = emission.toLocaleDateString();

    // Receipt num // (Numero de Factura)
    sheet.getCell("C23").value = invoice.rcptNum;

    // Control num // (Numero de Control Doc)
    sheet.getCell("D23").value = invoice.ctrlNum;

    // Debt note // (Num Nota Debito)
    sheet.getCell("E23").value = invoice.debNote ?? "";

    // Credit note // (Num Nota Credito)
    sheet.getCell("F23").value = invoice.credNote ?? "";

    // Affected Receipt // (Nro Fact. Afectada)
    sheet.getCell("H23").value = invoice.affecNum ?? "";

    // Total // (Total Incuyendo IVA)
    sheet.getCell("I23").value = invoice.total;
    sheet.getCell("I27").value = invoice.total;

    // VAT free purchases // (Compras si Derecho a Credito IVA)
    sheet.getCell("J23").value = invoice.vatFree ?? "";
    sheet.getCell("J27").value = invoice.vatFree ?? "";

    // Taxable base // (Base Imponibile)
    sheet.getCell("K23").value = invoice.taxBase;
    sheet.getCell("K27").value = invoice.taxBase;

    // VAT percentage // (Alicuota)
    sheet.getCell("L23").value = invoice.vatPerc;

    // taxable base after VAT // (Impuesto IVA)
    sheet.getCell("M23").numFmt = '#,##0.00';
    sheet.getCell("M23").value = postVAT;
    sheet.getCell("M27").numFmt = '#,##0.00';
    sheet.getCell("M27").value = postVAT;

    // TAX Deduction // (IVA Retenido)
    sheet.getCell("N23").numFmt = '#,##0.00';
    sheet.getCell("N23").value = deduction;
    sheet.getCell("N27").numFmt = '#,##0.00';
    sheet.getCell("N27").value = deduction;

    // Save copy server-side
    const dir = `invoices/${enterprise.entName.replace(/\s+/g, "_")}/${emission.getFullYear()}`;
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    
    const filePath = `${dir}/invoice-${invSerial}.xlsx`;
    await workbook.xlsx.writeFile(filePath);

    const buffer = await workbook.xlsx.writeBuffer();
    res.setHeader("Content-Disposition", "attachment; filename=invoice.xlsx");
    res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    
    res.status(201).send(buffer);

    } catch (err) {
        console.error('Error creating invoice:', err.message);
        res.status(500).json({ message: 'Error creating invoice' });
    }
}

