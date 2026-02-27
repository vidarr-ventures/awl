import type { Metadata } from "next";
import Link from "next/link";

import { hero, site, callSteps } from "@/content/core";

export const metadata: Metadata = {
  title: "AWL v2 Preview",
  description: "Private redesign demo for Adoptions With Love."
};

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-8 px-6 pb-24 pt-10">
      <section className="section-card space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-600">Private Preview</p>
        <h1 className="text-3xl font-semibold text-ink-900 md:text-4xl">{hero.title}</h1>
        <p className="text-lg text-ink-700">{hero.subtitle}</p>
        <p className="text-base text-ink-700">{hero.description}</p>
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
        <h2>We are here to listen</h2>
        <p>
          This preview demonstrates a calm, mobile-first experience for expectant and birth
          mothers considering adoption. The focus is on emotional safety, easy access to
          help, and clear next steps.
        </p>
        <p>
          Above-the-fold contact options, generous spacing, and supportive language reduce
          friction and encourage outreach.
        </p>
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
        <h2 className="text-2xl font-semibold text-ink-900">Explore</h2>
        <div className="mt-4 grid gap-3 text-sm text-ink-700 md:grid-cols-2">
          <Link href="/texas" className="section-frame px-4 py-3">Texas</Link>
          <Link href="/florida" className="section-frame px-4 py-3">Florida</Link>
          <Link href="/georgia" className="section-frame px-4 py-3">Georgia</Link>
          <Link href="/north-carolina" className="section-frame px-4 py-3">North Carolina</Link>
          <Link href="/ohio" className="section-frame px-4 py-3">Ohio</Link>
          <Link href="/about-this-demo" className="section-frame px-4 py-3">About this demo</Link>
        </div>
      </section>
    </main>
  );
}
