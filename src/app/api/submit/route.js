import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getPrisma } from "@/lib/prisma";

export async function POST(req) {
  const body = await req.json();
  const name = body.name?.trim();
  const email = body.email?.trim();
  const website = body.website?.trim() || null;
  const contactNumber = body.contactNumber?.trim() || body.phone?.trim() || null;
  const message = body.message?.trim();
  const service = Array.isArray(body.service)
    ? body.service.filter(Boolean).join(", ")
    : body.service?.trim();

  if (!name || !email || !service || !message) {
    return NextResponse.json(
      { error: "Please fill all required fields." },
      { status: 400 }
    );
  }

  try {
    const prisma = await getPrisma();

    const submission = await prisma.submission.create({
      data: {
        name,
        email,
        website,
        contactNumber,
        service,
        message,
      },
    });

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        await transporter.sendMail({
          from: `"Website Contact" <${smtpUser}>`,
          to: "info@webfoundersusa.com",
          subject: "New Contact Form Submission",
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Website:</strong> ${website || "N/A"}</p>
            <p><strong>Phone:</strong> ${contactNumber || "N/A"}</p>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Message:</strong><br>${message}</p>
          `,
        });
      } catch (emailError) {
        console.error("Submission Email Error:", emailError);
      }
    }

    return NextResponse.json({ success: true, id: submission.id });
  } catch (error) {
    console.error("Submission Error:", error);
    return NextResponse.json(
      { error: "Failed to save message. Please try again." },
      { status: 500 }
    );
  }
}
