"use client";

import { useEffect, useState } from "react";

const DEEP_LINK = "unbinge://reset-password";

export default function ResetRedirect() {
  const [href, setHref] = useState(DEEP_LINK);
  const [hasFragment, setHasFragment] = useState<boolean | null>(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash.length > 1) {
      const target = DEEP_LINK + hash;
      setHref(target);
      setHasFragment(true);
      const timer = setTimeout(() => {
        window.location.href = target;
      }, 100);
      return () => clearTimeout(timer);
    }
    setHasFragment(false);
  }, []);

  if (hasFragment === false) {
    return (
      <div className="reset-card reset-card-error">
        <p className="reset-eyebrow">Link expired</p>
        <h1 className="reset-heading">This link is invalid or has expired.</h1>
        <p className="reset-sub">
          Request a new password reset from the Unbinge app.
        </p>
        <a href="https://unbingeapp.com" className="reset-btn reset-btn-secondary">
          Back to unbingeapp.com
        </a>
      </div>
    );
  }

  return (
    <div className="reset-card">
      <p className="reset-eyebrow">Password reset</p>
      <h1 className="reset-heading">Opening Unbinge…</h1>
      <p className="reset-sub">
        If the app doesn&apos;t open automatically, tap the button below.
      </p>
      <a href={href} className="reset-btn reset-btn-primary">
        Open Unbinge
      </a>
      <p className="reset-foot">
        Don&apos;t have the app installed?{" "}
        <a
          href="https://apps.apple.com/us/app/unbinge-binge-eating-recovery/id6762101743"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get it on the App Store
        </a>
      </p>
    </div>
  );
}
