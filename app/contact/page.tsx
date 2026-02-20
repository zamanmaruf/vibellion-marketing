import { Metadata } from "next";
import { siteContent } from "@/content/siteContent";
import { ContactForm } from "@/components/sections/ContactForm";
import { CalendlyEmbed } from "@/components/sections/CalendlyEmbed";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Vibellion Marketing. Book a pilot fit call or reach out with questions about our restaurant marketing services.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Vibellion Marketing",
    description: "Get in touch with Vibellion Marketing.",
  },
};

export default function ContactPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-frost-white max-w-3xl mx-auto">
            Ready to fill more seats? Book a pilot fit call or reach out with any questions.
          </p>
          <p className="text-sm text-text/70 max-w-2xl mx-auto mt-3">
            Restaurant-only marketing support, month-to-month terms, and weekly promotion planning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <ContactForm />

          {/* Calendly Embed */}
          <CalendlyEmbed />
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="bg-surface border-border text-center">
            <CardHeader>
              <Mail className="h-8 w-8 text-frost-white mx-auto mb-2" />
              <CardTitle className="font-serif text-lg text-primary">Email</CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href={`mailto:${siteContent.contact.email}`}
                className="text-text/70 hover:text-primary transition-colors break-words text-center block px-2"
              >
                {siteContent.contact.email}
              </a>
            </CardContent>
          </Card>

          <Card className="bg-surface border-border text-center">
            <CardHeader>
              <Phone className="h-8 w-8 text-frost-white mx-auto mb-2" />
              <CardTitle className="font-serif text-lg text-primary">Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href={`tel:${siteContent.contact.phone}`}
                className="text-text/70 hover:text-primary transition-colors"
              >
                {siteContent.contact.phone}
              </a>
            </CardContent>
          </Card>

          <Card className="bg-surface border-border text-center">
            <CardHeader>
              <MapPin className="h-8 w-8 text-frost-white mx-auto mb-2" />
              <CardTitle className="font-serif text-lg text-primary">Location</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-text/70">{siteContent.contact.address}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
