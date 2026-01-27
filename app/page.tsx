import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { CaseStudiesPreview } from "@/components/sections/CaseStudiesPreview";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { PromoEngine } from "@/components/sections/PromoEngine";
import { Process } from "@/components/sections/Process";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <CaseStudiesPreview />
      <ServicesPreview />
      <PromoEngine />
      <Process />
      <PricingPreview />
      <FAQ />
      <FinalCTA />
    </>
  );
}
