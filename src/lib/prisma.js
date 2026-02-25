let prismaInstance = null;

export async function getPrisma() {
  if (prismaInstance) return prismaInstance;

  const { PrismaClient } = await import("@prisma/client");
  prismaInstance = new PrismaClient();
  return prismaInstance;
}
