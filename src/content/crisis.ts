import type { FAQItem } from "@/content/states";

export type CrisisContent = {
  slug: string;
  title: string;
  intro: string[];
  sections: { heading: string; body: string[] }[];
  faqs: FAQItem[];
};

const crisisFaqs: FAQItem[] = [
  {
    question: "Is adoption free for me?",
    answer: "Yes. Expectant mothers can receive free, confidential support."
  },
  {
    question: "Can I choose the family?",
    answer: "Yes. You can review profiles and decide what feels right."
  },
  {
    question: "Can I have contact after placement?",
    answer: "Yes. Open or semi-open adoption options are available."
  }
];

export const crisis: Record<string, CrisisContent> = {
  "can-i-place-after-birth": {
    slug: "can-i-place-after-birth",
    title: "Can I Place My Baby for Adoption After Birth?",
    intro: [
      "Yes. If you have already given birth, you can still make an adoption plan.",
      "We can help you understand next steps and provide support right away."
    ],
    sections: [
      {
        heading: "What Happens Next",
        body: [
          "We listen to your situation and explain your options.",
          "You decide how involved you want to be and what feels best."
        ]
      }
    ],
    faqs: crisisFaqs
  },
  "do-birth-mothers-get-paid": {
    slug: "do-birth-mothers-get-paid",
    title: "Do Birth Mothers Get Paid for Adoption?",
    intro: [
      "No. You are not paid for placing a child for adoption.",
      "You may be eligible for support with pregnancy-related expenses."
    ],
    sections: [
      {
        heading: "Support That May Be Available",
        body: [
          "Housing and basic living expenses",
          "Medical and pregnancy-related needs"
        ]
      }
    ],
    faqs: crisisFaqs
  },
  "can-i-choose-the-family": {
    slug: "can-i-choose-the-family",
    title: "Can I Choose the Adoptive Family?",
    intro: [
      "Yes. You can review families and select the one you feel most comfortable with.",
      "You can also decide if you want an open, semi-open, or closed plan."
    ],
    sections: [
      {
        heading: "Your Choice Matters",
        body: [
          "You decide who you meet and how much contact you want.",
          "We support you and help you feel confident in your choice."
        ]
      }
    ],
    faqs: crisisFaqs
  },
  "what-if-father-disagrees": {
    slug: "what-if-father-disagrees",
    title: "What If the Father Disagrees?",
    intro: [
      "Each situation is different and depends on your state and circumstances.",
      "We can connect you with guidance and explain your options."
    ],
    sections: [
      {
        heading: "You Still Have Support",
        body: [
          "We listen first and provide clear information.",
          "You can take your time and make informed decisions."
        ]
      }
    ],
    faqs: crisisFaqs
  },
  "is-adoption-free": {
    slug: "is-adoption-free",
    title: "Is Adoption Free?",
    intro: [
      "Yes. Adoption is free for expectant mothers.",
      "You can access counseling, planning support, and guidance at no cost."
    ],
    sections: [
      {
        heading: "Included Support",
        body: [
          "Personal adoption plan",
          "Counseling and emotional support",
          "Guidance through next steps"
        ]
      }
    ],
    faqs: crisisFaqs
  },
  "safe-haven-vs-adoption": {
    slug: "safe-haven-vs-adoption",
    title: "Safe Haven vs Adoption",
    intro: [
      "Adoption gives you more choices about your baby’s future.",
      "We can explain your options so you feel supported and informed."
    ],
    sections: [
      {
        heading: "Why Some Choose Adoption",
        body: [
          "You can choose the family and the level of contact.",
          "You can create a plan that feels right for you."
        ]
      }
    ],
    faqs: crisisFaqs
  },
  "can-i-have-contact-open-adoption": {
    slug: "can-i-have-contact-open-adoption",
    title: "Can I Have Contact in an Open Adoption?",
    intro: [
      "Yes. Open adoption can include letters, photos, calls, and visits.",
      "You choose the level of contact that feels right."
    ],
    sections: [
      {
        heading: "Contact Options",
        body: [
          "Open, semi-open, and closed adoption plans",
          "You can update your preferences over time"
        ]
      }
    ],
    faqs: crisisFaqs
  },
  "can-i-change-my-mind": {
    slug: "can-i-change-my-mind",
    title: "Can I Change My Mind About Adoption?",
    intro: [
      "You can take your time and ask questions before you decide.",
      "We support you without pressure and help you understand your options."
    ],
    sections: [
      {
        heading: "No Pressure",
        body: [
          "You are in control of your decision-making.",
          "We are here to listen and support you."
        ]
      }
    ],
    faqs: crisisFaqs
  }
};
