import type { Metadata } from "next";

import MetroTemplate from "@/components/MetroTemplate";
import { metroPages } from "@/content/metros";

const page = metroPages["adoption-in-austin-texas"];

export const metadata: Metadata = {
  title: page.title || "Adoption in Austin, Texas",
  description: page.description
};

export default function MetroPage() {
  return <MetroTemplate page={page} />;
}
