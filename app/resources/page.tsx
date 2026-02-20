import { Metadata } from "next";
import Link from "next/link";
import { siteContent } from "@/content/siteContent";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Tips, guides, and insights to help you grow your restaurant's marketing. Learn about social media, promotions, branding, and more.",
  alternates: {
    canonical: "/resources",
  },
  openGraph: {
    title: "Resources | Vibellion Marketing",
    description: "Tips, guides, and insights for restaurant marketing.",
  },
};

export default function ResourcesPage() {
  const categoryColors: Record<string, string> = {
    "Promotions": "bg-primary/20 text-primary border-primary/30",
    "Social Media": "bg-blue-500/20 text-blue-400 border-blue-500/30",
    "Branding": "bg-purple-500/20 text-purple-400 border-purple-500/30",
    "Content": "bg-green-500/20 text-green-400 border-green-500/30",
  };

  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Resources for Restaurant Owners
          </h1>
          <p className="text-xl text-frost-white max-w-3xl mx-auto">
            Tips, guides, and insights to help you grow your restaurant's marketing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteContent.resources.map((resource) => (
            <Card
              key={resource.id}
              className="bg-surface border-border hover:border-primary/50 transition-colors h-full flex flex-col group"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge
                    variant="outline"
                    className={`text-xs ${
                      categoryColors[resource.category] || "bg-surface text-text/70 border-border"
                    }`}
                  >
                    {resource.category}
                  </Badge>
                  <span className="text-xs text-text/60">{resource.readTime}</span>
                </div>
                <CardTitle className="font-serif text-xl text-primary group-hover:text-primary/90 transition-colors">
                  {resource.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <CardDescription className="text-frost-white text-base leading-relaxed flex-1 mb-4">
                  {resource.description}
                </CardDescription>
                <Button asChild variant="outline" className="w-full group-hover:border-primary">
                  <Link href={`/resources/${resource.id}`}>
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-border bg-surface p-6 text-center">
          <p className="text-text/80 mb-4">
            Need help applying these ideas to your restaurant?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild>
              <Link href="/services">See Services</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/pricing">View Pricing</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Talk to Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
