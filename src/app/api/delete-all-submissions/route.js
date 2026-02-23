export async function POST() {
  try {
    const { PrismaClient } = await import('@prisma/client');
    const prisma = new PrismaClient();
    try {
      await prisma.submission.deleteMany({}); // Deletes all
    } finally {
      await prisma.$disconnect();
    }
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Delete all error:', error);
    return new Response(JSON.stringify({ error: error?.message || String(error) }), { status: 500 });
  }
}
