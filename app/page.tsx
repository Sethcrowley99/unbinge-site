import Link from "next/link";
import Image from "next/image";
import AnimatedOrb from "./components/AnimatedOrb";

const STAGES: { name: string; day: string; colors: string[]; glow?: string }[] = [
  { name: "Seed",        day: "Day 1",    colors: ["#E8D08A"] },
  { name: "Sprout",      day: "Day 3",    colors: ["#A8D079"] },
  { name: "Sapling",     day: "Day 7",    colors: ["#6FC26B"] },
  { name: "Rooted",      day: "Day 14",   colors: ["#3FA776"] },
  { name: "Budding",     day: "Day 21",   colors: ["#F19670"] },
  { name: "Blooming",    day: "Day 30",   colors: ["#E8603F"] },
  { name: "Thriving",    day: "Day 45",   colors: ["#7DBEDC"] },
  { name: "Grove",       day: "Day 60",   colors: ["#3E88B8"] },
  { name: "Orchard",     day: "Day 90",   colors: ["#1F6487"] },
  { name: "Canopy",      day: "Day 120",  colors: ["#7A8DC9", "#B57BAE"] },
  { name: "Heartwood",   day: "Day 180",  colors: ["#9B7BC9", "#C98CD1", "#7A8DC9"] },
  { name: "Elder Tree",  day: "Day 240",  colors: ["#C97BC9", "#E8956A", "#C98CD1"] },
  { name: "Grovekeeper", day: "Day 300",  colors: ["#E8B56A", "#F19670", "#E8D08A"] },
  { name: "Sanctuary",   day: "Day 340",  colors: ["#E8D08A", "#A8D079", "#7DBEDC", "#F19670"] },
  {
    name: "Worldtree",
    day: "Day 365+",
    colors: ["#89B9D0", "#E8956A", "#5EAD82", "#B87BAE", "#F5D76E", "#7BA7BC"],
    glow: "rgba(232, 149, 106, 0.55)",
  },
];

