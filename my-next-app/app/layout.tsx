import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../src/app/globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Ali | Software Engineer & AI Enthusiast",
  description:
    "Software engineer and AI enthusiast specializing in full-stack web, mobile apps, and applied AI/ML. View projects, research, and contact details.",
  metadataBase: new URL("https://personalportfolio12.vercel.app"),
  openGraph: {
    title: "Muhammad Ali | Software Engineer & AI Enthusiast",
    description:
      "Modern portfolio of Muhammad Ali showcasing software engineering, AI/ML, and mobile app projects.",
    url: "/",
    siteName: "Muhammad Ali Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Ali | Software Engineer & AI Enthusiast",
    description:
      "Software engineer and AI enthusiast specializing in full-stack web, mobile apps, and AI/ML.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        {children}
        <Script
          id="person-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Muhammad Ali",
              url: "https://personalportfolio12.vercel.app",
              jobTitle: "Software Engineer",
              sameAs: [
                "https://www.linkedin.com/in/muhammad-ali-b64386264/",
                "https://github.com/aliawan4027",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
