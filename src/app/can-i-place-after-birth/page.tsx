import type { Metadata } from "next";

import CrisisTemplate from "@/components/CrisisTemplate";
import { crisisPages } from "@/content/crisis";

const page = crisisPages["can-i-place-after-birth"];

export const metadata: Metadata = {
  title: page.title || "Can I Place After Birth",
  description: page.description
};

export default function CrisisPage() {
  return <CrisisTemplate page={page} />;
}