export default function Home() {
  return (
    <>
      {/* ============ NAV ============ */}
      <header className="nav">
        <div className="nav-inner container">
          <Link href="/" className="wordmark">Unbinge</Link>
          <nav className="nav-links">
            <a href="#how">How it works</a>
            <a href="#stages">Growth</a>
            <a href="#community">Community</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a href="#download" className="btn btn-primary btn-sm">Download</a>
        </div>
      </header>

      {/* ============ HERO — image-driven ============ */}
      <section className="hero-v3">
        <div className="hero-bg" aria-hidden="true"></div>
        <div className="container hero-v3-inner">
          <div className="hero-v3-copy">
            <div className="badge">
              <span className="badge-dot"></span>
              Clinically-grounded · Private · Judgment-free
            </div>
            <h1 className="h1">
              Recover from binge eating, <em>gently.</em>
            </h1>
            <p className="lead">
              A calming companion for people healing their relationship with food. Track the moments that matter, talk to Koa when urges hit, and grow through a recovery journey that meets you where you are.
            </p>
            <div className="hero-ctas">
              <a href="#download" className="store-badge" aria-label="Download on the App Store">
                <svg width="135" height="40" viewBox="0 0 135 40" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
                  <rect width="135" height="40" rx="7" fill="#0A1F2E"/>
                  <text x="30" y="16" fontFamily="sans-serif" fontSize="8" fill="#F5F0EB" letterSpacing="0.3">Download on the</text>
                  <text x="30" y="30" fontFamily="sans-serif" fontSize="15" fontWeight="700" fill="#F5F0EB">App Store</text>
                  <path d="M18 12c0-1 .5-2 1.5-2.5-.5-1-1.5-1.5-2.5-1.5-1 0-2 .5-2.5.5s-1.5-.5-2.5-.5c-1.5 0-3 1-3.5 2.5-1.5 2.5-.5 6.5 1 8.5.5 1 1.5 2 2.5 2s1.5-.5 2.5-.5 1.5.5 2.5.5 2-1 2.5-2c.5-.5 1-1.5 1-2.5-1.5-.5-2.5-2-2.5-4z" fill="#F5F0EB"/>
                </svg>
              </a>
              <a href="#download" className="store-badge" aria-label="Get it on Google Play">
                <svg width="135" height="40" viewBox="0 0 135 40" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
                  <rect width="135" height="40" rx="7" fill="#0A1F2E"/>
                  <text x="30" y="16" fontFamily="sans-serif" fontSize="7" fill="#F5F0EB" letterSpacing="0.3">GET IT ON</text>
                  <text x="30" y="30" fontFamily="sans-serif" fontSize="14" fontWeight="700" fill="#F5F0EB">Google Play</text>
                  <path d="M10 10v20l10-10-10-10z" fill="#E8956A"/>
                  <path d="M10 10l10 10 4-4-10-6-4 0z" fill="#5EAD82" opacity="0.9"/>
                  <path d="M10 30l10-10 4 4-10 6-4 0z" fill="#89B9D0" opacity="0.9"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="hero-v3-image">
            <Image
              src="/listing/01_Stop_Binge_Eating.png"
              alt="Unbinge app home screen — Stop binge eating, for good, without shame"
              width={1290}
              height={2796}
              priority
              className="listing-image"
            />
          </div>
        </div>
      </section>

      {/* ============ MISSION ============ */}
      <section className="mission">
        <div className="container">
          <p className="mission-copy">
            We built Unbinge for the quiet fight — the one that happens at the pantry door, in the car after work, at 2 a.m. when shame is loud. This is a soft place to land and a steady place to grow.
          </p>
        </div>
      </section>

      {/* ============ FEATURE SHOWCASE — image-driven ============ */}
      <section id="how" className="showcase">
        <div className="container">
          <p className="eyebrow">Inside Unbinge</p>
          <h2 className="h2">Four tools, built to work together.</h2>
          <p className="section-lead">Each one meets a different moment in recovery.</p>

          <div className="feature-row">
            <div className="feature-image">
              <Image
                src="/listing/04_Talk_to_Koa.png"
                alt="Talk to Koa, day or night — always here, never judging"
                width={1290}
                height={2796}
                className="listing-image"
              />
            </div>
            <div className="feature-copy">
              <p className="eyebrow">Companion</p>
              <h2 className="h2">Talk to Koa, day or night.</h2>
              <p>Koa is always one tap away — a calm presence when urges hit, when shame gets loud, or when you just need someone to name what you&apos;re feeling. Not a therapist, not a coach. A steady voice that meets you where you are and never judges.</p>
            </div>
          </div>

          <div className="feature-row reverse">
            <div className="feature-image">
              <Image
                src="/listing/02_Understand_Your_Patterns.png"
                alt="Understand your patterns — see the why behind the urge"
                width={1290}
                height={2796}
                className="listing-image"
              />
            </div>
            <div className="feature-copy">
              <p className="eyebrow">Patterns</p>
              <h2 className="h2">Understand the why behind the urge.</h2>
              <p>Every mood check-in and urge log quietly builds a picture of your recovery. Unbinge surfaces the patterns you can&apos;t see from inside the moment — the times of day, the feelings, the triggers — so you can meet them with awareness next time instead of shame.</p>
            </div>
          </div>

          <div className="feature-row">
            <div className="feature-image">
              <Image
                src="/listing/05_Youre_Not_Alone.png"
                alt="You're not alone — a community without diet talk"
                width={1290}
                height={2796}
                className="listing-image"
              />
            </div>
            <div className="feature-copy">
              <p className="eyebrow">Community</p>
              <h2 className="h2">You&apos;re not alone in this.</h2>
              <p>A small, private community of people walking the same path. No diet talk, no before-and-afters, no performance. Just honest posts from people who get it — and the quiet relief of knowing someone else had a hard Tuesday too.</p>
            </div>
          </div>

          <div className="feature-row reverse">
            <div className="feature-image">
              <Image
                src="/listing/06_Recovery_That_Sticks.png"
                alt="Recovery that sticks — built to walk with you for life"
                width={1290}
                height={2796}
                className="listing-image"
              />
            </div>
            <div className="feature-copy">
              <p className="eyebrow">Journey</p>
              <h2 className="h2">Recovery that&apos;s built to last.</h2>
              <p>Fifteen stages of growth, a garden that grows with you, and tools designed for the long arc of recovery — not a 30-day challenge. Unbinge is built to walk with you for as long as you need it, at whatever pace your healing actually takes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ REVIEWS ============ */}
      <section id="reviews" className="reviews">
        <div className="container">
          <p className="eyebrow">Early voices</p>
          <h2 className="h2">From people testing Unbinge.</h2>
          <p className="section-lead">Quotes from beta users who reviewed the app during TestFlight. Last names removed for privacy.</p>

          <div className="review-grid">
            <figure className="review-card">
              <div className="stars">★★★★★</div>
              <blockquote>I&apos;ve downloaded every recovery app I could find. Most of them made me feel worse — like I was being tracked, graded, or sold something. Unbinge is the first one that actually feels like it&apos;s on my side.</blockquote>
              <figcaption>
                <span className="avatar" aria-hidden="true">R</span>
                <div><strong>Rachel</strong><span>Beta user</span></div>
              </figcaption>
            </figure>

            <figure className="review-card">
              <div className="stars">★★★★★</div>
              <blockquote>The mood check-in is the feature that caught me. I didn&apos;t realize how much my urges lined up with specific feelings until I saw it laid out. That one insight changed how I think about my recovery.</blockquote>
              <figcaption>
                <span className="avatar" aria-hidden="true">M</span>
                <div><strong>Maya</strong><span>Beta user</span></div>
              </figcaption>
            </figure>

            <figure className="review-card">
              <div className="stars">★★★★★</div>
              <blockquote>Koa doesn&apos;t try to fix me. It just sits with me when I&apos;m spiraling and helps me name what I&apos;m feeling. Honestly the most helpful middle-of-the-night conversation I&apos;ve had in years.</blockquote>
              <figcaption>
                <span className="avatar" aria-hidden="true">J</span>
                <div><strong>Jordan</strong><span>Beta user</span></div>
              </figcaption>
            </figure>

            <figure className="review-card">
              <div className="stars">★★★★★</div>
              <blockquote>I love that it doesn&apos;t show me calories or weight. I&apos;ve never used a recovery tool that trusted me to know my own body. This one does.</blockquote>
              <figcaption>
                <span className="avatar" aria-hidden="true">S</span>
                <div><strong>Sam</strong><span>Beta user</span></div>
              </figcaption>
            </figure>

            <figure className="review-card">
              <div className="stars">★★★★★</div>
              <blockquote>The design alone made me stay. Soft colors, no red numbers screaming at me, no streak I feel terrified to break. It feels like someone actually thought about how recovery works.</blockquote>
              <figcaption>
                <span className="avatar" aria-hidden="true">A</span>
                <div><strong>Ava</strong><span>Beta user</span></div>
              </figcaption>
            </figure>

            <figure className="review-card">
              <div className="stars">★★★★★</div>
              <blockquote>Having somewhere to log an urge without logging what I ate afterward was the whole thing for me. Just the tracking made the urges quieter.</blockquote>
              <figcaption>
                <span className="avatar" aria-hidden="true">T</span>
                <div><strong>Taylor</strong><span>Beta user</span></div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ============ GROWTH STAGES ============ */}
      <section id="stages" className="stages">
        <div className="container">
          <p className="eyebrow">The journey</p>
          <h2 className="h2">Fifteen stages of growing.</h2>
          <p className="section-lead">Recovery isn&apos;t linear, but growth is real. Each stage of your garden reflects the quiet work you&apos;re putting in.</p>

          <div className="stage-grid">
            {STAGES.map((stage, i) => (
              <div key={stage.name} className="stage">
                <AnimatedOrb id={`orb-${i + 1}`} colors={stage.colors} glow={stage.glow} />
                <span>{stage.name}</span>
                <small>{stage.day}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BENEFITS ============ */}
      <section className="benefits">
        <div className="container">
          <p className="eyebrow">What recovery can feel like</p>
          <h2 className="h2">The quiet life on the other side.</h2>
          <p className="section-lead">Every recovery is different. These are the changes beta users describe most often — not promises, just patterns.</p>

          <ul className="benefit-list">
            <li><span className="benefit-ico">⟡</span> A calmer relationship with food</li>
            <li><span className="benefit-ico">⟡</span> Fewer shame spirals after eating</li>
            <li><span className="benefit-ico">⟡</span> Noticing hunger &amp; fullness again</li>
            <li><span className="benefit-ico">⟡</span> More space between urge and action</li>
            <li><span className="benefit-ico">⟡</span> Kinder body thoughts</li>
            <li><span className="benefit-ico">⟡</span> Less time lost to food stress</li>
            <li><span className="benefit-ico">⟡</span> Better sleep and energy</li>
            <li><span className="benefit-ico">⟡</span> A steadier mood</li>
          </ul>

          <p className="benefit-foot">
            Unbinge is a recovery support tool, not medical care. If you&apos;re in crisis or think you may have an eating disorder, please reach out to the <a href="https://allianceforeatingdisorders.com/" target="_blank" rel="noopener noreferrer">National Alliance for Eating Disorders</a>.
          </p>
        </div>
      </section>

      {/* ============ COMMUNITY STORIES ============ */}
      <section id="community" className="community-section">
        <div className="container">
          <p className="eyebrow">Real stories</p>
          <h2 className="h2">From inside the community.</h2>
          <p className="section-lead">Posts shared by members of the Unbinge community. Names changed, details preserved with permission.</p>

          <div className="story-grid">
            <article className="story-card">
              <div className="story-head">
                <span className="avatar" aria-hidden="true">E</span>
                <div>
                  <strong>Ellie</strong>
                  <span className="story-meta">Day 42 · Budding</span>
                </div>
              </div>
              <h4>Three weeks without a binge.</h4>
              <p>Haven&apos;t said that sentence since I was seventeen. I don&apos;t feel &quot;fixed.&quot; I just feel like I can sit at the table and eat dinner and not spend the rest of the night spiraling. That&apos;s enough for now.</p>
            </article>

            <article className="story-card">
              <div className="story-head">
                <span className="avatar" aria-hidden="true">K</span>
                <div>
                  <strong>Kai</strong>
                  <span className="story-meta">Day 88 · Orchard</span>
                </div>
              </div>
              <h4>The 3 a.m. urge I didn&apos;t act on.</h4>
              <p>Opened Koa instead. We talked for twenty minutes about what was actually under the urge (not hunger — loneliness). Went back to sleep. First time I&apos;ve ever interrupted the cycle before acting on it.</p>
            </article>

            <article className="story-card">
              <div className="story-head">
                <span className="avatar" aria-hidden="true">N</span>
                <div>
                  <strong>Noor</strong>
                  <span className="story-meta">Day 156 · Heartwood</span>
                </div>
              </div>
              <h4>My therapist asked what changed.</h4>
              <p>I told her I stopped trying to fix my eating and started paying attention to it. Unbinge is the thing that taught me how. Seeing patterns without being judged by them changed everything for me.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section id="faq" className="faq">
        <div className="container faq-container">
          <p className="eyebrow">Questions</p>
          <h2 className="h2">Before you download.</h2>

          <div className="faq-list">
            <details>
              <summary>What is Unbinge?<span className="chev">+</span></summary>
              <p>Unbinge is a mobile app for people recovering from binge eating. It combines a daily commit &amp; streak system, an AI companion named Koa, pattern insights across urges and moods, a private community feed, and a 15-stage growth journey. It&apos;s designed to be a companion — not a replacement for therapy or medical care.</p>
            </details>
            <details>
              <summary>Is it clinically grounded?<span className="chev">+</span></summary>
              <p>Every feature is designed around principles from evidence-based binge eating treatment — particularly enhanced cognitive behavioral therapy (CBT-E), dialectical behavior therapy (DBT) skills, and intuitive eating. Unbinge is not therapy and does not diagnose. It&apos;s a support tool that works alongside clinical care.</p>
            </details>
            <details>
              <summary>Does Unbinge count calories?<span className="chev">+</span></summary>
              <p>No. We never show calorie counts, macros, weight, or numeric food data. Binge eating recovery does not benefit from those metrics for most people, and for many, they actively harm recovery. We track hunger, fullness, mood, and urges instead.</p>
            </details>
            <details>
              <summary>Who is Koa?<span className="chev">+</span></summary>
              <p>Koa is Unbinge&apos;s AI companion — a calm, blue-gray koala built on Google Gemini with clinical guardrails written specifically for eating disorder recovery. Koa won&apos;t ever give you a meal plan, tell you to lose weight, or shame you. Koa is there to listen, reflect, and help you name what&apos;s actually happening underneath.</p>
            </details>
            <details>
              <summary>Is my data private?<span className="chev">+</span></summary>
              <p>Yes. Your journal entries, check-ins, and Koa conversations are yours. We don&apos;t train AI models on your data. We don&apos;t sell to advertisers. See our <Link href="/privacy">Privacy Policy</Link> for the full breakdown.</p>
            </details>
            <details>
              <summary>Is there a panic / urge button?<span className="chev">+</span></summary>
              <p>Yes — Koa is always one tap away from any screen. When an urge hits, you can open Koa, log the urge in your Insights, or do a guided breathing exercise from the Toolkit. We don&apos;t gate any of these behind a paywall once you&apos;re subscribed.</p>
            </details>
            <details>
              <summary>How does the streak work?<span className="chev">+</span></summary>
              <p>A streak counts days since your last binge — defined by you, not us. If you have a setback, you can edit your start date at any time. We don&apos;t treat setbacks as failures. They&apos;re data. The streak is a mirror, not a punishment.</p>
            </details>
            <details>
              <summary>What are the 15 growth stages?<span className="chev">+</span></summary>
              <p>The garden growth ladder goes from Seed (day 1) to Worldtree (day 365+), with 13 stages in between. Each stage has a unique orb that represents where you are on your journey. It&apos;s a non-numerical way to feel the distance you&apos;ve traveled.</p>
            </details>
            <details>
              <summary>Can Unbinge replace my therapist?<span className="chev">+</span></summary>
              <p>No, and we don&apos;t want to. Unbinge is built to work <em>alongside</em> clinical care. If you&apos;re not currently in treatment and you think you may have an eating disorder, please reach out to the <a href="https://allianceforeatingdisorders.com/" target="_blank" rel="noopener noreferrer">National Alliance for Eating Disorders</a>.</p>
            </details>
            <details>
              <summary>What platforms is Unbinge on?<span className="chev">+</span></summary>
              <p>Unbinge is available on iOS via the App Store. An Android version is planned for 2026.</p>
            </details>
            <details>
              <summary>How do I cancel my subscription?<span className="chev">+</span></summary>
              <p>Subscriptions can be cancelled anytime through your Apple ID settings on iOS or your Google Play account. Email <a href="mailto:support@unbingeapp.com">support@unbingeapp.com</a> if you need help.</p>
            </details>
          </div>
        </div>
      </section>

      {/* ============ RELIEF MOMENT (image 03 as closing beat) ============ */}
      <section className="relief-moment">
        <div className="container">
          <div className="relief-inner">
            <div className="relief-copy">
              <p className="eyebrow">For the hardest moments</p>
              <h2 className="h2">Tools that meet you where you are.</h2>
              <p className="lead">Grounding exercises. Soothing soundscapes. An urge tracker that helps you break the cycle. When the moment gets big, Unbinge gets closer — not louder.</p>
            </div>
            <div className="relief-image">
              <Image
                src="/listing/03_Relief_When_Urges_Hit.png"
                alt="Relief when urges hit — tools for the hardest moments"
                width={1290}
                height={2796}
                className="listing-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section id="download" className="final-cta">
        <div className="container">
          <h2 className="h1">Recovery, gently.</h2>
          <p className="lead">Unbinge is ready when you are. Your first day is waiting.</p>
          <div className="hero-ctas">
            <a href="#" className="store-badge" aria-label="Download on the App Store">
              <svg width="135" height="40" viewBox="0 0 135 40" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
                <rect width="135" height="40" rx="7" fill="#0A1F2E"/>
                <text x="30" y="16" fontFamily="sans-serif" fontSize="8" fill="#F5F0EB" letterSpacing="0.3">Download on the</text>
                <text x="30" y="30" fontFamily="sans-serif" fontSize="15" fontWeight="700" fill="#F5F0EB">App Store</text>
                <path d="M18 12c0-1 .5-2 1.5-2.5-.5-1-1.5-1.5-2.5-1.5-1 0-2 .5-2.5.5s-1.5-.5-2.5-.5c-1.5 0-3 1-3.5 2.5-1.5 2.5-.5 6.5 1 8.5.5 1 1.5 2 2.5 2s1.5-.5 2.5-.5 1.5.5 2.5.5 2-1 2.5-2c.5-.5 1-1.5 1-2.5-1.5-.5-2.5-2-2.5-4z" fill="#F5F0EB"/>
              </svg>
            </a>
            <a href="#" className="store-badge" aria-label="Get it on Google Play">
              <svg width="135" height="40" viewBox="0 0 135 40" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
                <rect width="135" height="40" rx="7" fill="#0A1F2E"/>
                <text x="30" y="16" fontFamily="sans-serif" fontSize="7" fill="#F5F0EB" letterSpacing="0.3">GET IT ON</text>
                <text x="30" y="30" fontFamily="sans-serif" fontSize="14" fontWeight="700" fill="#F5F0EB">Google Play</text>
                <path d="M10 10v20l10-10-10-10z" fill="#E8956A"/>
                <path d="M10 10l10 10 4-4-10-6-4 0z" fill="#5EAD82" opacity="0.9"/>
                <path d="M10 30l10-10 4 4-10 6-4 0z" fill="#89B9D0" opacity="0.9"/>
              </svg>
            </a>
          </div>
          <p className="cta-signoff">— The Unbinge team</p>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Link href="/" className="wordmark wordmark-foot">Unbinge</Link>
            <p>A calming, clinically-grounded companion for binge eating recovery.</p>
          </div>
          <div>
            <h5>Product</h5>
            <ul>
              <li><a href="#how">How it works</a></li>
              <li><a href="#stages">Growth stages</a></li>
              <li><a href="#community">Community</a></li>
              <li><a href="#faq">FAQ</a></li>
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
