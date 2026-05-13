import type { Metadata, Viewport } from "next";
import ResetRedirect from "./ResetRedirect";
import "./reset.css";

export const metadata: Metadata = {
  title: "Reset your password | Unbinge",
  description: "Opening the Unbinge app to reset your password.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F5F0EB",
};

export default function ResetPage() {
  return (
    <main className="reset-page">
      <div>
        <div style={{ textAlign: "center" }}>
          <span className="reset-brand">Unbinge</span>
        </div>
        <ResetRedirect />
      </div>
    </main>
  );
}
