import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Munchee.pk — Your Online CA & PA | AI-Powered Business Management",
  description:
    "Pakistan's first Agentic SaaS platform. AI-powered chartered accountancy & personal assistant that manages your COGS, leads, content, and finances.",
  keywords: [
    "munchee",
    "online CA",
    "online PA",
    "AI business management",
    "Pakistan SaaS",
    "chartered accountancy",
    "business automation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
