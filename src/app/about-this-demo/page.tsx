import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About This Demo",
  description: "Operator-facing summary of CRO and UX decisions."
};

export default function AboutThisDemoPage() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-6 px-6 pb-24 pt-10">
      <section className="section-card space-y-4">
        <h1 className="text-3xl font-semibold text-ink-900">About This Demo</h1>
        <p className="text-base text-ink-700">
          This private preview is designed to improve inbound calls and texts from
          expectant and birth mothers. It prioritizes emotional reassurance, simple next
          steps, and clear access to support.
        </p>
      </section>
      <section className="section-card space-y-4">
        <h2 className="text-2xl font-semibold text-ink-900">What Changed and Why</h2>
        <ul className="list-disc space-y-2 pl-6 text-ink-700">
          <li>Above-the-fold call and text CTAs to remove friction.</li>
          <li>Sticky mobile CTA bar for one-tap outreach.</li>
          <li>Calm visual design with generous spacing for safety.</li>
          <li>Structured templates for consistent messaging.</li>
          <li>Global noindex and robots disallow for privacy.</li>
        </ul>
      </section>
    </main>
  );
}
