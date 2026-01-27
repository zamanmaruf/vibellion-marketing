"use client";

import Link from "next/link";
import { siteContent } from "@/content/siteContent";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function ServicesPreview() {
  const previewServices = siteContent.services.tabs;

  return (
    <section className="bg-surface py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Services Built for Restaurants
          </h2>
          <p className="text-lg text-frost-white max-w-2xl mx-auto">
            Everything you need to grow your restaurant's presence and fill seats
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {previewServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-background border-border hover:border-primary/50 transition-colors h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-primary">{service.title}</CardTitle>
                  <CardDescription className="text-frost-white">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-2 mb-6 flex-1">
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="text-sm text-text/80 flex items-start">
                        <span className="mr-2" style={{ color: '#F0F8FF' }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/services">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
