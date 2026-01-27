"use client";

import Image from "next/image";
import { siteContent } from "@/content/siteContent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export function CaseStudiesPreview() {
  const challenges = siteContent.challenges;

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
          Common Challenges We Solve
        </h2>
        <p className="text-lg text-frost-white max-w-2xl mx-auto">
          We help restaurants overcome these common marketing challenges
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {challenges.map((challenge, index) => (
          <motion.div
            key={challenge.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-surface border-border hover:border-primary/50 transition-colors h-full flex flex-col">
              <div className="relative aspect-video rounded-t-lg overflow-hidden">
                <Image
                  src={challenge.image}
                  alt={challenge.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-serif text-xl text-primary">{challenge.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-sm text-text/80 mb-4 flex-1">{challenge.description}</p>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-frost-white font-medium mb-1">Our Solution:</p>
                  <p className="text-sm text-text/70">{challenge.solution}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
