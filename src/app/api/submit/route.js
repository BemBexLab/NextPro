import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getPrisma } from "@/lib/prisma";

const escapeHtml = (value) =>
  String(value ?? "").replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });

export async function POST(req) {
  const body = await req.json();
  const name = body.name?.trim();
  const email = body.email?.trim();
  const website = body.website?.trim() || null;
  const contactNumber = body.contactNumber?.trim() || body.phone?.trim() || null;
  const message = body.message?.trim();
  const source = body.source?.trim() || "Website Contact Form";
  const service = Array.isArray(body.service)
    ? body.service.filter(Boolean).join(", ")
    : body.service?.trim();

  if (!name || !email || !service || !message) {
    return NextResponse.json(
      { error: "Please fill all required fields." },
      { status: 400 }
    );
  }

  const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
  const smtpPort = Number(process.env.SMTP_PORT || 465);
  const smtpSecure =
    String(process.env.SMTP_SECURE || "true").toLowerCase() === "true";
  const smtpUser = process.env.SMTP_USER;
  // Google displays app passwords in groups; remove whitespace before auth.
  const smtpPass = process.env.SMTP_PASS?.replace(/\s+/g, "");
  const emailTo = process.env.EMAIL_TO || "contact@webfoundersusa.com";

  if (!smtpUser || !smtpPass) {
    console.error("Submission Email Error: SMTP_USER and SMTP_PASS must be configured.");
    return NextResponse.json(
      { error: "Email delivery is temporarily unavailable. Please try again later." },
      { status: 503 }
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

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"Website Contact" <${smtpUser}>`,
      to: emailTo,
      replyTo: email,
      subject: `New Contact Form Submission: ${source}`,
      text: [
        `Source: ${source}`,
        `Name: ${name}`,
        `Email: ${email}`,
        `Website: ${website || "N/A"}`,
        `Phone: ${contactNumber || "N/A"}`,
        `Service: ${service}`,
        `Message: ${message}`,
      ].join("\n"),
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Source:</strong> ${escapeHtml(source)}</p>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Website:</strong> ${escapeHtml(website || "N/A")}</p>
        <p><strong>Phone:</strong> ${escapeHtml(contactNumber || "N/A")}</p>
        <p><strong>Service:</strong> ${escapeHtml(service)}</p>
        <p><strong>Message:</strong><br>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ success: true, id: submission.id });
  } catch (error) {
    console.error("Submission Error:", error);
    return NextResponse.json(
      { error: "We couldn't deliver your message. Please try again." },
      { status: 500 }
    );
  }
}
