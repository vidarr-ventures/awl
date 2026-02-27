export type MetroContent = {
  slug: string;
  title: string;
  intro: string[];
  highlights: string[];
};

export const metros: Record<string, MetroContent> = {
  "adoption-in-houston-texas": {
    slug: "adoption-in-houston-texas",
    title: "Adoption Support in Houston, Texas",
    intro: [
      "If you are in Houston and facing an unplanned pregnancy, you have options.",
      "We provide compassionate, confidential support and help you explore adoption."
    ],
    highlights: [
      "Call or text 24/7",
      "Personal adoption plan",
      "Family matching support",
      "Ongoing counseling"
    ]
  },
  "adoption-in-dallas-texas": {
    slug: "adoption-in-dallas-texas",
    title: "Adoption Support in Dallas, Texas",
    intro: [
      "You can take your time and ask any questions in Dallas.",
      "We are here to listen and help you feel safe."
    ],
    highlights: [
      "Free, confidential support",
      "No-pressure guidance",
      "Hospital plan choices",
      "Open or closed adoption options"
    ]
  },
  "adoption-in-austin-texas": {
    slug: "adoption-in-austin-texas",
    title: "Adoption Support in Austin, Texas",
    intro: [
      "Adoption is a thoughtful, personal decision.",
      "We help you create a plan that matches your needs and comfort level."
    ],
    highlights: [
      "24/7 contact availability",
      "Family matching support",
      "Emotional counseling",
      "Clear next steps"
    ]
  }
};
