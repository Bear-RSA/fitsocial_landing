import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <main>
      <section className="section shell" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <div className="section-heading" style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', letterSpacing: '-2px', marginBottom: '16px' }}>FitSocial — Privacy Policy</h1>
          <p style={{ color: 'var(--muted)', margin: '0' }}><strong>Effective Date:</strong> July 2026 <br /> <strong>Last Updated:</strong> July 2026</p>
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
            We collect <strong>only one piece of information</strong>: your <strong>email address</strong>.
          </p>
          <p>
            We do not collect names, IP addresses, cookies, device information, or any other personal data at this stage. Our waitlist form is intentionally minimal.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid var(--stroke)', margin: '40px 0' }} />

          <h3 style={{ color: 'var(--white)', fontSize: '24px', letterSpacing: '-1px', marginTop: '40px', marginBottom: '16px' }}>3. Why We Collect It</h3>
          <p>We use your email address for two specific purposes:</p>
          <ol style={{ paddingLeft: '20px', marginBottom: '24px' }}>
            <li style={{ marginBottom: '8px' }}><strong>To send you a one-time automated welcome email</strong> confirming your spot on the beta waitlist.</li>
            <li><strong>To keep you informed</strong> about FitSocial's beta launch, product updates, and early-access invitations.</li>
          </ol>
          <p>
            We will not use your email for unrelated marketing, and we will never sell or rent your data to third parties.
          </p>
          <p style={{ marginTop: '24px' }}><strong>Legal Basis:</strong></p>
          <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
            <li>Under <strong>POPIA</strong> (South Africa): We process your data with your <strong>explicit consent</strong>, obtained at the point of signup. Consent is voluntary, specific, and informed. You may withdraw it at any time.</li>
          </ul>

          <hr style={{ border: 'none', borderTop: '1px solid var(--stroke)', margin: '40px 0' }} />

          <h3 style={{ color: 'var(--white)', fontSize: '24px', letterSpacing: '-1px', marginTop: '40px', marginBottom: '16px' }}>4. How We Process Your Data</h3>
          <p>Your email passes through a short, secure pipeline:</p>

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
                  <td style={{ padding: '12px 16px' }}>Frontend form API & temporary storage</td>
                  <td style={{ padding: '12px 16px' }}>Cloud-hosted</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px 16px' }}><strong>Delivery</strong></td>
                  <td style={{ padding: '12px 16px' }}>Resend</td>
                  <td style={{ padding: '12px 16px' }}>Transactional email API</td>
                  <td style={{ padding: '12px 16px' }}>US-based (Secure standard contractual clauses)</td>
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

          <hr style={{ border: 'none', borderTop: '1px solid var(--stroke)', margin: '40px 0' }} />

          <h3 style={{ color: 'var(--white)', fontSize: '24px', letterSpacing: '-1px', marginTop: '40px', marginBottom: '16px' }}>5. Data Retention</h3>
          <p>We retain your email address <strong>only for as long as necessary</strong> to fulfill the purposes described above.</p>
          <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
            <li style={{ marginBottom: '8px' }}>If you remain on the waitlist and do not unsubscribe, we retain your email until <strong>12 months after the FitSocial public launch</strong>, or until you request deletion — whichever comes first.</li>
            <li>If you unsubscribe or request deletion, we erase your data <strong>within 30 days</strong>.</li>
          </ul>
          <p>We do not maintain backups of deleted waitlist entries beyond standard system recovery windows.</p>

          <hr style={{ border: 'none', borderTop: '1px solid var(--stroke)', margin: '40px 0' }} />

          <h3 style={{ color: 'var(--white)', fontSize: '24px', letterSpacing: '-1px', marginTop: '40px', marginBottom: '16px' }}>6. Your Rights</h3>
          <p>You have full control over your data.</p>

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
                  <td style={{ padding: '12px 16px' }}><strong>Erasure ("Right to be Forgotten")</strong></td>
                  <td style={{ padding: '12px 16px' }}>Email us at any time to request complete deletion. We will confirm removal within 30 days.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--stroke)' }}>
                  <td style={{ padding: '12px 16px' }}><strong>Unsubscribe</strong></td>
                  <td style={{ padding: '12px 16px' }}>Every email we send includes a one-click unsubscribe link. Clicking it immediately stops all future communications and flags your record for deletion.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--stroke)' }}>
                  <td style={{ padding: '12px 16px' }}><strong>Objection</strong></td>
                  <td style={{ padding: '12px 16px' }}>You may object to processing at any time. We will cease processing immediately.</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px 16px' }}><strong>Withdraw Consent</strong></td>
                  <td style={{ padding: '12px 16px' }}>Unsubscribing or requesting deletion automatically withdraws your consent.</td>
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
            <li style={{ marginBottom: '8px' }}>We use processor services that encrypt data at rest.</li>
            <li>Access to waitlist data is restricted to authorized MiraiStack personnel only.</li>
          </ul>

          <hr style={{ border: 'none', borderTop: '1px solid var(--stroke)', margin: '40px 0' }} />

          <h3 style={{ color: 'var(--white)', fontSize: '24px', letterSpacing: '-1px', marginTop: '40px', marginBottom: '16px' }}>8. Changes to This Policy</h3>
          <p>
            We may update this policy as FitSocial evolves. If we make material changes, we will notify you via email before they take effect. The "Last Updated" date at the top of this page always reflects the current version.
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
            *This policy is designed to comply with the Protection of Personal Information Act (POPIA), Act 4 of 2013 (South Africa).*
          </p>

          <div style={{ marginTop: '60px' }}>
            <Link href="/" className="text-link">Back to Home <span>↗</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
