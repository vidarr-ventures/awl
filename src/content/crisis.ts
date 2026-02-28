import type { PageContent, Section } from "@/content/types";
import type { FAQItem } from "@/content/faq";
import { pages } from "@/content/ingested";

export type CrisisPage = PageContent & {
  slug: string;
  faqs: FAQItem[];
};

const adoptionPlan = pages["make-an-adoption-plan"];
const freeServices = pages["free-services-for-birthmothers"];
const contact = pages["contact-us"];

const baseParagraphs = [
  ...(adoptionPlan.sections[0]?.paragraphs || []),
  ...(freeServices.sections[0]?.paragraphs || [])
];

const baseFaqs: FAQItem[] = [
  {
    question: adoptionPlan.sections[1]?.heading || "Your adoption plan",
    answer: adoptionPlan.sections[1]?.paragraphs?.[0] || baseParagraphs[0] || ""
  },
  {
    question: freeServices.sections[1]?.heading || "Free services",
    answer: freeServices.sections[1]?.paragraphs?.[0] || baseParagraphs[1] || ""
  },
  {
    question: contact.h1 || "Contact Adoptions With Love",
    answer: contact.sections[0]?.paragraphs?.[0] || ""
  }
];

function sectionFrom(source: PageContent, heading: string, count = 2): Section {
  return {
    heading,
    paragraphs: (source.sections[0]?.paragraphs || []).slice(0, count)
  };
}

function buildCrisis(
  slug: string,
  title: string,
  introLines: string[],
  extraSections: Section[]
): CrisisPage {
  return {
    slug,
    url: `/${slug}`,
    title,
    h1: title,
    description: introLines[0],
    hero: {
      title,
      description: introLines[0]
    },
    sections: [
      {
        heading: "You are not alone",
        paragraphs: introLines
      },
      ...extraSections,
      {
        heading: contact.h1 || "Contact Adoptions With Love",
        paragraphs: contact.sections[0]?.paragraphs || []
      }
    ],
    faqs: baseFaqs
  };
}

export const crisisPages: Record<string, CrisisPage> = {
  "can-i-place-after-birth": buildCrisis(
    "can-i-place-after-birth",
    "Can I Place After Birth?",
    baseParagraphs.slice(0, 2),
    [sectionFrom(adoptionPlan, "Creating an adoption plan", 2)]
  ),
  "do-birth-mothers-get-paid": buildCrisis(
    "do-birth-mothers-get-paid",
    "Do Birth Mothers Get Paid?",
    freeServices.sections[2]?.paragraphs || baseParagraphs.slice(0, 2),
    [sectionFrom(freeServices, "Financial assistance for birth mothers", 2)]
  ),
  "can-i-choose-the-family": buildCrisis(
    "can-i-choose-the-family",
    "Can I Choose the Family?",
    adoptionPlan.sections[1]?.paragraphs || baseParagraphs.slice(0, 2),
    [sectionFrom(adoptionPlan, "Your adoption plan can include", 2)]
  ),
  "what-if-father-disagrees": buildCrisis(
    "what-if-father-disagrees",
    "What If the Father Disagrees?",
    baseParagraphs.slice(0, 2),
    [sectionFrom(adoptionPlan, "Open adoption plan", 2)]
  ),
  "is-adoption-free": buildCrisis(
    "is-adoption-free",
    "Is Adoption Free?",
    freeServices.sections[0]?.paragraphs || baseParagraphs.slice(0, 2),
    [sectionFrom(freeServices, "Adoption services for birth mothers", 2)]
  ),
  "safe-haven-vs-adoption": buildCrisis(
    "safe-haven-vs-adoption",
    "Safe Haven vs Adoption",
    baseParagraphs.slice(0, 2),
    [sectionFrom(adoptionPlan, "Creating an adoption plan", 2)]
  ),
  "can-i-have-contact-open-adoption": buildCrisis(
    "can-i-have-contact-open-adoption",
    "Can I Have Contact in an Open Adoption?",
    adoptionPlan.sections[2]?.paragraphs || baseParagraphs.slice(0, 2),
    [sectionFrom(adoptionPlan, "Open adoption plan", 2)]
  ),
  "can-i-change-my-mind": buildCrisis(
    "can-i-change-my-mind",
    "Can I Change My Mind?",
    baseParagraphs.slice(0, 2),
    [sectionFrom(adoptionPlan, "Closed adoption plan", 2)]
  )
};
