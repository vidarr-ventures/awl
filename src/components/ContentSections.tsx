import Image from "next/image";
import Link from "next/link";

import type { PageContent, Section, SiteContent } from "@/content/types";

function hasContent(section: Section) {
  return (
    (section.paragraphs && section.paragraphs.length > 0) ||
    (section.list && section.list.length > 0) ||
    (section.ctas && section.ctas.length > 0) ||
    (section.images && section.images.length > 0)
  );
}

export function Hero({ page, site }: { page: PageContent; site: SiteContent }) {
  const hero = page.hero;
  return (
    <section className="section-card grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-600">Private Preview</p>
        <h1 className="text-3xl font-semibold text-ink-900 md:text-4xl">
          {hero?.title || page.h1 || page.title}
        </h1>
        {hero?.description && <p className="text-base text-ink-700">{hero.description}</p>}
        <p className="text-sm font-semibold text-rose-500">Free. Confidential. No pressure.</p>
        <div className="flex flex-wrap gap-3">
          {site.phoneLink && (
            <Link
              href={`tel:${site.phoneLink}`}
              className="rounded-full border border-ink-900 px-5 py-3 text-sm font-semibold text-ink-900"
            >
              Call 24/7
            </Link>
          )}
          {site.textLink && (
            <Link
              href={`sms:${site.textLink}`}
              className="rounded-full bg-rose-500 px-5 py-3 text-sm font-semibold text-white"
            >
              Text Now
            </Link>
          )}
        </div>
      </div>
      {hero?.image?.src && (
        <div className="relative min-h-[240px] overflow-hidden rounded-xl">
          <Image
            src={hero.image.src}
            alt={hero.image.alt || hero.title || "Adoption support"}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 40vw, 100vw"
          />
        </div>
      )}
    </section>
  );
}

export function SectionBlock({ section }: { section: Section }) {
  return (
    <section className="section-card space-y-3">
      {section.heading && (
        <h2 className="text-2xl font-semibold text-ink-900">{section.heading}</h2>
      )}
      {section.paragraphs && (
        <div className="space-y-3 prose-awl">
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      )}
      {section.list && section.list.length > 0 && (
        <ul className="list-disc space-y-2 pl-6 text-ink-700">
          {section.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {section.images && section.images.length > 0 && (
        <div className="grid gap-3 sm:grid-cols-2">
          {section.images.map((image) => (
            <div key={image.src} className="relative min-h-[180px] overflow-hidden rounded-xl">
              <Image
                src={image.src}
                alt={image.alt || section.heading || "Adoption support"}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          ))}
        </div>
      )}
      {section.ctas && section.ctas.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {section.ctas.map((cta) => (
            <Link
              key={`${cta.href}-${cta.label}`}
              href={cta.href}
              className="rounded-full border border-ink-900 px-4 py-2 text-xs font-semibold text-ink-900"
            >
              {cta.label}
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

export function CallSteps() {
  const steps = [
    "We answer right away and listen first.",
    "We explain your options and what support looks like.",
    "You decide what happens next — no pressure."
  ];

  return (
    <section className="section-frame p-6">
      <h2 className="text-2xl font-semibold text-ink-900">What Happens When You Call or Text</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {steps.map((step, index) => (
          <div key={step} className="rounded-xl bg-white p-4 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-wide text-rose-500">Step {index + 1}</p>
            <p className="mt-2 text-sm text-ink-700">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ContentRenderer({ page, site }: { page: PageContent; site: SiteContent }) {
  const sections = page.sections.filter(hasContent);

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-8 px-6 pb-24 pt-10">
      <Hero page={page} site={site} />
      {sections.map((section, index) => (
        <SectionBlock key={`${section.heading ?? "section"}-${index}`} section={section} />
      ))}
    </main>
  );
}

export function filterSections(sections: Section[]) {
  return sections.filter(hasContent);
}
