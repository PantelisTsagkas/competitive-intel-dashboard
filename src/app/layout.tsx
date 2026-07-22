import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meridian — Competitive Intelligence",
  description:
    "Proof-of-concept competitive intelligence platform: generate structured, executive-grade reports on any company in a dataset.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // The product has one theme, the console's. `dark` is fixed on the root so
    // shadcn's `dark:` variants and the console's own tokens agree everywhere;
    // there is no theme provider and nothing to toggle.
    <html
      lang="en"
      className={`dark ${dmSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
