# Iterum Homes — Landing Page

A Next.js 14 marketing landing page for Iterum Homes, a cash home buying company in San Diego.

This is **the landing page only** — it's one of three separate deliverables:
1. **Landing page** (this repo) — public marketing site at iterumhomes.com
2. **Vapi voice agent** — phone receptionist (configured separately in Vapi)
3. **In-house dashboard** — lead management dashboard (separate project)

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** + custom CSS for the navy/gold brand
- **Resend** for lead notification emails
- **react-hook-form** + **Zod** for form validation
- Schema.org JSON-LD for SEO (LocalBusiness + FAQ rich results)
- Google Analytics 4 ready (optional)

## What's included

- Polished single-page marketing site (navy + gold)
- Hero, trust bar, process, why us, testimonials, situations, service areas, about, FAQ, CTA, footer
- Working lead form with validation, loading/success/error states
- On submission: validates → sends notification email to your inbox via Resend
- Full SEO: meta tags, Open Graph, Twitter cards, sitemap, robots, schema markup
- Mobile responsive

## What's NOT included (intentionally)

- ❌ No database — lead form just emails you the submission
- ❌ No admin dashboard — that's a separate deliverable
- ❌ No Vapi integration — that's handled in the dashboard project

If you want to capture leads in a database later, the form already POSTs to `/api/leads`, so you just swap that route's logic when ready.

## Quick start (local development)

```bash
# 1. Install dependencies
npm install

# 2. Copy env file and fill in values
cp .env.example .env.local

# 3. Run the dev server
npm run dev
```

Open http://localhost:3000 to view the site.

You only need 3 env vars to get the form working:
- `RESEND_API_KEY`
- `LEAD_NOTIFICATION_EMAIL`
- `LEAD_FROM_EMAIL`

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for the step-by-step Vercel deployment guide. Total time: ~15 minutes.

## Project structure

```
landing/
├── app/
│   ├── api/leads/route.ts          # Form endpoint → sends email
│   ├── globals.css                 # All brand styles
│   ├── layout.tsx                  # Root layout + SEO + schema
│   ├── page.tsx                    # Homepage
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── Nav.tsx                     # Sticky nav (client)
│   ├── Hero.tsx                    # Hero + lead form (client)
│   └── Sections.tsx                # All static sections (server)
├── lib/
│   ├── validations.ts              # Zod schema for form
│   └── email.ts                    # Resend helper
├── .env.example
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Customization

- **Phone number**: search for `(619) 473-2033` and replace
- **Email**: search for `info@iterumhomes.com` and replace
- **Brand colors**: edit the CSS variables at the top of `app/globals.css`
- **Sections**: edit `components/Sections.tsx`
- **SEO metadata**: edit `app/layout.tsx`
