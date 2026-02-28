import Link from "next/link";

import type { StatePage } from "@/content/states";
import type { MetroPage } from "@/content/metros";
import { siteContent } from "@/content/ingested";
import { Hero, SectionBlock, CallSteps, filterSections } from "@/components/ContentSections";
import { FAQJsonLd, FAQSection } from "@/components/FAQ";

export default function StateTemplate({
  page,
  metros
}: {
  page: StatePage;
  metros: MetroPage[];
}) {
  const sections = filterSections(page.sections);

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-8 px-6 pb-24 pt-10">
      <FAQJsonLd items={page.faqs} />
      <Hero page={page} site={siteContent} />
      {sections.map((section, index) => (
        <SectionBlock key={`${section.heading ?? "section"}-${index}`} section={section} />
      ))}
      <CallSteps />
      <section className="section-card">
        <h2 className="text-2xl font-semibold text-ink-900">Metro Support</h2>
        <p className="mt-2 text-sm text-ink-700">
          Explore local support pages for expectant and birth mothers.
        </p>
        <div className="mt-4 grid gap-3 text-sm text-ink-700 md:grid-cols-3">
          {metros.map((metro) => (
            <Link
              key={metro.slug}
              href={`/${metro.slug}`}
              className="section-frame px-4 py-3"
            >
              {metro.city}
            </Link>
          ))}
        </div>
      </section>
      <FAQSection items={page.faqs} />
    </main>
  );
}
