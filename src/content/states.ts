import type { PageContent, Section } from "@/content/types";
import type { FAQItem } from "@/content/faq";
import { pages } from "@/content/ingested";

export type StatePage = PageContent & {
  faqs: FAQItem[];
};

function buildFaqs(sections: Section[]): FAQItem[] {
  return sections
    .filter((section) => section.heading && section.paragraphs && section.paragraphs.length)
    .slice(0, 4)
    .map((section) => ({
      question: section.heading as string,
      answer: section.paragraphs?.[0] || ""
    }));
}

function enrich(page: PageContent): StatePage {
  return {
    ...page,
    faqs: buildFaqs(page.sections)
  };
}

export const statePages: Record<string, StatePage> = {
  texas: enrich(pages["texas-adoption"]),
  florida: enrich(pages["florida-adoption"]),
  georgia: enrich(pages["georgia-adoption"]),
  "north-carolina": enrich(pages["north-carolina-adoption"]),
  ohio: enrich(pages["ohio-adoption"])
};
