import type { Metadata } from "next";

import StateTemplate from "@/components/StateTemplate";
import { statePages } from "@/content/states";
import { metroPages } from "@/content/metros";

const page = statePages.texas;

export const metadata: Metadata = {
  title: page.title || "Texas Adoption Support",
  description: page.description
};

export default function TexasPage() {
  const metros = Object.values(metroPages).filter((metro) => metro.parentStateSlug === "texas");
  return <StateTemplate page={page} metros={metros} />;
}
