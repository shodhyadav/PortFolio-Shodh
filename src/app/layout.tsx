import "./globals.css";

import type { Metadata } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shodh Yadav — Full Stack & Integration Developer",
  description:
    "Full Stack Developer and Integration Specialist building scalable web apps, enterprise integrations and intelligent automation with Angular, Spring Boot, Boomi and Azure.",
  keywords: [
    "Shodh Yadav",
    "Full Stack Developer",
    "Integration Developer",
    "Spring Boot",
    "Angular",
    "Boomi",
    "MuleSoft",
    "Agentic AI",
  ],
  authors: [{ name: "Shodh Yadav" }],
  openGraph: {
    title: "Shodh Yadav — Full Stack & Integration Developer",
    description:
      "Scalable full-stack platforms, enterprise integrations and intelligent automation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}