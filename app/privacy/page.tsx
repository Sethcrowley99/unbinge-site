import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Unbinge",
};

export default function Privacy() {
  return (
    <main>
      <h1>Privacy Policy</h1>

      <p>
        <strong>Last updated: April 13, 2026</strong>
      </p>

      <p>
        Unbinge is an eating disorder recovery app built by Seth Mitchell
        Crowley, a sole proprietor based in Austin, Texas (&ldquo;we,&rdquo;
        &ldquo;us,&rdquo; or &ldquo;Unbinge&rdquo;). This policy explains what
        information we collect, why we collect it, and the choices you have.
        We&rsquo;ve tried to write it in plain language because you deserve to
        understand what&rsquo;s happening with your data &mdash; especially data
        this personal.
      </p>

      <p>
        If anything here is unclear, email us at{" "}
        <strong>
          <a href="mailto:support@unbingeapp.com">support@unbingeapp.com</a>
        </strong>{" "}
        and we&rsquo;ll explain.
      </p>

      <hr />

      <h2>The short version</h2>

      <ul>
        <li>
          You can use Unbinge as a guest without giving us any personal
          information at all. Your data stays on your device.
        </li>
        <li>
          If you create an account, we store your recovery data (journal entries,
          mood logs, urge logs, etc.) securely so you can access it across
          devices.
        </li>
        <li>
          When you chat with Koa, our AI companion, your messages are sent to
          Google&rsquo;s Gemini API for processing. Google sees those messages.
        </li>
        <li>
          We do not sell your data. We do not show you ads. We do not share your
          data with data brokers.
        </li>
        <li>
          You can delete your account and all your data at any time from the
          Profile tab.
        </li>
        <li>
          We use Apple&rsquo;s App Store for payments. We never see your card
          details.
        </li>
      </ul>

      <hr />

      <h2>1. Who this policy applies to</h2>

      <p>
        This policy covers the Unbinge mobile app and the website at
        unbingeapp.com. It applies to everyone who uses the app or the site,
        whether you&rsquo;re signed in, browsing as a guest, or just visiting
        the marketing page.
      </p>

      <h2>2. Information we collect</h2>

      <p>
        We collect three kinds of information: what you give us, what the app
        generates as you use it, and what&rsquo;s automatically logged by the
        systems we rely on.
      </p>

      <h3>2.1 Information you give us directly</h3>

      <p>
        If you create an account, we ask for an{" "}
        <strong>email address and password</strong>. Your password is hashed
        &mdash; we can&rsquo;t see it and neither can anyone else.
      </p>

      <p>During onboarding, you may optionally share:</p>

      <ul>
        <li>
          Your <strong>first name</strong> (used to personalize the app)
        </li>
        <li>
          Your <strong>age</strong> (used for age-appropriate content)
        </li>
        <li>
          Answers to a recovery <strong>self-assessment quiz</strong>
        </li>
        <li>
          Your <strong>reasons for recovery</strong> and recovery goals
        </li>
      </ul>

      <p>
        You control all of this. You can skip any field and edit any answer later
        from the Profile tab.
      </p>

      <h3>2.2 Information the app generates as you use it</h3>

      <p>
        Unbinge is designed to help you track and understand your recovery, which
        means the app creates a lot of personal information as you interact with
        it. This includes:
      </p>

      <ul>
        <li>
          <strong>Journal entries</strong> you write
        </li>
        <li>
          <strong>Urge logs</strong> &mdash; intensity, triggers, location,
          coping response
        </li>
        <li>
          <strong>Mood check-ins</strong> and body relationship responses
        </li>
        <li>
          <strong>Hunger and fullness ratings</strong> before and after meals
        </li>
        <li>
          <strong>Meal logs</strong> (whether you ate, skipped, or are currently
          eating)
        </li>
        <li>
          <strong>Daily commitments</strong> and whether you kept them
        </li>
        <li>
          <strong>Setback events</strong> and streak history
        </li>
        <li>
          <strong>Lesson progress</strong> through the Learning Center curriculum
        </li>
        <li>
          <strong>Recovery Points</strong> earned for engagement
        </li>
        <li>
          <strong>Achievements</strong> unlocked
        </li>
        <li>
          <strong>Community posts, comments, likes</strong> (if you participate
          in the community)
        </li>
        <li>
          <strong>Game scores</strong> from the distraction games
        </li>
      </ul>

      <p>
        This data is among the most sensitive information the app holds. We treat
        it that way.
      </p>

      <h3>2.3 Information collected automatically</h3>

      <p>When you use the app, we automatically collect:</p>

      <ul>
        <li>
          <strong>Device information</strong> &mdash; device model, operating
          system version, app version &mdash; through standard iOS APIs. We use
          this to debug issues and make sure the app works on your device.
        </li>
        <li>
          <strong>Crash logs</strong> &mdash; if the app crashes, iOS sends us a
          report so we can fix the bug. These reports don&rsquo;t contain your
          personal data.
        </li>
        <li>
          <strong>Purchase information</strong> &mdash; if you subscribe,
          RevenueCat (our purchase infrastructure provider) tracks which
          subscription you bought, when, and whether it&rsquo;s still active.
          Apple handles the actual payment.
        </li>
      </ul>

      <p>
        We <strong>do not</strong> use any third-party analytics SDKs (no
        Mixpanel, Amplitude, PostHog, Google Analytics, Segment, or similar). We
        do not track your activity across other apps or websites. We do not
        fingerprint your device. We do not use advertising identifiers.
      </p>

      <h2>3. How we use your information</h2>

      <p>
        We use your information for exactly these purposes, and nothing else:
      </p>

      <ul>
        <li>
          <strong>To run the app.</strong> Your recovery data is what makes
          Unbinge useful. We store it so you can see your progress, patterns, and
          history.
        </li>
        <li>
          <strong>To sync across devices.</strong> If you create an account and
          install Unbinge on another device, your data comes with you.
        </li>
        <li>
          <strong>To personalize your experience.</strong> Your name, recovery
          date, and quiz answers make the app feel like yours.
        </li>
        <li>
          <strong>To respond to you.</strong> If you email support, we use your
          email address to reply.
        </li>
        <li>
          <strong>To fix bugs and improve the app.</strong> Crash logs and
          anonymized usage patterns help us make Unbinge better.
        </li>
        <li>
          <strong>To process payments.</strong> If you subscribe, we use
          RevenueCat and Apple to handle the transaction.
        </li>
        <li>
          <strong>To protect the community.</strong> If you report abusive posts,
          we use the information you provide to take action.
        </li>
      </ul>

      <p>
        We do not use your data to train AI models. We do not use it for
        advertising. We do not profile you. We do not sell it.
      </p>

      <h2>4. Koa and Google Gemini</h2>

      <p>
        Koa is Unbinge&rsquo;s AI companion. Koa uses Google&rsquo;s Gemini 2.5
        Flash model to generate responses.
      </p>

      <p>
        <strong>
          When you send a message to Koa, that message is transmitted to
          Google&rsquo;s Gemini API for processing.
        </strong>{" "}
        Google then returns a response which we show you in the chat. We also
        store the conversation on our server so you can come back to it.
      </p>

      <p>
        Google processes these messages according to their{" "}
        <a href="https://ai.google.dev/gemini-api/terms">
          Gemini API terms of service
        </a>{" "}
        and{" "}
        <a href="https://policies.google.com/terms/generative-ai/use-policy">
          Generative AI Prohibited Use Policy
        </a>
        . As of this writing, Google states that data sent to the paid Gemini API
        is not used to train their models. We pay for the API, which means your
        messages fall under these protections.
      </p>

      <p>
        Because Koa conversations often involve sensitive topics &mdash; binge
        eating, body image, urges, emotional distress &mdash; we want to be
        completely clear:{" "}
        <strong>your Koa conversations are not fully private</strong>. They pass
        through Google&rsquo;s servers. If you want to share something
        you&rsquo;re not comfortable with Google processing, share it in a
        journal entry instead. Journal entries never leave our infrastructure.
      </p>

      <p>
        Koa is not a therapist. Koa is not a licensed medical or mental health
        provider. Do not use Koa for medical advice, diagnosis, or crisis
        support. See the medical disclaimer in our Terms of Service.
      </p>

      <h2>5. Guest mode</h2>

      <p>
        Unbinge supports a guest mode where you can use the app without creating
        an account. In guest mode:
      </p>

      <ul>
        <li>Your data is stored on your device in local storage.</li>
        <li>
          Most of your data is also stored on our servers under a generic guest
          identifier (<code>00000000-0000-0000-0000-000000000000</code>) so
          features like the community and Koa work. This data is not tied to any
          personal identity.
        </li>
        <li>When you close and reopen the app, you remain the same guest.</li>
        <li>
          If you later create an account, we transfer your guest data to your new
          account.
        </li>
        <li>
          You can clear all guest data at any time by tapping &ldquo;Reset All
          Data&rdquo; in Profile &rarr; Settings &rarr; Account.
        </li>
      </ul>

      <p>
        Guest mode is the lowest-data way to use Unbinge. If privacy is a
        priority for you, use guest mode and turn off Koa (the one feature that
        transmits data to a third party).
      </p>

      <h2>6. Who we share data with</h2>

      <p>
        We share your data with a small number of service providers who help us
        run the app. Each of them is contractually required to protect your data
        and to use it only for the purposes we&rsquo;ve authorized.
      </p>

      <table>
        <thead>
          <tr>
            <th>Provider</th>
            <th>What they do</th>
            <th>What they see</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Supabase</strong>
            </td>
            <td>Database and authentication</td>
            <td>All account data, recovery logs, community content</td>
          </tr>
          <tr>
            <td>
              <strong>Google (Gemini API)</strong>
            </td>
            <td>AI chat processing</td>
            <td>The content of your Koa conversations</td>
          </tr>
          <tr>
            <td>
              <strong>RevenueCat</strong>
            </td>
            <td>Subscription management</td>
            <td>Purchase history, anonymized user ID</td>
          </tr>
          <tr>
            <td>
              <strong>Apple</strong>
            </td>
            <td>Payment processing and app distribution</td>
            <td>Payment information (we never see it), crash reports</td>
          </tr>
          <tr>
            <td>
              <strong>Vercel</strong>
            </td>
            <td>Website hosting</td>
            <td>Website visits (no app data)</td>
          </tr>
        </tbody>
      </table>

      <p>
        We do not share your data with advertisers, data brokers, marketers, or
        researchers. We do not sell it. We do not rent it. If we ever want to do
        any of those things, we will ask you first in an unmistakable way, and
        you will be able to say no.
      </p>

      <p>
        We may disclose data if we are legally required to &mdash; for example,
        in response to a valid subpoena or court order. We will resist overly
        broad requests and will notify you if legally permitted to do so.
      </p>

      <p>
        If Unbinge is ever acquired or merged with another company, your data
        would transfer as part of that transaction. You would be notified in
        advance and given a chance to delete your account first.
      </p>

      <h2>7. Community features</h2>

      <p>
        Unbinge has a community feed where users can share posts and comment on
        each other&rsquo;s posts. Anything you post publicly on the community is
        visible to other Unbinge users.
      </p>

      <ul>
        <li>
          <strong>Your display name and avatar</strong> are visible on everything
          you post.
        </li>
        <li>
          <strong>The content of your posts and comments</strong> is visible to
          other users.
        </li>
        <li>
          <strong>Likes are visible</strong> to the person whose post was liked.
        </li>
        <li>
          <strong>Reports you submit</strong> are visible only to us.
        </li>
        <li>
          <strong>Users you block</strong> cannot see your posts or contact you.
        </li>
      </ul>

      <p>
        If you post something you regret, you can delete it at any time. Deletion
        is permanent &mdash; we don&rsquo;t keep a copy after you delete.
      </p>

      <h2>8. How long we keep your data</h2>

      <ul>
        <li>
          <strong>Account data</strong> is kept as long as your account is
          active. If you delete your account, it&rsquo;s permanently removed from
          our servers within 30 days.
        </li>
        <li>
          <strong>Koa conversation history</strong> is kept as long as you
          don&rsquo;t clear it. You can clear it at any time from the chat
          screen&rsquo;s menu.
        </li>
        <li>
          <strong>Community posts</strong> are kept until you delete them or
          delete your account.
        </li>
        <li>
          <strong>Backups</strong> roll over within 30 days of deletion.
        </li>
        <li>
          <strong>Guest mode data</strong> lives until you tap &ldquo;Reset All
          Data&rdquo; or uninstall the app.
        </li>
      </ul>

      <h2>9. Your rights</h2>

      <p>You have the right to:</p>

      <ul>
        <li>
          <strong>Access</strong> the data we have about you. Most of it is
          visible in the app. For anything else, email us.
        </li>
        <li>
          <strong>Correct</strong> any data that&rsquo;s wrong. You can edit most
          fields directly in the app.
        </li>
        <li>
          <strong>Delete</strong> your account and all associated data. Go to
          Profile &rarr; Settings &rarr; Account &rarr; Delete Account.
        </li>
        <li>
          <strong>Export</strong> your data. Email us and we&rsquo;ll send you a
          copy of everything we have.
        </li>
        <li>
          <strong>Opt out</strong> of Koa by simply not using it. The app works
          fully without it.
        </li>
        <li>
          <strong>Withdraw consent</strong> at any time.
        </li>
      </ul>

      <p>
        If you&rsquo;re in the European Economic Area, the United Kingdom,
        California, Virginia, Colorado, Connecticut, Utah, or any other
        jurisdiction with strong privacy laws, you have additional rights under
        those laws. We honor all of them. Email us and we&rsquo;ll help.
      </p>

      <h2>10. Children&rsquo;s privacy</h2>

      <p>
        Unbinge is intended for users <strong>13 and older</strong>. We do not
        knowingly collect data from children under 13. If you are a parent or
        guardian and believe your child under 13 has given us information, email
        us immediately at{" "}
        <strong>
          <a href="mailto:support@unbingeapp.com">support@unbingeapp.com</a>
        </strong>{" "}
        and we will delete it.
      </p>

      <p>
        We recognize that eating disorder recovery content can affect young users
        differently than adults. If you are a teenager using Unbinge, we strongly
        encourage you to also work with a licensed professional, a trusted adult,
        or both. The app is a tool, not a substitute for real-world support.
      </p>

      <h2>11. Security</h2>

      <p>
        We take reasonable and industry-standard measures to protect your data:
      </p>

      <ul>
        <li>All data is encrypted in transit (HTTPS/TLS).</li>
        <li>Passwords are hashed with bcrypt.</li>
        <li>
          Database access is restricted with row-level security policies.
        </li>
        <li>
          Our infrastructure providers (Supabase, Apple, RevenueCat) maintain SOC
          2 compliance.
        </li>
      </ul>

      <p>
        No security is perfect. If there is ever a breach that affects your data,
        we will notify you as quickly as possible and tell you exactly what
        happened.
      </p>

      <h2>12. International users</h2>

      <p>
        Unbinge is operated from the United States. If you are using the app from
        outside the US, your data will be transferred to and stored in the US. By
        using the app, you consent to this transfer.
      </p>

      <p>
        We comply with the EU-US Data Privacy Framework and equivalent mechanisms
        where applicable.
      </p>

      <h2>13. Changes to this policy</h2>

      <p>
        If we make significant changes to this policy, we will notify you through
        the app and by updating the &ldquo;Last updated&rdquo; date at the top.
        For minor changes (fixing typos, clarifying language), we will just
        update the date. If you continue using the app after a material change,
        that counts as accepting the new policy. If you don&rsquo;t agree, delete
        your account.
      </p>

      <h2>14. Contact us</h2>

      <p>
        Questions, concerns, requests, or just want to say hi? Email{" "}
        <strong>
          <a href="mailto:support@unbingeapp.com">support@unbingeapp.com</a>
        </strong>
        .
      </p>

      <p>
        Mailing address:
        <br />
        Seth Mitchell Crowley
        <br />
        7104 Fig Vine Cv
        <br />
        Austin, TX 78750
        <br />
        United States
      </p>

      <hr />

      <p>
        <em>
          This policy exists because your recovery data is some of the most
          personal information you have, and we want you to trust us with it. If
          there&rsquo;s anything we can do better, tell us.
        </em>
      </p>
    </main>
  );
}
