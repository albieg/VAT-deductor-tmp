import { describe, test, it, expect, vi, beforeEach } from "vitest";
import { register, login } from "../src/controllers/authController.js";

// mock external modules
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import prisma from "../src/prismaClient.js";

vi.mock("bcryptjs")
vi.mock("jsonwebtoken")

vi.mock("../src/prismaClient.js", () => ({
  default: {
    user: {
      create: vi.fn(),
      findUnique:  vi.fn(),
    },
  },
}))

// register TEST 
describe('register controller', () => {
    let req, res

    beforeEach(() => {
        req = {
            body: {
                username: "testuser",
                password: "plainpass",
                firstName: "Test",
                lastName: "User",
                email: "test@example.com",
            },
        }

        res = {
            json: vi.fn(),
            sendStatus: vi.fn(),
        }

        //reset mocks before each test
        vi.clearAllMocks()
    })

    it("should hash password, save user, and return token", async () => {
        // Arrange : mock dependencies
        bcrypt.hash.mockResolvedValue("hashed_pass")
        prisma.user.create.mockResolvedValue({ id: 123, username: "testuser" })
        jwt.sign.mockReturnValue("fake_token")

        // Act
        await register(req, res)

        // Assert
        expect(bcrypt.hash).toHaveBeenLastCalledWith("plainpass", 12)
        expect(prisma.user.create).toHaveBeenCalledWith({
            data: expect.objectContaining({
                username: "testuser",
                firstName: "Test",
                lastName: "User",
                email: "test@example.com",
                password: "hashed_pass",
            }),
        })
        expect(jwt.sign).toHaveBeenCalledWith(
            { id : 123 },
            process.env.JWT_SECRET,
            { expiresIn: "24h" }
        )
        expect(res.json).toHaveBeenCalledWith({ token: "fake_token" })
    })

    it("should send 503 on error", async () => {
        prisma.user.create.mockRejectedValue(new Error("DB failure"))

        await register(req, res)

        expect(res.sendStatus).toHaveBeenCalledWith(503)
    })
})



// login TEST
describe('login controller', () => {
    let req, res

    beforeEach(() => {
        req = {
            body: {
                username: "testuser",
                password: "plainpass",
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

    it("login if credentials are correct", async () => {
        // Arrange : mock dependencies
        bcrypt.compareSync.mockReturnValue(true)
        prisma.user.findUnique.mockResolvedValue({ id: 123, username: "testuser", password : "hashed_pass", })
        jwt.sign.mockReturnValue("fake_token")

        // Act
        await login(req, res)

        // Assert
        expect(bcrypt.compareSync).toHaveBeenCalledWith("plainpass", "hashed_pass")
        expect(prisma.user.findUnique).toHaveBeenCalledWith({
            where: { username: "testuser" },
        })
        expect(jwt.sign).toHaveBeenCalledWith(
            { id : 123 },
            process.env.JWT_SECRET,
            { expiresIn: "24h" }
        )
        expect(res.json).toHaveBeenCalledWith({ token: "fake_token" })
    })
    
    it("should return 401 if password invalid", async () => {
        prisma.user.findUnique.mockResolvedValue({
        id: 123,
        username: "testuser",
        password: "hashed_pass",
    })
    
    bcrypt.compareSync.mockReturnValue(false)
    
    await login(req, res)
    
    expect(res.status).toHaveBeenCalledWith(401)
    expect(res.json).toHaveBeenCalledWith({ message: "Invalid credentials" })
    })
    
    it("should send 503 on error", async() => {
        prisma.user.findUnique.mockRejectedValue(new Error("DB failure"))

        await login(req, res)

        expect(res.sendStatus).toHaveBeenCalledWith(503)
    })
})
