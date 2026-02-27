import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { MetroPageTemplate } from "@/components/site/Templates";
import { FAQSchema } from "@/components/site/Sections";
import { metroPages } from "@/content/metros";

type Props = {
  params: { state: string; metro: string };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return metroPages.map((page) => ({ state: page.stateSlug, metro: page.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const page = metroPages.find(
    (item) => item.stateSlug === params.state && item.slug === params.metro
  );
  if (!page) {
    return { title: "Metro Adoption" };
  }
  return {
    title: page.title,
    description: page.subtitle,
  };
}

export default function MetroPage({ params }: Props) {
  const page = metroPages.find(
    (item) => item.stateSlug === params.state && item.slug === params.metro
  );
  if (!page) {
    notFound();
  }

  return (
    <>
      <FAQSchema items={page.faqs} />
      <MetroPageTemplate
        title={page.title}
        subtitle={page.subtitle}
        intro={page.intro}
        highlights={page.highlights}
        faqs={page.faqs}
      />
    </>
  );
}
