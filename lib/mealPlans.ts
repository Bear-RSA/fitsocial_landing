import { readdir, stat } from "node:fs/promises";
import path from "node:path";

export interface MealPlanFile {
  /** Raw filename on disk, e.g. "01-student-budget.pdf" */
  file: string;
  /** Public URL path, encoded so spaces and symbols survive, e.g. "/meal-plans/01-student-budget.pdf" */
  url: string;
  /** Route that forces a browser save prompt instead of opening the PDF inline */
  downloadUrl: string;
  /** Human title derived from the filename, e.g. "Student Budget" */
  title: string;
  /** Human-readable size, e.g. "1.4 MB" */
  size: string;
}

const MEAL_PLANS_DIR = path.join(process.cwd(), "public", "meal-plans");

function titleFromFilename(file: string): string {
  return file
    .replace(/\.pdf$/i, "")
    // Drop an ordering prefix like "01-", "2_" or "3 "
    .replace(/^\d+\s*[-_.)]?\s*/, "")
    .replace(/[-_]+/g, " ")
    // The whole site is already FitSocial — the brand prefix is noise in a title
    .replace(/^fitsocial\s*/i, "")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function formatSize(bytes: number): string {
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  return `${Math.max(1, Math.round(bytes / 1024))} KB`;
}

/**
 * Reads every PDF sitting in public/meal-plans. The folder is the source of
 * truth — adding a PDF there is all it takes to publish a new plan.
 */
export async function listMealPlans(): Promise<MealPlanFile[]> {
  let entries: string[];

  try {
    entries = await readdir(MEAL_PLANS_DIR);
  } catch {
    // Folder missing (or unreadable) — treat as "no plans published yet"
    return [];
  }

  const pdfs = entries
    .filter((file) => file.toLowerCase().endsWith(".pdf"))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));

  const plans = await Promise.all(
    pdfs.map(async (file) => {
      let size = "";
      try {
        size = formatSize((await stat(path.join(MEAL_PLANS_DIR, file))).size);
      } catch {
        // Size is decoration only — a plan with an unreadable stat still downloads
      }
      return {
        file,
        url: `/meal-plans/${encodeURIComponent(file)}`,
        downloadUrl: `/api/meal-plans/download?file=${encodeURIComponent(file)}`,
        title: titleFromFilename(file),
        size,
      };
    })
  );

  return plans;
}

/** Absolute origin for links that must survive inside an email client. */
export function resolveOrigin(request: Request): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured) return configured.replace(/\/+$/, "");

  const host = request.headers.get("x-forwarded-host") || request.headers.get("host");
  const proto = request.headers.get("x-forwarded-proto") || (host?.startsWith("localhost") ? "http" : "https");

  return host ? `${proto}://${host}` : "";
}
