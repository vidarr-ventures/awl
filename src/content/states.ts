export type FAQItem = { question: string; answer: string };

export type StateContent = {
  slug: string;
  title: string;
  intro: string[];
  highlights: string[];
  faqs: FAQItem[];
};

export const stateFaqs: FAQItem[] = [
  {
    question: "Is adoption confidential?",
    answer: "Yes. Your privacy is respected, and you control how much you share."
  },
  {
    question: "Can I choose the adoptive family?",
    answer: "Yes. You can review families and decide what feels right for you."
  },
  {
    question: "Will I get support after placement?",
    answer: "Yes. You can continue to receive support and counseling."
  }
];

export const states: Record<string, StateContent> = {
  texas: {
    slug: "texas",
    title: "Adoption Support in Texas",
    intro: [
      "If you are pregnant and considering adoption in Texas, you have options.",
      "We provide calm, confidential guidance and help you build a plan that feels right for you."
    ],
    highlights: [
      "Free, confidential support",
      "Personal adoption plan",
      "Family matching assistance",
      "Ongoing counseling"
    ],
    faqs: stateFaqs
  },
  florida: {
    slug: "florida",
    title: "Adoption Support in Florida",
    intro: [
      "You deserve clear answers and kind support in Florida.",
      "We are here to help you explore adoption with no pressure."
    ],
    highlights: [
      "24/7 contact availability",
      "Custom plan and hospital preferences",
      "Open or closed adoption options",
      "Post-placement support"
    ],
    faqs: stateFaqs
  },
  georgia: {
    slug: "georgia",
    title: "Adoption Support in Georgia",
    intro: [
      "Adoption is a thoughtful, personal decision.",
      "We can help you make a plan that fits your needs and comfort level."
    ],
    highlights: [
      "Confidential guidance",
      "Family matching support",
      "Emotional support and counseling",
      "Clear next steps"
    ],
    faqs: stateFaqs
  },
  "north-carolina": {
    slug: "north-carolina",
    title: "Adoption Support in North Carolina",
    intro: [
      "If you are considering adoption in North Carolina, you are not alone.",
      "We provide calm, supportive guidance and help you make the choices."
    ],
    highlights: [
      "Free support for expectant mothers",
      "Personalized adoption plan",
      "Respect for your privacy",
      "Ongoing counseling"
    ],
    faqs: stateFaqs
  },
  ohio: {
    slug: "ohio",
    title: "Adoption Support in Ohio",
    intro: [
      "You can take your time and ask any question in Ohio.",
      "We help you understand adoption and create a plan you control."
    ],
    highlights: [
      "Confidential guidance",
      "Call or text anytime",
      "Family selection support",
      "Emotional aftercare"
    ],
    faqs: stateFaqs
  }
};
