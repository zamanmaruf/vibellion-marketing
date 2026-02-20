"use client";

import { siteContent } from "@/content/siteContent";
import { ContactForm } from "./ContactForm";
import { CalendlyEmbed } from "./CalendlyEmbed";
import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
          Ready to Fill More Seats?
        </h2>
        <p className="text-lg text-frost-white max-w-2xl mx-auto">
          Book a pilot fit call and see how we can help your restaurant grow
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ContactForm />
        </motion.div>

        {/* Calendly Embed */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <CalendlyEmbed />
        </motion.div>
      </div>
    </section>
  );
}
