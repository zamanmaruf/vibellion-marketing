import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  fallback: ["system-ui", "arial"],
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  fallback: ["Georgia", "serif"],
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Vibellion Marketing | Restaurant Social Media & Marketing",
    template: "%s | Vibellion Marketing",
  },
  description:
    "We run your restaurant's content, promotions, and brand rules so you stay consistent and get more reservations and repeat customers.",
  keywords: [
    "restaurant marketing",
    "social media management",
    "restaurant promotions",
    "food business marketing",
    "restaurant branding",
  ],
  authors: [{ name: "Vibellion Marketing" }],
  creator: "Vibellion Marketing",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vibellionmarketing.com",
    siteName: "Vibellion Marketing",
    title: "Vibellion Marketing | Restaurant Social Media & Marketing",
    description:
      "We run your restaurant's content, promotions, and brand rules so you stay consistent and get more reservations and repeat customers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibellion Marketing | Restaurant Social Media & Marketing",
    description:
      "We run your restaurant's content, promotions, and brand rules so you stay consistent and get more reservations and repeat customers.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <div className="relative min-h-screen">
          <Header />
          <main className="relative z-10">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
