import { describe, it, expect, vi, beforeEach } from "vitest";
import { generateInvoice } from "../server/controllers/invoiceController.js";
import { generateSerial } from "../server/controllers/serialController.js";
import { afterVAT, totDeduction } from "../server/utils/vatOps.js";
import prisma from "../server/prismaClient.js";
import fs from "fs";
import ExcelJS from 'exceljs';


// Mock dependencies
vi.mock("fs", () => ({
  default: {
    existsSync: vi.fn().mockReturnValue(false),
    mkdirSync: vi.fn(),
  },
}));

vi.mock("exceljs", () => ({
  default: {
    Workbook: vi.fn().mockImplementation(() => ({
      xlsx: {
        readFile: vi.fn(),
        writeFile: vi.fn(),
        writeBuffer: vi.fn().mockResolvedValue(Buffer.from("fake-buffer")),
      },
      getWorksheet: vi.fn().mockReturnValue({
        getCell: vi.fn().mockReturnValue({ value: null }),
      }),
    })),
  },
}));

vi.mock("../src/prismaClient.js", () => ({
  default: {
    enterprise: {
      findUnique: vi.fn(),
    },
    invoice: {
      create: vi.fn(),
    },
  },
}));

vi.mock("../src/utils/generateSerial.js", () => ({
  generateSerial: vi.fn().mockResolvedValue("INV-001"),
}));

vi.mock("../src/utils/vatOps.js", () => ({
  afterVAT: vi.fn().mockReturnValue(10),
  totDeduction: vi.fn().mockReturnValue(5),
}));


describe("generateInvoice controller", () => {
  let req, res;

  beforeEach(() => {
    vi.clearAllMocks();

    req = {
      file: { filename: "receipt.pdf", path: "uploads/receipt.pdf" },
      body: {
        enterpriseId: 1,
        vendRif: "J-123456789",
        vendName: "ACME Supplies",
        vendAddr: "123 Main St",
        vendPhone: "555-1234",
        rcptNum: "001",
        debNote: "",
        credNote: "",
        affecNum: "",
        vatFree: 0,
        ctrlNum: "A-001",
        taxBase: 100,
        vatPerc: 16,
        total: 116,
      },
    };

    res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
      setHeader: vi.fn(),
      send: vi.fn(),
    };
  });

  it("returns 404 if enterprise not found", async () => {
    prisma.enterprise.findUnique.mockResolvedValue(null);

    await generateInvoice(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: "Enterprise not found" });
  });

  it("creates invoice and returns xlsx buffer", async () => {
    prisma.enterprise.findUnique.mockResolvedValue({
      id: 1,
      entName: "Test Enterprise",
      entRif: "J-999999999",
      entAddr: "123 Test Street",
    });

    prisma.invoice.create.mockResolvedValue({
      id: 1,
      enterpriseId: 1,
      vendRif: "J-123456789",
      vendName: "ACME Supplies",
      vendAddr: "123 Main St",
      rcptNum: "001",
      vatPerc: 16,
      total: 116,
      emission: new Date(),
      serial: "INV-001",
    });

    await generateInvoice(req, res);

    // Expect key dependencies to have been called
    expect(prisma.invoice.create).toHaveBeenCalled();
    expect(generateSerial).toHaveBeenCalledWith(1);
    expect(fs.mkdirSync).toHaveBeenCalled();
    expect(afterVAT).toHaveBeenCalled();
    expect(totDeduction).toHaveBeenCalled();

    // Expect response to be correct
    expect(res.setHeader).toHaveBeenCalledWith(
      "Content-Disposition",
      "attachment; filename=invoice.xlsx"
    );
    expect(res.setHeader).toHaveBeenCalledWith(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.send).toHaveBeenCalled();
  });

  it("handles internal server errors gracefully", async () => {
    prisma.enterprise.findUnique.mockResolvedValue({
      id: 1,
      entName: "Test Enterprise",
      entRif: "J-999999999",
      entAddr: "123 Test Street",
    });

    prisma.invoice.create.mockRejectedValue(new Error("DB error"));

    await generateInvoice(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: "Error creating invoice" });
  });
});