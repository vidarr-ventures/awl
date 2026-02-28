import Link from "next/link";

import { siteContent } from "@/content/ingested";

export default function StickyCTA() {
  if (!siteContent.phoneLink && !siteContent.textLink) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-sand-200 bg-white/95 px-4 py-3 shadow-soft md:hidden">
      <div className="mx-auto flex max-w-md items-center gap-3">
        {siteContent.phoneLink && (
          <Link
            href={`tel:${siteContent.phoneLink}`}
            className="flex-1 rounded-full bg-ink-900 px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Call 24/7
          </Link>
        )}
        {siteContent.textLink && (
          <Link
            href={`sms:${siteContent.textLink}`}
            className="flex-1 rounded-full bg-rose-500 px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Text Now
          </Link>
        )}
      </div>
    </div>
  );
}
