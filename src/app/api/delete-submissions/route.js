import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function POST(request) {
  try {
    const { ids } = await request.json();
    if (!Array.isArray(ids) || ids.length === 0) {
      return Response.json({ error: 'No IDs provided' }, { status: 400 });
    }
    await prisma.submission.deleteMany({
      where: { id: { in: ids } }
    });
    return Response.json({ success: true });
  } catch (error) {
    console.error('Delete selected error:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
