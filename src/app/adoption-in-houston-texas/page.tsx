import type { Metadata } from "next";

import MetroTemplate from "@/components/MetroTemplate";
import { metros } from "@/content/metros";

export const metadata: Metadata = {
  title: "Adoption in Houston, Texas",
  description: "Free. Confidential. No pressure."
};

export default function HoustonPage() {
  return <MetroTemplate content={metros["adoption-in-houston-texas"]} />;
}
