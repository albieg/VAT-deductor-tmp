import { describe, test, it, expect, vi, beforeEach } from "vitest";
import { viewEnterprise, addEnterprise, updateEnterprise, deleteEnterprise } from "../src/controllers/enterpriseController";

import prisma from "../src/prismaClient.js";

vi.mock("../src/prismaClient.js", () => ({
  default: {
    enterprise: {
      create: vi.fn(),
      findUnique:  vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
    },
  },
}))


// viewEnterprise TEST
describe('viewEnterprise controller', () => {
    let req, res

    beforeEach(() => {
        req = {
            params: {
                id: "123",
            }
        }

        res = {
            json: vi.fn(),
            sendStatus: vi.fn(),
        }

        //reset mocks before each test
        vi.clearAllMocks()
    })

    it("should find enterprise in DB by ID", async() => {
        // Arrange
        prisma.enterprise.findUnique.mockResolvedValue({
            id: 123,
            entName: "Pesckt Corp",
            entMail: "inquiries@pesckt.com"
        })

        // Act
        await viewEnterprise(req, res)

        // Assert
        expect(prisma.enterprise.findUnique).toHaveBeenCalledWith({
            where: { id: 123 },
        })
        expect(res.json).toHaveBeenCalledWith({
            id: 123,
            entName: "Pesckt Corp",
            entMail: "inquiries@pesckt.com"
        })
    })

    it("should send 503 on error", async () => {
        prisma.enterprise.findUnique.mockRejectedValue(new Error("DB failure"))

        await viewEnterprise(req, res)

        expect(res.sendStatus).toHaveBeenCalledWith(503)
    })

})


// addEnterprise TEST
describe('addEnterprise controller', () => {
    let req, res

    beforeEach(() => {
        req = {
            body: {
                id: 123,
                entRif: "J-3294",
                entName: "Pesckt Corp",
                entAddr: "Random Street 12",
                entPhone: "123456789",
                retPerc: 1
            },
        }

        res = {
            json: vi.fn(),
            sendStatus: vi.fn(),
        }

        //reset mocks before each test
        vi.clearAllMocks()
    })

    it("should add enterprise to Db", async () => {
        // Arrange
        prisma.enterprise.create.mockResolvedValue({
            id: 123,
            entName: "Pesckt Corp"
        })

        // Act
        await addEnterprise(req, res)

        // Assert
        expect(prisma.enterprise.create).toHaveBeenCalledWith({
            data: expect.objectContaining({
                entRif: "J-3294",
                entName: "Pesckt Corp",
                entAddr: "Random Street 12",
                entPhone: "123456789",
                retPerc: 1
            }),
        })
    })

    it("should send 503 on error", async () => {
        prisma.enterprise.create.mockRejectedValue(new Error("DB failure"))

        await addEnterprise(req, res)
            
        expect(res.sendStatus).toHaveBeenCalledWith(503)
    })
})

// updateEnterprise TEST
describe('updateEnterprise controller', () => {
    let req, res

    beforeEach(() => {
        req = {
            params: {
                id: 123.
            },
            body: {
                entName: "Pesckt Corp",
                entAddr: undefined,
                entPhone: "123456789",
            },
        }

        res = {
            json: vi.fn(),
            sendStatus: vi.fn(),
        }

        //reset mocks before each test
        vi.clearAllMocks()
    })

    it("should update values within an enterprise object, and return the updated enterprise", async () => {
        // Arrange
        prisma.enterprise.update.mockResolvedValue({
            id: 123,
            entName: "Pesckt Corp",
            entPhone: "123456789",
        })

        // Act
        await updateEnterprise(req, res)

        // Assert
        expect(prisma.enterprise.update).toHaveBeenCalledWith({
            where: { id: 123 },
            data: {
                entName: "Pesckt Corp",
                entPhone: "123456789",
            }
        })

        expect(res.json).toHaveBeenCalledWith({
            id: 123,
            entName: "Pesckt Corp",
            entPhone: "123456789",
        })

    })

    it("should send 503 on error", async () => {
        prisma.enterprise.update.mockRejectedValue(new Error("DB failure"))

        await updateEnterprise(req, res)

        expect(res.sendStatus).toHaveBeenCalledWith(503)
    })

})


// deleteEnterprise TEST
describe('deleteEnterprise controller', () => {
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

    it("should delete enterprise from DB", async () => {
        // Arrange
        prisma.enterprise.delete.mockResolvedValue({
            id: 123,
            entName: "Pesckt Corp",
            entPhone: "123456789",
        })

        // Act
        await deleteEnterprise(req, res)

        // Assert
        expect(prisma.enterprise.delete).toHaveBeenCalledWith({
            where: { id: 123 }
        })

        expect(res.json).toHaveBeenCalledWith({
            id: 123,
            entName: "Pesckt Corp",
            entPhone: "123456789",
        })
    })

    it("should send 503 on error", async() => {
        prisma.enterprise.delete.mockRejectedValue(new Error("DB failure"))

        await deleteEnterprise(req, res)

        expect(res.sendStatus).toHaveBeenCalledWith(503)
    })
})