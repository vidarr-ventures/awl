import type { Metadata } from "next";

import CrisisTemplate from "@/components/CrisisTemplate";
import { crisisPages } from "@/content/crisis";

const page = crisisPages["do-birth-mothers-get-paid"];

export const metadata: Metadata = {
  title: page.title || "Do Birth Mothers Get Paid",
  description: page.description
};

export default function CrisisPage() {
  return <CrisisTemplate page={page} />;
}
