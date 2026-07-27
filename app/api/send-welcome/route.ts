import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { success: false, error: "A valid email address is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Invalid email format." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "FitSocial Team <hello@mail.miraistack.co.za>",
      to: [email.trim()],
      subject: "Welcome to the FitSocial Beta Waitlist 🎉",
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to FitSocial</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.08);">
          
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#18181b 0%,#27272a 100%);padding:40px 32px;text-align:center;">
              <h1 style="margin:0;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:-0.02em;">FitSocial</h1>
              <p style="margin:8px 0 0;font-size:13px;color:rgba(255,255,255,0.6);letter-spacing:0.04em;text-transform:uppercase;">Beta Waitlist</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 32px 28px;">
              <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:#3f3f46;">Hi there,</p>
              <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:#3f3f46;">
                Thank you for your interest in <strong style="color:#18181b;">FitSocial</strong>.
              </p>
              <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:#3f3f46;">
                We're excited to let you know that you've successfully joined the
                <strong style="color:#18181b;">FitSocial Beta Waitlist</strong>. As one of our early
                supporters, you'll be among the first to receive access to the beta version of the app.
              </p>
              <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:#3f3f46;">
                Your feedback will play a key role in helping us refine the experience and shape the
                future of FitSocial before its public launch.
              </p>
              <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#3f3f46;">
                Please keep an eye on your inbox — we'll be sending updates, exclusive previews, and
                your invitation to join the beta as soon as it's available.
              </p>

              <!-- Divider -->
              <hr style="border:none;border-top:1px solid #e4e4e7;margin:24px 0;" />

              <p style="margin:0 0 6px;font-size:15px;line-height:1.7;color:#3f3f46;">
                We appreciate your support and can't wait to welcome you to the FitSocial community.
              </p>
              <p style="margin:20px 0 0;font-size:15px;line-height:1.7;color:#3f3f46;">
                Kind regards,<br />
                <strong style="color:#18181b;">The FitSocial Team</strong>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#fafafa;padding:24px 32px;text-align:center;border-top:1px solid #f0f0f0;">
              <p style="margin:0;font-size:12px;color:#a1a1aa;line-height:1.6;">
                © ${new Date().getFullYear()} FitSocial. All rights reserved.<br />
                You received this email because you joined the FitSocial beta waitlist.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `.trim(),
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { success: false, error: error.message || "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("send-welcome route error:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}
