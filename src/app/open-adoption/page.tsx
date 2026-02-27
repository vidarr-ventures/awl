import type { Metadata } from "next";

import { StandardPage } from "@/components/site/Templates";
import { openAdoptionPage } from "@/content/core";

export const metadata: Metadata = {
  title: "Open Adoption",
  description: "Birth parents are always in control of their adoption plan.",
};

export default function OpenAdoptionPage() {
  return <StandardPage content={openAdoptionPage} />;
}
