import type { Metadata } from "next";

import StateTemplate from "@/components/StateTemplate";
import { statePages } from "@/content/states";
import { metroPages } from "@/content/metros";

const page = statePages.georgia;

export const metadata: Metadata = {
  title: page.title || "Georgia Adoption Support",
  description: page.description
};

export default function GeorgiaPage() {
  const metros = Object.values(metroPages).filter((metro) => metro.parentStateSlug === "georgia");
  return <StateTemplate page={page} metros={metros} />;
}
