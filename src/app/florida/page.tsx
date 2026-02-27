import type { Metadata } from "next";

import StateTemplate from "@/components/StateTemplate";
import { states } from "@/content/states";

export const metadata: Metadata = {
  title: "Florida Adoption Support",
  description: "Free. Confidential. No pressure."
};

export default function FloridaPage() {
  return <StateTemplate content={states.florida} />;
}
