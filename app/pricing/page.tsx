import { Metadata } from "next";
import Script from "next/script";
import { siteContent } from "@/content/siteContent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PricingTiers } from "@/components/sections/PricingTiers";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { isOfferCurrentlyActive } from "@/lib/offers";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for restaurants. Choose the plan that fits your needs. All plans are month-to-month with no long-term contracts.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing | Vibellion Marketing",
    description: "Simple, transparent pricing for restaurants.",
  },
};

export default function PricingPage() {
  const offer = siteContent.pricing.specialOffer;
  const isOfferActive = isOfferCurrentlyActive(offer);
  const pricingFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteContent.pricing.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
  
  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Special Offer Banner */}
        {isOfferActive && (
          <div className="mb-12 p-6 bg-primary/20 border-2 border-primary rounded-lg text-center shadow-soft-lg">
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-3">
              <Badge className="bg-primary text-background text-base px-4 py-1.5 font-semibold">
                {offer.badgeText}
              </Badge>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary">
                {offer.title}
              </h2>
            </div>
            <p className="text-lg md:text-xl text-frost-white font-medium">
              {offer.description}
            </p>
            <p className="text-sm text-text/80 mt-2">
              Includes: 4 promo cycles, content + posting, weekly tracking, and an end-of-month action plan.
            </p>
          </div>
        )}

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-frost-white max-w-3xl mx-auto">
            Choose the plan that fits your restaurant's needs. All plans are month-to-month with no
            long-term contracts.
          </p>
        </div>

        <PricingTiers isOfferActive={isOfferActive} />

        <div className="mb-16 rounded-xl border border-border bg-surface p-6 text-center">
          <h2 className="text-2xl font-serif font-bold text-primary mb-2">Why restaurants trust us</h2>
          <p className="text-text/80 max-w-2xl mx-auto mb-4">
            Restaurant-only specialization, week-by-week promo planning, and month-to-month terms.
          </p>
          <Button asChild className="bg-primary text-background hover:bg-primary/90">
            <a href={siteContent.contact.calendlyUrl} target="_blank" rel="noopener noreferrer">
              {siteContent.brand.primaryCTA}
            </a>
          </Button>
        </div>

        {/* Add-Ons */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-primary text-center mb-8">
            Add-On Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteContent.services.addOns.map((addon, index) => (
              <Card key={index} className="bg-surface border-border">
                <CardHeader>
                  <CardTitle className="font-serif text-lg text-primary">{addon.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-text/70 mb-4">{addon.description}</p>
                  <p className="text-sm font-semibold text-frost-white">{addon.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Pricing FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-primary text-center mb-8">
            Pricing FAQ
          </h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {siteContent.pricing.faq.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-surface border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-text hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-text/70 pt-2">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <Script id="pricing-faq-schema" type="application/ld+json">
          {JSON.stringify(pricingFaqSchema)}
        </Script>
      </div>
    </div>
  );
}
