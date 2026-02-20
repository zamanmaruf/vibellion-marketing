"use client";

import Image from "next/image";
import { siteContent } from "@/content/siteContent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export function CaseStudiesPreview() {
  const caseStudies = siteContent.caseStudies.slice(0, 3);

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
          Proof from Recent Engagements
        </h2>
        <p className="text-lg text-frost-white max-w-2xl mx-auto">
          Real restaurant outcomes from promo systems and consistent content execution
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-surface border-border hover:border-primary/50 transition-colors h-full flex flex-col">
              <div className="relative aspect-video rounded-t-lg overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-serif text-xl text-primary">{study.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-sm text-text/80 mb-4 flex-1">{study.challenge}</p>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-frost-white font-medium mb-1">Result Snapshot:</p>
                  <p className="text-sm text-text/70">
                    {study.results.metrics[0]?.value} {study.results.metrics[0]?.label}
                  </p>
                  <p className="text-sm text-text/70">
                    {study.results.metrics[1]?.value} {study.results.metrics[1]?.label}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
