import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, phone, email, address, city, service, preferredContact, description } = body;

    // Basic Validation
    if (!fullName || !phone || !email) {
      return NextResponse.json(
        { error: "Please provide all required fields (Name, Phone, Email)." },
        { status: 400 }
      );
    }

    const contactEmail = process.env.CONTACT_EMAIL || "Santoshomeservices2026@gmail.com";
    const resendApiKey = process.env.RESEND_API_KEY;

    console.log("=== NEW QUOTE REQUEST RECEIVED ===");
    console.log({
      to: contactEmail,
      fullName,
      phone,
      email,
      address,
      city,
      service,
      preferredContact,
      description,
      timestamp: new Date().toISOString(),
    });

    if (resendApiKey) {
      // Optional Resend email dispatch
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Santos Website <onboarding@resend.dev>",
            to: [contactEmail],
            subject: `New Free Quote Request: ${fullName} (${service})`,
            html: `
              <h2>New Free Quote Request</h2>
              <p><strong>Name:</strong> ${fullName}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Project Address:</strong> ${address}, ${city}</p>
              <p><strong>Service Needed:</strong> ${service}</p>
              <p><strong>Preferred Contact:</strong> ${preferredContact}</p>
              <p><strong>Description:</strong> ${description || "N/A"}</p>
            `,
          }),
        });
      } catch (err) {
        console.error("Resend dispatch error:", err);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Thanks! Your request has been sent. We'll get back to you shortly.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error occurred." },
      { status: 500 }
    );
  }
}
