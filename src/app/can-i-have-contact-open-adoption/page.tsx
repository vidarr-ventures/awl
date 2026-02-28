import type { Metadata } from "next";

import CrisisTemplate from "@/components/CrisisTemplate";
import { crisisPages } from "@/content/crisis";

const page = crisisPages["can-i-have-contact-open-adoption"];

export const metadata: Metadata = {
  title: page.title || "Open Adoption Contact",
  description: page.description
};

export default function CrisisPage() {
  return <CrisisTemplate page={page} />;
}
