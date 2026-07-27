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
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email.trim())) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
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
          email: email.trim(),
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
          body: JSON.stringify({ email: email.trim() }),
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
    <form className={`waitlist ${className}`.trim()} onSubmit={handleSubmit}>
      <div className="waitlist-row">
        <input 
          type="email" 
          inputMode="email" 
          autoComplete="email" 
          placeholder="Enter your email"
          aria-label="Email address" 
          required 
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
        />
        <button 
          className="button button-primary" 
          type="submit" 
          disabled={status === "loading"}
        >
          {status === "loading" ? "Joining…" : buttonText} <span>↗</span>
        </button>
      </div>
      {status === "error" ? (
        <small className="waitlist-error">{errorMsg}</small>
      ) : (
        <small className="waitlist-hint">{hintText}</small>
      )}
      <small style={{ display: 'block', marginTop: '12px', fontSize: '11px', color: 'var(--muted)', opacity: 0.7 }}>
        By joining, you agree to our <a href="/privacy" style={{ textDecoration: 'underline', color: 'var(--muted)' }}>Privacy Policy</a>
      </small>
    </form>
  );
}
