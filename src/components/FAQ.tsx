import type { FAQItem } from "@/content/faq";

export type { FAQItem };

export function FAQJsonLd({ items }: { items: FAQItem[] }) {
  if (!items.length) return null;
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

export function FAQSection({ items }: { items: FAQItem[] }) {
  if (!items.length) return null;
  return (
    <section className="section-card">
      <h2 className="text-2xl font-semibold text-ink-900">Frequently Asked Questions</h2>
      <div className="mt-4 space-y-3">
        {items.map((faq) => (
          <details key={faq.question} className="rounded-lg border border-sand-200 bg-white p-4">
            <summary className="cursor-pointer text-sm font-semibold text-ink-900">{faq.question}</summary>
            <p className="mt-3 text-sm text-ink-700">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
