// app/api/get-form-data/route.js

export const dynamic = "force-dynamic"; // 👈 Add this line at the top

import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET() {
  console.log("API: /api/get-form-data called"); // Make sure the log matches your actual route

  try {
    const submissions = await prisma.submission.findMany({
      orderBy: { createdAt: 'desc' }, // adjust if your timestamp field is different
    });

    console.log("API: Submissions found:", submissions);

    return NextResponse.json({ data: submissions });
  } catch (error) {
    console.error("API: Error fetching submissions:", error);

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
