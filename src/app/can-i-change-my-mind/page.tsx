import type { Metadata } from "next";

import CrisisTemplate from "@/components/CrisisTemplate";
import { crisisPages } from "@/content/crisis";

const page = crisisPages["can-i-change-my-mind"];

export const metadata: Metadata = {
  title: page.title || "Can I Change My Mind",
  description: page.description
};

export default function CrisisPage() {
  return <CrisisTemplate page={page} />;
}
