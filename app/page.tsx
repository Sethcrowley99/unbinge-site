import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ============ NAV ============ */}
      <header className="nav">
        <div className="nav-inner container">
          <Link href="/" className="wordmark">Unbinge</Link>
          <nav className="nav-links">
            <a href="#how">How it works</a>
            <a href="#features">Features</a>
            <a href="#stages">Growth</a>
            <a href="#community">Community</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a href="#download" className="btn btn-primary btn-sm">Download</a>
        </div>
      </header>

      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true"></div>
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="badge">
              <span className="badge-dot"></span>
              Clinically-grounded · Private · Judgment-free
            </div>
            <h1 className="h1">
              Recover from binge eating, <em>gently.</em>
            </h1>
            <p className="lead">
              Unbinge is a calming companion for people healing their relationship with food. Track the moments that matter, talk to Koa when urges hit, and grow through a recovery journey that meets you where you are.
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
            <p className="hero-foot">
              $29.99/year or $49.99 lifetime · Cancel anytime · No ads, ever
            </p>
          </div>

          <div className="hero-device">
            {/* PHONE MOCKUP PLACEHOLDER: swap with actual Home tab screenshot */}
            <div className="phone phone-home">
              <div className="phone-inner">
                <div className="screenshot-placeholder">
                  <span className="placeholder-label">Home screen</span>
                  <span className="placeholder-sub">Drop screenshot here</span>
                </div>
              </div>
            </div>
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

      {/* ============ HOW IT WORKS ============ */}
      <section id="how" className="how">
        <div className="container">
          <p className="eyebrow">How it works</p>
          <h2 className="h2">A companion for the whole journey.</h2>
          <p className="section-lead">Four tools, built to work together. Each one meets a different moment in recovery.</p>
        </div>

        <div className="feature feature-alt">
          <div className="container feature-grid">
            <div className="feature-copy">
              <span className="feature-number">01</span>
              <h3 className="h3">See your progress, without the pressure.</h3>
              <p>Your home screen shows the streak you&apos;re building, the orb you&apos;re growing, and the check-ins that matter — without turning your recovery into a scoreboard. Tap the streak pill to see the full calendar. Tap the orb to see where you are on the 15-stage growth path.</p>
              <ul className="check-list">
                <li>Streak calendar with setback history</li>
                <li>15-stage garden growth (Seed → Worldtree)</li>
                <li>Daily commit + honor-check</li>
              </ul>
            </div>
            <div className="feature-device">
              {/* PHONE MOCKUP PLACEHOLDER: Home tab with orb + streak pill */}
              <div className="phone">
                <div className="phone-inner">
                  <div className="screenshot-placeholder">
                    <span className="placeholder-label">Home tab</span>
                    <span className="placeholder-sub">Orb + streak + daily commit</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="feature">
          <div className="container feature-grid feature-grid-reverse">
            <div className="feature-copy">
              <span className="feature-number">02</span>
              <h3 className="h3">Talk to Koa when the urge hits.</h3>
              <p>Koa is Unbinge&apos;s AI companion — a warm, grounded voice trained to respond to binge urges, body thoughts, and the spirals that come in between. Not a therapist. Not a chatbot with a script. Someone to think with, at 3 a.m. if that&apos;s when you need it.</p>
              <ul className="check-list">
                <li>Private by default — your chats stay yours</li>
                <li>Koa is a blue-gray koala, designed to feel calm and grounded</li>
                <li>Powered by Google Gemini with clinical guardrails</li>
              </ul>
            </div>
            <div className="feature-device">
              {/* PHONE MOCKUP PLACEHOLDER: Koa chat screen */}
              <div className="phone">
                <div className="phone-inner">
                  <div className="screenshot-placeholder">
                    <span className="placeholder-label">Koa chat</span>
                    <span className="placeholder-sub">AI companion conversation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="feature feature-alt">
          <div className="container feature-grid">
            <div className="feature-copy">
              <span className="feature-number">03</span>
              <h3 className="h3">Patterns you can actually use.</h3>
              <p>Insights shows you what&apos;s happening underneath — the times of day urges spike, the moods that precede a setback, how your hunger and fullness have shifted over weeks. Clinical data, surfaced gently, so you can recognize yourself in it instead of being graded by it.</p>
              <ul className="check-list">
                <li>Overview · Urges · Eating · Mood tabs</li>
                <li>Eight-mood tracking with body check-ins</li>
                <li>Hunger/fullness arcs, not calorie counts</li>
              </ul>
            </div>
            <div className="feature-device">
              {/* PHONE MOCKUP PLACEHOLDER: Insights tab */}
              <div className="phone">
                <div className="phone-inner">
                  <div className="screenshot-placeholder">
                    <span className="placeholder-label">Insights tab</span>
                    <span className="placeholder-sub">Mood · urges · patterns</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="feature">
          <div className="container feature-grid feature-grid-reverse">
            <div className="feature-copy">
              <span className="feature-number">04</span>
              <h3 className="h3">A quiet community that gets it.</h3>
              <p>A feed of people doing the same work — sharing wins, struggles, and advice. Moderated, anonymous by default, and built to feel like the best version of a support group, not the worst version of social media.</p>
              <ul className="check-list">
                <li>Wins · Struggles · Advice · General</li>
                <li>&quot;Support&quot; replies instead of comments</li>
                <li>Block, report, and notification controls</li>
              </ul>
            </div>
            <div className="feature-device">
              {/* PHONE MOCKUP PLACEHOLDER: Community feed */}
              <div className="phone">
                <div className="phone-inner">
                  <div className="screenshot-placeholder">
                    <span className="placeholder-label">Community feed</span>
                    <span className="placeholder-sub">Posts + support replies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ REVIEWS ============ */}
      <section id="reviews" className="reviews">
        <div className="container">
          <p className="eyebrow">Early voices</p>
          <h2 className="h2">From people testing Unbinge.</h2>
          <p className="section-lead">Quotes from beta users and clinicians who reviewed the app during TestFlight. Last names removed for privacy.</p>

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

      {/* ============ FEATURE CARDS GRID ============ */}
      <section id="features" className="feature-grid-section">
        <div className="container">
          <p className="eyebrow">Explore the features</p>
          <h2 className="h2">Everything inside Unbinge.</h2>

          <div className="feature-cards">
            <article className="feature-card">
              <div className="feature-icon icon-koa" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="20" fill="currentColor" opacity="0.15"/><circle cx="24" cy="22" r="10" fill="currentColor"/><circle cx="20" cy="20" r="1.5" fill="#fff"/><circle cx="28" cy="20" r="1.5" fill="#fff"/><path d="M20 26c1 1.5 2.5 2 4 2s3-.5 4-2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" fill="none"/></svg>
              </div>
              <h4>Koa, your AI companion</h4>
              <p>Talk to Koa 24/7. Trained to respond to binge urges, body thoughts, and hard moments without judgment.</p>
            </article>

            <article className="feature-card">
              <div className="feature-icon icon-streak" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="20" fill="currentColor" opacity="0.15"/><path d="M24 10c3 5 8 8 8 14a8 8 0 01-16 0c0-4 3-6 4-10 1 2 3 3 4 6z" fill="currentColor"/></svg>
              </div>
              <h4>Streak &amp; calendar</h4>
              <p>Build a gentle streak. See setbacks not as failures but as data. Edit your start date whenever life calls for it.</p>
            </article>

            <article className="feature-card">
              <div className="feature-icon icon-insights" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="20" fill="currentColor" opacity="0.15"/><path d="M12 32l6-8 5 4 7-10 6 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
              </div>
              <h4>Pattern insights</h4>
              <p>Urges, meals, moods, and body check-ins — charted over time so you can recognize your own rhythms.</p>
            </article>

            <article className="feature-card">
              <div className="feature-icon icon-community" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="20" fill="currentColor" opacity="0.15"/><circle cx="18" cy="17" r="4" fill="currentColor"/><path d="M11 33c0-4 3.2-7 7-7s7 3 7 7" fill="currentColor"/><circle cx="32" cy="20" r="3.5" fill="currentColor" opacity="0.6"/><path d="M26 33c0-3.5 2.8-6 6-6s6 2.5 6 6" fill="currentColor" opacity="0.6"/></svg>
              </div>
              <h4>Community</h4>
              <p>A quiet, moderated feed. Share a win, ask for advice, or just read along. You&apos;re never the only one.</p>
            </article>

            <article className="feature-card">
              <div className="feature-icon icon-growth" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="20" fill="currentColor" opacity="0.15"/><path d="M24 34V20M24 20c-3-2-6-2-8 0 1 3 4 4 8 4M24 20c3-2 6-2 8 0-1 3-4 4-8 4M24 14c-1-1-2-2-3-2 0 2 1 3 3 4 2-1 3-2 3-4-1 0-2 1-3 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
              </div>
              <h4>15-stage growth</h4>
              <p>From Seed to Worldtree. A non-numerical way to feel the distance you&apos;ve traveled without reducing it to a score.</p>
            </article>

            <article className="feature-card">
              <div className="feature-icon icon-breathe" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="20" fill="currentColor" opacity="0.15"/><circle cx="24" cy="24" r="10" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="24" cy="24" r="5" fill="currentColor"/></svg>
              </div>
              <h4>Breathe &amp; ground</h4>
              <p>Six guided exercises — box breathing, 4-7-8, coherence, and more — for the moments when the body needs a pause.</p>
            </article>
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
            <div className="stage"><div className="stage-orb s1"></div><span>Seed</span><small>Day 1</small></div>
            <div className="stage"><div className="stage-orb s2"></div><span>Sprout</span><small>Day 3</small></div>
            <div className="stage"><div className="stage-orb s3"></div><span>Sapling</span><small>Day 7</small></div>
            <div className="stage"><div className="stage-orb s4"></div><span>Rooted</span><small>Day 14</small></div>
            <div className="stage"><div className="stage-orb s5"></div><span>Budding</span><small>Day 21</small></div>
            <div className="stage"><div className="stage-orb s6"></div><span>Blooming</span><small>Day 30</small></div>
            <div className="stage"><div className="stage-orb s7"></div><span>Thriving</span><small>Day 45</small></div>
            <div className="stage"><div className="stage-orb s8"></div><span>Grove</span><small>Day 60</small></div>
            <div className="stage"><div className="stage-orb s9"></div><span>Orchard</span><small>Day 90</small></div>
            <div className="stage"><div className="stage-orb s10"></div><span>Canopy</span><small>Day 120</small></div>
            <div className="stage"><div className="stage-orb s11"></div><span>Heartwood</span><small>Day 180</small></div>
            <div className="stage"><div className="stage-orb s12"></div><span>Elder Tree</span><small>Day 270</small></div>
            <div className="stage"><div className="stage-orb s13"></div><span>Grovekeeper</span><small>Day 365</small></div>
            <div className="stage"><div className="stage-orb s14"></div><span>Sanctuary</span><small>Day 500</small></div>
            <div className="stage"><div className="stage-orb s15"></div><span>Worldtree</span><small>Day 730+</small></div>
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
              <summary>Is Unbinge free?<span className="chev">+</span></summary>
              <p>Unbinge is a paid app. We charge $29.99 per year or $49.99 one-time for lifetime access. No ads. No selling your data. No free tier that traps you in a funnel. The money goes toward building the app and keeping Koa running securely.</p>
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
              <p>The garden growth ladder goes from Seed (day 1) to Worldtree (day 730+), with 13 stages in between. Each stage has a unique orb that represents where you are on your journey. It&apos;s a non-numerical way to feel the distance you&apos;ve traveled.</p>
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
              <p>Annual subscriptions can be cancelled anytime through your Apple ID settings on iOS. Lifetime is a one-time purchase — there&apos;s nothing to cancel. Email <a href="mailto:support@unbingeapp.com">support@unbingeapp.com</a> if you need help.</p>
            </details>
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
              <li><a href="#features">Features</a></li>
              <li><a href="#stages">Growth stages</a></li>
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
