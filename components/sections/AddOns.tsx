"use client";

import { siteContent } from "@/content/siteContent";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export function AddOns() {
  return (
    <section className="bg-surface py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Add-On Services
          </h2>
          <p className="text-lg text-frost-white max-w-2xl mx-auto">
            Enhance your marketing with these additional services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteContent.services.addOns.map((addon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-background border-border h-full hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="font-serif text-lg text-primary">{addon.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-frost-white mb-4">{addon.description}</p>
                  <p className="text-sm font-semibold text-frost-white">{addon.price}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
