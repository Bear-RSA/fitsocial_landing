import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { listMealPlans, resolveOrigin } from "../../../lib/mealPlans";

export const dynamic = "force-dynamic";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function POST(request: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { name, email } = body;

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

    const plans = await listMealPlans();

    if (plans.length === 0) {
      console.error("send-meal-plans: no PDFs found in public/meal-plans");
      return NextResponse.json(
        { success: false, error: "The meal plans aren't available right now. Please try again shortly." },
        { status: 503 }
      );
    }

    const origin = resolveOrigin(request);
    const safeName =
      name && typeof name === "string" ? escapeHtml(name.trim()).slice(0, 80) : "";
    const greeting = safeName ? `Hi ${safeName},` : "Hi there,";

    const planButtons = plans
      .map(
        (plan) => `
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 12px;">
                <tr>
                  <td style="border:1px solid #e4e4e7;border-radius:10px;padding:16px 18px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="font-size:15px;font-weight:600;color:#18181b;line-height:1.4;">
                          ${escapeHtml(plan.title)}
                          ${plan.size ? `<span style="display:block;font-size:12px;font-weight:400;color:#a1a1aa;margin-top:3px;">PDF${plan.size ? ` · ${escapeHtml(plan.size)}` : ""}</span>` : ""}
                        </td>
                        <td align="right" style="padding-left:12px;">
                          <a href="${origin}${plan.downloadUrl}"
                             style="display:inline-block;background:#ff6b1a;color:#18181b;text-decoration:none;font-size:13px;font-weight:700;padding:11px 18px;border-radius:999px;white-space:nowrap;">
                            Download
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>`
      )
      .join("");

    const { data, error } = await resend.emails.send({
      from: "FitSocial Team <hello@mail.miraistack.co.za>",
      to: [email.trim()],
      subject: "Your FitSocial meal plans are ready 🥗",
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your FitSocial meal plans</title>
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
              <p style="margin:8px 0 0;font-size:13px;color:rgba(255,255,255,0.6);letter-spacing:0.04em;text-transform:uppercase;">Meal Plans</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 32px 28px;">
              <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:#3f3f46;">${greeting}</p>
              <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:#3f3f46;">
                Here are your <strong style="color:#18181b;">FitSocial meal plans</strong> — real South African
                meals, priced in rands, built around a week you can actually cook.
              </p>
              <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#3f3f46;">
                Tap any plan below to download the PDF:
              </p>

              ${planButtons}

              <hr style="border:none;border-top:1px solid #e4e4e7;margin:28px 0 24px;" />

              <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:#3f3f46;">
                Cook once, eat well all week. When the app launches you'll be able to log these
                straight from your phone and track the macros as you go.
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
                You received this email because you requested the FitSocial meal plans.
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

    return NextResponse.json({ success: true, id: data?.id, plans });
  } catch (err) {
    console.error("send-meal-plans route error:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}
