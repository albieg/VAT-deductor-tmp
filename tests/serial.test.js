import { describe, test, it, expect, vi, beforeEach } from "vitest";
import { setSerial, getSerial, generateSerial } from "../server/controllers/serialController.js";
import prisma from "../server/prismaClient.js";

vi.mock('../src/prismaClient.js', () => ({
  default: {
    $transaction: vi.fn(),
    serialTracker: {
      upsert: vi.fn(),
      update: vi.fn(),
      findUnique: vi.fn(),
    },
  },
}));


// generateSerial TEST
describe('generateSerial', () => {
    let req, res

  beforeEach(() => {
    req = {
        params: {
          enterpriseId: 123,  
        },
    }

    // reset mocks
    vi.clearAllMocks();

  });

  it('should generate a properly formatted serial and increment tracker', async () => {
    // Mock date
    const mockDate = new Date('2025-10-20T12:00:00Z');
    vi.setSystemTime(mockDate);

    // Mock Prisma transaction behavior
    prisma.$transaction.mockImplementation(async (fn) => {
      return fn(prisma);
    });
    // Arrange
    prisma.serialTracker.upsert.mockResolvedValue({ currentValue: 0 });
    prisma.serialTracker.update.mockResolvedValue({ currentValue: 1 });

    // Act
    const result = await generateSerial(req);

    // Assert
    expect(prisma.$transaction).toHaveBeenCalledOnce();
    expect(prisma.serialTracker.upsert).toHaveBeenCalledWith({
      where: { enterpriseId: 123 },
      update: {},
      create: { enterpriseId: req.params.enterpriseId, currentValue: 0 },
    });
    expect(prisma.serialTracker.update).toHaveBeenCalledWith({
      where: { enterpriseId: 123 },
      data: { currentValue: 1 },
    });

    expect(result).toBe('2025-10-00000001');
  });

  it('should reset serial number to 1 after reaching 99999999', async () => {
    vi.setSystemTime(new Date('2025-12-05'));

    prisma.$transaction.mockImplementation(async (fn) => fn(prisma));
    prisma.serialTracker.upsert.mockResolvedValue({ currentValue: 99999999 });
    prisma.serialTracker.update.mockResolvedValue({ currentValue: 1 });

    const result = await generateSerial(req);

    expect(result).toBe('2025-12-00000001');
  });
});


// getSerial TEST
describe("getSerial cotroller", () => {
    let req, res

    beforeEach(() => {
        req = {
            params: {
                enterpriseId: 123,
            },
        }

        res = {
            json: vi.fn(),
            sendStatus: vi.fn(),
            status: vi.fn().mockReturnThis(),
        }

        //reset mocks
        vi.clearAllMocks()
    })

    it("should find the current serial number by Enterprise ID", async() => {
        // Arrange
        prisma.serialTracker.findUnique.mockResolvedValue({ currentValue: 1});

        // Act
        await getSerial(req, res)

        // Assert
        expect(prisma.serialTracker.findUnique).toHaveBeenCalledWith({
            where: { enterpriseId: 123 },
            select: { currentValue: true },
        })
        expect(res.json).toHaveBeenCalledWith({
            currentValue: 1
        })
    })

    it("should return 404 if serial tracker is not found", async () => {
        prisma.serialTracker.findUnique.mockResolvedValue(null)

        await getSerial(req, res)

        expect(res.status).toHaveBeenCalledWith(404)
        expect(res.json).toHaveBeenCalledWith({ message: "Serial tracker not found" })
    })

    it("should return 503 on error", async () => {
        prisma.serialTracker.findUnique.mockRejectedValue(new Error("DB failure"));
        
        await getSerial(req, res);
        
        expect(res.status).toHaveBeenCalledWith(503);
        expect(res.json).toHaveBeenCalledWith({ message: "Error fetching serial number" });
    });
})


// setSerial TEST
describe("setSerial controller", () => {
    let req, res

    beforeEach(() => {
        req = {
            params: {
                enterpriseId: 123,
            },
            body: {
                newValue: 2,
            }
        }

        res = {
            json: vi.fn(),
            sendStatus: vi.fn(),
            status: vi.fn().mockReturnThis(),
        }

        //reset mocks
        vi.clearAllMocks()
    })

    it("should update the current serial number", async() => {
        // Arrange
        prisma.serialTracker.upsert.mockResolvedValue({ currentValue: 2});

        // Act
        await setSerial(req, res)

        // Assert
        expect(prisma.serialTracker.upsert).toHaveBeenCalledWith({
            where: { enterpriseId: 123 },
            update: {currentValue: 2},
            create: { enterpriseId: 123, currentValue: 2},
        })
        expect(res.json).toHaveBeenLastCalledWith({
            currentValue: req.body.newValue
        })
    })

    it("should reject number that aren't between 0 and 99999999", async () => {
        req.body.newValue = 100000000;

        await setSerial(req, res)
        
        expect(res.status).toHaveBeenCalledWith(400)
        expect(res.json).toHaveBeenLastCalledWith({ message: "Value must be between 0 and 99999999" })
    });

    it("should return 503 on error", async () => {
        prisma.serialTracker.upsert.mockRejectedValue(new Error("DB failure"));
        
        await setSerial(req, res);
        
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ message: "Error updating serial number" });
    });

})