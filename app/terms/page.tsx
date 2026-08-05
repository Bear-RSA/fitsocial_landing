import React from 'react';
import Link from 'next/link';

export default function TermsAndConditions() {
  return (
    <main>
      <section className="section shell" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <div className="section-heading" style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', letterSpacing: '-2px', marginBottom: '16px' }}>FitSocial — Terms and Conditions</h1>
          <p style={{ color: 'var(--muted)', margin: '0' }}><strong>Effective Date:</strong> July 2026 <br /> <strong>Last Updated:</strong> August 2026</p>
        </div>

        <div style={{ maxWidth: '720px', lineHeight: '1.7', fontSize: '16px', color: 'var(--muted)' }}>

          <hr style={{ border: 'none', borderTop: '1px solid var(--stroke)', margin: '40px 0' }} />

          <h3 style={{ color: 'var(--white)', fontSize: '24px', letterSpacing: '-1px', marginTop: '40px', marginBottom: '16px' }}>1. Introduction</h3>
          <p>
            These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of FitSocial (the &quot;App,&quot; &quot;Platform,&quot; or &quot;Service&quot;), operated by MiraiStack (PTY) LTD (&quot;MiraiStack,&quot; &quot;we,&quot; &quot;us,&quot; &quot;our&quot;), a company registered and operating in South Africa.
          </p>
          <p>
            By creating an account, accessing, or using FitSocial, you agree to be bound by these Terms. If you do not agree, please do not use the Service.
          </p>
          <p>
            These Terms should be read together with our{' '}
            <Link href="/privacy" style={{ color: 'var(--orange)', textDecoration: 'none' }}>Privacy Policy</Link>
            , which explains how we collect and process your data, including data related to our YouTube Music integration.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid var(--stroke)', margin: '40px 0' }} />

          <h3 style={{ color: 'var(--white)', fontSize: '24px', letterSpacing: '-1px', marginTop: '40px', marginBottom: '16px' }}>2. Eligibility</h3>
          <p>
            You must be at least 18 years old to create a FitSocial account. By registering, you confirm that you meet this requirement and that you have the legal capacity to enter into these Terms.
          </p>
          <p>
            FitSocial involves physical exercise and public social sharing, and is not designed for use by minors. We reserve the right to suspend or terminate any account we believe belongs to a user under 18.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid var(--stroke)', margin: '40px 0' }} />

          <h3 style={{ color: 'var(--white)', fontSize: '24px', letterSpacing: '-1px', marginTop: '40px', marginBottom: '16px' }}>3. Description of the Service</h3>
          <p>
            FitSocial is a fitness social platform that allows users to:
          </p>
          <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
            <li style={{ marginBottom: '8px' }}>Create a personal profile and log workouts and fitness activity.</li>
            <li style={{ marginBottom: '8px' }}>Share posts, photos, videos, and comments with other users in a social feed.</li>
            <li style={{ marginBottom: '8px' }}>Follow and interact with other members of the FitSocial community.</li>
            <li>Optionally connect a YouTube Music account to control music playback (play/pause) during workouts, as described in our{' '}
              <Link href="/privacy" style={{ color: 'var(--orange)', textDecoration: 'none' }}>Privacy Policy</Link>.
            </li>
          </ul>
          <p>
            We may add, modify, or remove features at any time. FitSocial is currently offered free of charge. If we introduce paid plans or subscriptions in the future, we will update these Terms and notify you before any charges apply.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid var(--stroke)', margin: '40px 0' }} />

          <h3 style={{ color: 'var(--white)', fontSize: '24px', letterSpacing: '-1px', marginTop: '40px', marginBottom: '16px' }}>4. Account Registration and Security</h3>
          <p>
            To use FitSocial, you must create an account and provide accurate, current information. You are responsible for:
          </p>
          <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
            <li style={{ marginBottom: '8px' }}>Maintaining the confidentiality of your login credentials.</li>
            <li style={{ marginBottom: '8px' }}>All activity that occurs under your account.</li>
            <li>Notifying us immediately at{' '}
              <a href="mailto:info@miraistack.co.za" style={{ color: 'var(--orange)', textDecoration: 'none' }}>info@miraistack.co.za</a>
              {' '}if you suspect unauthorized use of your account.
            </li>
          </ul>
          <p>
            We reserve the right to suspend or terminate accounts that provide false information, violate these Terms, or are inactive for an extended period.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid var(--stroke)', margin: '40px 0' }} />

          <h3 style={{ color: 'var(--white)', fontSize: '24px', letterSpacing: '-1px', marginTop: '40px', marginBottom: '16px' }}>5. User Content</h3>

          <h4 style={{ color: 'var(--white)', fontSize: '18px', marginTop: '32px', marginBottom: '12px' }}>5.1 Your Content, Your Ownership</h4>
          <p>
            You retain ownership of any photos, videos, posts, comments, workout data, and other content you submit to FitSocial (&quot;User Content&quot;). We do not claim ownership over your User Content.
          </p>

          <h4 style={{ color: 'var(--white)', fontSize: '18px', marginTop: '32px', marginBottom: '12px' }}>5.2 License to FitSocial</h4>
          <p>
            By posting User Content, you grant MiraiStack a non-exclusive, worldwide, royalty-free, sublicensable license to host, store, reproduce, display, and distribute that content solely for the purpose of operating, promoting, and improving FitSocial (for example, displaying your posts in the social feed to other users). This license ends when you delete the content or your account, except where copies have already been shared by other users within the normal operation of the Service, or where retention is required by law.
          </p>

          <h4 style={{ color: 'var(--white)', fontSize: '18px', marginTop: '32px', marginBottom: '12px' }}>5.3 Your Responsibilities</h4>
          <p>
            You are solely responsible for your User Content. By posting, you confirm that:
          </p>
          <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
            <li style={{ marginBottom: '8px' }}>You own or have the necessary rights to share the content.</li>
            <li style={{ marginBottom: '8px' }}>The content does not infringe any third party&apos;s intellectual property, privacy, or other rights.</li>
            <li>The content complies with our Community Guidelines (Section 6).</li>
          </ul>
          <p>
            We do not pre-screen User Content but may review, remove, or restrict access to content that violates these Terms, at our discretion.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid var(--stroke)', margin: '40px 0' }} />

          <h3 style={{ color: 'var(--white)', fontSize: '24px', letterSpacing: '-1px', marginTop: '40px', marginBottom: '16px' }}>6. Community Guidelines and Acceptable Use</h3>
          <p>
            When using FitSocial, you agree not to:
          </p>
          <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
            <li style={{ marginBottom: '8px' }}>Post content that is unlawful, harassing, abusive, hateful, defamatory, or discriminatory.</li>
            <li style={{ marginBottom: '8px' }}>Impersonate any person or entity, or misrepresent your affiliation with anyone.</li>
            <li style={{ marginBottom: '8px' }}>Post sexually explicit content, graphic violence, or content that promotes self-harm or disordered eating.</li>
            <li style={{ marginBottom: '8px' }}>Share dangerous fitness advice, extreme or medically unsafe routines, or content promoting the use of banned or harmful substances.</li>
            <li style={{ marginBottom: '8px' }}>Harass, bully, stalk, or threaten other users.</li>
            <li style={{ marginBottom: '8px' }}>Spam other users, post unauthorized advertising, or use FitSocial for unrelated commercial solicitation.</li>
            <li style={{ marginBottom: '8px' }}>Upload viruses, malware, or attempt to interfere with the Service&apos;s normal operation.</li>
            <li style={{ marginBottom: '8px' }}>Scrape, reverse-engineer, or attempt to extract data from FitSocial other than through features we provide.</li>
            <li>Infringe any copyright, trademark, or other intellectual property right.</li>
          </ul>
          <p>
            We reserve the right to remove content, restrict features, suspend, or permanently terminate accounts that violate these guidelines, with or without notice.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid var(--stroke)', margin: '40px 0' }} />

          <h3 style={{ color: 'var(--white)', fontSize: '24px', letterSpacing: '-1px', marginTop: '40px', marginBottom: '16px' }}>7. Health and Fitness Disclaimer</h3>
          <p>
            FitSocial provides tools for tracking and sharing fitness activity. It does not provide medical advice.
          </p>
          <ul style={{ paddingLeft: '20px', marginBottom: '24px', listStyleType: 'none' }}>
            <li style={{ marginBottom: '16px' }}>
              <strong style={{ color: 'var(--white)' }}>Consult a professional.</strong> Before starting any exercise program or making changes to your fitness routine, consult a physician or qualified healthcare provider, particularly if you have any pre-existing medical condition.
            </li>
            <li style={{ marginBottom: '16px' }}>
              <strong style={{ color: 'var(--white)' }}>Assumption of risk.</strong> Physical exercise carries inherent risks of injury. By using FitSocial, you acknowledge and voluntarily accept these risks. You are solely responsible for judging your own physical limits.
            </li>
            <li style={{ marginBottom: '16px' }}>
              <strong style={{ color: 'var(--white)' }}>No medical or professional advice.</strong> Content shared by other users, including workout routines and fitness tips, reflects their personal experience and is not medical, dietary, or professional advice. MiraiStack does not verify or endorse the accuracy or safety of user-submitted fitness content.
            </li>
            <li>
              <strong style={{ color: 'var(--white)' }}>Stop if needed.</strong> Stop exercising immediately and seek medical attention if you experience pain, dizziness, shortness of breath, or any concerning symptoms.
            </li>
          </ul>

          <hr style={{ border: 'none', borderTop: '1px solid var(--stroke)', margin: '40px 0' }} />

          <h3 style={{ color: 'var(--white)', fontSize: '24px', letterSpacing: '-1px', marginTop: '40px', marginBottom: '16px' }}>8. YouTube Music Integration</h3>
          <p>
            If you choose to connect your YouTube Music account, FitSocial will request limited access via Google&apos;s OAuth system to control playback (play/pause) on your behalf, as described in our{' '}
            <Link href="/privacy" style={{ color: 'var(--orange)', textDecoration: 'none' }}>Privacy Policy</Link>.
          </p>
          <p>
            By using this feature, you also agree to be bound by the{' '}
            <a href="https://www.youtube.com/t/terms" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--orange)', textDecoration: 'none' }}>YouTube Terms of Service</a>
            {' '}and the{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--orange)', textDecoration: 'none' }}>Google Privacy Policy</a>
            . You may disconnect your YouTube Music account at any time within FitSocial&apos;s app settings, or by revoking access directly through your Google Account permissions at{' '}
            <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--orange)', textDecoration: 'none' }}>myaccount.google.com/permissions</a>.
          </p>
          <p style={{ marginTop: '16px', fontSize: '14px', fontStyle: 'italic', opacity: 0.8 }}>
            FitSocial is not affiliated with, sponsored by, or endorsed by Google LLC or YouTube. All related trademarks belong to their respective owners.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid var(--stroke)', margin: '40px 0' }} />

          <h3 style={{ color: 'var(--white)', fontSize: '24px', letterSpacing: '-1px', marginTop: '40px', marginBottom: '16px' }}>9. Intellectual Property</h3>
          <p>
            FitSocial&apos;s name, logo, design, software, and all associated content (excluding User Content) are the property of MiraiStack (PTY) LTD or its licensors and are protected by South African and international intellectual property laws. You may not copy, modify, distribute, or create derivative works from FitSocial&apos;s proprietary content without our prior written consent.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid var(--stroke)', margin: '40px 0' }} />

          <h3 style={{ color: 'var(--white)', fontSize: '24px', letterSpacing: '-1px', marginTop: '40px', marginBottom: '16px' }}>10. Privacy</h3>
          <p>
            Our collection and use of your personal information is governed by our{' '}
            <Link href="/privacy" style={{ color: 'var(--orange)', textDecoration: 'none' }}>Privacy Policy</Link>
            , which forms part of these Terms. By using FitSocial, you consent to the data practices described there, including our use of Web3Forms, Resend, and Google&apos;s YouTube API Services as described.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid var(--stroke)', margin: '40px 0' }} />

          <h3 style={{ color: 'var(--white)', fontSize: '24px', letterSpacing: '-1px', marginTop: '40px', marginBottom: '16px' }}>11. Termination</h3>
          <p>
            You may stop using FitSocial and delete your account at any time by contacting{' '}
            <a href="mailto:info@miraistack.co.za" style={{ color: 'var(--orange)', textDecoration: 'none' }}>info@miraistack.co.za</a>.
          </p>
          <p>
            We may suspend or terminate your access to FitSocial, in whole or in part, at any time, with or without cause or notice, including for violation of these Terms. Upon termination, your right to use the Service ends immediately, though certain provisions of these Terms (including Sections 5.2, 9, 12, and 13) will survive termination.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid var(--stroke)', margin: '40px 0' }} />

          <h3 style={{ color: 'var(--white)', fontSize: '24px', letterSpacing: '-1px', marginTop: '40px', marginBottom: '16px' }}>12. Disclaimers and Limitation of Liability</h3>
          <p>
            FitSocial is provided &quot;as is&quot; and &quot;as available,&quot; without warranties of any kind, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
          </p>
          <p>
            To the fullest extent permitted by South African law, MiraiStack (PTY) LTD shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to personal injury, loss of data, or loss of profits, arising from your use of FitSocial, participation in physical exercise, or reliance on any User Content.
          </p>
          <p>
            Nothing in these Terms limits any liability that cannot be excluded or limited under South African law, including the Consumer Protection Act 68 of 2008, where applicable.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid var(--stroke)', margin: '40px 0' }} />

          <h3 style={{ color: 'var(--white)', fontSize: '24px', letterSpacing: '-1px', marginTop: '40px', marginBottom: '16px' }}>13. Indemnification</h3>
          <p>
            You agree to indemnify and hold harmless MiraiStack (PTY) LTD, its directors, employees, and agents from any claims, damages, losses, or expenses (including reasonable legal fees) arising from your use of FitSocial, your User Content, your violation of these Terms, or your violation of any third-party right.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid var(--stroke)', margin: '40px 0' }} />

          <h3 style={{ color: 'var(--white)', fontSize: '24px', letterSpacing: '-1px', marginTop: '40px', marginBottom: '16px' }}>14. Governing Law and Disputes</h3>
          <p>
            These Terms are governed by the laws of the Republic of South Africa. Any disputes arising from these Terms or your use of FitSocial will be subject to the exclusive jurisdiction of the courts of South Africa, without regard to conflict of law principles.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid var(--stroke)', margin: '40px 0' }} />

          <h3 style={{ color: 'var(--white)', fontSize: '24px', letterSpacing: '-1px', marginTop: '40px', marginBottom: '16px' }}>15. Changes to These Terms</h3>
          <p>
            We may update these Terms from time to time as FitSocial evolves. If we make material changes, we will notify you via email or through the app before they take effect. Continued use of FitSocial after changes take effect constitutes acceptance of the updated Terms.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid var(--stroke)', margin: '40px 0' }} />

          <h3 style={{ color: 'var(--white)', fontSize: '24px', letterSpacing: '-1px', marginTop: '40px', marginBottom: '16px' }}>16. Contact Us</h3>
          <p>If you have questions about these Terms, please contact:</p>
          <p>
            <strong>MiraiStack (PTY) LTD</strong><br />
            Email: <a href="mailto:info@miraistack.co.za" style={{ color: 'var(--orange)', textDecoration: 'none' }}>info@miraistack.co.za</a>
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid var(--stroke)', margin: '40px 0' }} />

          <p style={{ fontSize: '14px', fontStyle: 'italic', opacity: 0.8 }}>
            *These Terms are governed by South African law and are intended to operate alongside FitSocial&apos;s Privacy Policy, which complies with the Protection of Personal Information Act (POPIA), Act 4 of 2013.*
          </p>

          <div style={{ marginTop: '60px' }}>
            <Link href="/" className="text-link">Back to Home <span>↗</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
