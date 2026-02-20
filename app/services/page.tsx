import { Metadata } from "next";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/content/siteContent";
import { ServiceTabs } from "@/components/sections/ServiceTabs";
import { AddOns } from "@/components/sections/AddOns";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Social media management, promotions, and branding services designed specifically for restaurants. See what we offer and how we can help your restaurant grow.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | Vibellion Marketing",
    description:
      "Social media management, promotions, and branding services designed specifically for restaurants.",
  },
};

export default function ServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Restaurant Social Media and Promotions",
    serviceType: "Restaurant Marketing Services",
    provider: {
      "@type": "Organization",
      name: siteContent.brand.name,
      url: "https://vibellionmarketing.com",
    },
    areaServed: "North America",
    description:
      "Restaurant-only social media management, weekly promotions, and branding refresh services.",
  };

  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Services Built for Restaurants
          </h1>
          <p className="text-xl text-frost-white">
            Everything you need to grow your restaurant's presence, fill seats, and build a loyal
            customer base
          </p>
          <div className="mt-8">
            <Button asChild className="bg-primary text-background hover:bg-primary/90">
              <a href={siteContent.contact.calendlyUrl} target="_blank" rel="noopener noreferrer">
                {siteContent.brand.primaryCTA}
              </a>
            </Button>
          </div>
        </div>
      </div>

      <ServiceTabs />
      <AddOns />
      <Script id="services-schema" type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </Script>
    </div>
  );
}
