import type { Metadata } from "next";

import CrisisTemplate from "@/components/CrisisTemplate";
import { crisis } from "@/content/crisis";

export const metadata: Metadata = {
  title: "Can I Place After Birth",
  description: "Free. Confidential. No pressure."
};

export default function CanIPlaceAfterBirthPage() {
  return <CrisisTemplate content={crisis["can-i-place-after-birth"]} />;
}
