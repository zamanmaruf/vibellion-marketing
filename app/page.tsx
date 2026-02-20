import { Metadata } from "next";
import Script from "next/script";
import { siteContent } from "@/content/siteContent";
import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { CaseStudiesPreview } from "@/components/sections/CaseStudiesPreview";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { PromoEngine } from "@/components/sections/PromoEngine";
import { Process } from "@/components/sections/Process";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Restaurant Marketing Agency",
  description:
    "Restaurant-only social media and promotions that increase reservations and repeat guests.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteContent.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <Hero />
      <SocialProof />
      <ServicesPreview />
      <PricingPreview />
      <CaseStudiesPreview />
      <PromoEngine />
      <Process />
      <FAQ />
      <FinalCTA />
      <Script id="homepage-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
    </>
  );
}
