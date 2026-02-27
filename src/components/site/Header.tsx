import Link from "next/link";

import { navigation, primaryCtas, site } from "@/content/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-sand-200 bg-sand-50/90 backdrop-blur">
      <div className="hidden md:block border-b border-sand-200 bg-sand-100/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2 text-sm text-ink-700">
          <span className="font-semibold text-ink-800">{site.tagline}</span>
          <div className="flex items-center gap-4">
            <span>Call: {site.phone}</span>
            <span>Text: {site.text}</span>
            <span>Email: {site.email}</span>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-semibold text-ink-900">
          Adoptions With Love
        </Link>
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-ink-700">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ink-900">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href={primaryCtas[0].href}
            className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
          >
            {primaryCtas[0].label}
          </Link>
          <Link
            href={primaryCtas[1].href}
            className={cn(buttonVariants({ variant: "rose", size: "sm" }))}
          >
            {primaryCtas[1].label}
          </Link>
        </div>
      </div>
    </header>
  );
}
