import { describe, test, it, expect, vi, beforeEach } from "vitest";
import { viewUser, updateUser, deleteUser } from "../src/controllers/userController";

import prisma from "../src/prismaClient.js";

vi.mock("../src/prismaClient.js", () => ({
  default: {
    user: {
      create: vi.fn(),
      findUnique:  vi.fn(),
      findMany: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
    },
  },
}))


// viewUser TEST
describe('viewUser controller', () => {
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

    it("should find user in DB by ID", async() => {
        // Arrange
        prisma.user.findUnique.mockResolvedValue({
            id: 123,
            username: "test",
            email: "test@example.com"
        })

        // Act
        await viewUser(req, res)

        // Assert
        expect(prisma.user.findUnique).toHaveBeenCalledWith({
            where: { id: 123 },
        })
        expect(res.json).toHaveBeenCalledWith({
            id: 123,
            username: "test",
            email: "test@example.com"
        })
    })

    it("should return 404 if user is not found", async () => {
        prisma.user.findUnique.mockResolvedValue(null)

        await viewUser(req, res)

        expect(res.status).toHaveBeenCalledWith(404)
        expect(res.json).toHaveBeenCalledWith({ message: "User not found" })
    })

    it("should send 503 on error", async () => {
        prisma.user.findUnique.mockRejectedValue(new Error("DB failure"))

        await viewUser(req, res)

        expect(res.sendStatus).toHaveBeenCalledWith(503)
    })
})



// updateUser TEST
describe('updateUser controller', () => {
    let req, res
     
    beforeEach(() => {
        req = {
            params: {
                id: 123,
            },
            body: {
                username: "test",
                firstName: undefined,
                lastName: "example",
            }
        }

        res = {
            json: vi.fn(),
            sendStatus: vi.fn(),
        }

        //reset mocks before each test
        vi.clearAllMocks()
    })

    it("should update values within a user object, and return the updated user", async () => {
        // Arrange
        prisma.user.update.mockResolvedValue({
            id: 123,
            username: "test",
            lastName: "example",
        })

        // Act
        await updateUser(req, res)

        // Assert
        expect(prisma.user.update).toHaveBeenCalledWith({
            where: { id: 123 },
            data: {
                username: "test",
                lastName: "example",
            }
        })

        expect(res.json).toHaveBeenCalledWith({
            id: 123,
            username: "test",
            lastName: "example",
        })
    })

    it("should send 503 on error", async () => {
        prisma.user.update.mockRejectedValue(new Error("DB failure"))

        await updateUser(req, res)

        expect(res.sendStatus).toHaveBeenCalledWith(503)
    })
})


//deleteUser TEST
describe('deleteUser controller', () => {
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

    it("should delete user from DB", async () => {
        // Arrange
        prisma.user.delete.mockResolvedValue({
            id: 123,
            username: "test"
        })

        // Act
        await deleteUser(req, res)

        // Assert
        expect(prisma.user.delete).toHaveBeenCalledWith({
            where : { id: 123 }
        })

        expect(res.json).toHaveBeenCalledWith({
            id: 123,
            username: "test"
        })
    })

    it("should send 503 on error", async() => {
        prisma.user.delete.mockRejectedValue(new Error("DB failure"))

        await deleteUser(req, res)

        expect(res.sendStatus).toHaveBeenCalledWith(503)
    })
    
})