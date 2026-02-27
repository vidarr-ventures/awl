import Link from "next/link";

import type { FAQItem } from "@/content/faq";
import { site } from "@/content/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PageHero({
  title,
  subtitle,
  description,
}: {
  title: string;
  subtitle?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden rounded-xl border border-sand-200 bg-white/80 px-6 py-10 shadow-card md:px-10 md:py-14">
      <div className="absolute -right-24 -top-32 h-72 w-72 rounded-full bg-rose-100 opacity-70 blur-2xl" />
      <div className="absolute -left-24 -bottom-32 h-72 w-72 rounded-full bg-sage-100 opacity-70 blur-2xl" />
      <div className="relative space-y-4">
        {subtitle && (
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-600">
            {subtitle}
          </p>
        )}
        <h1 className="font-serif text-3xl font-semibold text-ink-900 md:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="text-lg text-ink-700">{description}</p>
        )}
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href={`tel:${site.phone}`}
            className={cn(buttonVariants({ variant: "outline", size: "md" }))}
          >
            Call 24/7
          </Link>
          <Link
            href={`sms:${site.text}`}
            className={cn(buttonVariants({ variant: "rose", size: "md" }))}
          >
            Text Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export function SectionBlock({
  heading,
  body,
  bullets,
  quote,
}: {
  heading?: string;
  body?: string[];
  bullets?: string[];
  quote?: string;
}) {
  return (
    <div className="section-card space-y-4">
      {heading && (
        <h2 className="font-serif text-2xl font-semibold text-ink-900">{heading}</h2>
      )}
      {body && (
        <div className="space-y-3 prose-awl">
          {body.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      )}
      {bullets && (
        <ul className="list-disc space-y-2 pl-6 text-ink-700">
          {bullets.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      {quote && (
        <blockquote className="rounded-xl border border-rose-100 bg-rose-50/60 p-4 text-base italic text-ink-700">
          “{quote}”
        </blockquote>
      )}
    </div>
  );
}

export function CallSteps() {
  const steps = [
    "Adoptions with Love, Inc is available 24 hours a day/7 days a week. Call Melissa, Nancy, Jess, Sharon, Kate, or Brittany.",
    "Wherever you are and whenever it is convenient for you, we are here for you.",
    "When you contact us, you will receive the care, understanding and respect you so very much deserve.",
  ];
  return (
    <div className="gradient-band rounded-xl border border-sand-200 p-6">
      <h2 className="font-serif text-2xl font-semibold text-ink-900">What happens when you call or text</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {steps.map((step, index) => (
          <div key={step} className="rounded-xl bg-white/80 p-4 shadow-card">
            <p className="text-sm font-semibold text-rose-600">Step {index + 1}</p>
            <p className="mt-2 text-sm text-ink-700">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FAQSection({ items }: { items: FAQItem[] }) {
  return (
    <div className="section-card space-y-4">
      <h2 className="font-serif text-2xl font-semibold text-ink-900">Frequently Asked Questions</h2>
      <div className="space-y-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="rounded-lg border border-sand-200 bg-white/90 p-4"
          >
            <summary className="cursor-pointer text-base font-semibold text-ink-900">
              {item.question}
            </summary>
            <p className="mt-3 text-sm text-ink-700">{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

export function FAQSchema({ items }: { items: FAQItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
