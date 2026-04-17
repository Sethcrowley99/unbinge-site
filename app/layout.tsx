import type { Metadata, Viewport } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Unbinge — A calming, clinically-grounded companion for binge eating recovery",
  description:
    "Unbinge is a private, judgment-free recovery app for binge eating. Track urges and meals, talk to Koa (our AI companion), and grow through 15 stages of healing.",
  openGraph: {
    title: "Unbinge — Recovery, gently",
    description: "A calming, clinically-grounded companion for binge eating recovery.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#89B9D0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${ebGaramond.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
