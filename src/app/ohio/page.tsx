import type { Metadata } from "next";

import StateTemplate from "@/components/StateTemplate";
import { states } from "@/content/states";

export const metadata: Metadata = {
  title: "Ohio Adoption Support",
  description: "Free. Confidential. No pressure."
};

export default function OhioPage() {
  return <StateTemplate content={states.ohio} />;
}
