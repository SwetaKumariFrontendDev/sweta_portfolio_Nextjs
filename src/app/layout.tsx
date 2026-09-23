import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/portfolio";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} | Senior Frontend Engineer`,
    template: `%s | ${profile.name}`,
  },
  description: `${profile.headline} ${profile.bio}`,
  openGraph: {
    title: `${profile.name} | Senior Frontend Engineer`,
    description: profile.headline,
    url: siteUrl,
    siteName: `${profile.name} Portfolio`,
    locale: "en_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Senior Frontend Engineer`,
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
