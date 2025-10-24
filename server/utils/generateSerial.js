import prisma from "../prismaClient.js";


export const generateSerial = async (increment) => {

    // First and second portion of the serial number (year YYYY & month MM)
    const date = new Date();

    const monthFormat = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]

    let year = date.getFullYear();
    let month = monthFormat[date.getMonth()];

    // Third portion of the serial number (incremental 8 digit num)
    const enterprise = await prisma.enterprise.findUnique({
        where: { id },
        select: { invSerial: true },
    })

    if (!enterprise) throw new Error("Enterprise not found");

    const lastSerial = enterprise.invSerial; // serial num of the last invoice (can be reset by the admin from settings)



}