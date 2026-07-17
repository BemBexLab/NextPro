import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();
  // Get all fields from the frontend
  const { name, email, website, contactNumber, service, message } = body;

  // Validation: Only name, email, service, message required; others optional
  if (!name || !email || !service || !message) {
    return NextResponse.json({ error: "Please fill all required fields." }, { status: 400 });
  }

  // SMTP setup
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"Website Contact" <${process.env.SMTP_USER}>`,
    to: "info@webfoundersusa.com",
    subject: "New Contact Form Submission",
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Website:</strong> ${website || 'N/A'}</p>
      <p><strong>Phone:</strong> ${contactNumber || 'N/A'}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
}
