# AWL v2 Preview Demo

Private redesign preview for Adoptions With Love. Not intended for indexing.

## Run

```bash
npm install
npm run dev
```

```bash
npm run build
npm run start
```

## Vercel Deployment Checklist

1. Confirm `robots.txt` returns a site-wide disallow.
2. Verify `<meta name="robots" content="noindex,nofollow">` is present on all pages.
3. Confirm no canonical tags point to production unless explicitly desired.
4. Validate FAQ JSON-LD is present on FAQ, crisis, and state/metro pages.
5. Ensure no environment variables are required (none are used).

## Routes

Core:
- `/`
- `/birthparents`
- `/free-services-for-birthmothers`
- `/make-an-adoption-plan`
- `/open-adoption`
- `/closed-adoption`
- `/birthmother-questions`
- `/areas-we-service`
- `/contact-us`
- `/about-this-demo`

States:
- `/location/texas-adoption`
- `/location/florida-adoption`
- `/location/georgia-adoption`
- `/location/north-carolina-adoption`
- `/location/ohio-adoption`

Metro:
- `/location/texas-adoption/houston`
- `/location/texas-adoption/dallas`
- `/location/texas-adoption/austin`
- `/location/florida-adoption/miami`
- `/location/florida-adoption/orlando`
- `/location/florida-adoption/tampa`
- `/location/georgia-adoption/atlanta`
- `/location/georgia-adoption/savannah`
- `/location/georgia-adoption/augusta`
- `/location/north-carolina-adoption/charlotte`
- `/location/north-carolina-adoption/raleigh`
- `/location/north-carolina-adoption/greensboro`
- `/location/ohio-adoption/columbus`
- `/location/ohio-adoption/cleveland`
- `/location/ohio-adoption/cincinnati`

Crisis:
- `/can-i-place-after-birth`
- `/do-birth-mothers-get-paid`
- `/can-i-choose-the-family`
- `/what-if-father-disagrees`
- `/is-adoption-free`
- `/safe-haven-vs-adoption`
- `/can-i-have-contact-open-adoption`
- `/can-i-change-my-mind`
