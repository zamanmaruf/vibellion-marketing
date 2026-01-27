"use client";

import Link from "next/link";
import Image from "next/image";
import { siteContent } from "@/content/siteContent";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary leading-tight">
            {siteContent.brand.tagline}
          </h1>
          <p className="text-lg md:text-xl text-frost-white leading-relaxed">
            {siteContent.brand.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-background hover:bg-primary/90 text-base px-8 py-6"
            >
              <a href={siteContent.contact.calendlyUrl} target="_blank" rel="noopener noreferrer">
                {siteContent.brand.primaryCTA}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-frost-white text-frost-white hover:bg-frost-white/10 text-base px-8 py-6"
            >
              <Link href="/pricing">{siteContent.brand.secondaryCTA}</Link>
            </Button>
          </div>

          {/* Trust Chips */}
          <div className="flex flex-wrap gap-3 pt-4">
            {siteContent.brand.trustChips.map((chip, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-surface border border-border rounded-full text-sm text-text/70"
              >
                {chip}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft-lg"
        >
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop"
            alt="Restaurant interior"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
