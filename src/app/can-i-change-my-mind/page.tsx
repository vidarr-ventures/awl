import type { Metadata } from "next";

import CrisisTemplate from "@/components/CrisisTemplate";
import { crisis } from "@/content/crisis";

export const metadata: Metadata = {
  title: "Can I Change My Mind",
  description: "Free. Confidential. No pressure."
};

export default function CanIChangeMyMindPage() {
  return <CrisisTemplate content={crisis["can-i-change-my-mind"]} />;
}
