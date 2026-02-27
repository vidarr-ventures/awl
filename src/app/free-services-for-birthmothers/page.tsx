import type { Metadata } from "next";

import { StandardPage } from "@/components/site/Templates";
import { freeServicesPage } from "@/content/core";

export const metadata: Metadata = {
  title: "Free Adoption Services for Expectant/Birth Mothers",
  description: "Free & Confidential & Available 24/7",
};

export default function FreeServicesPage() {
  return <StandardPage content={freeServicesPage} />;
}
