# Rare Input website

Marketing site for Rare Input: Shopify store and app development, on-page and technical SEO, and e-commerce marketing.

Next.js 16 (App Router, Cache Components), TypeScript, Tailwind CSS v4.

## Develop

```bash
npm install
npm run dev
```

## Edit content

- `src/lib/site.ts`: name, URL, contact email.
- `src/lib/services.ts`: the three groups (Build, Rank, Grow) and all eight services. Pages, sitemap and footer are generated from this file.

## Contact form

`POST /api/contact` sends mail through Resend. Set these environment variables, or the form returns a clear "not connected" message:

- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL` (a verified sender)
- `CONTACT_TO_EMAIL` (optional, defaults to the address in `site.ts`)

Set `NEXT_PUBLIC_SITE_URL` to the production URL for canonical links and the sitemap.
