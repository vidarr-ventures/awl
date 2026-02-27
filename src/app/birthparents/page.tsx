import type { Metadata } from "next";

import { StandardPage } from "@/components/site/Templates";
import { birthparentsPage } from "@/content/core";

export const metadata: Metadata = {
  title: "Are you pregnant and considering adoption?",
  description: "Adoptions With Love can help.",
};

export default function BirthparentsPage() {
  return <StandardPage content={birthparentsPage} />;
}
