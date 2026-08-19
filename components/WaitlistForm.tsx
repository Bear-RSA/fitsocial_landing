"use client";

import React, { useState } from 'react';

interface WaitlistFormProps {
  className?: string;
  hintText?: string;
  buttonText?: string;
}

export default function WaitlistForm({
  className = "",
  hintText = "Be one of the first 1,000 founding members",
  buttonText = "Get early access"
}: WaitlistFormProps) {
  const [name, setName] = useState("");
  const [spotifyEmail, setSpotifyEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [hasAndroid, setHasAndroid] = useState<"" | "yes" | "no">("");
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

    if (hasAndroid !== "yes" && hasAndroid !== "no") {
      setStatus("error");
      setErrorMsg("Please let us know if you have an Android phone.");
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
          android_phone: hasAndroid === "yes" ? "Yes" : "No",
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
        <p>Watch your inbox — founding members get in first and help shape the app.</p>
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

        <div className="waitlist-field" role="radiogroup" aria-labelledby="waitlist-android-label">
          <span className="waitlist-label" id="waitlist-android-label">Do you have an Android phone?</span>
          <small className="waitlist-field-hint">The beta launches on Android first — this tells us whether you can test it right away.</small>
          <div className="waitlist-toggle">
            {([["yes", "Yes"], ["no", "No"]] as const).map(([value, label]) => (
              <div className="waitlist-toggle-option" key={value}>
                <input
                  id={`waitlist-android-${value}`}
                  type="radio"
                  name="android_phone"
                  value={value}
                  checked={hasAndroid === value}
                  onChange={() => { setHasAndroid(value); clearError(); }}
                />
                <label className="waitlist-toggle-label" htmlFor={`waitlist-android-${value}`}>
                  {label}
                </label>
              </div>
            ))}
          </div>
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
