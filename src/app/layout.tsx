import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "ECE student at UIUC focused on embedded systems, digital logic, and hardware-software interfaces. Building assemblers, semiconductor tools, and sensor systems.";

export const metadata: Metadata = {
  title: "Adhiraj Agarwala — ECE at UIUC",
  description,
  keywords: [
    "Adhiraj Agarwala",
    "ECE",
    "UIUC",
    "embedded systems",
    "hardware engineering",
    "electrical engineering",
    "digital logic",
    "Rust",
    "SPICE",
    "Sky130",
  ],
  authors: [{ name: "Adhiraj Agarwala", url: "https://adhirajagarwala.com" }],
  openGraph: {
    title: "Adhiraj Agarwala — ECE at UIUC",
    description,
    url: "https://adhirajagarwala.com",
    siteName: "Adhiraj Agarwala",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Adhiraj Agarwala — ECE at UIUC",
    description,
    creator: "@adhirajagarwala",
  },
  alternates: {
    canonical: "https://adhirajagarwala.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} antialiased`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-screen flex flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
