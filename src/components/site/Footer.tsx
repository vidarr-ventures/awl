import Link from "next/link";

import { navigation, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-sand-200 bg-sand-50/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-ink-900">Adoptions With Love</h3>
          <p className="text-sm text-ink-700">
            {site.address}
          </p>
          <p className="text-sm text-ink-700">Phone: {site.phone}</p>
          <p className="text-sm text-ink-700">Toll-Free: {site.tollFree}</p>
          <p className="text-sm text-ink-700">Text: {site.text}</p>
          <p className="text-sm text-ink-700">Email: {site.email}</p>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold text-ink-900">Explore</p>
          <div className="flex flex-col gap-2 text-sm text-ink-700">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-ink-900">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold text-ink-900">Preview Concept</p>
          <p className="text-sm text-ink-700">
            This private redesign preview is for AWL operators only. Not intended for
            indexing or public distribution.
          </p>
        </div>
      </div>
      <div className="border-t border-sand-200 px-6 py-4 text-center text-xs text-ink-600">
        Preview concept • Noindex / Nofollow
      </div>
    </footer>
  );
}
