import type { FAQItem } from "@/content/faq";
import type { PageContent } from "@/content/core";
import { SectionBlock, PageHero, CallSteps, FAQSection } from "@/components/site/Sections";

export function StandardPage({
  content,
  showCallSteps = true,
  faqs,
}: {
  content: PageContent;
  showCallSteps?: boolean;
  faqs?: FAQItem[];
}) {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-8 px-6 pb-24 pt-10">
      <PageHero
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        description={content.hero.description}
      />
      {showCallSteps && <CallSteps />}
      {content.sections.map((section, index) => (
        <SectionBlock
          key={`${section.heading ?? "section"}-${index}`}
          heading={section.heading}
          body={section.body}
          bullets={section.bullets}
          quote={section.quote}
        />
      ))}
      {faqs && <FAQSection items={faqs} />}
    </main>
  );
}

export function StatePageTemplate({
  title,
  subtitle,
  intro,
  highlights,
  faqs,
}: {
  title: string;
  subtitle: string;
  intro: string[];
  highlights: string[];
  faqs: FAQItem[];
}) {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-8 px-6 pb-24 pt-10">
      <PageHero title={title} subtitle={subtitle} description="Free & Confidential & Available 24/7" />
      <CallSteps />
      <SectionBlock body={intro} heading="How We Can Help" />
      <SectionBlock heading="Support Available" bullets={highlights} />
      <FAQSection items={faqs} />
    </main>
  );
}

export function MetroPageTemplate({
  title,
  subtitle,
  intro,
  highlights,
  faqs,
}: {
  title: string;
  subtitle: string;
  intro: string[];
  highlights: string[];
  faqs: FAQItem[];
}) {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-8 px-6 pb-24 pt-10">
      <PageHero title={title} subtitle={subtitle} description="Free & Confidential & Available 24/7" />
      <CallSteps />
      <SectionBlock heading="You Are Not Alone" body={intro} />
      <SectionBlock heading="Support Available" bullets={highlights} />
      <FAQSection items={faqs} />
    </main>
  );
}

export function CrisisPageTemplate({
  title,
  subtitle,
  intro,
  sections,
  faqs,
}: {
  title: string;
  subtitle: string;
  intro: string[];
  sections: { heading?: string; body?: string[]; bullets?: string[] }[];
  faqs: FAQItem[];
}) {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-8 px-6 pb-24 pt-10">
      <PageHero title={title} subtitle={subtitle} description="Free & Confidential & Available 24/7" />
      <CallSteps />
      <SectionBlock heading="Guidance" body={intro} />
      {sections.map((section, index) => (
        <SectionBlock
          key={`${section.heading ?? "section"}-${index}`}
          heading={section.heading}
          body={section.body}
          bullets={section.bullets}
        />
      ))}
      <FAQSection items={faqs} />
    </main>
  );
}
