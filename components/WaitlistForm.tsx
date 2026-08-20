"use client";

import React, { useState } from 'react';

interface WaitlistFormProps {
  className?: string;
  hintText?: string;
  buttonText?: string;
}

const AppleIcon = (
  <svg className="waitlist-toggle-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
    <path d="M16.37 12.77c.02-2.2 1.8-3.26 1.88-3.31-1.03-1.5-2.62-1.71-3.19-1.73-1.36-.14-2.65.8-3.34.8-.69 0-1.75-.78-2.87-.76-1.48.02-2.84.86-3.6 2.18-1.53 2.66-.39 6.6 1.1 8.76.73 1.06 1.6 2.25 2.75 2.2 1.1-.04 1.52-.71 2.85-.71 1.33 0 1.71.71 2.87.69 1.19-.02 1.94-1.08 2.66-2.14.84-1.23 1.19-2.42 1.21-2.48-.03-.01-2.32-.89-2.34-3.5zM14.2 6.3c.6-.74 1.01-1.76.9-2.78-.87.04-1.93.58-2.56 1.31-.56.65-1.05 1.69-.92 2.69.97.07 1.96-.49 2.58-1.22z" />
  </svg>
);

const AndroidIcon = (
  <svg className="waitlist-toggle-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
    <path d="M17.6 9.48l1.84-3.18a.4.4 0 0 0-.7-.4l-1.86 3.22a11.3 11.3 0 0 0-8.76 0L6.26 5.9a.4.4 0 1 0-.7.4L7.4 9.48A10.2 10.2 0 0 0 2 17.5h20a10.2 10.2 0 0 0-4.4-8.02zM7.05 14.63a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm9.9 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
  </svg>
);

const PLATFORMS = [
  { value: "ios" as const, label: "iPhone", icon: AppleIcon },
  { value: "android" as const, label: "Android", icon: AndroidIcon },
];

