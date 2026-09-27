import type { Metadata } from "next";
import { Inter, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const siteUrl = "https://anshumankushwaha.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Anshuman Kushwaha | Full-Stack Developer (MERN Stack)",
  description:
    "Portfolio of Anshuman Kushwaha, a fourth-year Computer Science student & MERN Stack Developer with 4+ production applications, AI integrations, and internship experience.",
  keywords: [
    "Anshuman Kushwaha",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Software Development Intern Candidate",
    "AKTU Lucknow",
    "Computer Science Portfolio",
  ],
  authors: [{ name: "Anshuman Kushwaha" }],
  openGraph: {
    title: "Anshuman Kushwaha | Full-Stack Developer (MERN Stack)",
    description:
      "Portfolio of Anshuman Kushwaha, a fourth-year Computer Science student & MERN Stack Developer with 4+ production applications, AI integrations, and internship experience.",
    url: siteUrl,
    siteName: "Anshuman Kushwaha Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anshuman Kushwaha | Full-Stack Developer (MERN Stack)",
    description:
      "Portfolio of Anshuman Kushwaha, a fourth-year Computer Science student & MERN Stack Developer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${plexMono.variable}`}>
      <body className="overflow-x-hidden bg-[#f8fafc]">
        {/* Positive ambient glowing background orbs */}
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
          <div className="orb h-[550px] w-[550px] bg-indigo-200/20 -top-40 -left-40" />
          <div className="orb h-[450px] w-[450px] bg-sky-200/25 top-1/3 -right-36" />
          <div className="orb h-[400px] w-[400px] bg-emerald-200/20 bottom-1/4 left-1/4" />
        </div>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
