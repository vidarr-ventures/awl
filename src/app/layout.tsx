import type { Metadata } from "next";

import "@/app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export const metadata: Metadata = {
  title: {
    default: "AWL v2 Preview",
    template: "%s | AWL v2 Preview"
  },
  description: "Private redesign preview for Adoptions With Love.",
  robots: {
    index: false,
    follow: false
  },
  other: {
    robots: "noindex,nofollow"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Header />
        {children}
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
