import { NextRequest, NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { listMealPlans } from "../../../../lib/mealPlans";

export const dynamic = "force-dynamic";

/**
 * Streams a meal plan PDF as an attachment so the browser shows a save prompt
 * instead of rendering it inline in a tab.
 */
export async function GET(request: NextRequest) {
  const requested = request.nextUrl.searchParams.get("file");

  if (!requested) {
    return NextResponse.json({ success: false, error: "No file requested." }, { status: 400 });
  }

  try {
    // Only ever serve a file the listing already vouched for — this is what
    // keeps "../../.env" and friends out of the response.
    const plans = await listMealPlans();
    const plan = plans.find((p) => p.file === requested);

    if (!plan) {
      return NextResponse.json({ success: false, error: "Meal plan not found." }, { status: 404 });
    }

    const file = await readFile(path.join(process.cwd(), "public", "meal-plans", plan.file));
    // Give the saved file the friendly title rather than the raw filename
    const downloadName = `${plan.title.replace(/[^\w\s-]/g, "").trim() || "meal-plan"}.pdf`;

    return new NextResponse(new Uint8Array(file), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Length": String(file.byteLength),
        "Content-Disposition": `attachment; filename="${downloadName}"; filename*=UTF-8''${encodeURIComponent(downloadName)}`,
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (err) {
    console.error("meal-plan download error:", err);
    return NextResponse.json({ success: false, error: "Could not read that meal plan." }, { status: 500 });
  }
}
