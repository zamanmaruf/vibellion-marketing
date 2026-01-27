# Vibellion Marketing Website

A production-ready marketing website for Vibellion Marketing, a restaurant-focused digital marketing agency. Built with Next.js 14 App Router, TypeScript, Tailwind CSS, and shadcn/ui components.

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Content Management](#content-management)
- [Features](#features)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Tech Stack](#tech-stack)
- [Troubleshooting](#troubleshooting)

## Overview

This website serves as the primary marketing and lead generation platform for Vibellion Marketing, specializing in restaurant social media management, promotional campaigns, and branding services. The site features dynamic content management, research-backed pricing, contact form integration with Resend email service, Calendly scheduling, and comprehensive resource articles.

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm, yarn, or pnpm package manager
- Git for version control

### Installation

1. Clone the repository:
```bash
git clone https://github.com/zamanmaruf/vibellion-marketing.git
cd Vibellion_Marketing
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your Resend API key to `.env.local`:
```
RESEND_API_KEY=your_resend_api_key_here
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
Vibellion_Marketing/
├── app/                          # Next.js App Router directory
│   ├── layout.tsx                # Root layout with metadata and fonts
│   ├── page.tsx                  # Homepage
│   ├── globals.css               # Global styles and Tailwind directives
│   ├── about/                    # About page
│   │   └── page.tsx
│   ├── contact/                  # Contact page with form and Calendly
│   │   └── page.tsx
│   ├── pricing/                  # Pricing page with tiers and FAQ
│   │   └── page.tsx
│   ├── resources/                # Resources/blog section
│   │   ├── page.tsx              # Resources listing page
│   │   └── [id]/                 # Dynamic resource detail pages
│   │       └── page.tsx
│   ├── services/                 # Services page
│   │   └── page.tsx
│   ├── api/                      # API routes
│   │   └── contact/              # Contact form API endpoint
│   │       └── route.ts
│   ├── sitemap.ts                # Dynamic sitemap generation
│   ├── robots.ts                 # Robots.txt configuration
│   └── not-found.tsx             # 404 error page
├── components/
│   ├── layout/                   # Layout components
│   │   ├── Header.tsx            # Navigation header
│   │   └── Footer.tsx            # Site footer
│   ├── sections/                 # Page section components
│   │   ├── Hero.tsx              # Homepage hero section
│   │   ├── SocialProof.tsx       # Social proof/benefits section
│   │   ├── CaseStudiesPreview.tsx # Challenges preview
│   │   ├── ServicesPreview.tsx   # Services preview
│   │   ├── PromoEngine.tsx       # Promo engine feature
│   │   ├── Process.tsx           # Process/workflow section
│   │   ├── PricingPreview.tsx    # Pricing preview
│   │   ├── FAQ.tsx               # Frequently asked questions
│   │   ├── FinalCTA.tsx          # Final call-to-action
│   │   ├── ServiceTabs.tsx       # Services tabbed interface
│   │   ├── AddOns.tsx            # Add-on services display
│   │   ├── ContactForm.tsx       # Contact form component
│   │   └── CalendlyEmbed.tsx    # Calendly scheduling embed
│   └── ui/                       # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       ├── input.tsx
│       ├── textarea.tsx
│       ├── label.tsx
│       ├── accordion.tsx
│       ├── tabs.tsx
│       ├── toast.tsx
│       └── toaster.tsx
├── content/
│   └── siteContent.ts            # Centralized content management
├── lib/
│   └── utils.ts                  # Utility functions (cn, etc.)
├── hooks/
│   └── use-toast.ts              # Toast notification hook
├── public/
│   └── images/                   # Static image assets
│       ├── logo.png
│       └── rest-bg.png
├── .env.example                  # Environment variables template
├── .gitignore                    # Git ignore rules
├── components.json               # shadcn/ui configuration
├── next.config.mjs               # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── postcss.config.mjs            # PostCSS configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Project dependencies
```

## Content Management

All website content is centralized in `/content/siteContent.ts`. This single source of truth approach allows for easy content updates without modifying component files.

### Editable Content Sections

- **Brand Information**: Name, tagline, description, CTAs, trust chips
- **Navigation**: Menu items and links
- **Services**: Service tabs, descriptions, deliverables, add-ons
- **Pricing**: Pricing tiers, special offers, FAQ, value breakdowns
- **Resources**: Blog articles with full content, categories, metadata
- **Challenges**: Common problems and solutions
- **Process**: Workflow steps
- **Contact Information**: Email, phone, address, Calendly URL
- **About**: Mission, story, values
- **FAQ**: Frequently asked questions

### Example: Updating Brand Information

```typescript
// content/siteContent.ts
export const siteContent = {
  brand: {
    name: "Vibellion Marketing",
    tagline: "Social & promos that fill seats.",
    description: "Your restaurant marketing description here",
    primaryCTA: "Book Free Social Audit",
    secondaryCTA: "Pricing",
    trustChips: [
      "Food-only",
      "Weekly promo calendar",
      "Content + Ads optional",
    ],
  },
  // ... rest of content
}
```

### Example: Adding a New Resource Article

```typescript
// content/siteContent.ts
resources: [
  {
    id: "your-article-id",
    title: "Your Article Title",
    description: "Article description",
    category: "Social Media",
    readTime: "15 min read",
    publishedDate: "2026-01-26",
    content: {
      introduction: "Article introduction...",
      sections: [
        {
          heading: "Section Heading",
          content: "Section content...",
          citations: ["Citation source"]
        }
      ],
      conclusion: "Conclusion...",
      references: [
        {
          title: "Reference Title",
          url: "https://example.com"
        }
      ]
    }
  }
]
```

## Features

### Contact Form Integration

The contact form uses Resend for email delivery. Form submissions are sent directly to the configured email address with formatted HTML and plain text versions.

**Configuration:**
1. Sign up for Resend at [resend.com](https://resend.com)
2. Get your API key from the Resend dashboard
3. Add `RESEND_API_KEY` to `.env.local`
4. Update the "from" email address in `app/api/contact/route.ts` after verifying your domain in Resend

**API Endpoint:** `/api/contact`

**Form Fields:**
- Name (required)
- Restaurant Name (required)
- Location (required)
- Email (required)
- Phone (required)
- Message (required)

### Calendly Integration

Calendly scheduling is embedded on the contact page and linked from "Book Free Social Audit" buttons throughout the site.

**Configuration:**
1. Update `calendlyUrl` in `content/siteContent.ts`
2. The embed automatically uses the URL from site content
3. All "Book Free Social Audit" buttons link directly to the Calendly page

### Pricing and Special Offers

The pricing system supports:
- Multiple pricing tiers (Starter, Growth, Multi-Location)
- Special offer discounts (configurable percentage off first month)
- Value breakdowns with ROI calculations
- Research-backed pricing FAQ
- Add-on services pricing

**Special Offer Configuration:**
```typescript
// content/siteContent.ts
pricing: {
  specialOffer: {
    active: true,
    discount: 25,
    discountText: "25% off",
    title: "Limited Time Launch Offer",
    description: "Get 25% off your first month. Offer ends in 30 days.",
    endDate: "2026-02-26",
    badgeText: "Launch Special",
  },
  // ... pricing tiers
}
```

### Dynamic Resource Pages

Resource articles are dynamically generated with:
- SEO-optimized metadata
- Full article content with sections and citations
- Related resources suggestions
- Category badges and read time
- Research-backed content with references

### SEO Optimization

- Dynamic sitemap generation (`app/sitemap.ts`)
- Robots.txt configuration (`app/robots.ts`)
- Page-specific metadata for all routes
- OpenGraph and Twitter card support
- Semantic HTML structure
- Optimized images with Next.js Image component

## Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```
RESEND_API_KEY=your_resend_api_key_here
```

**Important:** Never commit `.env.local` to version control. It is already included in `.gitignore`.

### Next.js Configuration

Image domains are configured in `next.config.mjs`:

```javascript
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};
```

Add additional image domains as needed for your CDN or image hosting service.

### Tailwind CSS Configuration

Colors, fonts, and design tokens are defined in:
- `tailwind.config.ts` - Tailwind theme configuration
- `app/globals.css` - CSS variables and custom styles

**Color System:**
- Background: `#0B1220` (hsl(220, 40%, 8%))
- Surface: `#111A2E` (hsl(220, 40%, 15%))
- Text: `#F5F1E8` (hsl(45, 20%, 95%))
- Primary: `#F0F8FF` (Frost White)
- Secondary: `#E94B3C` (Red)

**Typography:**
- Headlines: Playfair Display (serif)
- Body: Inter (sans-serif)

### TypeScript Configuration

Type safety is enforced throughout the project. The `SiteContent` type is exported from `content/siteContent.ts` for use in components.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Import your project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard:
   - `RESEND_API_KEY`
4. Deploy automatically on every push to main branch

### Other Platforms

Build for production:
```bash
npm run build
```

Start production server:
```bash
npm start
```

For static export (if needed):
```javascript
// next.config.mjs
const nextConfig = {
  output: 'export',
  // ... other config
};
```

### Pre-Deployment Checklist

- [ ] Update base URL in `app/sitemap.ts` and `app/robots.ts`
- [ ] Verify all environment variables are set in hosting platform
- [ ] Update Resend "from" email address after domain verification
- [ ] Test contact form submission
- [ ] Verify Calendly links work correctly
- [ ] Check all images load properly
- [ ] Test responsive design on mobile devices
- [ ] Verify SEO metadata on all pages
- [ ] Run production build locally: `npm run build`

## Tech Stack

**Core Framework:**
- Next.js 14.2+ (App Router)
- React 18.3
- TypeScript 5.4

**Styling:**
- Tailwind CSS 3.4
- PostCSS 8.4
- Autoprefixer 10.4

**UI Components:**
- shadcn/ui (Radix UI primitives)
- Lucide React (icons)
- Framer Motion 11.0 (animations)

**Forms & Validation:**
- React Hook Form 7.51
- Zod 3.23 (schema validation)
- @hookform/resolvers 3.3

**Email Service:**
- Resend 4.0

**Development Tools:**
- ESLint 8.57
- TypeScript compiler
- Next.js built-in optimizations

## Scripts

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build production bundle
- `npm start` - Start production server (requires build first)
- `npm run lint` - Run ESLint to check code quality

## Troubleshooting

### CSS Not Loading

- Verify `app/globals.css` is imported in `app/layout.tsx`
- Check that Tailwind directives (`@tailwind base/components/utilities`) are present
- Ensure PostCSS is configured correctly in `postcss.config.mjs`
- Clear `.next` cache: `rm -rf .next` and rebuild

### Contact Form Not Sending Emails

- Verify `RESEND_API_KEY` is set in `.env.local`
- Check Resend API key is valid and active
- Update "from" email address in `app/api/contact/route.ts` to a verified domain
- Check browser console and server logs for error messages
- Verify Resend domain is verified in Resend dashboard

### Images Not Displaying

- Check `next.config.mjs` has correct remote patterns for external images
- Verify image URLs are accessible and return 200 status
- For local images, ensure they're in `/public/images/` directory
- Use Next.js `Image` component for optimized loading

### TypeScript Errors

- Run `npm run build` to see all type errors
- Ensure all imports are correct
- Check that `tsconfig.json` paths are configured correctly
- Verify type definitions match actual data structures

### Build Failures

- Clear `.next` directory: `rm -rf .next`
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version matches requirement (18+)
- Verify all environment variables are set
- Review build logs for specific error messages

### Fonts Not Loading

- Verify Google Fonts are accessible (check network tab)
- Check font variables are set in `app/layout.tsx`
- Ensure font families are defined in `tailwind.config.ts`
- Clear browser cache if fonts were recently updated

### shadcn/ui Components Not Styling Correctly

- Verify CSS variables are defined in `app/globals.css`
- Check `tailwind.config.ts` has correct color mappings
- Ensure `components.json` points to correct paths
- Verify Tailwind content paths include component directories

## License

This project is private and proprietary. All rights reserved.

## Support

For technical questions or issues, contact the development team or refer to the Next.js documentation at [nextjs.org/docs](https://nextjs.org/docs).

---

Built for Vibellion Marketing
