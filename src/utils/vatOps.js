import prisma from "../prismaClient.js";

export const afterVAT = async (whole, part)  => {
    (part / whole ) * 100;
}

export const totRetention = async (id, whole, part) => {
  const enterprise = await prisma.enterprise.findUnique({
    where: { id },
    select: { retPerc: true },
  });

  if (!enterprise) throw new Error("Enterprise not found");

  const retPerc = enterprise.retPerc; // Boolean (true or false)

  // 2. Calculate the initial percentage based VAT percentage found in form
  const percentage1 = afterVAT(whole, part)

  // 3. Apply the reduced or full rate (enterprise)
  const appliedRate = retPerc ? 75 : 100;

  // 4. Extrapolate based on that rate
  const vat = (appliedRate / percentage1) * 100;

  return vat;
};