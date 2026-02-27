import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CrisisPageTemplate } from "@/components/site/Templates";
import { FAQSchema } from "@/components/site/Sections";
import { crisisPages } from "@/content/crisis";

type Props = {
  params: { slug: string };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return crisisPages.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const page = crisisPages.find((item) => item.slug === params.slug);
  if (!page) {
    return { title: "Adoption Guidance" };
  }
  return {
    title: page.title,
    description: page.subtitle,
  };
}

export default function CrisisPage({ params }: Props) {
  const page = crisisPages.find((item) => item.slug === params.slug);
  if (!page) {
    notFound();
  }

  return (
    <>
      <FAQSchema items={page.faqs} />
      <CrisisPageTemplate
        title={page.title}
        subtitle={page.subtitle}
        intro={page.intro}
        sections={page.sections}
        faqs={page.faqs}
      />
    </>
  );
}
