"use client";

import { siteContent } from "@/content/siteContent";
import { motion } from "framer-motion";

export function SocialProof() {
  const spotlight = siteContent.trust.testimonials[0];

  return (
    <section className="border-y border-border bg-surface py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {siteContent.socialProof.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center flex flex-col justify-center min-h-[80px] md:min-h-[100px]"
            >
              <div className="text-2xl md:text-3xl font-serif font-bold text-frost-white leading-tight px-2">
                {stat.value}
              </div>
              {stat.label && (
                <div className="text-sm text-text/70 mt-2">{stat.label}</div>
              )}
            </motion.div>
          ))}
        </div>

        {spotlight ? (
          <div className="mx-auto max-w-3xl rounded-xl border border-border bg-background/40 p-6 text-center">
            <p className="text-base text-text/90 md:text-lg">"{spotlight.quote}"</p>
            <p className="mt-3 text-sm text-text/70">
              {spotlight.author}, {spotlight.role} ({spotlight.businessType})
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
