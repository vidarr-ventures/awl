import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { StatePageTemplate } from "@/components/site/Templates";
import { FAQSchema } from "@/components/site/Sections";
import { statePages } from "@/content/states";

type Props = {
  params: { slug: string };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return statePages.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const page = statePages.find((item) => item.slug === params.slug);
  if (!page) {
    return { title: "State Adoption" };
  }
  return {
    title: page.title,
    description: page.subtitle,
  };
}

export default function StatePage({ params }: Props) {
  const page = statePages.find((item) => item.slug === params.slug);
  if (!page) {
    notFound();
  }

  return (
    <>
      <FAQSchema items={page.faqs} />
      <StatePageTemplate
        title={page.title}
        subtitle={page.subtitle}
        intro={page.intro}
        highlights={page.highlights}
        faqs={page.faqs}
      />
    </>
  );
}
