"use client";

import Link from "next/link";
import Image from "next/image";
import { siteContent } from "@/content/siteContent";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { trackCalendlyClick, trackCtaClick } from "@/lib/analytics";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt={siteContent.brand.name}
              width={261}
              height={87}
              className="h-[58px] w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {siteContent.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-text/80 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild className="bg-primary text-background hover:bg-primary/90 font-semibold">
              <a
                href={siteContent.contact.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackCtaClick({
                    location: "header",
                    label: siteContent.brand.primaryCTA,
                    destination: siteContent.contact.calendlyUrl,
                  });
                  trackCalendlyClick({ location: "header" });
                }}
              >
                {siteContent.brand.primaryCTA}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <nav className="flex flex-col space-y-4">
              {siteContent.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-text/80 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                asChild
                className="bg-primary text-background hover:bg-primary/90 w-full mt-4"
              >
                <a
                  href={siteContent.contact.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    trackCtaClick({
                      location: "mobile_menu",
                      label: siteContent.brand.primaryCTA,
                      destination: siteContent.contact.calendlyUrl,
                    });
                    trackCalendlyClick({ location: "mobile_menu" });
                  }}
                >
                  {siteContent.brand.primaryCTA}
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
