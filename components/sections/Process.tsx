"use client";

import { siteContent } from "@/content/siteContent";
import { motion } from "framer-motion";

export function Process() {
  return (
    <section className="bg-surface py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            How It Works
          </h2>
          <p className="text-lg text-frost-white max-w-2xl mx-auto">
            A simple, proven process to get your restaurant's marketing on track
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {siteContent.process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary text-background flex items-center justify-center font-serif font-bold text-lg">
                    {step.step}
                  </div>
                  {index < siteContent.process.length - 1 && (
                    <div className="w-0.5 h-full bg-border ml-6 -mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-serif font-semibold text-text mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text/70">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
