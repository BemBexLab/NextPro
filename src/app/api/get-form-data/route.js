// app/api/get-submissions/route.js

import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET() {
  console.log("API: /api/get-submissions called"); // Log when API is hit

  try {
    const submissions = await prisma.submission.findMany({
      orderBy: { createdAt: 'desc' }, // adjust if your timestamp field is different
    });

    console.log("API: Submissions found:", submissions); // Log the fetched data

    return NextResponse.json({ data: submissions });
  } catch (error) {
    console.error("API: Error fetching submissions:", error); // Log the error

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
