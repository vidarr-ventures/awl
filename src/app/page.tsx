import type { Metadata } from "next";

import { ContentRenderer } from "@/components/ContentSections";
import { pages, siteContent } from "@/content/ingested";

export const metadata: Metadata = {
  title: "AWL v2 Preview",
  description: pages.home?.description || "Private redesign demo for Adoptions With Love."
};

export default function HomePage() {
  return <ContentRenderer page={pages.home} site={siteContent} />;
}
