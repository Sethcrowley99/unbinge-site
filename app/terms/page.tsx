import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Unbinge",
  description: "Terms of service for Unbinge, the calming recovery companion for binge eating.",
};

export default function TermsPage() {
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
          <h1>Terms of Service</h1>
          <p className="doc-meta">Last updated: April 16, 2026</p>

          <blockquote>
            The short version: Unbinge is a support tool, not medical care. It&apos;s not a replacement for a therapist, doctor, or registered dietitian. By using Unbinge, you agree to a few reasonable things — be kind in the community, don&apos;t abuse the service, and understand the limits of what we can do. This page spells out the legal details.
          </blockquote>

          <h2>1. Agreement</h2>
          <p>By downloading, installing, or using Unbinge (&quot;the app&quot;), you agree to these Terms of Service (&quot;Terms&quot;). If you don&apos;t agree, please don&apos;t use the app. You must be at least 17 years old to use Unbinge.</p>

          <h2>2. Unbinge is not medical care</h2>
          <p><strong>Unbinge is a self-help tool. It is not therapy, medical advice, diagnosis, or treatment.</strong> Binge eating disorder is a serious mental health condition. If you think you may have an eating disorder, please seek care from a licensed clinician. Unbinge is designed to work alongside clinical care, not in place of it.</p>
          <p>Koa, our AI companion, is not a therapist, doctor, counselor, or crisis service. Do not use Koa in a medical emergency or mental health crisis. If you are in crisis, please contact the <a href="https://allianceforeatingdisorders.com/" target="_blank" rel="noopener noreferrer">National Alliance for Eating Disorders helpline</a> (1-866-662-1235), call 988 (Suicide &amp; Crisis Lifeline), or go to your nearest emergency room.</p>

          <h2>3. Your account</h2>
          <p>You are responsible for keeping your password secure and for all activity on your account. If you notice unauthorized access, email us immediately at <a href="mailto:support@unbingeapp.com">support@unbingeapp.com</a>. We may suspend or terminate accounts that violate these Terms.</p>

          <h2>4. Subscriptions and payment</h2>
          <p>Unbinge offers two paid options:</p>
          <ul>
            <li><strong>Annual subscription ($29.99/year)</strong> — auto-renews each year unless cancelled. You can cancel anytime in your Apple ID settings or Google Play account.</li>
            <li><strong>Lifetime access ($49.99 one-time)</strong> — a single payment for ongoing access while the app remains available.</li>
          </ul>
          <p>All payments are processed by Apple (App Store) or Google (Play Store). Refunds are handled according to Apple&apos;s and Google&apos;s refund policies — we don&apos;t process refunds directly, but we&apos;re happy to help you navigate their process.</p>
          <p>Prices may change. If we raise prices for existing subscribers, we&apos;ll notify you in advance and give you a chance to cancel before renewal.</p>

          <h2>5. Acceptable use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use Unbinge in a way that harms yourself or others, including using Koa to plan or facilitate self-harm</li>
            <li>Post content in the community that promotes eating disorders, shares weights or calorie counts, sexualizes or targets minors, or bullies/harasses other members (see our <Link href="/community-guidelines">Community Guidelines</Link>)</li>
            <li>Attempt to reverse-engineer, decompile, or extract the app&apos;s source code</li>
            <li>Scrape, copy, or redistribute Unbinge&apos;s content (including Koa conversations that aren&apos;t your own)</li>
            <li>Impersonate others, create fake accounts, or manipulate the community</li>
            <li>Use Unbinge for any illegal purpose</li>
            <li>Abuse the Koa AI (e.g., trying to extract training data, using it for non-recovery purposes at scale, or bypassing rate limits)</li>
          </ul>
          <p>Violations may result in warnings, temporary suspension, or permanent account termination. Serious violations (threats of violence, illegal content, targeted harassment) will be reported to authorities if required by law.</p>

          <h2>6. Your content</h2>
          <p>You own the content you create in Unbinge — your journal entries, check-ins, community posts, and Koa conversations. By posting in the community, you grant us a non-exclusive, royalty-free license to display your content to other members within the app. You can delete your content at any time.</p>
          <p>We may remove community content that violates our Community Guidelines, without notice if necessary to protect members.</p>

          <h2>7. Our content</h2>
          <p>Everything in Unbinge that isn&apos;t user-generated — the app design, the Koa mascot, the 15 growth stages, the orb artwork, the written content, the Koa system prompts — is owned by Unbinge. You can use it as a user, but you can&apos;t copy, modify, or redistribute it.</p>

          <h2>8. Third-party services</h2>
          <p>Unbinge relies on third-party infrastructure (Supabase, Google Cloud, Apple, Google Play, RevenueCat, Expo). Your use of Unbinge may also be subject to their terms. We are not responsible for outages or issues caused by these third parties, but we will do our best to communicate with you when they occur.</p>

          <h2>9. Warranties and disclaimers</h2>
          <p>Unbinge is provided &quot;as is.&quot; We work hard to make it reliable, accurate, and helpful, but we can&apos;t guarantee that:</p>
          <ul>
            <li>The app will always work perfectly or be available without interruption</li>
            <li>Koa&apos;s responses will always be correct, complete, or appropriate for your specific situation</li>
            <li>Insights and patterns shown in the app will be accurate indicators of your health</li>
            <li>Community content will always be safe, kind, or clinically sound</li>
          </ul>
          <p>We disclaim all implied warranties to the fullest extent permitted by law.</p>

          <h2>10. Limitation of liability</h2>
          <p>To the fullest extent permitted by law, Unbinge and its creator are not liable for any indirect, incidental, consequential, or punitive damages arising from your use of the app. Our total liability for any claim is limited to the amount you paid us in the 12 months before the claim.</p>
          <p>Nothing in these Terms limits liability for (a) death or personal injury caused by negligence, (b) fraud, or (c) any other liability that cannot be limited by law.</p>

          <h2>11. Indemnification</h2>
          <p>You agree to indemnify and hold Unbinge harmless from any claims arising from your violation of these Terms, your misuse of the app, or your content posted in the community.</p>

          <h2>12. Termination</h2>
          <p>You can stop using Unbinge and delete your account at any time. We can terminate your access if you violate these Terms or if we stop offering the service. If we stop offering the service, we&apos;ll give you at least 30 days notice and the opportunity to export your data.</p>

          <h2>13. Governing law and disputes</h2>
          <p>These Terms are governed by the laws of the State of Louisiana, United States. Any disputes will be resolved in the state or federal courts of Orleans Parish, Louisiana — except for small claims court, which you can bring in your local jurisdiction if applicable.</p>
          <p>You agree to try to resolve disputes informally by emailing <a href="mailto:support@unbingeapp.com">support@unbingeapp.com</a> first. Most issues can be fixed this way.</p>

          <h2>14. Changes to these Terms</h2>
          <p>If we make material changes, we&apos;ll notify you via email (if you have an account) and post a notice in the app. Continued use after changes means you accept them.</p>

          <h2>15. Contact</h2>
          <p>Questions or concerns about these Terms: <a href="mailto:support@unbingeapp.com">support@unbingeapp.com</a>.</p>
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
