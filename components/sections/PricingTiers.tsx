"use client";

import Link from "next/link";
import { siteContent } from "@/content/siteContent";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { trackCtaClick, trackPricingView } from "@/lib/analytics";

type PricingTiersProps = {
  isOfferActive: boolean;
};

export function PricingTiers({ isOfferActive }: PricingTiersProps) {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      {siteContent.pricing.tiers.map((tier) => {
        const showPilotBadge = isOfferActive && tier.id !== "multi-location";

        return (
          <Card
            key={tier.id}
            className={`bg-surface border-border h-full flex flex-col ${
              tier.popular
                ? "border-primary border-2 shadow-soft-lg scale-105"
                : "hover:border-primary/50"
            } transition-all`}
            onMouseEnter={() => trackPricingView({ tier: tier.id })}
            onFocus={() => trackPricingView({ tier: tier.id })}
          >
            <div className="p-4 pb-0 flex items-start justify-between gap-2">
              {tier.popular && (
                <Badge className="bg-primary text-background">Most Popular</Badge>
              )}
              {showPilotBadge && (
                <Badge className="bg-secondary text-background font-semibold">
                  Pilot Available
                </Badge>
              )}
            </div>
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-primary">{tier.name}</CardTitle>
              <CardDescription className="text-frost-white/90">{tier.description}</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-serif font-bold text-frost-white">{tier.price}</span>
                <span className="text-frost-white/80 ml-2">{tier.period}</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <ul className="space-y-3 mb-6 flex-1">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-frost-white flex items-start">
                    <span className="mr-2 text-frost-white">✓</span>
                    <span className="text-frost-white">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant={tier.popular ? "default" : "outline"}
                className={`w-full ${tier.popular ? "bg-primary text-background" : ""}`}
              >
                <Link
                  href="/contact"
                  onClick={() =>
                    trackCtaClick({
                      location: "pricing_page",
                      label: `Get Started - ${tier.name}`,
                      destination: "/contact",
                    })
                  }
                >
                  Get Started
                </Link>
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
