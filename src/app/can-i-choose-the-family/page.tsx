import type { Metadata } from "next";

import CrisisTemplate from "@/components/CrisisTemplate";
import { crisisPages } from "@/content/crisis";

const page = crisisPages["can-i-choose-the-family"];

export const metadata: Metadata = {
  title: page.title || "Can I Choose the Family",
  description: page.description
};

export default function CrisisPage() {
  return <CrisisTemplate page={page} />;
}
