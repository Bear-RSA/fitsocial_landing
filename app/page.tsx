"use client";

import React, { useEffect, useState } from "react";
import WaitlistForm from "../components/WaitlistForm";

export default function Page() {
  const [theme, setTheme] = useState("dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMode, setActiveMode] = useState("train");
  const [activePlan, setActivePlan] = useState("budget");

  const modes = {
    train: {
      k: "Train",
      t: "Make every session count.",
      b: "Log workouts, HYROX stations, runs, and the small wins that turn into real momentum.",
      s: ["04 workouts", "+18% progress", "07 day streak"],
      shot: "./screens/screen-session.png",
      alt: "FitSocial active workout session screen",
    },
    fuel: {
      k: "Fuel",
      t: "Eat for the life you actually live.",
      b: "Track meals and macros, build South African grocery plans, and stay consistent on a budget.",
      s: ["12 meals logged", "42g protein", "R350 weekly plan"],
      shot: "./screens/screen-meal.png",
      alt: "FitSocial meal and macro tracking screen",
    },
    connect: {
      k: "Connect",
      t: "Your people make the difference.",
      b: "Share the work, find your circle, and keep showing up with a community that gets the journey.",
      s: ["Local circles", "24 comments", "∞ encouragement"],
      shot: "./screens/screen-community.png",
      alt: "FitSocial community circles screen",
    },
  };

  const plans = {
    budget: {
      l: "Student budget",
      p: "From R350 / week",
      n: "Built for campus kitchens, shared flats, and real-life budgets.",
      i: ["Eggs", "Beans", "Rice", "Cabbage", "Chicken portions"],
    },
    working: {
      l: "Working week",
      p: "10 packed lunches",
      n: "Cook once on Sunday. Keep your week moving between meetings.",
      i: ["Chicken breast", "Sweet potato", "Spinach", "Greek yoghurt", "Fruit"],
    },
    bulk: {
      l: "Lean bulk",
      p: "High-protein surplus",
      n: "More fuel for stronger sessions, without losing the structure.",
      i: ["Lean mince", "Oats", "Eggs", "Peanut butter", "Milk"],
    },
  };

  useEffect(() => {
    // Scroll reveal
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    
    document.querySelectorAll(".reveal").forEach((el) => {
      io.observe(el);
    });

    // Theme initialization
    try {
      const storedTheme = localStorage.getItem("fs-theme") || "dark";
      setTheme(storedTheme);
      document.documentElement.dataset.theme = storedTheme;
    } catch (e) {
      document.documentElement.dataset.theme = "dark";
    }
    
    return () => {
      io.disconnect();
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    try {
      localStorage.setItem("fs-theme", nextTheme);
    } catch (e) {}
  };

  const currentMode = modes[activeMode as keyof typeof modes];
  const currentPlan = plans[activePlan as keyof typeof plans];

  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="FitSocial home">
          <img
            className="brand-mark"
            src="./fitsocial-monogram.png"
            alt=""
          />
          <span className="brand-name">
            <b>it</b>Social
          </span>
        </a>
        <div className="nav-end">
          <div className={`nav-links ${mobileMenuOpen ? "open" : ""}`}>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>How it works</a>
            <a href="#the-app" onClick={() => setMobileMenuOpen(false)}>The app</a>
            <a href="#plans" onClick={() => setMobileMenuOpen(false)}>Meal plans</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
            <a className="nav-cta" href="#waitlist" onClick={() => setMobileMenuOpen(false)}>
              Get early access <span>↗</span>
            </a>
          </div>
          <button
            className={`theme-toggle ${theme}`}
            aria-label="Toggle light or dark mode"
            title="Toggle light or dark mode"
            onClick={toggleTheme}
          >
            <div className="theme-toggle-track">
              <svg className="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
              <svg className="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </div>
            <div className="theme-toggle-thumb"></div>
          </button>
          <button
            className="menu-button"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy reveal">
          <p className="eyebrow">Now inviting founding members · South Africa</p>
          <h1>
            Your strongest routine starts <em>together.</em>
          </h1>
          <p className="hero-sub">
            FitSocial is a South African fitness app that keeps the whole
            routine in one place — log the session, sort the week&apos;s meals on a
            real budget, and share the work with people who actually show up.
            Not five apps and a spreadsheet. One daily loop that makes
            consistency feel normal.
          </p>

          <ul className="hero-pillars">
            <li>
              <b>Train</b>
              <span>Workouts, runs and HYROX stations, logged in seconds.</span>
            </li>
            <li>
              <b>Fuel</b>
              <span>Meals, macros and grocery plans priced in rands.</span>
            </li>
            <li>
              <b>Connect</b>
              <span>Circles that turn a solo streak into shared momentum.</span>
            </li>
          </ul>

          <div className="hero-actions">
            <a className="button button-primary" href="#waitlist">
              Get early access <span>↗</span>
            </a>
            <a className="button button-ghost" href="#how-it-works">
              See how it works
            </a>
          </div>
          <p className="hero-actions-hint">
            Takes 30 seconds · Be one of the first 1,000 founding members
          </p>

          <ul className="trust-row">
            <li>🇿🇦 Built in South Africa</li>
            <li>✓ Free to join</li>
            <li>✓ Android &amp; iOS at launch</li>
          </ul>
          <div className="hero-proof">
            <div className="avatar-stack">
              <i>TN</i>
              <i>LM</i>
              <i>SK</i>
              <i>+</i>
            </div>
            <span>
              Founding members joining from Jo&apos;burg, Cape Town &amp; beyond
            </span>
          </div>
        </div>
        <div className="hero-visual reveal">
          <div className="hero-orbit orbit-one"></div>
          <div className="hero-orbit orbit-two"></div>
          <div className="hero-phone">
            <img
              src="./screens/screen-home.png"
              alt="FitSocial home screen showing today's training rhythm"
            />
          </div>
          <div className="floating-card card-progress">
            <span className="mini-label">This week</span>
            <strong>04 workouts</strong>
            <small>+18% from last week</small>
            <div className="mini-bars">
              <b></b>
              <b></b>
              <b></b>
              <b></b>
              <b></b>
              <b></b>
              <b></b>
            </div>
          </div>
          <div className="floating-card card-community">
            <span className="pulse-icon">✦</span>
            <div>
              <strong>New circle unlocked</strong>
              <small>HYROX crew • 24 members</small>
            </div>
          </div>
        </div>
      </section>

      <div className="location-strip">
        <div className="location-track">
          <span>Eastern Cape</span>
          <b>✦</b>
          <span>Free State</span>
          <b>✦</b>
          <span>Gauteng</span>
          <b>✦</b>
          <span>KwaZulu-Natal</span>
          <b>✦</b>
          <span>Limpopo</span>
          <b>✦</b>
          <span>Mpumalanga</span>
          <b>✦</b>
          <span>Northern Cape</span>
          <b>✦</b>
          <span>North West</span>
          <b>✦</b>
          <span>Western Cape</span>
          <b>✦</b>
          <span>Eastern Cape</span>
          <b>✦</b>
          <span>Free State</span>
          <b>✦</b>
          <span>Gauteng</span>
        </div>
      </div>

      <section className="section shell reveal" id="how-it-works">
        <div className="section-heading">
          <p className="eyebrow">One app. One daily loop.</p>
          <h2>
            Train with intention.<br />
            <em>Fuel with confidence.</em>
          </h2>
          <p>Consistency is not a personality trait. It is a system you can return to.</p>
        </div>
        <div className="mode-tabs" role="tablist" aria-label="FitSocial pillars">
          <button
            className={activeMode === "train" ? "active" : ""}
            onClick={() => setActiveMode("train")}
          >
            <span>01</span>Train
          </button>
          <button
            className={activeMode === "fuel" ? "active" : ""}
            onClick={() => setActiveMode("fuel")}
          >
            <span>02</span>Fuel
          </button>
          <button
            className={activeMode === "connect" ? "active" : ""}
            onClick={() => setActiveMode("connect")}
          >
            <span>03</span>Connect
          </button>
        </div>
        <div className="mode-showcase">
          <div className="mode-panel">
            <div className="mode-content">
              <p className="eyebrow">{currentMode.k}</p>
              <h3>{currentMode.t}</h3>
              <p>{currentMode.b}</p>
            </div>
            <div className="mode-stats">
              {currentMode.s.map((stat, i) => (
                <div className="mode-stat" key={i}>
                  <span>0{i + 1}</span>
                  <strong>{stat}</strong>
                </div>
              ))}
            </div>
          </div>
          <div className="mode-phone" key={activeMode}>
            <img src={currentMode.shot} alt={currentMode.alt} />
          </div>
        </div>
      </section>

      <section className="split-section" id="community">
        <div className="split-image">
          <img src="./screens/screen-community.png" alt="FitSocial community circles" />
        </div>
        <div className="split-copy reveal">
          <p className="eyebrow">Built for the circle</p>
          <h2>
            Progress feels different when your people <em>see it.</em>
          </h2>
          <p>
            From your first 5K to your next HYROX station, FitSocial turns private
            effort into shared momentum.
          </p>
          <div className="quote-card">
            <span>“</span>
            <p>
              The plan is simple: log the work, fuel the next session, and show up
              for your circle. Do it on repeat and consistency stops being a struggle.
            </p>
            <small>— The FitSocial team</small>
          </div>
        </div>
      </section>

      <section className="section shell reveal" id="the-app">
        <div className="section-heading compact">
          <p className="eyebrow">See the app</p>
          <h2>
            Designed to make the next action <em>obvious.</em>
          </h2>
          <p>A calm, focused interface that turns small daily actions into a bigger picture.</p>
        </div>
        <div className="gallery-scroll">
          <figure className="gallery-item">
            <img src="./screens/screen-goal.png" alt="Set a goal that's yours" />
            <figcaption>Set a goal that&apos;s yours</figcaption>
          </figure>
          <figure className="gallery-item">
            <img src="./screens/screen-momentum.png" alt="See your weekly momentum" />
            <figcaption>See your weekly momentum</figcaption>
          </figure>
          <figure className="gallery-item">
            <img src="./screens/screen-run.png" alt="Track every kilometre" />
            <figcaption>Track every kilometre</figcaption>
          </figure>
          <figure className="gallery-item">
            <img src="./screens/screen-progress.png" alt="Watch the trend, not one day" />
            <figcaption>Watch the trend, not one day</figcaption>
          </figure>
          <figure className="gallery-item">
            <img src="./screens/screen-streak.png" alt="Keep your streak alive" />
            <figcaption>Keep your streak alive</figcaption>
          </figure>
        </div>
      </section>

      <section className="section shell reveal" id="plans">
        <div className="section-heading compact">
          <p className="eyebrow">Fuel without the guesswork</p>
          <h2>
            Plans that fit your <em>real life.</em>
          </h2>
          <p>Choose your rhythm. Get a grocery list, a prep flow, and a reason to keep going.</p>
        </div>
        <div className="plan-switcher">
          <div className="plan-buttons">
            <button
              className={activePlan === "budget" ? "active" : ""}
              onClick={() => setActivePlan("budget")}
            >
              Student budget
            </button>
            <button
              className={activePlan === "working" ? "active" : ""}
              onClick={() => setActivePlan("working")}
            >
              Working week
            </button>
            <button
              className={activePlan === "bulk" ? "active" : ""}
              onClick={() => setActivePlan("bulk")}
            >
              Lean bulk
            </button>
          </div>
          <div className="plan-card">
            <div className="plan-card-header">
              <div>
                <p className="eyebrow">{currentPlan.l}</p>
                <h3>{currentPlan.p}</h3>
              </div>
              <span className="plan-ring">✓</span>
            </div>
            <p>{currentPlan.n}</p>
            <div className="grocery-grid">
              {currentPlan.i.map((item, i) => (
                <span key={i}>+ {item}</span>
              ))}
            </div>
            <a className="button button-primary" href="#waitlist">
              Get this in the app <span>↗</span>
            </a>
          </div>
        </div>
        <div className="meal-prep reveal">
          <div className="meal-prep-head">
            <p className="eyebrow">Prepped for the week</p>
            <h3>
              Real South African meals, <em>ready to fuel you.</em>
            </h3>
            <span>Swipe the pack →</span>
          </div>
          <div className="meal-scroll">
            <figure className="meal-card">
              <img
                src="./meals/meal-chicken-bowl.jpg"
                alt="Chicken, brown rice and roast veg meal-prep bowl — 520 kcal, 45g protein"
                loading="lazy"
              />
            </figure>
            <figure className="meal-card">
              <img
                src="./meals/meal-chicken-livers.jpg"
                alt="Peri-peri chicken livers and rice — 400 kcal, 34g protein, budget fuel"
                loading="lazy"
              />
            </figure>
            <figure className="meal-card">
              <img
                src="./meals/meal-butternut-curry.jpg"
                alt="Chicken and butternut curry with rice — 430 kcal, 34g protein"
                loading="lazy"
              />
            </figure>
            <figure className="meal-card">
              <img
                src="./meals/meal-peri-sweet-potato.jpg"
                alt="Peri-peri chicken with sweet potato and beans — 480 kcal, 38g protein"
                loading="lazy"
              />
            </figure>
            <figure className="meal-card">
              <img
                src="./meals/meal-bolognese.jpg"
                alt="Beef and veg bolognese — 540 kcal, 34g protein"
                loading="lazy"
              />
            </figure>
            <figure className="meal-card">
              <img
                src="./meals/meal-overnight-oats.jpg"
                alt="Peanut butter and banana overnight oats — 420 kcal, 16g protein"
                loading="lazy"
              />
            </figure>
            <figure className="meal-card">
              <img
                src="./meals/meal-yoghurt-bowl.jpg"
                alt="Greek yoghurt, berries and nuts — 230 kcal, 18g protein snack"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="loop-section shell reveal">
        <div className="loop-intro">
          <p className="eyebrow">The FitSocial loop</p>
          <h2>
            Small actions.<br />
            <em>Stronger identity.</em>
          </h2>
        </div>
        <div className="loop-steps">
          <div className="loop-line"></div>
          <article>
            <span>01</span>
            <strong>Log</strong>
            <p>Capture the workout while the win is fresh.</p>
          </article>
          <article>
            <span>02</span>
            <strong>Fuel</strong>
            <p>Make the next meal support the next session.</p>
          </article>
          <article>
            <span>03</span>
            <strong>Share</strong>
            <p>Let your circle turn effort into momentum.</p>
          </article>
          <article>
            <span>04</span>
            <strong>Repeat</strong>
            <p>Come back tomorrow with more confidence.</p>
          </article>
        </div>
      </section>

      <section className="section shell reveal" id="founding">
        <div className="section-heading compact">
          <p className="eyebrow">Why join now</p>
          <h2>
            Founding members get <em>more.</em>
          </h2>
          <p>
            The people who join before launch don&apos;t just get in early — they help
            build it.
          </p>
        </div>
        <div className="benefit-grid">
          <article className="benefit-card">
            <span className="benefit-icon">⚡</span>
            <strong>Early access</strong>
            <p>
              Skip the public queue and start training on FitSocial before it
              launches.
            </p>
          </article>
          <article className="benefit-card">
            <span className="benefit-icon">🔒</span>
            <strong>Founding pricing</strong>
            <p>
              Lock in founder pricing that never goes up. Core logging stays free,
              always.
            </p>
          </article>
          <article className="benefit-card">
            <span className="benefit-icon">🧭</span>
            <strong>Shape the app</strong>
            <p>
              Your feedback sets the roadmap. Founding members are built into the
              product.
            </p>
          </article>
          <article className="benefit-card">
            <span className="benefit-icon">★</span>
            <strong>Founding badge</strong>
            <p>
              A permanent founding-member mark on your profile and every circle
              you join.
            </p>
          </article>
        </div>
      </section>

      <section className="section shell reveal" id="faq">
        <div className="section-heading compact">
          <p className="eyebrow">Good to know</p>
          <h2>
            Questions, <em>answered.</em>
          </h2>
        </div>
        <div className="faq-list">
          <details className="faq-item">
            <summary>
              When does FitSocial launch?<span className="faq-plus">+</span>
            </summary>
            <p>
              We&apos;re rolling out to founding members in South Africa first, then
              opening to everyone. Join the waitlist to get your early-access
              invite before the public launch.
            </p>
          </details>
          <details className="faq-item">
            <summary>
              How much does it cost?<span className="faq-plus">+</span>
            </summary>
            <p>
              Founding members get free early access and locked-in founding
              pricing. Core logging — train, fuel, and community — will always
              have a free tier.
            </p>
          </details>
          <details className="faq-item">
            <summary>
              iOS or Android?<span className="faq-plus">+</span>
            </summary>
            <p>
              Both. FitSocial ships on Android and iOS at launch. Join the
              waitlist and we&apos;ll make sure your invite is ready for your device.
            </p>
          </details>
          <details className="faq-item">
            <summary>
              Is it only for South Africa?<span className="faq-plus">+</span>
            </summary>
            <p>
              FitSocial is built for South Africa first — local grocery plans,
              rand budgets, and local circles — but anyone can train, fuel, and
              grow with it.
            </p>
          </details>
          <details className="faq-item">
            <summary>
              Do I need a gym?<span className="faq-plus">+</span>
            </summary>
            <p>
              No. Home, gym, road, or HYROX — log workouts and runs wherever you
              train. FitSocial fits your life, not the other way around.
            </p>
          </details>
        </div>
      </section>

      <section className="download-section shell" id="waitlist">
        <div className="download-card reveal">
          <div className="download-copy">
            <p className="eyebrow">Last step · Founding members, South Africa</p>
            <h2>
              You&apos;ve seen the app.<br />
              Now <em>claim your spot.</em>
            </h2>
            <p>
              Founding members skip the public queue, keep founder pricing for
              good, and help decide what gets built next. Thirty seconds and
              you&apos;re in.
            </p>
          </div>

          <div className="download-form">
            <WaitlistForm
              hintText="Free to join · No spam · Unsubscribe anytime"
            />
          </div>

          <div className="download-extras">
            <ol className="cta-steps">
              <li>
                <span className="cta-step-num">01</span>
                <div>
                  <strong>Drop your details</strong>
                  <small>Your name, the email on your Spotify, and a WhatsApp number.</small>
                </div>
              </li>
              <li>
                <span className="cta-step-num">02</span>
                <div>
                  <strong>We hold your spot</strong>
                  <small>A confirmation lands in your inbox the moment you join.</small>
                </div>
              </li>
              <li>
                <span className="cta-step-num">03</span>
                <div>
                  <strong>You train first</strong>
                  <small>Your invite arrives with a download link that works on your phone.</small>
                </div>
              </li>
            </ol>

            <ul className="cta-chips">
              <li>Free to join</li>
              <li>Founder pricing, locked</li>
              <li>Android &amp; iOS</li>
              <li>No spam, ever</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <a className="brand" href="#top">
          <img
            className="brand-mark"
            src="./fitsocial-monogram.png"
            alt=""
          />
          <span className="brand-name">
            <b>it</b>Social
          </span>
        </a>
        <span>Train. Fuel. Share. Grow.</span>
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <span className="footer-dot">·</span>
          <a href="/terms">Terms & Conditions</a>
        </div>
        <span>© 2026 FitSocial</span>
      </footer>

      <div className="sticky-cta">
        <div>
          <strong>Get early access</strong>
          <small>Free · Founding members first</small>
        </div>
        <a className="button button-primary" href="#waitlist">
          Join <span>↗</span>
        </a>
      </div>
    </main>
  );
}
