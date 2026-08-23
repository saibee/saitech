# Saitech Studio — Portfolio

Modern, elegant portfolio for **Saibal Biswas** — Senior Team Lead (EVERSANA), 25+ years Post/ Print/ IT, 15+ years frontend (Sitecore, Magnolia CMS, React, Next.js).

**Live:** Vercel → https://vercel.com/saitech2/~/deployments  
**Repo:** https://github.com/saibee/saitech  
**Auth:** Clerk → https://dashboard.clerk.com/apps

## Stack
- **Next.js 16 (App Router, JS) + Tailwind v4 + lucide-react**
- **next-themes** light/dark (class-based, no flash)
- **Clerk** for sign-in / sign-up / avatar & profile editing
- Blog & Projects as SSG with `generateStaticParams` (markdown-ready)

## Pages
- `/` — Hero, selected works, writing, CTA
- `/about` — Professional + personal bio + skills
- `/experience` — 9 entries • Feb 1995 → Present (timeline)
- `/projects` — grid thumbnails → `/projects/[slug]` with large hero image + case details
- `/blog` → `/blog/[slug]` — working blog posts
- `/contact` — working form → `POST /api/contact` with validation + inline success/error
- `/profile` — Clerk UserButton + editable info; falls back to local demo when keys absent
- `/sign-in`, `/sign-up` — Clerk (or friendly placeholder)

## Quick start
```bash
npm install
cp .env.example .env.local   # add Clerk keys
npm run dev                  # http://localhost:3000
npm test -- --run            # vitest + contact API tests
npm run build                # production build
```

## Env
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
```

Without keys, site runs in **demo mode** (mock profile, no Clerk calls).

## Contact API
`POST /api/contact` validates `name`, `email`, `message` and logs payload. Swap `console.log` for Resend/Nodemailer in production.

## CI/CD
- GitHub Actions `.github/workflows/ci.yml` — lint + test + build on push/PR
- Vercel auto-deploys `main` → set env vars in Vercel dashboard. Trigger: push to `main`.

## Deploy
```bash
git push origin main   # Vercel deploys automatically
# or manual:
npx vercel --prod
```

## Tests
- `src/__tests__/contact.test.js` — API validation
- `src/__tests__/smoke.test.jsx` — data integrity
