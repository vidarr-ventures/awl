import type { Metadata } from "next";

import { StandardPage } from "@/components/site/Templates";
import { ContactForm } from "@/components/site/ContactForm";
import { contactPage } from "@/content/core";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact Adoptions With Love",
  description: "Talk To Us, We Are Here to Listen!",
};

export default function ContactPage() {
  return (
    <>
      <StandardPage content={contactPage} />
      <section className="mx-auto -mt-4 grid max-w-6xl gap-6 px-6 pb-24 md:grid-cols-[1.2fr_0.8fr]">
        <ContactForm />
        <div className="section-card space-y-4">
          <h2 className="text-2xl font-semibold text-ink-900">Contact Details</h2>
          <p className="text-sm text-ink-700">Address: {site.address}</p>
          <p className="text-sm text-ink-700">Phone: {site.phone}</p>
          <p className="text-sm text-ink-700">Toll-Free: {site.tollFree}</p>
          <p className="text-sm text-ink-700">Text: {site.text}</p>
          <p className="text-sm text-ink-700">Email: {site.email}</p>
        </div>
      </section>
    </>
  );
}
