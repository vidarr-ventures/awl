import type { Metadata } from "next";

import StateTemplate from "@/components/StateTemplate";
import { states } from "@/content/states";

export const metadata: Metadata = {
  title: "North Carolina Adoption Support",
  description: "Free. Confidential. No pressure."
};

export default function NorthCarolinaPage() {
  return <StateTemplate content={states["north-carolina"]} />;
}
