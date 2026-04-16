import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unbinge",
  description:
    "A calming, clinically grounded companion for binge eating recovery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <nav>
            <Link href="/" className="home-link">
              Unbinge
            </Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/community-guidelines">Community Guidelines</Link>
            <Link href="/support">Support</Link>
          </nav>
        </header>
        {children}
        <footer className="site-footer">
          &copy; 2026 Unbinge &middot; support@unbingeapp.com
        </footer>
      </body>
    </html>
  );
}
