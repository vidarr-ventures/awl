import type { Metadata } from "next";

import CrisisTemplate from "@/components/CrisisTemplate";
import { crisis } from "@/content/crisis";

export const metadata: Metadata = {
  title: "Is Adoption Free",
  description: "Free. Confidential. No pressure."
};

export default function IsAdoptionFreePage() {
  return <CrisisTemplate content={crisis["is-adoption-free"]} />;
}
