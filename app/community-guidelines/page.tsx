import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Guidelines — Unbinge",
  description: "How we keep the Unbinge community a safe, supportive, recovery-affirming space.",
};

export default function CommunityGuidelinesPage() {
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
          <h1>Community Guidelines</h1>
          <p className="doc-meta">How we keep this space kind</p>

          <blockquote>
            The Unbinge community is a place for people in recovery to share, listen, and be heard. The one rule underneath all the others is simple: <em>would you say this to someone you cared about?</em> If the answer is no, don&apos;t post it.
          </blockquote>

          <h2>What the community is for</h2>
          <p>A place to share your wins, your struggles, and your advice with other people doing the same work. A place to feel less alone at 3 a.m. A place to ask for help without being judged. A place to celebrate the quiet victories that don&apos;t make sense to anyone else.</p>

          <h2>What the community is not for</h2>
          <p>Diet tips. Weight-loss strategies. Before-and-after photos. Meal plans. &quot;What I eat in a day&quot; content. Calorie counting. Tips for restricting, purging, compensating, or concealing. Body comparisons. Food moralizing. Recovery is not a weight-loss journey, and this community is not the place to treat it like one.</p>

          <h2>Our guidelines</h2>

          <h3>1. No numbers that can harm</h3>
          <p>Don&apos;t share weights, heights, BMIs, clothing sizes, calorie counts, macro numbers, or food weights. Even when framed as progress, these numbers can trigger spirals for other members who are in earlier stages of recovery or whose eating disorder is more restrictive than yours.</p>

          <h3>2. No pro-ED content</h3>
          <p>Content that glorifies, instructs, or encourages disordered eating — restriction, purging, compensatory exercise, &quot;thinspo,&quot; &quot;meanspo,&quot; fasting challenges — will be removed immediately and may result in a ban. This includes content framed as cautionary tales that still contain how-to detail.</p>

          <h3>3. No food photos or food lists</h3>
          <p>We ask members to avoid posting photos of food or detailed &quot;what I ate&quot; lists. The reason is simple: a meal that feels safe for one person can be a trigger for another, and we can&apos;t pre-screen every image. Describe how you felt, not what was on your plate.</p>

          <h3>4. No comparing bodies</h3>
          <p>Don&apos;t post photos of yourself or others for physique comparison. Don&apos;t ask other members for body commentary. Don&apos;t comment on anyone&apos;s appearance, even as a compliment — in recovery spaces, &quot;you look healthy&quot; lands differently than it&apos;s meant.</p>

          <h3>5. Be kind, even in disagreement</h3>
          <p>It&apos;s okay to disagree with someone&apos;s approach, question something clinically shaky, or say &quot;that didn&apos;t work for me.&quot; It&apos;s not okay to mock, shame, or pile on. Disagree with ideas; don&apos;t attack people.</p>

          <h3>6. Respect privacy</h3>
          <p>Don&apos;t share identifying information about yourself or others. Don&apos;t screenshot posts and share them outside Unbinge. What&apos;s said here stays here.</p>

          <h3>7. No selling, recruiting, or promoting</h3>
          <p>The community is not a marketplace. Don&apos;t promote products, programs, coaches, supplements, MLMs, or your own offerings. Don&apos;t recruit members for other services. Don&apos;t promote treatment centers, therapists, or clinical programs without permission.</p>

          <h3>8. No content that endangers children</h3>
          <p>Any content that sexualizes, targets, or endangers minors will be removed immediately, the account permanently banned, and reported to authorities.</p>

          <h3>9. No harassment, hate, or discrimination</h3>
          <p>Eating disorders affect every body, every identity, every demographic. Racism, sexism, homophobia, transphobia, ableism, fatphobia, and hate speech of any kind are not welcome here.</p>

          <h3>10. Crisis content needs care</h3>
          <p>If you&apos;re in crisis, please reach out to a crisis line (988 in the US, or 1-866-662-1235 for the Alliance for Eating Disorders) — not a community post. We love that you feel safe here, but we&apos;re not equipped to be your only support in a crisis, and other members aren&apos;t either. If you see a post from someone in acute distress, please report it so our team can reach out and offer resources.</p>

          <h2>What we do when guidelines are broken</h2>
          <p>Our approach scales with severity:</p>
          <ul>
            <li><strong>Gentle correction</strong> — for accidental slips or unclear language, we may simply remove the content and send a note explaining why.</li>
            <li><strong>Warning</strong> — for repeated or more deliberate violations.</li>
            <li><strong>Temporary suspension</strong> — typically 7 or 14 days, for patterns of harm.</li>
            <li><strong>Permanent ban</strong> — for severe violations, harassment, pro-ED content, or continued violations after warnings.</li>
          </ul>
          <p>Serious violations (threats of violence, illegal content, child safety issues) are acted on immediately and reported to authorities if required.</p>

          <h2>Reporting and blocking</h2>
          <p>See something that violates these guidelines? Tap the three-dot menu on any post or reply and select <strong>Report</strong>. Reports are anonymous. A human on our team reviews every one.</p>
          <p>You can also block anyone at any time — their posts and replies won&apos;t show up in your feed, and they won&apos;t be able to see yours.</p>

          <h2>A note on Koa (AI) content</h2>
          <p>Please don&apos;t post screenshots of your Koa conversations in the community, even flattering ones. Your Koa conversations are private, and publishing them — even partially — can feel like a breach of that space for other members who expect their own conversations to stay private.</p>

          <h2>A note for clinicians</h2>
          <p>If you&apos;re a therapist, dietitian, or other clinician using Unbinge, you&apos;re welcome here — but as a peer, not a professional. Don&apos;t offer clinical assessments, diagnoses, or treatment recommendations to other members. Recommend professional support when appropriate, then step back. If you&apos;d like to collaborate with us in a professional capacity, email <a href="mailto:support@unbingeapp.com">support@unbingeapp.com</a>.</p>

          <hr />

          <blockquote>
            These guidelines will change as the community grows. If there&apos;s a situation we haven&apos;t covered, or you think we got something wrong, email us. We&apos;re building this with you, not for you.
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
