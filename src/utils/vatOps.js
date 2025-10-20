import prisma from "../prismaClient.js";

export const afterVAT = async (whole, part)  => {
    (part / whole ) * 100;
}

export const totDeduction = async (id, afterVAT) => {
  const enterprise = await prisma.enterprise.findUnique({
    where: { id },
    select: { deducPerc: true },
  });

  if (!enterprise) throw new Error("Enterprise not found");

  const deduction = enterprise.deducPerc; // Boolean (true or false)

  // 3. Apply the reduced or full rate (enterprise)
  const appliedRate = deduction ? 75 : 100;

  // 4. Extrapolate based on that rate
  const vat = (appliedRate / afterVAT) * 100;

  return vat;
};