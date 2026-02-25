import { getPrisma } from "@/lib/prisma";

export async function POST() {
  try {
    const prisma = await getPrisma();
    await prisma.submission.deleteMany({}); // Deletes all
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Delete all error:', error);
    return new Response(JSON.stringify({ error: error?.message || String(error) }), { status: 500 });
  }
}
