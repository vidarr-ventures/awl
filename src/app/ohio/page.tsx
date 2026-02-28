import type { Metadata } from "next";

import StateTemplate from "@/components/StateTemplate";
import { statePages } from "@/content/states";
import { metroPages } from "@/content/metros";

const page = statePages.ohio;

export const metadata: Metadata = {
  title: page.title || "Ohio Adoption Support",
  description: page.description
};

export default function OhioPage() {
  const metros = Object.values(metroPages).filter((metro) => metro.parentStateSlug === "ohio");
  return <StateTemplate page={page} metros={metros} />;
}
