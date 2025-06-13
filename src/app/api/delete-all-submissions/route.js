import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function POST() {
  try {
    await prisma.submission.deleteMany({}); // Deletes all
    return Response.json({ success: true });
  } catch (error) {
    console.error('Delete all error:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
