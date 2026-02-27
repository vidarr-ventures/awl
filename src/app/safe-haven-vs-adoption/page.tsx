import type { Metadata } from "next";

import CrisisTemplate from "@/components/CrisisTemplate";
import { crisis } from "@/content/crisis";

export const metadata: Metadata = {
  title: "Safe Haven vs Adoption",
  description: "Free. Confidential. No pressure."
};

export default function SafeHavenVsAdoptionPage() {
  return <CrisisTemplate content={crisis["safe-haven-vs-adoption"]} />;
}
