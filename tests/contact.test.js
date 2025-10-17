import { describe, test, it, expect, vi, beforeEach } from "vitest";
import { viewContacts, viewContact, addContact, updateContact, deleteContact } from "../src/controllers/contactController";

import prisma from "../src/prismaClient.js";

vi.mock("../src/prismaClient.js", () => ({
  default: {
    contact: {
      create: vi.fn(),
      findUnique:  vi.fn(),
      findMany: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
    },
  },
}))


// viewContacts TEST
describe('viewContacts controller', () => {
    let req, res
    
    beforeEach(() => {
        res = {
            json: vi.fn(),
            sendStatus: vi.fn(),
        }

        //reset mocks before each test
        vi.clearAllMocks()
    })

    it("should find contacts in DB", async () => {
        // Arrange
        prisma.contact.findMany.mockResolvedValue()

        // Act
        await viewContacts(req, res)

        // Assert
        expect(prisma.contact.findMany).toHaveBeenCalledWith()
    })

    it("should send 503 on error", async () => {
        prisma.contact.findMany.mockRejectedValue(new Error("DB failure"))
        
        await viewContacts(req, res)
        
        expect(res.sendStatus).toHaveBeenCalledWith(503)
    })
    
})


// viewContact
describe('viewContact controller', () => {
    let req, res

    beforeEach(() => {
        req = {
            params: {
                id: 123,
            },
        }

        res = {
            json: vi.fn(),
            sendStatus: vi.fn(),
            status: vi.fn().mockReturnThis(),
        }

        //reset mocks before each test
        vi.clearAllMocks()
    })

    it("should find contact in DB by ID", async() => {
        // Arrange
        prisma.contact.findUnique.mockResolvedValue({
            id: 123,
            compName: "Novo & Co.",
            compMail: "inquiries@novo.co"
        })

        // Act
        await viewContact(req, res)

        // Assert
        expect(prisma.contact.findUnique).toHaveBeenCalledWith({
            where: { id: 123 },
        })
        expect(res.json).toHaveBeenCalledWith({
            id: 123,
            compName: "Novo & Co.",
            compMail: "inquiries@novo.co"
        })
    })

    it("should return 404 if contact is not found", async () => {
        prisma.contact.findUnique.mockResolvedValue(null)

        await viewContact(req, res)

        expect(res.status).toHaveBeenCalledWith(404)
        expect(res.json).toHaveBeenCalledWith({ message: "Contact not found" })
    })

    it("should send 503 on error", async () => {
        prisma.contact.findUnique.mockRejectedValue(new Error("DB failure"))

        await viewContact(req, res)

        expect(res.sendStatus).toHaveBeenCalledWith(503)
    })

})


// addContact TEST
describe('addContact controller', () => {
    let req, res

    beforeEach(() => {
        req = {
            body: {
                contName: "Novo & Co.",
                contType: 1,
                contEmail: "inquiries@novo.co",
                contPhone: "123456789",
            },
        }

        res = {
            json: vi.fn(),
            sendStatus: vi.fn(),
        }

        //reset mocks before each test
        vi.clearAllMocks()
    })

    it("should add contact to DB", async () => {
        // Arrange
        prisma.contact.create.mockResolvedValue({
            id: 123,
            contName: "Novo & Co."
        })

        // Act
        await addContact(req, res)

        // Assert
        expect(prisma.contact.create).toHaveBeenCalledWith({
            data: expect.objectContaining({
                contName: "Novo & Co.",
                contType: 1,
                contEmail: "inquiries@novo.co",
                contPhone: "123456789",
            }),
        })
    })

    it("should send 503 on error", async () => {
        prisma.contact.create.mockRejectedValue(new Error("DB failure"))

        await addContact(req, res)
            
        expect(res.sendStatus).toHaveBeenCalledWith(503)
    })
})


// updateContact TEST
describe('updateContact controller', () => {
    let req, res

    beforeEach(() => {
        req = {
            params: {
                id: 123,
            },
            body: {
                contName: "Novo & Co.",
                contEmail: undefined,
                contPhone: "123456789",
            },
        }

        res = {
            json: vi.fn(),
            sendStatus: vi.fn(),
        }

        //reset mocks before each test
        vi.clearAllMocks()
    })

    it("should update values within a contact object, and return the updated contact", async () => {
        // Arrange
        prisma.contact.update.mockResolvedValue({ 
            id: 123, 
            contName: "Novo & Co.",
            contPhone: "123456789"
        })

        // Act
        await updateContact(req, res)

        // Assert 
        expect(prisma.contact.update).toHaveBeenCalledWith({
            where: { id: 123 },
            data: {
                contName: "Novo & Co.",
                contPhone: "123456789"
            }
        })
        
        expect(res.json).toHaveBeenCalledWith({
            id: 123,
            contName: "Novo & Co.",
            contPhone: "123456789",
        })
    })

    it("should send 503 on error", async () => {
        prisma.contact.update.mockRejectedValue(new Error("DB failure"))

        await updateContact(req, res)

        expect(res.sendStatus).toHaveBeenCalledWith(503)
    })
})


// deleteContact TEST
describe('deleteContact controller', () => {
    let req, res

    beforeEach(() => {
        req = {
            params: {
                id: 123,
            },
        }

        res = {
            json: vi.fn(),
            sendStatus: vi.fn(),
        }

        //reset mocks before each test
        vi.clearAllMocks() 
    })

    it("should delete contact from DB", async () => {
        // Arrange
        prisma.contact.delete.mockResolvedValue({ 
            id: 123,
            contName: "Novo & Co.",
            email: "inquiries@novo.co"
        })

        // Act
        await deleteContact(req, res)

        // Assert
        expect(prisma.contact.delete).toHaveBeenCalledWith({
            where: { id: 123 }
        })

        expect(res.json).toHaveBeenCalledWith({
            id: 123,
            contName: "Novo & Co.",
            email: "inquiries@novo.co"
        })
    })

    it("should send 503 on error", async() => {
        prisma.contact.delete.mockRejectedValue(new Error("DB failure"))

        await deleteContact(req, res)

        expect(res.sendStatus).toHaveBeenCalledWith(503)
    })
})