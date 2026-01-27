import { Metadata } from "next";
import Image from "next/image";
import { siteContent } from "@/content/siteContent";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Vibellion Marketing - a restaurant-focused digital marketing agency dedicated to helping food businesses fill seats and build loyal customers.",
  openGraph: {
    title: "About Us | Vibellion Marketing",
    description: "Learn about Vibellion Marketing and our mission.",
  },
};

export default function AboutPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            About Vibellion Marketing
          </h1>
          <p className="text-xl text-frost-white max-w-3xl mx-auto">{siteContent.about.mission}</p>
        </div>

        {/* Story */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft-lg">
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop"
                alt="Restaurant team"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold text-primary">Our Story</h2>
              <p className="text-lg text-frost-white leading-relaxed">{siteContent.about.story}</p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-primary text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {siteContent.about.values.map((value, index) => (
              <Card key={index} className="bg-surface border-border">
                <CardHeader>
                  <CardTitle className="font-serif text-primary">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-text/70">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
