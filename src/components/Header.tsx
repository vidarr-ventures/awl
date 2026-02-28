import Link from "next/link";

import { siteContent } from "@/content/ingested";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-sand-200 bg-white/90 backdrop-blur">
      <div className="hidden md:block border-b border-sand-200 bg-sand-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2 text-sm text-ink-700">
          <span className="font-semibold">Free. Confidential. No pressure.</span>
          <div className="flex items-center gap-4">
            {siteContent.phone && <span>Call: {siteContent.phone}</span>}
            {siteContent.text && <span>Text: {siteContent.text}</span>}
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-ink-900">
          {siteContent.name}
        </Link>
        <div className="flex items-center gap-2">
          {siteContent.phoneLink && (
            <Link
              href={`tel:${siteContent.phoneLink}`}
              className="hidden sm:inline-flex rounded-full border border-ink-900 px-4 py-2 text-sm font-semibold text-ink-900"
            >
              Call 24/7
            </Link>
          )}
          {siteContent.textLink && (
            <Link
              href={`sms:${siteContent.textLink}`}
              className="rounded-full bg-rose-500 px-4 py-2 text-sm font-semibold text-white"
            >
              Text Now
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
