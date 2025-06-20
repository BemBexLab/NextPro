// app/api/get-form-data/route.js

export const dynamic = "force-dynamic";

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET() {
  console.log("API: /api/get-form-data called");

  try {
    const submissions = await prisma.submission.findMany({
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        name: true,
        email: true,
        website: true,
        contactNumber: true, // <-- Explicitly include contactNumber
        service: true,
        message: true,
        createdAt: true,
      },
    });

    console.log("API: Submissions found:", submissions);

    return NextResponse.json({ data: submissions });
  } catch (error) {
    console.error("API: Error fetching submissions:", error);

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
