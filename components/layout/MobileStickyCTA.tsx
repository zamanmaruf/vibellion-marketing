"use client";

import Link from "next/link";
import { siteContent } from "@/content/siteContent";
import { Button } from "@/components/ui/button";
import { trackCalendlyClick, trackCtaClick } from "@/lib/analytics";

export function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-xl gap-2">
        <Button
          asChild
          className="flex-1 bg-primary text-background hover:bg-primary/90"
          onClick={() => {
            trackCtaClick({
              location: "mobile_sticky",
              label: siteContent.brand.primaryCTA,
              destination: siteContent.contact.calendlyUrl,
            });
            trackCalendlyClick({ location: "mobile_sticky" });
          }}
        >
          <a href={siteContent.contact.calendlyUrl} target="_blank" rel="noopener noreferrer">
            {siteContent.brand.primaryCTA}
          </a>
        </Button>
        <Button asChild variant="outline" className="flex-1">
          <Link
            href="/contact"
            onClick={() =>
              trackCtaClick({
                location: "mobile_sticky",
                label: "Contact",
                destination: "/contact",
              })
            }
          >
            Contact
          </Link>
        </Button>
      </div>
    </div>
  );
}
