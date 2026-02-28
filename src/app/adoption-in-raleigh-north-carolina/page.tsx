import type { Metadata } from "next";

import MetroTemplate from "@/components/MetroTemplate";
import { metroPages } from "@/content/metros";

const page = metroPages["adoption-in-raleigh-north-carolina"];

export const metadata: Metadata = {
  title: page.title || "Adoption in Raleigh, North Carolina",
  description: page.description
};

export default function MetroPage() {
  return <MetroTemplate page={page} />;
}
