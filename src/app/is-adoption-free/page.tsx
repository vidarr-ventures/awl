import type { Metadata } from "next";

import CrisisTemplate from "@/components/CrisisTemplate";
import { crisisPages } from "@/content/crisis";

const page = crisisPages["is-adoption-free"];

export const metadata: Metadata = {
  title: page.title || "Is Adoption Free",
  description: page.description
};

export default function CrisisPage() {
  return <CrisisTemplate page={page} />;
}
