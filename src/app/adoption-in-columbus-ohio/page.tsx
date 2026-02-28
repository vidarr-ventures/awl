import type { Metadata } from "next";

import MetroTemplate from "@/components/MetroTemplate";
import { metroPages } from "@/content/metros";

const page = metroPages["adoption-in-columbus-ohio"];

export const metadata: Metadata = {
  title: page.title || "Adoption in Columbus, Ohio",
  description: page.description
};

export default function MetroPage() {
  return <MetroTemplate page={page} />;
}
