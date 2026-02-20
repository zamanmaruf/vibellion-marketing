import type { Metadata } from "next";
import { Cormorant_Garamond, Work_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { Toaster } from "@/components/ui/toaster";
import { siteContent } from "@/content/siteContent";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vibellionmarketing.com";
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  fallback: ["system-ui", "arial"],
  preload: true,
});

const cormorant = Cormorant_Garamond({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  fallback: ["Georgia", "serif"],
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Vibellion Marketing",
    title: "Vibellion Marketing | Restaurant Social Media & Marketing",
    description:
      "We run your restaurant's content, promotions, and brand rules so you stay consistent and get more reservations and repeat customers.",
    images: [
      {
        url: "/images/logo.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibellion Marketing | Restaurant Social Media & Marketing",
    description:
      "We run your restaurant's content, promotions, and brand rules so you stay consistent and get more reservations and repeat customers.",
    images: ["/images/logo.png"],
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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteContent.brand.name,
    url: siteUrl,
    email: siteContent.contact.email,
    telephone: siteContent.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteContent.contact.address,
    },
    sameAs: [siteContent.contact.calendlyUrl],
  };

  return (
    <html lang="en" className={`${workSans.variable} ${cormorant.variable}`}>
      <body>
        {gaMeasurementId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaMeasurementId}');`}
            </Script>
          </>
        ) : null}
        <Script id="organization-schema" type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </Script>
        <div className="relative min-h-screen">
          <Header />
          <main className="relative z-10 pb-24 md:pb-0">{children}</main>
          <Footer />
          <MobileStickyCTA />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
