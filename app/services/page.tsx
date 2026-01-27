import { Metadata } from "next";
import { ServiceTabs } from "@/components/sections/ServiceTabs";
import { AddOns } from "@/components/sections/AddOns";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Social media management, promotions, and branding services designed specifically for restaurants. See what we offer and how we can help your restaurant grow.",
  openGraph: {
    title: "Services | Vibellion Marketing",
    description:
      "Social media management, promotions, and branding services designed specifically for restaurants.",
  },
};

export default function ServicesPage() {
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
        </div>
      </div>

      <ServiceTabs />
      <AddOns />
    </div>
  );
}
