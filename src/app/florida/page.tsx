import type { Metadata } from "next";

import StateTemplate from "@/components/StateTemplate";
import { statePages } from "@/content/states";
import { metroPages } from "@/content/metros";

const page = statePages.florida;

export const metadata: Metadata = {
  title: page.title || "Florida Adoption Support",
  description: page.description
};

export default function FloridaPage() {
  const metros = Object.values(metroPages).filter((metro) => metro.parentStateSlug === "florida");
  return <StateTemplate page={page} metros={metros} />;
}
