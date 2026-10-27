import React from 'react';
import Link from 'next/link';

const h3: React.CSSProperties = { color: 'var(--white)', fontSize: '24px', letterSpacing: '-1px', marginTop: '40px', marginBottom: '16px', scrollMarginTop: '100px' };
const h4: React.CSSProperties = { color: 'var(--white)', fontSize: '18px', marginTop: '32px', marginBottom: '12px' };
const hr: React.CSSProperties = { border: 'none', borderTop: '1px solid var(--stroke)', margin: '40px 0' };
const link: React.CSSProperties = { color: 'var(--orange)', textDecoration: 'none' };
const li: React.CSSProperties = { marginBottom: '8px' };
const th: React.CSSProperties = { padding: '12px 16px', color: 'var(--white)', fontWeight: '600' };
const td: React.CSSProperties = { padding: '12px 16px', verticalAlign: 'top' };
const callout: React.CSSProperties = { border: '1px solid var(--stroke)', borderRadius: '12px', backgroundColor: 'var(--surface)', padding: '16px 20px', margin: '24px 0' };

const Mail = () => <a href="mailto:info@miraistack.co.za" style={link}>info@miraistack.co.za</a>;

function DataTable({ head, rows }: { head: [string, string]; rows: [React.ReactNode, React.ReactNode][] }) {
  return (
    <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', border: '1px solid var(--stroke)' }}>
        <thead>
          <tr style={{ backgroundColor: 'var(--surface)', borderBottom: '1px solid var(--stroke)' }}>
            <th style={{ ...th, width: '38%' }}>{head[0]}</th>
            <th style={th}>{head[1]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([a, b], i) => (
            <tr key={i} style={i < rows.length - 1 ? { borderBottom: '1px solid var(--stroke)' } : undefined}>
              <td style={td}>{a}</td>
              <td style={td}>{b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function AppPrivacyPolicy() {
  return (
    <main>
      <section className="section shell" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <div className="section-heading" style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', letterSpacing: '-2px', marginBottom: '16px' }}>FitSocial App — Privacy Policy</h1>
          <p style={{ color: 'var(--muted)', margin: '0' }}><strong>Last Updated:</strong> 27 October 2026</p>
        </div>

        <div style={{ maxWidth: '720px', lineHeight: '1.7', fontSize: '16px', color: 'var(--muted)' }}>
          <p>
            This policy covers the FitSocial mobile application. For how we handle data collected through this website and the waitlist, see our{' '}
            <Link href="/privacy" style={link}>Website Privacy Policy</Link>.
          </p>
          <p>
            FitSocial is a fitness social app. This policy explains what we collect, why we collect it, who else sees it, and how to get rid of it. It is written to be read rather than to be survived, and it describes what the app actually does today.
          </p>

          <div style={callout}>
            <p style={{ margin: 0 }}>
              <strong style={{ color: 'var(--white)' }}>The short version.</strong> Your account, your training history and your photos are stored in Google Firebase. Meal photos you choose to analyse are sent to an AI provider to be identified. Your location leaves the app in three cases: to fetch weather, to draw the map of a run you recorded, and to show your position to your safety contacts when you raise a panic alert or share your location. We do not sell your data, and we do not run ads. You can delete everything from inside the app, permanently.
            </p>
          </div>

          <hr style={hr} />

          <h3 style={h3}>1. Who We Are</h3>
          <p>
            FitSocial is built and operated from South Africa. For the purposes of the Protection of Personal Information Act (POPIA), we are the responsible party for the personal information described here. Questions, requests and complaints go to <Mail />.
          </p>

          <hr style={hr} />

          <h3 style={h3}>2. What We Collect</h3>

          <h4 style={h4}>Things you give us</h4>
          <DataTable
            head={['Data', 'Why']}
            rows={[
              ['Email address and password', 'To create and secure your account. Passwords are handled by Firebase Authentication and are never visible to us.'],
              ['Your Google or Apple account details, if you sign in with Google or Apple', 'Google shares your name, email address and profile photo. Apple shares your name and either your email address or a private relay address, if you chose to hide your email. We use these only to create and sign in to your account.'],
              ['Username, display name, bio, pronouns, links, location text, profile photo', 'Your public profile. Anyone signed in to FitSocial can see these. You can sign in with your username or your email address.'],
              ['Height, weight, weigh-in history, age and sex', 'To calculate your BMI and your daily calorie and macro targets. Stored privately: no other user can read them.'],
              ['Your goal, plan and training days per week, chosen at sign-up or later on Goals', 'To build your plan and track your training-days goal. Stored privately.'],
              ['Posts, Pulses, Notes, comments, reactions, likes, and who you follow', 'The social features of the app.'],
              ['Safety contacts: other FitSocial users, or the email address of someone who is not on FitSocial', <>To alert them if you raise a panic alert. See <a href="#safety" style={link}>Safety and Live Location</a> below.</>],
            ]}
          />

          <h4 style={h4}>Things your training generates</h4>
          <DataTable
            head={['Data', 'Why']}
            rows={[
              [<><strong>GPS route, distance, pace and elevation</strong> during a tracked run or ride</>, 'To record the activity and draw its map. Routes are readable only by you; an activity you share to the feed publishes its summary figures and the map you choose to show.'],
              ['Step count, cadence and motion sensor readings', 'To count steps, tell walking from running, and score step-based challenges.'],
              ['Heart rate, from a connected Bluetooth monitor, Health Connect (Android) or Apple Health (iOS)', 'To show live heart rate during a session and store it with the workout.'],
              ['Health Connect or Apple Health data you grant: steps, heart rate, sleep, active energy, distance, workouts', 'Read only when you connect it, and only to display and import your activity in the app. Never written back, never shared.'],
              ['Workouts, exercises, sets, reps, weights, routines and custom exercises', 'Your training log, your records and the muscle statistics built from them.'],
              ['Meals, photos of meals, and the macros derived from them', <>Your food diary. See <a href="#ai" style={link}>Meal Photos and AI</a> below.</>],
              ['Challenge and race progress, points, streaks, milestones and badges', 'To run the challenges and races you enter and place you on their leaderboards.'],
            ]}
          />

          <h4 style={h4}>Things collected automatically</h4>
          <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
            <li style={li}><strong>Crash reports.</strong> When the app crashes, Firebase Crashlytics receives a stack trace, your device model, OS version and app version, tagged with your account identifier: a random id, not your email or your name. This is how a crash gets fixed.</li>
            <li style={li}><strong>Usage analytics.</strong> Firebase Analytics records which screens are opened and which features are used, including the steps of sign-up, so we know what to build and what to remove.</li>
            <li style={li}><strong>Push notification token.</strong> If you allow notifications, Firebase Cloud Messaging gives your device a token that we store so we can send you notifications: likes, comments, follows, milestones, challenge invites and safety alerts. You can turn notifications off in your phone&apos;s settings.</li>
            <li style={li}><strong>Approximate location for weather.</strong> Your coordinates are sent to Open-Meteo to fetch the forecast shown in the app. Open-Meteo receives coordinates and nothing else: no account, no name, no device id.</li>
          </ul>

          <h4 style={h4}>Music (Android only)</h4>
          <p>
            If you give FitSocial notification access on Android, the app can see what is currently playing in your music app (for example Spotify or YouTube Music) so it can show the track and its controls during a workout. This is read on your phone only. It is not stored on our servers and not shared. On iOS, FitSocial has no music feature.
          </p>

          <hr style={hr} />

          <h3 id="ai" style={h3}>3. Meal Photos and AI</h3>
          <p>
            This one deserves saying plainly. When you photograph a meal and ask FitSocial to analyse it, the photo is uploaded to our storage and its address is passed to <strong>OpenRouter</strong>, which routes it to a vision model to identify the food and estimate its macros. The photo therefore leaves our systems and reaches a third-party AI provider.
          </p>
          <p>
            Only photos you actively submit for analysis go through this. A meal you log by hand never does. Deleting the meal deletes the photo from our storage; it does not oblige a third-party provider to delete copies made under its own retention policy, and we cannot promise on their behalf.
          </p>
          <p>Food names may also be looked up against the USDA FoodData Central database. That request carries the food name only.</p>
          <p>
            <strong>Weekly Insights.</strong> FitSocial may write you a short summary of your past week. To do this, totals from your week (such as workouts, steps and how often you logged meals) are sent through OpenRouter to an AI model. The model receives numbers only: never your name, email, account id, photos, location, or anything you typed.
          </p>

          <hr style={hr} />

          <h3 id="safety" style={h3}>4. Safety and Live Location</h3>
          <p>FitSocial lets you choose up to <strong>three safety contacts</strong>, who can be alerted if you are in trouble during a run or ride.</p>
          <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
            <li style={li}><strong>A contact can be a FitSocial user or an email address.</strong> A FitSocial user must accept your invitation. Someone who is not on FitSocial receives one confirmation email and must confirm on a web page before they can receive any alert. Until they confirm, they receive nothing else from us.</li>
            <li style={li}><strong>A panic alert</strong> sends your live location to your accepted contacts only, and to no one else. FitSocial contacts receive a high-priority push notification. Email contacts receive an email containing a private link that shows your position on a map in their browser, with no app or account needed.</li>
            <li style={li}><strong>The private link works only while the alert is open.</strong> Once you end the alert, the link shows nothing.</li>
            <li style={li}><strong>Location sharing</strong> lets you share your live position with your safety contacts for a set time, up to four hours. When the share ends, your stored position is deleted.</li>
            <li style={li}>Contacts can tap &quot;I&apos;m on my way&quot;, and you see who has responded.</li>
            <li style={li}>You can remove a safety contact at any time, and a contact can remove themselves.</li>
          </ul>
          <p>
            When you add someone&apos;s email address as a safety contact, you are giving us their personal information. Please only add people who would expect to hear from you in an emergency. We use their email address only to send the confirmation and any alerts, and we never market to them.
          </p>
          <p>Safety emails are sent through <strong>Resend</strong>. The map on the browser page is drawn with tiles from <strong>OpenStreetMap</strong>.</p>

          <hr style={hr} />

          <h3 style={h3}>5. Who Else Sees Your Data</h3>
          <DataTable
            head={['Who', 'What they get']}
            rows={[
              ['Google Firebase (Authentication, Firestore, Storage, Cloud Functions, Cloud Messaging, Remote Config, Analytics, Crashlytics)', <>Effectively everything. Firebase is where FitSocial runs. Our database and server functions are hosted in Johannesburg (<code>africa-south1</code>); a few scheduled maintenance and safety jobs run in the United States.</>],
              ['Google and Apple', 'If you sign in with them: the fact that you signed in to FitSocial.'],
              ['Google Maps', 'The coordinates needed to render the map behind a run or ride.'],
              ['OpenRouter and its model providers', 'Meal photos you submit for analysis, and the weekly totals used for Weekly Insights.'],
              ['Open-Meteo', 'Coordinates, to return a forecast.'],
              ['Resend', "Your safety contacts' email addresses and the safety emails sent to them."],
              ['OpenStreetMap', 'Map tiles requested by the browser page an email safety contact opens during an alert.'],
              ['Your safety contacts', 'Your name and live location, only during a panic alert or a location share you start.'],
              ['Other FitSocial users', 'Your profile, your posts, Pulses and Notes (Pulses and Notes go to your followers), your comments, reactions and likes, your challenge and leaderboard standing, and anything you choose to share.'],
            ]}
          />
          <p>
            <strong>We do not sell your personal information, and we do not share it with advertisers.</strong> There is no advertising in FitSocial.
          </p>

          <hr style={hr} />

          <h3 style={h3}>6. What Stays Private</h3>
          <p>Some things are never visible to other users, no matter what:</p>
          <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
            <li style={li}>Your email address and password</li>
            <li style={li}>Your height, weight, weigh-in history, age, sex and BMI</li>
            <li style={li}>Your goal, plan and calorie targets</li>
            <li style={li}>Your GPS routes, unless you share the activity</li>
            <li style={li}>Your full food diary and its photos</li>
            <li style={li}>Your unshared workouts, runs and rides</li>
            <li style={li}>Your Health Connect or Apple Health data</li>
            <li style={li}>Your Weekly Insights</li>
            <li style={li}>Who your safety contacts are, and your location outside an alert or share you start</li>
            <li style={li}>Who you have muted or asked to be notified about</li>
          </ul>

          <hr style={hr} />

          <h3 style={h3}>7. How Long We Keep It</h3>
          <p>
            Your content stays until you delete it or delete your account. Pulses and Notes expire on their own after 24 hours. A live location share lasts at most four hours, and your position is deleted when it ends. Crash reports and analytics are retained on Firebase&apos;s own schedule, which is currently up to 90 days for crashes and up to 14 months for analytics.
          </p>

          <hr style={hr} />

          <h3 id="delete" style={h3}>8. Deleting Your Account</h3>
          <p>You can delete your FitSocial account, and everything attached to it, from inside the app:</p>
          <ol style={{ paddingLeft: '20px', marginBottom: '24px' }}>
            <li style={li}>Open <strong>Profile → Settings</strong></li>
            <li style={li}>Scroll to the bottom and tap <strong>Delete account</strong></li>
            <li style={li}>Type your username to confirm</li>
          </ol>
          <p>
            This removes your profile, posts, Pulses, Notes, comments, reactions, likes, follows, runs, rides, workouts, routines, custom exercises, meals, photos, body measurements and weigh-ins, goals and plan, challenge progress, points, milestones, badges, Weekly Insights, safety contacts and location data. It is permanent and there is no undo: we cannot restore an account once it is gone.
          </p>
          <p>
            Two things are deliberately not immediate. Your <strong>username is held for 14 days</strong> before anyone else can claim it, so that nobody can take the name of someone who has just left. And crash reports already sent are anonymous diagnostics that are not linked back to a deleted account; they age out on the schedule above.
          </p>
          <p>If you cannot reach the app, email <Mail /> from your account&apos;s email address and we will delete it for you.</p>

          <hr style={hr} />

          <h3 style={h3}>9. Your Rights</h3>
          <p>
            Under POPIA, and equivalently under the GDPR if you are in Europe, you may ask us to confirm what we hold about you, correct it, delete it, or object to how we use it. Most of this you can do yourself in the app: edit your profile, delete individual posts and logs, remove safety contacts, or delete the whole account. For anything else, write to <Mail /> and we will respond within 30 days. If you are unhappy with the outcome, you may complain to the Information Regulator of South Africa.
          </p>

          <hr style={hr} />

          <h3 style={h3}>10. Children</h3>
          <p>
            FitSocial is not intended for anyone under 13, and we do not knowingly collect their information. If you believe a child has created an account, tell us and we will remove it.
          </p>

          <hr style={hr} />

          <h3 style={h3}>11. Security</h3>
          <p>
            Traffic is encrypted in transit. Access to your private data is enforced at the database by security rules, not only in the app, so a modified client cannot read another person&apos;s food diary, body measurements or GPS routes. Safety alert links carry a random, single-purpose token and stop showing anything once the alert ends. No system is perfect, and we will tell affected users and the Information Regulator if a breach ever puts personal information at risk.
          </p>

          <hr style={hr} />

          <h3 style={h3}>12. Changes</h3>
          <p>
            If this policy changes in a way that affects what we collect or who we share it with, we will say so in the app before the change takes effect. The date at the top is always the date of the current version.
          </p>

          <hr style={hr} />

          <p>
            <strong>FitSocial</strong> · Built in South Africa<br />
            <Mail />
          </p>

          <div style={{ marginTop: '60px' }}>
            <Link href="/" className="text-link">Back to Home <span>↗</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
