import type { Metadata } from "next";

import CrisisTemplate from "@/components/CrisisTemplate";
import { crisisPages } from "@/content/crisis";

const page = crisisPages["what-if-father-disagrees"];

export const metadata: Metadata = {
  title: page.title || "What If the Father Disagrees",
  description: page.description
};

export default function CrisisPage() {
  return <CrisisTemplate page={page} />;
}
