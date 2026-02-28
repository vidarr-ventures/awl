# AWL v2 Preview Demo

Private redesign preview for Adoptions With Love. Not intended for indexing.

## Ingest (Required)

This project pulls real copy and images from AWL pages. Run the ingest script before `dev` or `build`.

```bash
npm install
npm run ingest
```

The ingest script will:
- Fetch the source URLs
- Extract headings, paragraphs, lists, CTAs, and images
- Download images into `public/awl-assets/<page>/`
- Write structured JSON content files into `src/content/ingested/`

## Run

```bash
npm run dev
```

```bash
npm run build
npm run start
```

## Routes

Core:
- `/`
- `/about-this-demo`

States:
- `/texas`
- `/florida`
- `/georgia`
- `/north-carolina`
- `/ohio`

Metro:
- `/adoption-in-houston-texas`
- `/adoption-in-dallas-texas`
- `/adoption-in-austin-texas`
- `/adoption-in-miami-florida`
- `/adoption-in-orlando-florida`
- `/adoption-in-tampa-florida`
- `/adoption-in-atlanta-georgia`
- `/adoption-in-savannah-georgia`
- `/adoption-in-augusta-georgia`
- `/adoption-in-charlotte-north-carolina`
- `/adoption-in-raleigh-north-carolina`
- `/adoption-in-greensboro-north-carolina`
- `/adoption-in-columbus-ohio`
- `/adoption-in-cleveland-ohio`
- `/adoption-in-cincinnati-ohio`

Crisis:
- `/can-i-place-after-birth`
- `/do-birth-mothers-get-paid`
- `/can-i-choose-the-family`
- `/what-if-father-disagrees`
- `/is-adoption-free`
- `/safe-haven-vs-adoption`
- `/can-i-have-contact-open-adoption`
- `/can-i-change-my-mind`

## Indexing Controls

- Global `noindex,nofollow` metadata in `src/app/layout.tsx`
- `robots.ts` disallow all
- `X-Robots-Tag: noindex, nofollow` via `next.config.mjs`