export default function WaitlistForm({
  className = "",
  hintText = "Be one of the first 1,000 founding members",
  buttonText = "Get early access"
}: WaitlistFormProps) {
  const [name, setName] = useState("");
  const [spotifyEmail, setSpotifyEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [platform, setPlatform] = useState<"" | "ios" | "android">("");
  const [wantsMealPlans, setWantsMealPlans] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const clearError = () => {
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = spotifyEmail.trim();
    const trimmedWhatsapp = whatsapp.trim();

    // Validation
    if (!trimmedName) {
      setStatus("error");
      setErrorMsg("Please enter your name.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setStatus("error");
      setErrorMsg("Please enter a valid Spotify email address.");
      return;
    }

    const phoneRegex = /^\+?[0-9\s\-()]{7,20}$/;
    if (!phoneRegex.test(trimmedWhatsapp)) {
      setStatus("error");
      setErrorMsg("Please enter a valid WhatsApp number.");
      return;
    }

    if (platform !== "ios" && platform !== "android") {
      setStatus("error");
      setErrorMsg("Please pick the phone you use.");
      return;
    }

    setStatus("loading");

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

      if (!accessKey) {
        throw new Error("Web3Forms access key is not configured.");
      }

      // Step 1: Submit to Web3Forms (primary — records the signup)
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: trimmedName,
          email: trimmedEmail,
          whatsapp: trimmedWhatsapp,
          platform: platform === "ios" ? "iOS" : "Android",
          meal_plans: wantsMealPlans ? "Yes — send meal plans" : "No",
          subject: "New FitSocial Waitlist Signup",
        }),
      });

      const data = await response.json();

      if (!data.success) {
        console.error("Web3Forms error:", data);
        setStatus("error");
        setErrorMsg(data.message || "Submission failed. Please try again.");
        return;
      }

      // Step 2: Send branded welcome email via Resend (non-blocking for UX)
      try {
        await fetch("/api/send-welcome", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: trimmedName, email: trimmedEmail }),
        });
      } catch (emailErr) {
        // Log but do NOT block the user — they're already on the waitlist
        console.error("Welcome email failed (non-blocking):", emailErr);
      }

      // Step 3: If they ticked the box, send the meal plan PDFs too (non-blocking)
      if (wantsMealPlans) {
        try {
          await fetch("/api/send-meal-plans", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: trimmedName, email: trimmedEmail }),
          });
        } catch (mealErr) {
          console.error("Meal plan email failed (non-blocking):", mealErr);
        }
      }

      setStatus("success");
    } catch (err) {
      console.error("Waitlist submission error:", err);
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className={`waitlist waitlist-success ${className}`.trim()}>
        <span className="waitlist-check">✓</span>
        <strong>Thank you for your interest, you've been added to the waitlist of the Beta Testing Version of Fitsocial</strong>
        <p>
          {wantsMealPlans
            ? "Your meal plan PDFs are on their way too — check your inbox. Founding members get in first and help shape the app."
            : "Watch your inbox — founding members get in first and help shape the app."}
        </p>
        <a className="text-link" href="#top">Back to top <span>↗</span></a>
      </div>
    );
  }

  return (
    <form className={`waitlist waitlist-stacked ${className}`.trim()} onSubmit={handleSubmit}>
      <div className="waitlist-fields">
        <div className="waitlist-field">
          <label htmlFor="waitlist-name" className="waitlist-label">Name</label>
          <input
            id="waitlist-name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            aria-label="Full name"
            required
            value={name}
            onChange={(e) => { setName(e.target.value); clearError(); }}
          />
        </div>

        <div className="waitlist-field">
          <label htmlFor="waitlist-email" className="waitlist-label">Spotify Email</label>
          <small className="waitlist-field-hint">Enter the email linked to your Spotify account — we'll use it to connect your music to your FitSocial experience.</small>
          <input
            id="waitlist-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="e.g. yourname@gmail.com"
            aria-label="Email address linked to your Spotify account"
            required
            value={spotifyEmail}
            onChange={(e) => { setSpotifyEmail(e.target.value); clearError(); }}
          />
        </div>

        <div className="waitlist-field">
          <label htmlFor="waitlist-whatsapp" className="waitlist-label">WhatsApp Number</label>
          <input
            id="waitlist-whatsapp"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+27 61 234 5678"
            aria-label="WhatsApp phone number"
            required
            value={whatsapp}
            onChange={(e) => { setWhatsapp(e.target.value); clearError(); }}
          />
        </div>

        <div className="waitlist-field" role="radiogroup" aria-labelledby="waitlist-platform-label">
          <span className="waitlist-label" id="waitlist-platform-label">Which phone do you use?</span>
          <small className="waitlist-field-hint">So your invite lands with a download link that actually works on your phone.</small>
          <div className="waitlist-toggle waitlist-toggle-platform">
            {PLATFORMS.map(({ value, label, icon }) => (
              <div className="waitlist-toggle-option" key={value}>
                <input
                  id={`waitlist-platform-${value}`}
                  type="radio"
                  name="platform"
                  value={value}
                  checked={platform === value}
                  onChange={() => { setPlatform(value); clearError(); }}
                />
                <label className="waitlist-toggle-label" htmlFor={`waitlist-platform-${value}`}>
                  {icon}
                  <span className="waitlist-toggle-text">{label}</span>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="waitlist-field waitlist-optin">
          <input
            id="waitlist-meal-plans"
            type="checkbox"
            checked={wantsMealPlans}
            onChange={(e) => { setWantsMealPlans(e.target.checked); clearError(); }}
          />
          <label htmlFor="waitlist-meal-plans">
            <span className="waitlist-optin-box" aria-hidden="true">✓</span>
            <span className="waitlist-optin-text">
              <strong>Click here if you&apos;re interested in free meal plans</strong>
              <small>Real South African meals, priced in rands.</small>
            </span>
          </label>
        </div>
      </div>

      <button
        className="button button-primary waitlist-submit"
        type="submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Joining…" : buttonText} <span>↗</span>
      </button>

      {status === "error" ? (
        <small className="waitlist-error">{errorMsg}</small>
      ) : (
        <small className="waitlist-hint">{hintText}</small>
      )}
      <small style={{ display: 'block', marginTop: '12px', fontSize: '11px', color: 'var(--muted)', opacity: 0.7 }}>
        By joining, you agree to our <a href="/privacy" style={{ textDecoration: 'underline', color: 'var(--muted)' }}>Privacy Policy</a> and <a href="/terms" style={{ textDecoration: 'underline', color: 'var(--muted)' }}>Terms &amp; Conditions</a>
      </small>
    </form>
  );
}
