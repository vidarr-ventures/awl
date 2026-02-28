import type { Metadata } from "next";

import MetroTemplate from "@/components/MetroTemplate";
import { metroPages } from "@/content/metros";

const page = metroPages["adoption-in-miami-florida"];

export const metadata: Metadata = {
  title: page.title || "Adoption in Miami, Florida",
  description: page.description
};

export default function MetroPage() {
  return <MetroTemplate page={page} />;
}
