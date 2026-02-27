import type { Metadata } from "next";

import CrisisTemplate from "@/components/CrisisTemplate";
import { crisis } from "@/content/crisis";

export const metadata: Metadata = {
  title: "Can I Choose the Family",
  description: "Free. Confidential. No pressure."
};

export default function CanIChooseTheFamilyPage() {
  return <CrisisTemplate content={crisis["can-i-choose-the-family"]} />;
}
