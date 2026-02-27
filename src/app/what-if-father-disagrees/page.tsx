import type { Metadata } from "next";

import CrisisTemplate from "@/components/CrisisTemplate";
import { crisis } from "@/content/crisis";

export const metadata: Metadata = {
  title: "What If the Father Disagrees",
  description: "Free. Confidential. No pressure."
};

export default function WhatIfFatherDisagreesPage() {
  return <CrisisTemplate content={crisis["what-if-father-disagrees"]} />;
}
