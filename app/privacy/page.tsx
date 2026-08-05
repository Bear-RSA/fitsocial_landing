import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <main>
      <section className="section shell" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <div className="section-heading" style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', letterSpacing: '-2px', marginBottom: '16px' }}>FitSocial — Privacy Policy</h1>
          <p style={{ color: 'var(--muted)', margin: '0' }}><strong>Effective Date:</strong> July 2026 <br /> <strong>Last Updated:</strong> August 2026</p>
        </div>

        <div style={{ maxWidth: '720px', lineHeight: '1.7', fontSize: '16px', color: 'var(--muted)' }}>

          <hr style={{ border: 'none', borderTop: '1px solid var(--stroke)', margin: '40px 0' }} />

          <h3 style={{ color: 'var(--white)', fontSize: '24px', letterSpacing: '-1px', marginTop: '40px', marginBottom: '16px' }}>1. Who We Are</h3>
          <p>
            <strong>FitSocial</strong> is a pre-launch fitness social platform built by <strong>MiraiStack</strong>, a company registered and operating in South Africa.
          </p>
          <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
            <li><strong>Responsible Party:</strong> MiraiStack (PTY) LTD</li>
            <li><strong>Contact:</strong> info@miraistack.co.za</li>
          </ul>

          <hr style={{ border: 'none', borderTop: '1px solid var(--stroke)', margin: '40px 0' }} />

          <h3 style={{ color: 'var(--white)', fontSize: '24px', letterSpacing: '-1px', marginTop: '40px', marginBottom: '16px' }}>2. What Data We Collect</h3>
          <p>
            We collect only the minimum data necessary to run FitSocial.
          </p>

          <h4 style={{ color: 'var(--white)', fontSize: '18px', marginTop: '32px', marginBottom: '12px' }}>2.1 Waitlist Data (all users)</h4>
          <p>
            Your email address. That&apos;s it — we do not collect names, IP addresses, cookies, device information, or any other personal data through our waitlist form.
          </p>

          <h4 style={{ color: 'var(--white)', fontSize: '18px', marginTop: '32px', marginBottom: '12px' }}>2.2 YouTube Music Integration Data (only if you connect it)</h4>
          <p>
            If you choose to connect your YouTube Music account — an entirely optional feature used to let you play, pause, and control music during workouts inside FitSocial — we additionally collect:
          </p>
          <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
            <li style={{ marginBottom: '8px' }}><strong>OAuth access and refresh tokens</strong>, issued by Google, which let FitSocial send playback commands (play/pause) to YouTube Music on your behalf. We never see or store your Google password.</li>
            <li><strong>Playlist selection data</strong> — the ID and name of the playlist you choose to play, so FitSocial can resume it during your next workout.</li>
          </ul>
          <p>
            We do not request or store your YouTube/Google listening history, subscriptions, contacts, or profile photo. We request only the OAuth scope needed for playback control — nothing broader.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid var(--stroke)', margin: '40px 0' }} />

          <h3 style={{ color: 'var(--white)', fontSize: '24px', letterSpacing: '-1px', marginTop: '40px', marginBottom: '16px' }}>3. Why We Collect It</h3>
          <p>We use your data for these specific purposes:</p>
          <ol style={{ paddingLeft: '20px', marginBottom: '24px' }}>
            <li style={{ marginBottom: '8px' }}>To send you a one-time automated welcome email confirming your spot on the beta waitlist.</li>
            <li style={{ marginBottom: '8px' }}>To keep you informed about FitSocial&apos;s beta launch, product updates, and early-access invitations.</li>
            <li><strong>If you connect YouTube Music:</strong> to start, stop, and control music playback during your workouts, and to remember your last-used playlist.</li>
          </ol>
          <p>
            We will not use your data for unrelated marketing, and we will never sell or rent it to third parties.
          </p>
          <p style={{ marginTop: '24px' }}><strong>Legal Basis:</strong></p>
          <p>
            Under <strong>POPIA</strong> (South Africa), we process your data with your <strong>explicit consent</strong>, obtained at the point of signup and, separately, at the point you choose to connect YouTube Music. Consent is voluntary, specific, and informed, and you can use FitSocial&apos;s core features without ever connecting YouTube Music. You may withdraw consent at any time.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid var(--stroke)', margin: '40px 0' }} />

          <h3 style={{ color: 'var(--white)', fontSize: '24px', letterSpacing: '-1px', marginTop: '40px', marginBottom: '16px' }}>4. How We Process Your Data</h3>
          <p>Your data passes through a short, secure pipeline:</p>

          <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', border: '1px solid var(--stroke)' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--surface)', borderBottom: '1px solid var(--stroke)' }}>
                  <th style={{ padding: '12px 16px', color: 'var(--white)', fontWeight: '600' }}>Stage</th>
                  <th style={{ padding: '12px 16px', color: 'var(--white)', fontWeight: '600' }}>Service</th>
                  <th style={{ padding: '12px 16px', color: 'var(--white)', fontWeight: '600' }}>Role</th>
                  <th style={{ padding: '12px 16px', color: 'var(--white)', fontWeight: '600' }}>Location</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--stroke)' }}>
                  <td style={{ padding: '12px 16px' }}><strong>Collection</strong></td>
                  <td style={{ padding: '12px 16px' }}>Web3Forms</td>
                  <td style={{ padding: '12px 16px' }}>Frontend form API &amp; temporary storage</td>
                  <td style={{ padding: '12px 16px' }}>Cloud-hosted</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--stroke)' }}>
                  <td style={{ padding: '12px 16px' }}><strong>Delivery</strong></td>
                  <td style={{ padding: '12px 16px' }}>Resend</td>
                  <td style={{ padding: '12px 16px' }}>Transactional email API</td>
                  <td style={{ padding: '12px 16px' }}>US-based (Standard Contractual Clauses)</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px 16px' }}><strong>Music Playback</strong></td>
                  <td style={{ padding: '12px 16px' }}>Google (YouTube API Services)</td>
                  <td style={{ padding: '12px 16px' }}>OAuth authentication &amp; playback control</td>
                  <td style={{ padding: '12px 16px' }}>US-based (Google LLC)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 style={{ color: 'var(--white)', fontSize: '18px', marginTop: '32px', marginBottom: '12px' }}>Web3Forms</h4>
          <p>
            Web3Forms acts as a <strong>data operator</strong> on our behalf. They temporarily store form submissions on their secure dashboard so we can access waitlist entries. They do not use your data for their own purposes.
          </p>

          <h4 style={{ color: 'var(--white)', fontSize: '18px', marginTop: '32px', marginBottom: '12px' }}>Resend</h4>
          <p>
            Resend acts as a <strong>data operator</strong> for email delivery. They are SOC 2 compliant, encrypt data in transit (TLS 1.3+) and at rest, and provide a published Data Processing Addendum (DPA) with Standard Contractual Clauses for secure international data transfers.
          </p>

          <h4 style={{ color: 'var(--white)', fontSize: '18px', marginTop: '32px', marginBottom: '12px' }}>Google / YouTube API Services</h4>
          <p>
            When you connect YouTube Music, FitSocial accesses Google&apos;s APIs to control playback on your behalf. FitSocial&apos;s use and transfer of information received from Google APIs will adhere to the{' '}
            <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--orange)', textDecoration: 'none' }}>Google API Services User Data Policy</a>
            , including its Limited Use requirements — meaning we use this data only to provide and improve the playback feature you&apos;ve requested, not for advertising or any unrelated purpose. Google&apos;s own handling of your account data is governed by the{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--orange)', textDecoration: 'none' }}>Google Privacy Policy</a>.
          </p>
          <p style={{ marginTop: '16px', fontSize: '14px', fontStyle: 'italic', opacity: 0.8 }}>
            FitSocial is not affiliated with, sponsored by, or endorsed by Google or YouTube. YouTube and Google are trademarks of Google LLC.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid var(--stroke)', margin: '40px 0' }} />

          <h3 style={{ color: 'var(--white)', fontSize: '24px', letterSpacing: '-1px', marginTop: '40px', marginBottom: '16px' }}>5. Data Retention</h3>
          <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
            <li style={{ marginBottom: '8px' }}><strong>Waitlist email:</strong> retained until 12 months after FitSocial&apos;s public launch, or until you request deletion — whichever comes first. If you unsubscribe or request deletion, we erase your data within 30 days.</li>
            <li style={{ marginBottom: '8px' }}><strong>YouTube Music tokens:</strong> access is revoked immediately with Google when you disconnect YouTube Music in-app or revoke access via your Google Account permissions page. Stored tokens are deleted from our systems within 30 days of disconnection, or immediately upon account deletion.</li>
            <li><strong>Playlist selection data:</strong> deleted on the same timeline as your YouTube Music tokens.</li>
          </ul>
          <p>We do not maintain backups of deleted data beyond standard system recovery windows.</p>

          <hr style={{ border: 'none', borderTop: '1px solid var(--stroke)', margin: '40px 0' }} />

          <h3 style={{ color: 'var(--white)', fontSize: '24px', letterSpacing: '-1px', marginTop: '40px', marginBottom: '16px' }}>6. Your Rights</h3>

          <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', border: '1px solid var(--stroke)' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--surface)', borderBottom: '1px solid var(--stroke)' }}>
                  <th style={{ padding: '12px 16px', color: 'var(--white)', fontWeight: '600', width: '30%' }}>Right</th>
                  <th style={{ padding: '12px 16px', color: 'var(--white)', fontWeight: '600' }}>How to Exercise It</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--stroke)' }}>
                  <td style={{ padding: '12px 16px' }}><strong>Access</strong></td>
                  <td style={{ padding: '12px 16px' }}>Email us to request a copy of the data we hold about you.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--stroke)' }}>
                  <td style={{ padding: '12px 16px' }}><strong>Rectification</strong></td>
                  <td style={{ padding: '12px 16px' }}>Email us to correct your email address if needed.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--stroke)' }}>
                  <td style={{ padding: '12px 16px' }}><strong>Erasure (&quot;Right to be Forgotten&quot;)</strong></td>
                  <td style={{ padding: '12px 16px' }}>Email us at any time to request complete deletion. We will confirm removal within 30 days.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--stroke)' }}>
                  <td style={{ padding: '12px 16px' }}><strong>Unsubscribe</strong></td>
                  <td style={{ padding: '12px 16px' }}>Every email we send includes a one-click unsubscribe link. Clicking it immediately stops all future communications and flags your record for deletion.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--stroke)' }}>
                  <td style={{ padding: '12px 16px' }}><strong>Disconnect YouTube Music</strong></td>
                  <td style={{ padding: '12px 16px' }}>Disconnect anytime in FitSocial&apos;s app settings, or revoke FitSocial&apos;s access directly at <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--orange)', textDecoration: 'none' }}>myaccount.google.com/permissions</a>. This immediately stops playback access and starts the deletion of stored tokens and playlist data.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--stroke)' }}>
                  <td style={{ padding: '12px 16px' }}><strong>Objection</strong></td>
                  <td style={{ padding: '12px 16px' }}>You may object to processing at any time. We will cease processing immediately.</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px 16px' }}><strong>Withdraw Consent</strong></td>
                  <td style={{ padding: '12px 16px' }}>Unsubscribing, disconnecting YouTube Music, or requesting deletion automatically withdraws the relevant consent.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p><strong>Contact for rights requests:</strong> <a href="mailto:info@miraistack.co.za" style={{ color: 'var(--orange)', textDecoration: 'none' }}>info@miraistack.co.za</a></p>

          <hr style={{ border: 'none', borderTop: '1px solid var(--stroke)', margin: '40px 0' }} />

          <h3 style={{ color: 'var(--white)', fontSize: '24px', letterSpacing: '-1px', marginTop: '40px', marginBottom: '16px' }}>7. Security</h3>
          <p>We implement reasonable technical and organizational measures to protect your data:</p>
          <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
            <li style={{ marginBottom: '8px' }}>All data transmission occurs over <strong>HTTPS/TLS 1.3</strong>.</li>
            <li style={{ marginBottom: '8px' }}>We use processor services that encrypt data at rest, including OAuth tokens.</li>
            <li style={{ marginBottom: '8px' }}>YouTube Music OAuth tokens are stored encrypted and are never exposed in logs, URLs, or client-side code.</li>
            <li style={{ marginBottom: '8px' }}>We use Google&apos;s officially supported OAuth libraries and follow Google&apos;s security guidelines for token handling.</li>
            <li>Access to waitlist and integration data is restricted to authorized MiraiStack personnel only.</li>
          </ul>

          <hr style={{ border: 'none', borderTop: '1px solid var(--stroke)', margin: '40px 0' }} />

          <h3 style={{ color: 'var(--white)', fontSize: '24px', letterSpacing: '-1px', marginTop: '40px', marginBottom: '16px' }}>8. Changes to This Policy</h3>
          <p>
            We may update this policy as FitSocial evolves. If we make material changes, we will notify you via email before they take effect. The &quot;Last Updated&quot; date at the top of this page always reflects the current version.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid var(--stroke)', margin: '40px 0' }} />

          <h3 style={{ color: 'var(--white)', fontSize: '24px', letterSpacing: '-1px', marginTop: '40px', marginBottom: '16px' }}>9. Contact Us</h3>
          <p>If you have questions, concerns, or data rights requests, reach out to:</p>
          <p>
            <strong>MiraiStack (PTY) LTD</strong><br />
            Email: <a href="mailto:info@miraistack.co.za" style={{ color: 'var(--orange)', textDecoration: 'none' }}>info@miraistack.co.za</a>
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid var(--stroke)', margin: '40px 0' }} />

          <p style={{ fontSize: '14px', fontStyle: 'italic', opacity: 0.8 }}>
            *This policy is designed to comply with the Protection of Personal Information Act (POPIA), Act 4 of 2013 (South Africa), and the Google API Services User Data Policy.*
          </p>

          <div style={{ marginTop: '60px' }}>
            <Link href="/" className="text-link">Back to Home <span>↗</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
