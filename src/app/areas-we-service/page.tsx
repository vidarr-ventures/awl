import type { Metadata } from "next";

import { StandardPage } from "@/components/site/Templates";
import { areasPage } from "@/content/core";

export const metadata: Metadata = {
  title: "Areas We Serve",
  description: "Local Adoption Agency | Areas We Service",
};

export default function AreasWeServePage() {
  return <StandardPage content={areasPage} />;
}
