"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { siteContent } from "@/content/siteContent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  trackCalendlyClick,
  trackContactFormStart,
  trackContactFormSubmit,
  trackCtaClick,
} from "@/lib/analytics";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  restaurantName: z.string().min(2, "Restaurant name is required"),
  location: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  website: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const hasTrackedStart = useRef(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        trackContactFormSubmit({ location: "contact_form", status: "success" });
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. We'll get back to you within 24 hours.",
        });
        reset();
      } else {
        throw new Error(result.error || "Failed to send message");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      trackContactFormSubmit({ location: "contact_form", status: "error" });
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email us directly.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="bg-surface border-border">
      <CardHeader>
        <CardTitle className="font-serif text-primary">Get in Touch</CardTitle>
        <CardDescription>
          Fill out the form below and we'll respond within 24 hours
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isSubmitted ? (
          <div className="space-y-4">
            <p className="text-sm text-text/80">
              Your message has been sent. Book a pilot fit call now to move faster.
            </p>
            <Button asChild className="w-full bg-primary text-background hover:bg-primary/90">
              <a
                href={siteContent.contact.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackCtaClick({
                    location: "contact_form_success",
                    label: siteContent.brand.primaryCTA,
                    destination: siteContent.contact.calendlyUrl,
                  });
                  trackCalendlyClick({ location: "contact_form_success" });
                }}
              >
                {siteContent.brand.primaryCTA}
              </a>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link href={`mailto:${siteContent.contact.email}`}>Email Us Directly</Link>
            </Button>
          </div>
        ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          onFocusCapture={() => {
            if (!hasTrackedStart.current) {
              hasTrackedStart.current = true;
              trackContactFormStart({ location: "contact_form" });
            }
          }}
          className="space-y-4"
        >
          <div>
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              {...register("name")}
              className="bg-background border-border"
              placeholder="Your name"
            />
            {errors.name && (
              <p className="text-sm text-secondary mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="restaurantName">Restaurant Name *</Label>
            <Input
              id="restaurantName"
              {...register("restaurantName")}
              className="bg-background border-border"
              placeholder="Your restaurant name"
            />
            {errors.restaurantName && (
              <p className="text-sm text-secondary mt-1">
                {errors.restaurantName.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              {...register("location")}
              className="bg-background border-border"
              placeholder="City, State"
            />
            {errors.location && (
              <p className="text-sm text-secondary mt-1">{errors.location.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              className="bg-background border-border"
              placeholder="your@email.com"
            />
            {errors.email && (
              <p className="text-sm text-secondary mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="tel"
              {...register("phone")}
              className="bg-background border-border"
              placeholder="(555) 123-4567"
            />
            {errors.phone && (
              <p className="text-sm text-secondary mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div className="hidden">
            <Label htmlFor="website">Website</Label>
            <Input
              id="website"
              tabIndex={-1}
              autoComplete="off"
              {...register("website")}
            />
          </div>

          <div>
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              {...register("message")}
              className="bg-background border-border min-h-[120px]"
              placeholder="Tell us about your restaurant and marketing goals..."
            />
            {errors.message && (
              <p className="text-sm text-secondary mt-1">{errors.message.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-primary text-background hover:bg-primary/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
        )}
      </CardContent>
    </Card>
  );
}
