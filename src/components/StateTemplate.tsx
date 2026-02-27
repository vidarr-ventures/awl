import Link from "next/link";

import { callSteps, site } from "@/content/core";
import type { StateContent, FAQItem } from "@/content/states";

function FAQJsonLd({ items }: { items: FAQItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}

export default function StateTemplate({ content }: { content: StateContent }) {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-8 px-6 pb-24 pt-10">
      <FAQJsonLd items={content.faqs} />
      <section className="section-card space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-600">State Support</p>
        <h1 className="text-3xl font-semibold text-ink-900 md:text-4xl">{content.title}</h1>
        <p className="text-lg text-ink-700">Free. Confidential. No pressure.</p>
        <div className="flex flex-wrap gap-3">
          <Link
            href={`tel:${site.phone}`}
            className="rounded-full border border-ink-900 px-5 py-3 text-sm font-semibold text-ink-900"
          >
            Call 24/7
          </Link>
          <Link
            href={`sms:${site.text}`}
            className="rounded-full bg-rose-500 px-5 py-3 text-sm font-semibold text-white"
          >
            Text Now
          </Link>
        </div>
      </section>

      <section className="section-card space-y-3 prose-awl">
        {content.intro.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </section>

      <section className="section-card">
        <h2 className="text-2xl font-semibold text-ink-900">How We Support You</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-ink-700">
          {content.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section-frame p-6">
        <h2 className="text-2xl font-semibold text-ink-900">What Happens When You Call or Text</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {callSteps.map((step, index) => (
            <div key={step} className="rounded-xl bg-white p-4 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-wide text-rose-500">Step {index + 1}</p>
              <p className="mt-2 text-sm text-ink-700">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-card">
        <h2 className="text-2xl font-semibold text-ink-900">Frequently Asked Questions</h2>
        <div className="mt-4 space-y-3">
          {content.faqs.map((faq) => (
            <details key={faq.question} className="rounded-lg border border-sand-200 bg-white p-4">
              <summary className="cursor-pointer text-sm font-semibold text-ink-900">{faq.question}</summary>
              <p className="mt-3 text-sm text-ink-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
