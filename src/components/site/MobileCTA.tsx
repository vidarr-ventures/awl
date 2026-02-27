import Link from "next/link";

import { site } from "@/content/site";

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-sand-200 bg-white/95 px-4 py-3 shadow-soft md:hidden">
      <div className="mx-auto flex max-w-md items-center gap-3">
        <Link
          href={`tel:${site.phone}`}
          className="flex-1 rounded-full bg-ink-900 px-4 py-3 text-center text-sm font-semibold text-sand-50"
        >
          Call 24/7
        </Link>
        <Link
          href={`sms:${site.text}`}
          className="flex-1 rounded-full bg-rose-500 px-4 py-3 text-center text-sm font-semibold text-white"
        >
          Text Now
        </Link>
      </div>
    </div>
  );
}
