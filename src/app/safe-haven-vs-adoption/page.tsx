import type { Metadata } from "next";

import CrisisTemplate from "@/components/CrisisTemplate";
import { crisisPages } from "@/content/crisis";

const page = crisisPages["safe-haven-vs-adoption"];

export const metadata: Metadata = {
  title: page.title || "Safe Haven vs Adoption",
  description: page.description
};

export default function CrisisPage() {
  return <CrisisTemplate page={page} />;
}
