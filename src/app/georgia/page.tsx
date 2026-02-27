import type { Metadata } from "next";

import StateTemplate from "@/components/StateTemplate";
import { states } from "@/content/states";

export const metadata: Metadata = {
  title: "Georgia Adoption Support",
  description: "Free. Confidential. No pressure."
};

export default function GeorgiaPage() {
  return <StateTemplate content={states.georgia} />;
}
