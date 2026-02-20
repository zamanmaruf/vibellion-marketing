import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { siteContent } from "@/content/siteContent";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return siteContent.resources.map((resource) => ({
    id: resource.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const resource = siteContent.resources.find((r) => r.id === id);

  if (!resource) {
    return {
      title: "Resource Not Found",
    };
  }

  return {
    title: `${resource.title} | Vibellion Marketing`,
    description: resource.description,
    alternates: {
      canonical: `/resources/${resource.id}`,
    },
    openGraph: {
      title: `${resource.title} | Vibellion Marketing`,
      description: resource.description,
    },
  };
}

export default async function ResourcePage({ params }: Props) {
  const { id } = await params;
  const resource = siteContent.resources.find((r) => r.id === id);

  if (!resource) {
    notFound();
  }

  const categoryColors: Record<string, string> = {
    "Promotions": "bg-primary/20 text-primary border-primary/30",
    "Social Media": "bg-blue-500/20 text-blue-400 border-blue-500/30",
    "Branding": "bg-purple-500/20 text-purple-400 border-purple-500/30",
    "Content": "bg-green-500/20 text-green-400 border-green-500/30",
  };

  const relatedResources = siteContent.resources
    .filter((r) => r.id !== resource.id && r.category === resource.category)
    .slice(0, 3);

  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/resources">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Resources
          </Link>
        </Button>

        <article className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <Badge
                variant="outline"
                className={`${
                  categoryColors[resource.category] || "bg-surface text-text/70 border-border"
                }`}
              >
                {resource.category}
              </Badge>
              <span className="text-sm text-text/60">{resource.readTime}</span>
              {resource.publishedDate && (
                <span className="text-sm text-text/60">
                  {new Date(resource.publishedDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">
              {resource.title}
            </h1>
            <p className="text-xl text-frost-white leading-relaxed">{resource.description}</p>
          </div>

          {/* Article Content */}
          {resource.content && (
            <div className="prose prose-invert max-w-none">
              {/* Introduction */}
              {resource.content.introduction && (
                <div className="text-lg text-frost-white leading-relaxed mb-8">
                  {resource.content.introduction}
                </div>
              )}

              {/* Sections */}
              {resource.content.sections?.map((section, index) => (
                <section key={index} className="mb-8">
                  <h2 className="text-3xl font-serif font-bold text-primary mb-4 mt-12 first:mt-0">
                    {section.heading}
                  </h2>
                  <div className="text-frost-white leading-relaxed space-y-4">
                    {section.content.split("\n\n").map((paragraph, pIndex) => {
                      // Check if paragraph is a list
                      if (paragraph.trim().startsWith("-") || paragraph.trim().match(/^\d+\./)) {
                        const items = paragraph
                          .split(/\n/)
                          .filter((line) => line.trim())
                          .map((line) => line.replace(/^[-•]\s*|\d+\.\s*/, "").trim());
                        return (
                          <ul key={pIndex} className="list-disc list-inside space-y-2 ml-4">
                            {items.map((item, i) => (
                              <li key={i} className="text-text/90">
                                {item}
                              </li>
                            ))}
                          </ul>
                        );
                      }
                      return (
                        <p key={pIndex} className="text-text/90">
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>
                  {section.citations && section.citations.length > 0 && (
                    <div className="mt-4 text-sm text-text/60 italic">
                      Sources: {section.citations.join(", ")}
                    </div>
                  )}
                </section>
              ))}

              {/* Conclusion */}
              {resource.content.conclusion && (
                <div className="mt-12 pt-8 border-t border-border">
                  <h2 className="text-2xl font-serif font-bold text-primary mb-4">Conclusion</h2>
                  <div className="text-frost-white leading-relaxed">{resource.content.conclusion}</div>
                </div>
              )}

              {/* References */}
              {resource.content.references && resource.content.references.length > 0 && (
                <div className="mt-12 pt-8 border-t border-border">
                  <h2 className="text-2xl font-serif font-bold text-primary mb-4">References</h2>
                  <ul className="space-y-2">
                    {resource.content.references.map((ref, index) => {
                      const reference = ref as { title: string; url?: string };
                      return (
                        <li key={index} className="text-text/80">
                          {reference.url ? (
                            <a
                              href={reference.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              {reference.title}
                            </a>
                          ) : (
                            <span>{reference.title}</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Related Resources */}
          {relatedResources.length > 0 && (
            <div className="mt-16 pt-8 border-t border-border">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">Related Resources</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {relatedResources.map((related) => (
                  <Card
                    key={related.id}
                    className="bg-surface border-border hover:border-primary/50 transition-colors"
                  >
                    <CardContent className="pt-6">
                      <Badge
                        variant="outline"
                        className={`text-xs mb-2 ${
                          categoryColors[related.category] || "bg-surface text-text/70 border-border"
                        }`}
                      >
                        {related.category}
                      </Badge>
                      <h3 className="font-serif text-lg text-primary mb-2">{related.title}</h3>
                      <p className="text-sm text-text/70 mb-4 line-clamp-2">{related.description}</p>
                      <Button asChild variant="outline" size="sm" className="w-full">
                        <Link href={`/resources/${related.id}`}>Read More</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 pt-8 border-t border-border text-center">
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">
              Ready to implement these strategies?
            </h3>
            <p className="text-frost-white mb-6">
              Book a pilot fit call and let's discuss how we can help your restaurant grow.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="bg-primary text-background hover:bg-primary/90">
                <a href={siteContent.contact.calendlyUrl} target="_blank" rel="noopener noreferrer">
                  {siteContent.brand.primaryCTA}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">Explore Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
