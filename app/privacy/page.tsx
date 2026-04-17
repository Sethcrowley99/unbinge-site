import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Unbinge",
  description:
    "Unbinge privacy policy. Your recovery data is yours. We don't train AI on it, we don't sell it, and we tell you exactly what we store.",
};

export default function PrivacyPage() {
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
          <h1>Privacy Policy</h1>
          <p className="doc-meta">Last updated: April 16, 2026</p>

          <blockquote>
            The short version: your recovery data is yours. We don&apos;t train AI models on your messages or check-ins. We don&apos;t sell your data to anyone. We collect the minimum we need to make Unbinge work, and we&apos;re transparent about what that is. This page spells out the details.
          </blockquote>

          <h2>Who we are</h2>
          <p>Unbinge is a mobile recovery app for people healing their relationship with food. Unbinge is operated as a sole proprietorship. You can reach us anytime at <a href="mailto:support@unbingeapp.com">support@unbingeapp.com</a>.</p>

          <h2>What we collect</h2>

          <h3>Account information</h3>
          <p>When you create an account, we store your email address and a securely hashed password. If you use Unbinge in guest mode, we don&apos;t collect any account information — your data stays on your device.</p>

          <h3>Recovery data you enter</h3>
          <p>Unbinge stores the information you choose to track: your recovery start date, urges you log, meals you check in with (hunger and fullness only — no calories or weight), mood check-ins, body relationship check-ins, journal entries, and streak history. If you create an account, this data is synced to our servers via Supabase so it&apos;s available on all your devices. If you&apos;re in guest mode, it lives only on your device.</p>

          <h3>Koa (AI companion) conversations</h3>
          <p>Messages you send to Koa are transmitted to Google&apos;s Gemini API to generate a response, then stored in our database so you can see your chat history. <strong>We do not use your Koa conversations to train any AI model</strong>, and we have configured our Google Cloud account to opt out of their usage for Google&apos;s model improvement. We also apply rate limits to Koa (200 messages per day, 5 per minute) to protect both you and the service from abuse.</p>

          <h3>Community posts and replies</h3>
          <p>Posts you create in the community feed, and your support replies to others, are visible to all Unbinge members. Your community username is separate from your email address by default. You can block users, report posts, and delete your own content at any time.</p>

          <h3>Device and usage information</h3>
          <p>We collect standard mobile app diagnostics — crash reports, performance metrics, and basic usage patterns (e.g., which tabs are opened). This data is aggregated and used to fix bugs and improve the app. We do not collect your device&apos;s location, contacts, photos, or health data.</p>

          <h3>Payment information</h3>
          <p>Subscriptions are processed by Apple via the App Store (and Google Play for Android). We never see your card number. We use RevenueCat to track subscription status — they receive an anonymous user ID and the product you purchased, and nothing more.</p>

          <h2>What we don&apos;t collect</h2>
          <ul>
            <li>We do not collect your weight, height, BMI, or any body measurements.</li>
            <li>We do not collect calorie, macro, or nutritional data.</li>
            <li>We do not collect food photos.</li>
            <li>We do not collect location data.</li>
            <li>We do not collect contacts, photos, or camera data.</li>
            <li>We do not use third-party advertising SDKs. There are no ads in Unbinge.</li>
          </ul>

          <h2>How we use your data</h2>
          <p>We use the data we collect to (a) make Unbinge work — showing you your streak, insights, and conversation history; (b) respond to you when you message Koa; (c) keep the community feed running and moderated; (d) fix crashes and improve the app; and (e) process your subscription. That&apos;s it.</p>

          <h2>Who we share data with</h2>
          <p>We share data only with the infrastructure providers we need to run the app:</p>
          <ul>
            <li><strong>Supabase</strong> (authentication, database, storage) — stores your account and recovery data</li>
            <li><strong>Google Gemini</strong> (AI) — processes Koa messages; usage for model training is disabled</li>
            <li><strong>Apple &amp; Google</strong> — process payments and distribute the app</li>
            <li><strong>RevenueCat</strong> — tracks subscription status</li>
            <li><strong>Expo / EAS</strong> — handles app builds and over-the-air updates</li>
          </ul>
          <p>We never sell your data. We never share data with advertisers, data brokers, or third parties outside of the infrastructure list above.</p>

          <h2>Your rights</h2>
          <p>You have the right to see, correct, export, or delete the data we have about you at any time.</p>
          <ul>
            <li><strong>See or export:</strong> Email us at <a href="mailto:support@unbingeapp.com">support@unbingeapp.com</a> and we&apos;ll send you a full export within 14 days.</li>
            <li><strong>Correct:</strong> You can edit most of your data directly in the app (streak start date, journal entries, posts, etc.).</li>
            <li><strong>Delete:</strong> You can delete your account from inside the app (Profile → Settings → Delete Account). This removes your data within 30 days.</li>
          </ul>
          <p>If you&apos;re in the EU or UK, you also have specific rights under GDPR (access, rectification, erasure, restriction, objection, portability). If you&apos;re in California, you have specific rights under CCPA. You can exercise any of these rights by emailing us.</p>

          <h2>Data retention</h2>
          <p>We keep your data as long as your account is active. When you delete your account, we delete your personal data within 30 days, except where we&apos;re legally required to keep certain records (e.g., transaction records for tax purposes). Anonymized, aggregated usage data may be retained for analytics.</p>

          <h2>Children</h2>
          <p>Unbinge is not intended for users under 17. If we learn we&apos;ve collected data from someone under 17, we&apos;ll delete it immediately. Please contact us if you believe a child has created an account.</p>

          <h2>Security</h2>
          <p>We use industry-standard encryption in transit (TLS) and at rest. Passwords are hashed using bcrypt. Access to production data is restricted and logged. That said, no system is perfectly secure — if a breach occurs that affects your data, we&apos;ll notify you within 72 hours.</p>

          <h2>International transfers</h2>
          <p>Our servers are located in the United States. If you&apos;re using Unbinge from outside the US, your data will be transferred to and processed in the US. By using Unbinge, you consent to this transfer.</p>

          <h2>Changes to this policy</h2>
          <p>If we make material changes to this policy, we&apos;ll notify you via email (if you have an account) and post a notice in the app. Continued use of Unbinge after changes means you accept them.</p>

          <h2>Contact us</h2>
          <p>Questions, concerns, or data requests: <a href="mailto:support@unbingeapp.com">support@unbingeapp.com</a>. We aim to respond to every email within 2 business days.</p>
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
