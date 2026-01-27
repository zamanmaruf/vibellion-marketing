import { Metadata } from "next";
import Link from "next/link";
import { siteContent } from "@/content/siteContent";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for restaurants. Choose the plan that fits your needs. All plans are month-to-month with no long-term contracts.",
  openGraph: {
    title: "Pricing | Vibellion Marketing",
    description: "Simple, transparent pricing for restaurants.",
  },
};

export default function PricingPage() {
  const offer = siteContent.pricing.specialOffer;
  
  // Helper function to calculate discounted price
  const getDiscountedPrice = (priceString: string): string => {
    if (!offer.active || priceString === "Custom" || priceString.startsWith("Starting at")) {
      return priceString;
    }
    const price = parseInt(priceString.replace(/[^0-9]/g, ""));
    const discounted = Math.round(price * (1 - offer.discount / 100));
    return `$${discounted.toLocaleString()}`;
  };

  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Special Offer Banner */}
        {offer.active && (
          <div className="mb-8 p-6 bg-primary/10 border-2 border-primary rounded-lg text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Badge className="bg-primary text-background text-sm px-3 py-1">
                {offer.badgeText}
              </Badge>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary">
                {offer.title}
              </h2>
            </div>
            <p className="text-lg text-frost-white">
              {offer.description}
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

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {siteContent.pricing.tiers.map((tier) => {
            const discountedPrice = getDiscountedPrice(tier.price);
            const showDiscount = offer.active && discountedPrice !== tier.price && !tier.price.includes("Custom") && !tier.price.includes("Starting at");
            
            return (
              <Card
                key={tier.id}
                className={`bg-surface border-border h-full flex flex-col ${
                  tier.popular
                    ? "border-primary border-2 shadow-soft-lg scale-105"
                    : "hover:border-primary/50"
                } transition-all`}
              >
                <div className="p-4 pb-0 flex items-start justify-between">
                  {tier.popular && (
                    <Badge className="bg-primary text-background">Most Popular</Badge>
                  )}
                  {showDiscount && (
                    <Badge className="bg-secondary text-background ml-auto">
                      {offer.discountText} Off
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-primary">{tier.name}</CardTitle>
                  <CardDescription className="text-frost-white">{tier.description}</CardDescription>
                  <div className="mt-4">
                    {showDiscount ? (
                      <div className="space-y-1">
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-serif font-bold text-text/40 line-through">
                            {tier.price}
                          </span>
                          <span className="text-4xl font-serif font-bold text-primary">
                            {discountedPrice}
                          </span>
                          <span className="text-text/60 ml-2">{tier.period}</span>
                        </div>
                        <p className="text-sm text-primary font-semibold">
                          First month only • Then {tier.price}/{tier.period.replace("per ", "")}
                        </p>
                      </div>
                    ) : (
                      <>
                        <span className="text-4xl font-serif font-bold text-text">{tier.price}</span>
                        <span className="text-text/60 ml-2">{tier.period}</span>
                      </>
                    )}
                  </div>
                </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-3 mb-6 flex-1">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-text/80 flex items-start">
                      <span className="mr-2" style={{ color: '#F0F8FF' }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant={tier.popular ? "default" : "outline"}
                  className={`w-full ${tier.popular ? "bg-primary text-background" : ""}`}
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
            );
          })}
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
      </div>
    </div>
  );
}
