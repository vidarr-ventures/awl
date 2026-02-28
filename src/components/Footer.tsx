import { siteContent } from "@/content/ingested";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-sand-200 bg-sand-50/80">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-10 md:grid-cols-3">
        <div className="space-y-2 text-sm text-ink-700">
          <p className="text-base font-semibold text-ink-900">{siteContent.name}</p>
          {siteContent.phone && <p>Phone: {siteContent.phone}</p>}
          {siteContent.text && <p>Text: {siteContent.text}</p>}
          {siteContent.tollFree && <p>Toll-Free: {siteContent.tollFree}</p>}
          {siteContent.email && <p>Email: {siteContent.email}</p>}
        </div>
        <div className="space-y-2 text-sm text-ink-700">
          <p className="text-base font-semibold text-ink-900">Preview Concept</p>
          <p>This private demo is for AWL operators only.</p>
          <p>Not intended for indexing or public distribution.</p>
        </div>
        <div className="space-y-2 text-sm text-ink-700">
          <p className="text-base font-semibold text-ink-900">Reassurance</p>
          <p>Free. Confidential. No pressure.</p>
          <p>Call or text anytime for support.</p>
        </div>
      </div>
    </footer>
  );
}
