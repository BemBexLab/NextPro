import { withEnUsHreflang } from "@/lib/metadata";
import ArticleBody from "./components/ArticleBody";
import ArticleHero from "./components/ArticleHero";
import ArticleTableOfContents from "./components/ArticleTableOfContents";

export const metadata = withEnUsHreflang({
  title: "OMG! Cheapest Transparent SEO Pricing , Packages Offered",
  description:
    "Affordable SEO packages with transparent pricing, flexible plans, and quality SEO services avail this offer Now.",
  alternates: {
    canonical:
      "https://www.webfoundersusa.com/blog/affordable-seo-pricing-packages-cost",
  },
});

export default function AffordableSeoPricingPackagesCostPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-800">
      <ArticleHero />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-12 md:px-10 md:py-16 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-16">
        <div className="lg:col-start-1">
          <ArticleTableOfContents />
        </div>
        <div className="min-w-0 lg:col-start-2">
          <ArticleBody />
        </div>
      </div>
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-7 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 md:px-10">
          Web Founders USA <span className="mx-2 text-[#bf0b30]">/</span> SEO Guides
        </div>
      </footer>
    </main>
  );
}
