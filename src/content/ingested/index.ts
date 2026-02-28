import type { PageContent, SiteContent } from "@/content/types";

import home from "@/content/ingested/home.json";
import areas from "@/content/ingested/areas-we-service.json";
import adoptionPlan from "@/content/ingested/make-an-adoption-plan.json";
import freeServices from "@/content/ingested/free-services-for-birthmothers.json";
import contact from "@/content/ingested/contact-us.json";
import texas from "@/content/ingested/texas-adoption.json";
import florida from "@/content/ingested/florida-adoption.json";
import georgia from "@/content/ingested/georgia-adoption.json";
import northCarolina from "@/content/ingested/north-carolina-adoption.json";
import ohio from "@/content/ingested/ohio-adoption.json";
import site from "@/content/ingested/site.json";

export const pages: Record<string, PageContent> = {
  home: home as PageContent,
  "areas-we-service": areas as PageContent,
  "make-an-adoption-plan": adoptionPlan as PageContent,
  "free-services-for-birthmothers": freeServices as PageContent,
  "contact-us": contact as PageContent,
  "texas-adoption": texas as PageContent,
  "florida-adoption": florida as PageContent,
  "georgia-adoption": georgia as PageContent,
  "north-carolina-adoption": northCarolina as PageContent,
  "ohio-adoption": ohio as PageContent
};

export const siteContent = site as SiteContent;
