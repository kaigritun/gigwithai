import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "GigWithAI - Make Money with AI Side Hustles",
  description: "Practical guides to earning extra income with AI tools. Real methods, no fluff.",
  openGraph: {
    title: "GigWithAI - Make Money with AI Side Hustles",
    description: "Practical guides to earning extra income with AI tools. Real methods, no fluff.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <body className={`${inter.variable} font-sans antialiased bg-[#0a0a0a]`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
