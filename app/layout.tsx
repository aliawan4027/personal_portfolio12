import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../src/app/globals.css";
import Script from "next/script";
import { ThemeProvider } from "../src/components/ThemeProvider";
import { LanguageProvider } from "../src/contexts/LanguageContext";
import { SkipLink } from "../src/lib/accessibility";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Muhammad Ali | Software Engineer | Flutter Developer | AI Enthusiast",
  description:
    "Muhammad Ali is a Software Engineer specializing in Flutter, AI/ML, and full-stack development. MS Software Engineering student at NUST with IEEE-published research, hands-on AI internship experience, and a track record of shipping production-grade mobile and web applications.",
  keywords: [
    "Muhammad Ali",
    "Software Engineer",
    "Flutter Developer",
    "AI Developer",
    "Machine Learning Engineer",
    "Flutter",
    "Python",
    "Next.js",
    "React",
    "AI",
    "Machine Learning",
    "RAG",
    "LLM",
    "YOLO",
    "Firebase",
    "Mobile App Development",
    "Full Stack Developer",
    "NUST",
    "NUML",
    "Pakistan",
    "Portfolio",
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
    canonical: "https://personalportfolio12.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://personalportfolio12.vercel.app",
    title: "Muhammad Ali | Software Engineer | Flutter Developer | AI Enthusiast",
    description:
      "Explore Muhammad Ali's portfolio — featuring AI/ML projects, Flutter apps, IEEE research, and internships across AI, telecom, and web development.",
    siteName: "Muhammad Ali Portfolio",
    images: [
      {
        url: "/assets/NewDp.png",
        width: 800,
        height: 800,
        alt: "Muhammad Ali – Software Engineer & AI Enthusiast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Ali | Software Engineer | Flutter Developer | AI Enthusiast",
    description:
      "Explore Muhammad Ali's portfolio — AI/ML, Flutter, IEEE research, and more.",
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
              "@type": "Person",
              name: "Muhammad Ali",
              url: "https://personalportfolio12.vercel.app",
              image: "https://personalportfolio12.vercel.app/assets/NewDp.png",
              jobTitle: "Software Engineer",
              description:
                "Software Engineer specializing in Flutter, AI/ML, and full-stack development. MS Software Engineering student at NUST with IEEE-published research.",
              knowsAbout: [
                "Flutter", "Dart", "Python", "Next.js", "React",
                "Artificial Intelligence", "Machine Learning", "RAG", "LLM",
                "Firebase", "Mobile App Development", "SEO",
              ],
              alumniOf: [
                { "@type": "CollegeOrUniversity", name: "National University of Sciences and Technology (NUST)" },
                { "@type": "CollegeOrUniversity", name: "National University of Modern Languages (NUML)" },
              ],
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
