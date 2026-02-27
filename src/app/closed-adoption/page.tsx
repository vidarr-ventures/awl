import type { Metadata } from "next";

import { StandardPage } from "@/components/site/Templates";
import { closedAdoptionPage } from "@/content/core";

export const metadata: Metadata = {
  title: "Closed Adoption",
  description: "Any adoption plan is a brave and loving decision.",
};

export default function ClosedAdoptionPage() {
  return <StandardPage content={closedAdoptionPage} />;
}
