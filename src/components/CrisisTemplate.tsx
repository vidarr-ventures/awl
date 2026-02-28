import { siteContent } from "@/content/ingested";
import type { CrisisPage } from "@/content/crisis";
import { Hero, SectionBlock, CallSteps, filterSections } from "@/components/ContentSections";
import { FAQJsonLd, FAQSection } from "@/components/FAQ";

export default function CrisisTemplate({ page }: { page: CrisisPage }) {
  const sections = filterSections(page.sections);

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-8 px-6 pb-24 pt-10">
      <FAQJsonLd items={page.faqs} />
      <Hero page={page} site={siteContent} />
      {sections.map((section, index) => (
        <SectionBlock key={`${section.heading ?? "section"}-${index}`} section={section} />
      ))}
      <CallSteps />
      <FAQSection items={page.faqs} />
    </main>
  );
}
