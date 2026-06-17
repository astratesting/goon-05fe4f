import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Lora } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Goon — Handcrafted Trinkets with a Story",
    template: "%s | Goon",
  },
  description:
    "Curated wooden-and-metal trinkets with laser-engraved storycards. Meaningful gifts for the people who matter.",
  keywords: [
    "handcrafted trinkets",
    "wooden jewelry",
    "artisan gifts",
    "laser engraved",
    "meaningful gifts",
  ],
  metadataBase: new URL(process.env.NEXTAUTH_URL || "http://localhost:3000"),
  openGraph: {
    type: "website",
    siteName: "Goon",
    title: "Goon — Handcrafted Trinkets with a Story",
    description:
      "Curated wooden-and-metal trinkets with laser-engraved storycards.",
    url: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} ${lora.variable}`}>
      <body className="min-h-screen bg-soft-white font-heading text-ink antialiased">
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
