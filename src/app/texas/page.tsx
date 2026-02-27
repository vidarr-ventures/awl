import type { Metadata } from "next";

import StateTemplate from "@/components/StateTemplate";
import { states } from "@/content/states";

export const metadata: Metadata = {
  title: "Texas Adoption Support",
  description: "Free. Confidential. No pressure."
};

export default function TexasPage() {
  return <StateTemplate content={states.texas} />;
}
