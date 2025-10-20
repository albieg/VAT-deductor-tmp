import prisma from "../prismaClient.js";


// GET /generateSerialNum
export const generateSerial = async (req) => {
  const { enterpriseId } = req.params;
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');

    return await prisma.$transaction(async (tx) => {
        // retrieve or create the tracker
        let tracker = await tx.serialTracker.upsert({
            where: { enterpriseId },
            update: {},
            create: { enterpriseId, currentValue: 0 },
        });

        // calculate next serial value
        let nextValue = tracker.currentValue + 1;
        if (nextValue > 99999999) {
            nextValue = 1;
        }

        // save new value
        tracker = await tx.serialTracker.update({
            where: { enterpriseId },
            data: { currentValue: nextValue },
        });

        // format serial number: YYYY-MM-NNNNNNNN
        const seriaNum = String(tracker.currentValue).padStart(8, '0');
        return `${year}-${month}-${seriaNum}`;


    });
}


// GET /serial
export const getSerial = async (req, res) => {
  const { enterpriseId } = req.params;

  try {
    const tracker = await prisma.serialTracker.findUnique({
      where: { enterpriseId: Number(enterpriseId) },
      select: { currentValue: true },
    });

    if (!tracker) {
      return res.status(404).json({ message: 'Serial tracker not found' });
    }

    res.status(200).json({ currentValue: tracker.currentValue });
  } catch (err) {
    console.error('Error fetching serial number:', err.message);
    res.status(503).json({ message: 'Error fetching serial number' });
  }
};


// PATCH /serial
export const setSerial = async (req, res) => {
const { enterpriseId } = req.params;
  const { newValue } = req.body;

  if (newValue < 0 || newValue > 99999999) {
    return res.status(400).json({ message: 'Value must be between 0 and 99999999' });
  }

  try {
    const tracker = await prisma.serialTracker.upsert({
      where: { enterpriseId },
      update: { currentValue: newValue },
      create: { enterpriseId , currentValue: newValue },
    });

    res.status(200).json(tracker);
  } catch (err) {
    console.error('Error updating serial number:', err.message);
    res.status(500).json({ message: 'Error updating serial number' });
  }
};

