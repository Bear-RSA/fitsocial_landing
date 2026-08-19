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

          <h4 style={{ color: 'var(--white)', fontSize: '18px', marginTop: '32px', marginBottom: '12px' }}>Waitlist Data (all users)</h4>
          <p>When you join our waitlist, we collect:</p>
          <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
            <li>Your name</li>
            <li>Your email address</li>
            <li>Your WhatsApp number</li>
          </ul>
          <p>
            We collect your WhatsApp number specifically so we can send you beta access invitations and product updates directly, if you request or opt in to this channel. We do not collect IP addresses, cookies, device information, or any other personal data through our waitlist form.
          </p>
          <p style={{ marginTop: '16px', fontSize: '14px', fontStyle: 'italic', opacity: 0.8 }}>
            Note: Your name and WhatsApp number are direct identifiers under the Protection of Personal Information Act (POPIA), Act 4 of 2013 (South Africa), and are treated with the same care and safeguards described throughout this policy.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid var(--stroke)', margin: '40px 0' }} />

          <h3 style={{ color: 'var(--white)', fontSize: '24px', letterSpacing: '-1px', marginTop: '40px', marginBottom: '16px' }}>3. Why We Collect It</h3>
          <p>We use your data for these specific purposes:</p>
          <ol style={{ paddingLeft: '20px', marginBottom: '24px' }}>
            <li style={{ marginBottom: '8px' }}>To send you a one-time automated welcome email (and, if you provide a WhatsApp number, a welcome message) confirming your spot on the beta waitlist.</li>
            <li style={{ marginBottom: '8px' }}>To keep you informed about FitSocial&apos;s beta launch, product updates, and early-access invitations — via email, and via WhatsApp if you&apos;ve provided a number and opted in to that channel.</li>
            <li style={{ marginBottom: '8px' }}>To personalize your waitlist confirmation and communications using your name.</li>
          </ol>
          <p>
            We will not use your data for unrelated marketing, and we will never sell or rent it to third parties.
          </p>
          <p style={{ marginTop: '24px' }}><strong>Legal Basis:</strong></p>
          <p>
            Under <strong>POPIA</strong> (South Africa), we process your data with your <strong>explicit consent</strong>, obtained at the point of signup. Consent is voluntary, specific, and informed. Providing a WhatsApp number is optional; you may join the waitlist with just your name and email if you prefer not to share it. You may withdraw consent at any time.
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
                <tr style={{ borderBottom: '1px solid var(--stroke)' }}>
                  <td style={{ padding: '12px 16px' }}><strong>Delivery</strong></td>
                  <td style={{ padding: '12px 16px' }}>WhatsApp Business Platform (Meta)</td>
                  <td style={{ padding: '12px 16px' }}>Messaging API for beta/update notifications</td>
                  <td style={{ padding: '12px 16px' }}>US-based (Meta Platforms, Inc.)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 style={{ color: 'var(--white)', fontSize: '18px', marginTop: '32px', marginBottom: '12px' }}>Web3Forms</h4>
          <p>
            Web3Forms acts as a <strong>data operator</strong> on our behalf. They temporarily store form submissions (including name, email, and WhatsApp number) on their secure dashboard so we can access waitlist entries. They do not use your data for their own purposes.
          </p>

          <h4 style={{ color: 'var(--white)', fontSize: '18px', marginTop: '32px', marginBottom: '12px' }}>Resend</h4>
          <p>
            Resend acts as a <strong>data operator</strong> for email delivery. They are SOC 2 compliant, encrypt data in transit (TLS 1.3+) and at rest, and provide a published Data Processing Addendum (DPA) with Standard Contractual Clauses for secure international data transfers.
          </p>

          <h4 style={{ color: 'var(--white)', fontSize: '18px', marginTop: '32px', marginBottom: '12px' }}>WhatsApp Business Platform (Meta)</h4>
          <p>
            If you provide a WhatsApp number and opt in to WhatsApp updates, we use Meta&apos;s WhatsApp Business Platform solely to deliver beta access invitations and product updates. Meta acts as a <strong>data operator</strong> for this purpose, and your number is used only for the messages you&apos;ve consented to receive — not for any other purpose.
          </p>

          <p style={{ marginTop: '16px', fontSize: '14px', fontStyle: 'italic', opacity: 0.8 }}>
            FitSocial is not affiliated with, sponsored by, or endorsed by Meta. WhatsApp is a trademark of Meta Platforms, Inc.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid var(--stroke)', margin: '40px 0' }} />

          <h3 style={{ color: 'var(--white)', fontSize: '24px', letterSpacing: '-1px', marginTop: '40px', marginBottom: '16px' }}>5. Data Retention</h3>
          <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
            <li style={{ marginBottom: '8px' }}><strong>Waitlist data (name, email, WhatsApp number):</strong> retained until 12 months after FitSocial&apos;s public launch, or until you request deletion — whichever comes first. If you unsubscribe or request deletion, we erase your data within 30 days.</li>
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
                  <td style={{ padding: '12px 16px' }}>Email us to correct your name, email address, or WhatsApp number if needed.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--stroke)' }}>
                  <td style={{ padding: '12px 16px' }}><strong>Erasure (&quot;Right to be Forgotten&quot;)</strong></td>
                  <td style={{ padding: '12px 16px' }}>Email us at any time to request complete deletion. We will confirm removal within 30 days.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--stroke)' }}>
                  <td style={{ padding: '12px 16px' }}><strong>Unsubscribe</strong></td>
                  <td style={{ padding: '12px 16px' }}>Every email we send includes a one-click unsubscribe link, and you can reply &quot;STOP&quot; to any WhatsApp message to opt out. Either action immediately stops future communications on that channel and flags your record for deletion.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--stroke)' }}>
                  <td style={{ padding: '12px 16px' }}><strong>Objection</strong></td>
                  <td style={{ padding: '12px 16px' }}>You may object to processing at any time. We will cease processing immediately.</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px 16px' }}><strong>Withdraw Consent</strong></td>
                  <td style={{ padding: '12px 16px' }}>Unsubscribing, opting out of WhatsApp, or requesting deletion automatically withdraws the relevant consent.</td>
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
            <li style={{ marginBottom: '8px' }}>We use processor services that encrypt data at rest, including contact details such as your WhatsApp number.</li>
            <li style={{ marginBottom: '8px' }}>WhatsApp messages are sent via Meta&apos;s official WhatsApp Business Platform, using their supported security practices.</li>
            <li>Access to waitlist data is restricted to authorized MiraiStack personnel only.</li>
          </ul>

          <hr style={{ border: 'none', borderTop: '1px solid var(--stroke)', margin: '40px 0' }} />

          <h3 style={{ color: 'var(--white)', fontSize: '24px', letterSpacing: '-1px', marginTop: '40px', marginBottom: '16px' }}>8. Changes to This Policy</h3>
          <p>
            We may update this policy as FitSocial evolves. If we make material changes, we will notify you via email (and WhatsApp, if applicable) before they take effect. The &quot;Last Updated&quot; date at the top of this page always reflects the current version.
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
