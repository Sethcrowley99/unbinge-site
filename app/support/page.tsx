import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support — Unbinge",
  description: "Help center for Unbinge. Get answers about your account, subscription, Koa, and more.",
};

export default function SupportPage() {
  return (
    <>
      <header className="nav">
        <div className="nav-inner container">
          <Link href="/" className="wordmark">Unbinge</Link>
          <nav className="nav-links">
            <Link href="/#how">How it works</Link>
            <Link href="/#features">Features</Link>
            <Link href="/#faq">FAQ</Link>
            <Link href="/support">Support</Link>
          </nav>
          <Link href="/#download" className="btn btn-primary btn-sm">Download</Link>
        </div>
      </header>

      <main className="doc-page">
        <div className="doc-container">
          <h1>Support</h1>
          <p className="doc-meta">How can we help?</p>

          <div className="crisis-box">
            <h3>If you&apos;re in crisis right now</h3>
            <p>Unbinge isn&apos;t a crisis service. If you&apos;re thinking about harming yourself or someone else, please reach out to one of these right now:</p>
            <p><strong>988</strong> — Suicide &amp; Crisis Lifeline (call or text, US &amp; Canada)</p>
            <p><strong>1-866-662-1235</strong> — National Alliance for Eating Disorders Helpline</p>
            <p><strong>741741</strong> — Crisis Text Line (text HOME)</p>
            <p>You can also go to your nearest emergency room. You are not alone.</p>
          </div>

          <h2>Get in touch</h2>
          <p>The fastest way to reach us is email. We read every message and aim to reply within 2 business days.</p>
          <p><strong>Email:</strong> <a href="mailto:support@unbingeapp.com">support@unbingeapp.com</a></p>

          <hr />

          <h2>Common questions</h2>

          <div className="support-grid">
            <div className="support-card">
              <h3>Account &amp; Login</h3>
              <p>Having trouble signing in, need to reset your password, or want to delete your account? Email us and we&apos;ll sort it out.</p>
            </div>
            <div className="support-card">
              <h3>Subscription &amp; Billing</h3>
              <p>To cancel your subscription, go to your Apple ID or Google Play settings. For refund questions, email us — we&apos;ll help you navigate Apple&apos;s or Google&apos;s process.</p>
            </div>
            <div className="support-card">
              <h3>Koa (AI Companion)</h3>
              <p>Koa has a 200 message/day limit and a 5 message/minute rate limit. If you hit them, just wait a moment or try again tomorrow.</p>
            </div>
            <div className="support-card">
              <h3>Streaks &amp; Setbacks</h3>
              <p>You can edit your streak start date anytime. A setback isn&apos;t a failure — we don&apos;t treat it like one. Go to Profile → Edit streak to adjust.</p>
            </div>
            <div className="support-card">
              <h3>Privacy &amp; Data</h3>
              <p>Want to export or delete your data? Email us and we&apos;ll handle it within 14 days. See our <Link href="/privacy">Privacy Policy</Link> for the full picture.</p>
            </div>
            <div className="support-card">
              <h3>Community</h3>
              <p>To block a user, open their post and tap the three-dot menu. To report a post, use the same menu. We review every report.</p>
            </div>
          </div>

          <h2>Troubleshooting</h2>

          <h3>The app crashes or freezes</h3>
          <p>Try these in order: (1) force quit the app and reopen, (2) restart your phone, (3) make sure you&apos;re on the latest version of Unbinge in the App Store, (4) email us with a description of what happened.</p>

          <h3>My streak reset unexpectedly</h3>
          <p>This should not happen. If it does, email us with a screenshot and we&apos;ll investigate. You can also manually edit your streak start date in the meantime (Profile → Edit streak).</p>

          <h3>Koa isn&apos;t responding</h3>
          <p>Check your internet connection first. If you&apos;re still stuck, you may have hit a rate limit — try again in a few minutes or tomorrow. If Koa is completely unresponsive for more than an hour, it may be a service outage on our end. Email us and we&apos;ll confirm.</p>

          <h3>I can&apos;t see my data after logging in</h3>
          <p>If you were previously using Unbinge in guest mode and recently signed up for an account, guest-mode data does not automatically sync. Email us with your account email and we can help you migrate it.</p>

          <h3>My subscription isn&apos;t active</h3>
          <p>Open the app, go to Profile → Manage Subscription, and tap &quot;Restore Purchases.&quot; If that doesn&apos;t work, email us with your Apple ID email (different from your Unbinge email, if applicable) and we can help.</p>

          <h2>Feedback &amp; feature requests</h2>
          <p>Unbinge is built by a small team, and your feedback genuinely shapes what gets built next. Email us anytime with ideas, requests, or gripes. We read everything.</p>

          <h2>Press &amp; partnerships</h2>
          <p>For media inquiries, clinical partnerships, or research collaborations, email <a href="mailto:support@unbingeapp.com">support@unbingeapp.com</a> with the subject line &quot;Press&quot; or &quot;Partnership.&quot;</p>

          <hr />

          <blockquote>
            A note from the team: we know reaching out for help — even to customer support — can be hard when you&apos;re already stretched thin. We try to write back like humans, because we are humans, and because you deserve that. Take your time.
          </blockquote>
        </div>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Link href="/" className="wordmark wordmark-foot">Unbinge</Link>
            <p>A calming, clinically-grounded companion for binge eating recovery.</p>
          </div>
          <div>
            <h5>Product</h5>
            <ul>
              <li><Link href="/#how">How it works</Link></li>
              <li><Link href="/#features">Features</Link></li>
              <li><Link href="/#faq">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h5>Support</h5>
            <ul>
              <li><Link href="/support">Help center</Link></li>
              <li><Link href="/community-guidelines">Community guidelines</Link></li>
              <li><a href="mailto:support@unbingeapp.com">support@unbingeapp.com</a></li>
            </ul>
          </div>
          <div>
            <h5>Legal</h5>
            <ul>
              <li><Link href="/privacy">Privacy policy</Link></li>
              <li><Link href="/terms">Terms of service</Link></li>
            </ul>
          </div>
        </div>
        <div className="container footer-base">
          <span>© 2026 Unbinge. Recovery, gently.</span>
          <span>Made with care for people in recovery.</span>
        </div>
      </footer>
    </>
  );
}
