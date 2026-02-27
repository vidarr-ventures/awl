import type { Metadata } from "next";

import { StandardPage } from "@/components/site/Templates";
import { adoptionPlanPage } from "@/content/core";

export const metadata: Metadata = {
  title: "Creating an Adoption Plan",
  description: "You are in control every step of the way.",
};

export default function AdoptionPlanPage() {
  return <StandardPage content={adoptionPlanPage} />;
}
