import type { Metadata } from "next";

import CrisisTemplate from "@/components/CrisisTemplate";
import { crisis } from "@/content/crisis";

export const metadata: Metadata = {
  title: "Do Birth Mothers Get Paid",
  description: "Free. Confidential. No pressure."
};

export default function DoBirthMothersGetPaidPage() {
  return <CrisisTemplate content={crisis["do-birth-mothers-get-paid"]} />;
}
