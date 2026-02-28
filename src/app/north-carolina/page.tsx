import type { Metadata } from "next";

import StateTemplate from "@/components/StateTemplate";
import { statePages } from "@/content/states";
import { metroPages } from "@/content/metros";

const page = statePages["north-carolina"];

export const metadata: Metadata = {
  title: page.title || "North Carolina Adoption Support",
  description: page.description
};

export default function NorthCarolinaPage() {
  const metros = Object.values(metroPages).filter(
    (metro) => metro.parentStateSlug === "north-carolina"
  );
  return <StateTemplate page={page} metros={metros} />;
}
