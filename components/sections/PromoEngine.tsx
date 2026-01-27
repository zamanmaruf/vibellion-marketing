"use client";

import Image from "next/image";
import { siteContent } from "@/content/siteContent";
import { motion } from "framer-motion";

export function PromoEngine() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft-lg order-2 lg:order-1"
        >
          <Image
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop"
            alt="Restaurant promotion"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8 order-1 lg:order-2"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
            {siteContent.promoEngine.title}
          </h2>
          <p className="text-lg text-frost-white leading-relaxed">
            {siteContent.promoEngine.description}
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {siteContent.promoEngine.features.map((feature, index) => (
              <div key={index} className="space-y-2">
                <h3 className="font-semibold text-text">{feature.title}</h3>
                <p className="text-sm text-text/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
