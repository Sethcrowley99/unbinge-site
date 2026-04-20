import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delete Your Account | Unbinge",
  description: "How to delete your Unbinge account and what data is removed.",
};

export default function DeleteAccountPage() {
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
          <h1>Delete Your Unbinge Account</h1>
          <p>Unbinge lets you delete your account and all associated data directly from the app. This page explains the process, what gets deleted, and how long deletion takes.</p>

          <h2>Delete your account from inside the app (recommended)</h2>
          <ol>
            <li>Open the Unbinge app.</li>
            <li>Tap the <strong>Profile</strong> tab (bottom right).</li>
            <li>Tap <strong>Account</strong>.</li>
            <li>Tap <strong>Delete Account</strong>.</li>
            <li>Type <strong>DELETE</strong> in the confirmation field and tap <strong>Delete Account</strong> to confirm.</li>
          </ol>
          <p>Your account and all associated data will be permanently deleted. The deletion is immediate in most cases and completes within 30 days at the latest.</p>

          <h2>Alternative: request deletion by email</h2>
          <p>If you cannot access the app for any reason, email <strong><a href="mailto:support@unbingeapp.com">support@unbingeapp.com</a></strong> from the email address associated with your Unbinge account. Use the subject line <strong>&quot;Delete my account&quot;</strong> and include a sentence confirming you want your account permanently deleted.</p>
          <p>We will process your request and email a confirmation within 30 days.</p>

          <h2>What data is deleted</h2>
          <p>When you delete your account, the following is permanently removed:</p>
          <ul>
            <li>Your authentication record (email and password)</li>
            <li>Your profile (name, age, recovery start date, subscription status)</li>
            <li>Onboarding quiz responses and personalized recovery plan</li>
            <li>All recovery logs (urges, meals, moods, setbacks, commitments)</li>
            <li>Streaks and Recovery Points history</li>
            <li>Garden progression and growth snapshots</li>
            <li>Koa chat history</li>
            <li>Community posts and Support comments you authored</li>
            <li>Lesson progress</li>
            <li>Any journal entries or reflections</li>
          </ul>

          <h2>What data may be retained</h2>
          <ul>
            <li>Anonymized, aggregated analytics that cannot be linked back to you may be retained indefinitely for the purpose of improving the app.</li>
            <li>Records we are legally required to keep (for example, certain billing and tax records related to past subscription payments) may be retained for up to seven years as required by applicable law.</li>
            <li>Backups containing deleted data are purged within 90 days of deletion.</li>
          </ul>

          <h2>Subscription and billing</h2>
          <p>Deleting your account does <strong>not</strong> automatically cancel an active subscription billed through the Apple App Store or Google Play Store. To cancel your subscription, manage it through your App Store or Play Store subscription settings. Apple and Google are responsible for refunds and cancellations of subscriptions they process — Unbinge cannot issue refunds on their behalf.</p>

          <h2>Questions</h2>
          <p>If you have questions about account deletion or the data we hold about you, email <strong><a href="mailto:support@unbingeapp.com">support@unbingeapp.com</a></strong>.</p>
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
              <li><Link href="/delete-account">Delete Account</Link></li>
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
