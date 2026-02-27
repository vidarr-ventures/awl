import type { Metadata } from "next";

import { StandardPage } from "@/components/site/Templates";
import { FAQSchema } from "@/components/site/Sections";
import { birthparentFaq } from "@/content/faq";
import { birthmotherQuestionsPage } from "@/content/core";

export const metadata: Metadata = {
  title: "Birth Mother Questions",
  description: "Frequently asked questions about adoption.",
};

export default function BirthmotherQuestionsPage() {
  return (
    <>
      <FAQSchema items={birthparentFaq} />
      <StandardPage content={birthmotherQuestionsPage} faqs={birthparentFaq} />
    </>
  );
}
