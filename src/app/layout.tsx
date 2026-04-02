import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brand Audit Engine — Crowd Control Digital",
  description: "Deep research brand audits powered by AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-surface-0 text-white antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
