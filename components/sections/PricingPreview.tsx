"use client";

import Link from "next/link";
import { siteContent } from "@/content/siteContent";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { isOfferCurrentlyActive } from "@/lib/offers";
import { trackCtaClick, trackPricingView } from "@/lib/analytics";

export function PricingPreview() {
  const previewTiers = siteContent.pricing.tiers;
  const offer = siteContent.pricing.specialOffer;
  const isOfferActive = isOfferCurrentlyActive(offer);

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      {isOfferActive && (
        <div className="mb-8 p-4 bg-primary/10 border-2 border-primary rounded-lg text-center max-w-2xl mx-auto">
          <Badge className="bg-primary text-background mb-2">{offer.badgeText}</Badge>
          <p className="text-lg font-semibold text-primary">{offer.title}</p>
          <p className="text-sm text-frost-white mt-1">{offer.description}</p>
        </div>
      )}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-lg text-frost-white max-w-2xl mx-auto">
          Choose the plan that fits your restaurant's needs
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-8">
        {previewTiers.map((tier, index) => (
          <motion.div
            key={tier.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card
              className={`bg-surface border-border h-full flex flex-col ${
                tier.popular
                  ? "border-primary border-2 shadow-soft-lg"
                  : "hover:border-primary/50"
              } transition-colors`}
              onMouseEnter={() => trackPricingView({ tier: tier.id })}
              onFocus={() => trackPricingView({ tier: tier.id })}
            >
              {tier.popular && (
                <div className="p-4 pb-0">
                  <Badge className="bg-primary text-background">Most Popular</Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-primary">{tier.name}</CardTitle>
                <CardDescription className="text-frost-white">{tier.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-serif font-bold text-text">
                    {tier.price}
                  </span>
                  <span className="text-text/60 ml-2">{tier.period}</span>
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
                  <Link
                    href="/pricing"
                    onClick={() =>
                      trackCtaClick({
                        location: "pricing_preview",
                        label: `Get Started - ${tier.name}`,
                        destination: "/pricing",
                      })
                    }
                  >
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Button asChild size="lg" variant="outline">
          <Link
            href="/pricing"
            onClick={() =>
              trackCtaClick({
                location: "pricing_preview",
                label: "View Full Pricing Details",
                destination: "/pricing",
              })
            }
          >
            View Full Pricing Details
          </Link>
        </Button>
      </div>
    </section>
  );
}
