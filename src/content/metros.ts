import type { PageContent, Section } from "@/content/types";
import { statePages } from "@/content/states";

export type MetroPage = PageContent & {
  city: string;
  state: string;
  parentStateSlug: string;
};

const crisisLinks = [
  { label: "Can I Place After Birth?", href: "/can-i-place-after-birth" },
  { label: "Is Adoption Free?", href: "/is-adoption-free" },
  { label: "Can I Choose the Family?", href: "/can-i-choose-the-family" }
];

function buildMetro(
  slug: string,
  city: string,
  state: string,
  parentStateSlug: string,
  base: PageContent
): MetroPage {
  const intro: Section = {
    heading: `Adoption support in ${city}`,
    paragraphs: [
      `We support women in ${city} and across ${state}.`,
      ...(base.sections[0]?.paragraphs || []).slice(0, 2)
    ],
    ctas: [
      { label: `View ${state} page`, href: `/${parentStateSlug}` },
      ...crisisLinks
    ]
  };

  const reusedSections = base.sections.slice(0, 4);

  return {
    ...base,
    slug,
    url: `/${slug}`,
    title: `Adoption in ${city}, ${state}`,
    h1: `Adoption in ${city}, ${state}`,
    hero: {
      ...base.hero,
      title: `Adoption in ${city}, ${state}`,
      description: base.hero?.description || base.sections[0]?.paragraphs?.[0]
    },
    sections: [intro, ...reusedSections],
    city,
    state,
    parentStateSlug
  };
}

export const metroPages: Record<string, MetroPage> = {
  "adoption-in-houston-texas": buildMetro(
    "adoption-in-houston-texas",
    "Houston",
    "Texas",
    "texas",
    statePages.texas
  ),
  "adoption-in-dallas-texas": buildMetro(
    "adoption-in-dallas-texas",
    "Dallas",
    "Texas",
    "texas",
    statePages.texas
  ),
  "adoption-in-austin-texas": buildMetro(
    "adoption-in-austin-texas",
    "Austin",
    "Texas",
    "texas",
    statePages.texas
  ),
  "adoption-in-miami-florida": buildMetro(
    "adoption-in-miami-florida",
    "Miami",
    "Florida",
    "florida",
    statePages.florida
  ),
  "adoption-in-orlando-florida": buildMetro(
    "adoption-in-orlando-florida",
    "Orlando",
    "Florida",
    "florida",
    statePages.florida
  ),
  "adoption-in-tampa-florida": buildMetro(
    "adoption-in-tampa-florida",
    "Tampa",
    "Florida",
    "florida",
    statePages.florida
  ),
  "adoption-in-atlanta-georgia": buildMetro(
    "adoption-in-atlanta-georgia",
    "Atlanta",
    "Georgia",
    "georgia",
    statePages.georgia
  ),
  "adoption-in-savannah-georgia": buildMetro(
    "adoption-in-savannah-georgia",
    "Savannah",
    "Georgia",
    "georgia",
    statePages.georgia
  ),
  "adoption-in-augusta-georgia": buildMetro(
    "adoption-in-augusta-georgia",
    "Augusta",
    "Georgia",
    "georgia",
    statePages.georgia
  ),
  "adoption-in-charlotte-north-carolina": buildMetro(
    "adoption-in-charlotte-north-carolina",
    "Charlotte",
    "North Carolina",
    "north-carolina",
    statePages["north-carolina"]
  ),
  "adoption-in-raleigh-north-carolina": buildMetro(
    "adoption-in-raleigh-north-carolina",
    "Raleigh",
    "North Carolina",
    "north-carolina",
    statePages["north-carolina"]
  ),
  "adoption-in-greensboro-north-carolina": buildMetro(
    "adoption-in-greensboro-north-carolina",
    "Greensboro",
    "North Carolina",
    "north-carolina",
    statePages["north-carolina"]
  ),
  "adoption-in-columbus-ohio": buildMetro(
    "adoption-in-columbus-ohio",
    "Columbus",
    "Ohio",
    "ohio",
    statePages.ohio
  ),
  "adoption-in-cleveland-ohio": buildMetro(
    "adoption-in-cleveland-ohio",
    "Cleveland",
    "Ohio",
    "ohio",
    statePages.ohio
  ),
  "adoption-in-cincinnati-ohio": buildMetro(
    "adoption-in-cincinnati-ohio",
    "Cincinnati",
    "Ohio",
    "ohio",
    statePages.ohio
  )
};
