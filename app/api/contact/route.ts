import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import * as z from "zod";
import { siteContent } from "@/content/siteContent";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactPayloadSchema = z.object({
  name: z.string().min(2),
  restaurantName: z.string().min(2),
  location: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
  website: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    const parsed = contactPayloadSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const data = parsed.data;

    if (data.website && data.website.trim().length > 0) {
      return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set. Please add it to your .env.local file.");
      return NextResponse.json(
        { error: "Email service not configured. Please contact the site administrator." },
        { status: 500 }
      );
    }

    // Format email content
    const emailSubject = `New Contact Form Submission from ${data.name}`;
    const emailBody = `
New contact form submission from Vibellion Marketing website:

Name: ${data.name}
Restaurant Name: ${data.restaurantName || "Not provided"}
Location: ${data.location || "Not provided"}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}

Message:
${data.message}

---
This message was sent from the contact form on your website.
You can reply directly to this email to respond to ${data.name} at ${data.email}.
    `.trim();

    // Send email using Resend
    const { data: emailData, error } = await resend.emails.send({
      from: "Vibellion Marketing <onboarding@resend.dev>",
      to: [siteContent.contact.email],
      replyTo: data.email,
      subject: emailSubject,
      text: emailBody,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <p>You have received a new message from your website:</p>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Restaurant Name:</strong> ${data.restaurantName || "Not provided"}</p>
            <p><strong>Location:</strong> ${data.location || "Not provided"}</p>
            <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
            <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
          </div>
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Message:</h3>
            <p style="white-space: pre-wrap;">${data.message}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
          <p style="color: #666; font-size: 12px;">
            This message was sent from the contact form on your website.<br>
            You can reply directly to this email to respond to ${data.name}.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", id: emailData?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
