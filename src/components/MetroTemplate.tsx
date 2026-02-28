import Link from "next/link";

import type { MetroPage } from "@/content/metros";
import { siteContent } from "@/content/ingested";
import { Hero, SectionBlock, CallSteps, filterSections } from "@/components/ContentSections";

export default function MetroTemplate({ page }: { page: MetroPage }) {
  const sections = filterSections(page.sections);

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-8 px-6 pb-24 pt-10">
      <Hero page={page} site={siteContent} />
      {sections.map((section, index) => (
        <SectionBlock key={`${section.heading ?? "section"}-${index}`} section={section} />
      ))}
      <CallSteps />
      <section className="section-card">
        <h2 className="text-2xl font-semibold text-ink-900">Looking for statewide support?</h2>
        <div className="mt-4">
          <Link
            href={`/${page.parentStateSlug}`}
            className="rounded-full border border-ink-900 px-4 py-2 text-xs font-semibold text-ink-900"
          >
            View the {page.state} adoption page
          </Link>
        </div>
      </section>
    </main>
  );
}
