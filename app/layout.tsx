import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "GigWithAI - Make Money with AI Side Hustles",
    template: "%s | GigWithAI",
  },
  description: "Practical guides to earning extra income with AI tools. Real methods, no fluff.",
  keywords: ["AI side hustle", "make money with AI", "AI freelancing", "ChatGPT income", "AI business"],
  authors: [{ name: "GigWithAI" }],
  creator: "GigWithAI",
  metadataBase: new URL("https://gigwithai.com"),
  openGraph: {
    title: "GigWithAI - Make Money with AI Side Hustles",
    description: "Practical guides to earning extra income with AI tools. Real methods, no fluff.",
    url: "https://gigwithai.com",
    siteName: "GigWithAI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GigWithAI - Make Money with AI Side Hustles",
    description: "Practical guides to earning extra income with AI tools. Real methods, no fluff.",
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
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" style={{ colorScheme: "dark" }}>
      <body className={`${inter.variable} font-sans antialiased bg-[#0a0a0a] text-white`}>
        <div className="flex flex-col min-h-screen">
          <Nav />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
