"use client";

import React, { useEffect, useRef, useState } from "react";

interface MealPlanFile {
  file: string;
  url: string;
  downloadUrl: string;
  title: string;
  size: string;
}

const PlanIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
    <path d="M14 3v5h5" />
    <path d="M9 13h6" />
    <path d="M9 17h4" />
  </svg>
);

const DownloadIcon = (
  <svg className="mealplan-download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <path d="M12 3v12" />
    <path d="m7 11 5 5 5-5" />
    <path d="M4 20h16" />
  </svg>
);

export default function MealPlanDownload() {
  const [plans, setPlans] = useState<MealPlanFile[]>([]);
  const [plansLoaded, setPlansLoaded] = useState(false);
  const [open, setOpen] = useState(false);
  const [saved, setSaved] = useState<string[]>([]);
  const dialogRef = useRef<HTMLDialogElement>(null);

  // The PDF list is owned by the public/meal-plans folder, so read it at runtime
  useEffect(() => {
    let cancelled = false;

    fetch("/api/meal-plans")
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return;
        setPlans(Array.isArray(data.plans) ? data.plans : []);
        setPlansLoaded(true);
      })
      .catch((err) => {
        console.error("Could not load meal plans:", err);
        if (!cancelled) setPlansLoaded(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  // showModal() gives us the top layer, a real focus trap and Escape for free
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else if (!open && dialog.open) {
      dialog.close();
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleDownload = (file: string) => {
    setSaved((prev) => (prev.includes(file) ? prev : [...prev, file]));
  };

  // A click that lands on the dialog itself (not its content) is a backdrop click
  const handleDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) setOpen(false);
  };

  // Closing via state alone is too late: the browser follows the #waitlist hash
  // while the body scroll lock is still on, so the page never moves. Tear the
  // modal down synchronously first, then scroll.
  const goToWaitlist = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setOpen(false);
    dialogRef.current?.close();
    document.body.style.overflow = "";
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Nothing uploaded yet — say so instead of handing over a dead button
  if (plansLoaded && plans.length === 0) {
    return (
      <div className="mealplan-cta">
        <p className="mealplan-empty">Meal plan PDFs are on the way — join the waitlist and we&apos;ll send them through.</p>
        <a className="button button-ghost" href="#waitlist">
          Join the waitlist <span>↗</span>
        </a>
      </div>
    );
  }

  return (
    <>
      <div className="mealplan-cta">
        <button className="button button-primary" type="button" onClick={() => setOpen(true)}>
          Download the meal plans <span>↗</span>
        </button>
        <small className="mealplan-hint">
          {plansLoaded
            ? `${plans.length} free PDF${plans.length === 1 ? "" : "s"} — pick the ones you want.`
            : "Free PDFs — pick the ones you want."}
        </small>
      </div>

      <dialog
        className="mealplan-modal"
        ref={dialogRef}
        onClose={() => setOpen(false)}
        onClick={handleDialogClick}
        aria-labelledby="mealplan-modal-title"
      >
        <div className="mealplan-modal-inner">
          <button
            className="mealplan-modal-close"
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            ×
          </button>

          <div className="mealplan-modal-head">
            <span className="mealplan-modal-badge" aria-hidden="true">{PlanIcon}</span>
            <p className="eyebrow">Free download</p>
            <h3 id="mealplan-modal-title">Which plans do you want?</h3>
            <p className="mealplan-modal-sub">Tap any plan to save the PDF to your device — take as many as you like.</p>
          </div>

          <div className="mealplan-list-wrap">
            <div className="mealplan-list">
              {plans.map((plan) => (
                <a
                  className={`mealplan-item${saved.includes(plan.file) ? " is-saved" : ""}`}
                  key={plan.file}
                  href={plan.downloadUrl}
                  download
                  onClick={() => handleDownload(plan.file)}
                >
                  <span className="mealplan-item-chip" aria-hidden="true">{PlanIcon}</span>
                  <span className="mealplan-item-text">
                    <strong>{plan.title}</strong>
                    <small>PDF{plan.size ? ` · ${plan.size}` : ""}</small>
                  </span>
                  <span className="mealplan-item-action">
                    {saved.includes(plan.file) ? (
                      <span className="mealplan-saved">Saved ✓</span>
                    ) : (
                      DownloadIcon
                    )}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <p className="mealplan-modal-foot">
            Want them in your inbox instead?{" "}
            <a href="#waitlist" onClick={goToWaitlist}>Join the waitlist</a> and tick the meal plans box.
          </p>
        </div>
      </dialog>
    </>
  );
}
