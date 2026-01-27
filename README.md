# Vibellion Marketing Website

A production-ready marketing website for Vibellion Marketing, a restaurant-focused digital marketing agency. Built with Next.js 14+, TypeScript, Tailwind CSS, and shadcn/ui.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Vibellion_Marketing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Homepage
│   ├── services/           # Services page
│   ├── case-studies/       # Case studies listing and detail pages
│   ├── pricing/            # Pricing page
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── sitemap.ts          # Dynamic sitemap
│   └── robots.ts           # Robots.txt
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── layout/             # Header, Footer, Navigation
│   └── sections/           # Page sections (Hero, FAQ, etc.)
├── content/
│   └── siteContent.ts     # All website content (editable)
├── lib/
│   └── utils.ts            # Utility functions
└── public/                  # Static assets
```

## ✏️ Editing Content

All website content is centralized in `/content/siteContent.ts`. You can edit:

- Brand information (name, tagline, CTAs)
- Navigation items
- Services and add-ons
- Case studies
- Pricing tiers
- FAQs
- Contact information
- About page content

**No need to touch component files** - just edit `siteContent.ts` and the changes will reflect across the site.

### Example: Updating Brand Name

```typescript
// content/siteContent.ts
export const siteContent = {
  brand: {
    name: "Your New Brand Name",
    // ...
  },
  // ...
}
```

## 📧 Form Integration

The contact form currently logs submissions to the console. To connect a real form service:

### Option 1: Formspree

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Update `components/sections/ContactForm.tsx`:

```typescript
const onSubmit = async (data: ContactFormData) => {
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    reset();
  }
};
```

### Option 2: Web3Forms

1. Sign up at [web3forms.com](https://web3forms.com)
2. Get your access key
3. Update `components/sections/ContactForm.tsx`:

```typescript
const onSubmit = async (data: ContactFormData) => {
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      access_key: 'YOUR_ACCESS_KEY',
      ...data,
    }),
  });

  if (response.ok) {
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    reset();
  }
};
```

## 📅 Calendly Integration

To add your Calendly embed:

1. Get your Calendly URL from your Calendly account
2. Update `content/siteContent.ts`:
```typescript
contact: {
  calendlyUrl: "https://calendly.com/your-username/meeting",
  // ...
}
```

3. Update `components/sections/CalendlyEmbed.tsx` to replace the placeholder with your actual embed code:

```tsx
<iframe
  src={`${siteContent.contact.calendlyUrl}?embed=true`}
  width="100%"
  height="100%"
  frameBorder="0"
  className="rounded-lg"
/>
```

## 🖼️ Replacing Images

All images currently use Unsplash placeholders. To replace them:

1. Add your images to `/public/images/`
2. Update image references in `content/siteContent.ts`:

```typescript
caseStudies: [
  {
    image: "/images/case-study-1.jpg",
    // ...
  },
]
```

Or use `next/image` with external URLs:

```typescript
image: "https://your-cdn.com/image.jpg"
```

## 🎨 Design System

The design system is defined in:

- **Colors**: `tailwind.config.ts` and `app/globals.css`
  - Background: `#0B1220`
  - Surface: `#111A2E`
  - Text: `#F5F1E8`
  - Primary: `#E0A106`
  - Secondary: `#E94B3C`

- **Typography**: 
  - Headlines: Playfair Display (serif)
  - Body: Inter (sans-serif)

- **Spacing & Shadows**: Defined in Tailwind config

## 🔍 SEO

- Metadata is configured per page in each route's `page.tsx`
- Dynamic sitemap: `app/sitemap.ts`
- Robots.txt: `app/robots.ts`
- OpenGraph and Twitter cards included

Update the base URL in `app/sitemap.ts` and `app/robots.ts` before deploying.

## 📊 Analytics

To add analytics (Google Analytics, Plausible, etc.):

1. Install your analytics package:
```bash
npm install @vercel/analytics
```

2. Add to `app/layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

Build the production bundle:
```bash
npm run build
npm start
```

The `out` directory contains static files if using static export.

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🐛 Troubleshooting

### Fonts not loading
- Check that Google Fonts are accessible
- Verify font variables in `app/layout.tsx`

### shadcn/ui components not styling correctly
- Ensure CSS variables are set in `app/globals.css`
- Check `tailwind.config.ts` has correct color mappings

### Images not displaying
- Verify `next.config.mjs` has correct remote patterns
- Check image URLs are accessible

## 📄 License

This project is private and proprietary.

## 🤝 Support

For questions or issues, contact the development team.

---

Built with ❤️ for Vibellion Marketing
