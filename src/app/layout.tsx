import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { en, profile, SITE_URL } from "@/data/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${profile.name} | ${en.metadata.role}`,
    template: `%s | ${profile.name}`,
  },
  description: `${profile.headline} ${profile.bio}`,
  openGraph: {
    title: `${profile.name} | ${en.metadata.role}`,
    description: profile.headline,
    url: SITE_URL,
    siteName: `${profile.name} ${en.labels.portfolio}`,
    locale: en.metadata.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${en.metadata.role}`,
    description: profile.headline,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bebas.variable} h-full`}>
      <body className="min-h-full bg-[#141414] font-sans antialiased">{children}</body>
    </html>
  );
}
