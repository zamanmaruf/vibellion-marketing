"use client";

import { siteContent } from "@/content/siteContent";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function CalendlyEmbed() {
  return (
    <Card className="bg-surface border-border h-full">
      <CardHeader>
        <CardTitle className="font-serif text-primary">Book Your Free Audit</CardTitle>
        <CardDescription>
          Schedule a 30-minute call to discuss your restaurant's marketing needs
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full h-[600px] border border-border rounded-lg overflow-hidden">
          <iframe
            src={`${siteContent.contact.calendlyUrl}?embed_domain=${typeof window !== 'undefined' ? encodeURIComponent(window.location.origin) : ''}&embed_type=Inline`}
            width="100%"
            height="100%"
            frameBorder="0"
            title="Schedule a meeting with Vibellion Marketing"
            className="border-0"
          />
        </div>
      </CardContent>
    </Card>
  );
}
