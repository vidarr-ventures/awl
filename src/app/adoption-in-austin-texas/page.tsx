import type { Metadata } from "next";

import MetroTemplate from "@/components/MetroTemplate";
import { metros } from "@/content/metros";

export const metadata: Metadata = {
  title: "Adoption in Austin, Texas",
  description: "Free. Confidential. No pressure."
};

export default function AustinPage() {
  return <MetroTemplate content={metros["adoption-in-austin-texas"]} />;
}
