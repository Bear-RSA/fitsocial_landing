import { NextResponse } from "next/server";
import { listMealPlans } from "../../../lib/mealPlans";

// The folder is read at request time so a newly uploaded PDF shows up
// without a rebuild.
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const plans = await listMealPlans();
    return NextResponse.json({ success: true, plans });
  } catch (err) {
    console.error("meal-plans route error:", err);
    return NextResponse.json(
      { success: false, error: "Could not load meal plans.", plans: [] },
      { status: 500 }
    );
  }
}
