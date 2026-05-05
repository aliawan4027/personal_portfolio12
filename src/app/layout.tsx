import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ThemeProvider } from "@/src/components/ThemeProvider";
import { LanguageProvider } from "@/src/contexts/LanguageContext";
import { SkipLink } from "@/src/lib/accessibility";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Muhammad Ali — Flutter & AI Developer",
    template: "%s | Muhammad Ali",
  },
  description:
    "Flutter developer & AI engineer at NUST. Building production apps with RAG, LLMs, YOLO & Next.js. IEEE-published researcher shipping real-world AI solutions.",
  keywords: [
    "Muhammad Ali",
    "Flutter Developer",
    "AI Engineer",
    "Software Engineer",
    "RAG Developer",
    "LLM Engineer",
    "YOLO Object Detection",
    "Next.js Developer",
    "Mobile App Developer",
    "NUST Pakistan",
    "IEEE Researcher",
    "Firebase Developer",
    "Python AI",
    "Full Stack Developer",
    "Dart Flutter",
  ],
  authors: [{ name: "Muhammad Ali" }],
  creator: "Muhammad Ali",
  publisher: "Muhammad Ali",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://personalportfolio12.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://personalportfolio12.vercel.app",
    title: "Muhammad Ali — Flutter & AI Developer",
    description:
      "Explore Muhammad Ali's portfolio — featuring AI/ML projects, Flutter apps, IEEE research, and internships across AI, telecom, and web development.",
    siteName: "Muhammad Ali Portfolio",
    images: [
      {
        url: "/assets/NewDp.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Ali — Flutter & AI Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Ali — Flutter & AI Developer",
    description:
      "Flutter developer & AI engineer. Building production apps with RAG, LLMs, YOLO & Next.js. IEEE-published researcher.",
    images: ["/assets/NewDp.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "J2ti2_vWuLAz4IC621v4fscLeRgWyde0lNcmXrf0e2E",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to Google Fonts for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {/* Skip links for keyboard navigation */}
        <SkipLink targetId="main-content">Skip to main content</SkipLink>
        <SkipLink targetId="navigation">Skip to navigation</SkipLink>
        
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
        
        <Script
          id="person-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://personalportfolio12.vercel.app/#person",
                  name: "Muhammad Ali",
                  url: "https://personalportfolio12.vercel.app",
                  image: "https://personalportfolio12.vercel.app/assets/NewDp.png",
                  jobTitle: "Software Engineer",
                  description:
                    "Software Engineer specializing in Flutter, AI/ML, and full-stack development. MS Software Engineering student at NUST with IEEE-published research.",
                  knowsAbout: [
                    "Flutter", "Dart", "Python", "Next.js", "React",
                    "Artificial Intelligence", "Machine Learning",
                    "Retrieval-Augmented Generation (RAG)", "Large Language Models (LLM)",
                    "YOLO Object Detection", "Firebase", "Docker",
                    "Mobile App Development", "SEO", "TypeScript",
                  ],
                  alumniOf: [
                    { "@type": "CollegeOrUniversity", name: "National University of Sciences and Technology (NUST)" },
                    { "@type": "CollegeOrUniversity", name: "National University of Modern Languages (NUML)" },
                  ],
                  hasCredential: [
                    { "@type": "EducationalOccupationalCredential", name: "Flutter Essential Training: Build for Multiple Platforms" },
                    { "@type": "EducationalOccupationalCredential", name: "Semrush SEO Certification" },
                    { "@type": "EducationalOccupationalCredential", name: "HubSpot SEO Certification" },
                    { "@type": "EducationalOccupationalCredential", name: "ISPR Winter Internship 2026" },
                  ],
                  award: [
                    "IEEE CMT 2025 — SignEase: An AI-Based Application for Voice and Sign Recognition",
                    "3rd Place in Open House FYP 2025 — NUML",
                  ],
                  sameAs: [
                    "https://www.linkedin.com/in/muhammad-ali-b64386264/",
                    "https://github.com/aliawan4027",
                  ],
                },
                {
                  "@type": "ProfilePage",
                  "@id": "https://personalportfolio12.vercel.app/#profilepage",
                  url: "https://personalportfolio12.vercel.app",
                  name: "Muhammad Ali — Flutter & AI Developer Portfolio",
                  mainEntity: { "@id": "https://personalportfolio12.vercel.app/#person" },
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
