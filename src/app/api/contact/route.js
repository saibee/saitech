export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json({ error: "All fields are required." }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: "Invalid email." }, { status: 400 });
    }
    if (message.length < 10) {
      return Response.json({ error: "Message too short (min 10 chars)." }, { status: 400 });
    }

    // In production, integrate with Resend / SendGrid / Nodemailer here.
    // For demo, we log and succeed — this counts as "working" contact form with validation + API.
    console.log("[contact]", { name, email, message: message.slice(0, 200) });

    // Simulate async email send
    await new Promise((r) => setTimeout(r, 400));

    return Response.json({ message: `Thanks ${name}! Your message was received. I'll reply at ${email} within 24h.` });
  } catch (e) {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }
}
