# Deployment Guide

This walks you through deploying the Iterum Homes landing page from zero to a live site at iterumhomes.com. Total time: ~15 minutes.

## What you'll need

- A GitHub account
- A Vercel account (free — sign up at vercel.com)
- A Resend account (free — sign up at resend.com)
- Your domain (iterumhomes.com)

---

## Step 1 — Push the code to GitHub (3 min)

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/iterum-homes-landing.git
git push -u origin main
```

---

## Step 2 — Create the Vercel project (2 min)

1. Go to https://vercel.com/new
2. Import the repo
3. Framework auto-detects as "Next.js" — leave it
4. Don't deploy yet — we need env vars first

---

## Step 3 — Set up Resend (3 min)

1. Sign up at https://resend.com
2. **Domains** → "Add Domain" → enter `iterumhomes.com`
3. Resend gives you DNS records (SPF, DKIM, DMARC) — add them at your domain registrar
4. Click "Verify" once DNS propagates (usually a few minutes)
5. **API Keys** → "Create API Key" → copy the key (starts with `re_...`)

---

## Step 4 — Add env vars in Vercel (2 min)

In your Vercel project → **Settings** → **Environment Variables** add:

| Variable | Value |
|---|---|
| `RESEND_API_KEY` | `re_...` from Resend |
| `LEAD_NOTIFICATION_EMAIL` | Your inbox (e.g. `info@iterumhomes.com`) |
| `LEAD_FROM_EMAIL` | `leads@iterumhomes.com` (must be on a verified Resend domain) |
| `NEXT_PUBLIC_SITE_URL` | `https://iterumhomes.com` |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | (optional) GA4 ID like `G-XXXXXXXXXX` |

---

## Step 5 — Deploy (1 min)

Click "Deploy" in Vercel. The site will be live at `your-project.vercel.app` within 60 seconds.

---

## Step 6 — Connect your custom domain (3 min + DNS wait)

1. In Vercel → **Settings** → **Domains** → add `iterumhomes.com`
2. Vercel shows you DNS records to add at your registrar:
   - **A record**: `@` → `76.76.21.21`
   - **CNAME**: `www` → `cname.vercel-dns.com`
3. Add those records, wait for propagation (5 min to a few hours)

Once propagated, your site is live at `https://iterumhomes.com` with auto-renewing SSL.

---

## Step 7 — Test the lead form

1. Visit `https://iterumhomes.com`
2. Submit the form with test data
3. You should see the success message and receive an email at `LEAD_NOTIFICATION_EMAIL`

---

## Optional: Google Analytics

1. Create a GA4 property at https://analytics.google.com
2. Copy the Measurement ID (`G-XXXXXXXXXX`)
3. Add it to Vercel as `NEXT_PUBLIC_GA_MEASUREMENT_ID`
4. Redeploy

## Optional: Google Search Console

1. Go to https://search.google.com/search-console
2. Add property `iterumhomes.com`
3. Choose HTML tag verification → copy the meta tag content
4. Add it to `app/layout.tsx` in the `metadata` block:
   ```ts
   verification: { google: "your-verification-code" },
   ```
5. Redeploy and verify
6. Submit sitemap: `https://iterumhomes.com/sitemap.xml`

---

## Troubleshooting

**Form submits but no email arrives**
→ Verify your domain in Resend, check `LEAD_FROM_EMAIL` matches a verified domain, check spam folder.

**Form returns 500 error**
→ Check Vercel logs. Most likely `RESEND_API_KEY` is missing or invalid.

**Build fails on Vercel**
→ Run `npm run build` locally to see the error.

---

That's it. You're live.
