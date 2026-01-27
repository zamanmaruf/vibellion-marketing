import Link from "next/link";
import Image from "next/image";
import { siteContent } from "@/content/siteContent";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Image
              src="/images/logo.png"
              alt={siteContent.brand.name}
              width={540}
              height={180}
              className="h-24 w-auto object-contain"
            />
            <p className="text-sm text-text/70">
              {siteContent.brand.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-text mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {siteContent.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-text/70 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-text mb-4">Services</h4>
            <ul className="space-y-2">
              {siteContent.services.tabs.map((service) => (
                <li key={service.id}>
                  <Link
                    href="/services"
                    className="text-sm text-text/70 hover:text-primary transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-text mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-text/70">
              <li>
                <a
                  href={`mailto:${siteContent.contact.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {siteContent.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteContent.contact.phone}`}
                  className="hover:text-primary transition-colors"
                >
                  {siteContent.contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-text/60">
          <p>&copy; {new Date().getFullYear()} {siteContent.brand.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
