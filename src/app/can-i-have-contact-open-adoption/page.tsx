import type { Metadata } from "next";

import CrisisTemplate from "@/components/CrisisTemplate";
import { crisis } from "@/content/crisis";

export const metadata: Metadata = {
  title: "Open Adoption Contact",
  description: "Free. Confidential. No pressure."
};

export default function CanIHaveContactOpenAdoptionPage() {
  return <CrisisTemplate content={crisis["can-i-have-contact-open-adoption"]} />;
}
