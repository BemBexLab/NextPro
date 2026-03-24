import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title:
    "Why Businesses Struggle With SEO in 2026 And How Professional SEO Services Fix Rankings",
  description:
    "Discover why many businesses struggle with SEO in 2026 and how professional SEO services help improve rankings, traffic, and long-term growth.",
};

type ImageData = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const pageContent = {
  hero: {
    badge: "Industry Insight 2026",
    title:
      "Why Businesses Struggle With SEO in 2026 And How Professional SEO Services Fix Rankings",
    subtitle: "SEO in 2026: Why Ranking Is More Competitive Than Ever",
    image: {
      src: "/blogs/blog-4-1.webp",
      alt: "Why Businesses Struggle With SEO in 2026 And How Professional SEO Services Fix Rankings",
      width: 1024,
      height: 600,
    },
  },
  intro: {
    lead: "SEO is not what it used to be.",
    paragraphs: [
      "In 2026, ranking on Google is harder than ever.",
      "Ten years ago, you could publish a few blogs and rank. Today, that does not work.",
    ],
    highlightCards: [
      { title: "More", text: "Businesses are online" },
      { title: "More", text: "Websites are competing" },
      { title: "And", text: "Search engines are smarter" },
    ],
    signalsTitle: "Now Google looks at:",
    signals: [
      "Website speed",
      "User experience",
      "Content quality",
      "Authority",
      "Trust",
      "Search intent",
      "Technical health",
    ],
    linkLine: {
      before:
        "If one thing is weak, rankings drop. This is why many businesses are now turning to",
      href: "/service/seo-services/",
      anchor: "seo services for multiple businesses",
      after: "and expert help instead of guessing what works.",
    },
    quote:
      "At Web Founders USA, we see this every day. Good businesses. Good products. But poor rankings.",
  },
  sections: {
    reasons: {
      title: "The Biggest Reasons Businesses Are Losing Rankings",
      intro:
        "Most ranking problems are not obvious. Here is what usually goes wrong:",
      items: [
        "Outdated SEO strategy",
        "Poor keyword targeting",
        "Weak website structure",
        "Thin content",
        "No authority building",
        "Technical errors",
        "Slow website speed",
      ],
      callout: {
        title: "The Reality Check",
        lines: [
          "Many business owners think: We post blogs. Why are we not ranking?",
          "Because SEO is no longer just blogging. It is a strategy.",
          "Without proper seo optimization services, your content just sits there. And your competitors move ahead.",
        ],
      },
    },
    aiAndTechnical: {
      left: {
        title: "How AI-Driven Search Has Changed Visibility",
        paragraphs: [
          "Search engines now use advanced AI. They understand context, user intent, and meaning, not just keywords.",
          "That means:",
        ],
        bullets: [
          "Keyword stuffing does not work",
          "Low-quality content gets ignored",
          "Generic content will not rank",
        ],
        followUp:
          "AI looks for real value. If your website does not clearly answer questions, it will not show up.",
        focusTitle:
          "This is why modern professional seo services focus on:",
        focusItems: [
          "Search intent mapping",
          "Topic clusters",
          "Semantic SEO",
          "Content depth",
          "User behavior signals",
        ],
        outro: "It is smarter SEO now.",
      },
      right: {
        title: "The Hidden Technical Issues That Quietly Hurt Performance",
        intro:
          "Technical problems are silent killers. You do not see them. But Google does.",
        issuesTitle: "Common issues:",
        issues: [
          "Broken links",
          "Duplicate content",
          "Slow loading speed",
          "Bad mobile experience",
          "Crawl errors",
          "Indexing issues",
          "Poor internal linking",
        ],
        auditTitle:
          "A professional team runs full seo audit services to find:",
        auditItems: [
          "What is blocking Google",
          "What pages are not indexed",
          "What technical issues exist",
          "Where performance drops",
        ],
        outro:
          "Without proper technical seo services, rankings slowly decline. Fixing technical SEO often brings fast improvements.",
      },
      image: {
        src: "/blogs/blog-4-3.webp",
        alt: "The Hidden Technical Issues That Quietly Hurt Performance",
        width: 1024,
        height: 600,
      },
    },
    content: {
      title: "Why Publishing More Content Is Not the Answer",
      paragraphs: [
        "Many agencies say: Post more blogs.",
        "But more content does not mean better rankings. If content is:",
      ],
      weakContent: [
        "Thin",
        "Repetitive",
        "Not useful",
        "Not optimized",
        "Not matching intent",
      ],
      mustTitle:
        "This is where seo copywriting services matter. Content must:",
      mustItems: [
        "Solve problems",
        "Be easy to read",
        "Be structured properly",
        "Match search intent",
        "Use keywords naturally",
      ],
      optimizeTitle: "Real on page seo services optimize:",
      optimizeItems: [
        "Titles",
        "Meta descriptions",
        "Headers",
        "Internal links",
        "Image tags",
        "Content flow",
      ],
      outro: "Quality beats quantity. That is what moves rankings.",
    },
    authority: {
      title: "Authority, Trust, and Why Backlinks Still Drive Rankings",
      paragraphs: [
        "Backlinks still matter. Google sees links as votes. But not all links are equal.",
        "Bad backlinks can hurt. Spam links can damage trust.",
      ],
      focusTitle: "Strong organic seo services focus on:",
      focusItems: [
        "High-quality link building",
        "Niche-relevant websites",
        "Real authority mentions",
        "Digital PR strategies",
      ],
      outro:
        "Authority builds slowly. But once built, rankings become stable. The best seo services focus on long-term trust, not shortcuts.",
    },
    diy: {
      title: "The Real Cost of DIY SEO",
      intro:
        "Many businesses try SEO themselves. That is normal. But this is what usually happens:",
      mistakesTitle: "Common DIY Mistakes:",
      mistakes: [
        "They waste time",
        "They test random tactics",
        "They follow outdated advice",
        "They do not track properly",
        "They miss technical issues",
      ],
      after:
        "After 6 to 12 months, results are still low. Then they call a seo services company to fix everything.",
      costTitle: "DIY SEO costs more in the long run because:",
      costs: [
        "Time is money",
        "Lost rankings mean lost revenue",
        "Competitors move ahead",
      ],
      fixTitle: "The Professional Fix",
      fix:
        "Professional help avoids these mistakes and creates a system that improves rankings over time.",
    },
    diagnosis: {
      title: "How Professional SEO Services Diagnose Ranking Problems",
      intro:
        "Good SEO starts with diagnosis. At Web Founders USA, we begin with deep seo consulting services and audits. We look at:",
      auditChecks: [
        "Technical health",
        "Content gaps",
        "Keyword mapping",
        "Competitor analysis",
        "Backlink profile",
        "Conversion tracking",
      ],
      examplesTitle: "Different businesses need different strategies:",
      businessTypes: [
        {
          name: "Ecommerce Stores",
          lines: [
            "They need strong ecommerce seo services with product optimization, category structure, and schema markup.",
            "If it is Shopify, shopify seo services matter. If it is WordPress, wordpress seo services matter.",
          ],
        },
        {
          name: "Small Businesses",
          lines: [
            "Local visibility is key. Small business seo services focus on local SEO, Google Business Profile, location pages, and reputation.",
          ],
        },
        {
          name: "Enterprise Companies",
          lines: [
            "Large websites need scalable structure, advanced tracking, team coordination, and data-driven decisions.",
            "That is where enterprise seo services come in.",
          ],
        },
        {
          name: "B2B Companies",
          lines: [
            "B2B SEO is different. Longer sales cycles and research-heavy buyers need educational content, authority building, and lead-gen pages.",
          ],
        },
      ],
    },
    strategy: {
      title: "The Strategy Behind Turning Rankings Around",
      intro: "Fixing rankings is not magic. It is a process:",
      steps: [
        "Step 1: Audit",
        "Step 2: Fix technical issues",
        "Step 3: Improve on-page structure",
        "Step 4: Upgrade content",
        "Step 5: Build authority",
        "Step 6: Track and optimize",
      ],
      outro:
        "Every step matters. Professional seo services follow a clear system with no guessing and no shortcuts.",
    },
    growth: {
      title: "Building Sustainable, Revenue-Driven SEO Growth",
      intro:
        "Ranking is good. Revenue is better. SEO should bring the right traffic, the kind that:",
      outcomes: [
        { icon: "BUY", text: "Buys" },
        { icon: "BOOK", text: "Books appointments" },
        { icon: "FORM", text: "Fills forms" },
        { icon: "CALL", text: "Calls your business" },
      ],
      principlesTitle: "Sustainable growth means:",
      principles: [
        "Strong technical base",
        "Helpful content",
        "Real authority",
        "Continuous updates",
      ],
      outro:
        "SEO is not one-time work. It is a long-term investment and one of the strongest growth channels when done correctly.",
      image: {
        src: "/blogs/blog-4-2.webp",
        alt: "Building Sustainable, Revenue-Driven SEO Growth",
        width: 1024,
        height: 600,
      },
    },
  },
  faq: [
    {
      q: "1. What are SEO services?",
      a: "SEO services help improve your website so it ranks higher on Google. This includes technical fixes, stronger content, and authority building.",
    },
    {
      q: "2. How long does SEO take to show results?",
      a: "SEO usually takes 3 to 6 months to show noticeable improvement. Competitive industries may take longer.",
    },
    {
      q: "3. Why is SEO harder in 2026?",
      a: "Because more businesses are online and Google uses advanced AI systems. Simple keyword tricks no longer work.",
    },
    {
      q: "4. Do small businesses need professional SEO services?",
      a: "Yes. Small businesses also face strong competition, and professional help typically improves speed and quality of results.",
    },
    {
      q: "5. What is the difference between on-page and technical SEO?",
      a: "On-page SEO improves page content and structure. Technical SEO addresses backend issues like speed, crawlability, and indexing.",
    },
    {
      q: "6. How do I choose the best SEO services company?",
      a: "Look for clear strategy, real case studies, transparent reporting, honest communication, and long-term focus.",
    },
  ],
  readNext: {
    label: "More Relevant",
    title: "Is Digital Marketing a Good Career?",
    href: "/blog/is-digital-marketing-a-good-career",
    cta: "Read Article",
  },
};

const imageCard = (image: ImageData) => (
  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
    <img
      src={image.src}
      alt={image.alt}
      className="w-full h-auto object-cover"
      style={{ aspectRatio: `${image.width}/${image.height}` }}
      width={image.width}
      height={image.height}
    />
  </div>
);

const Blog4: React.FC = () => {
  const bodyTextClass = "text-base md:text-lg leading-relaxed text-slate-700";
  const listItemClass = "text-base md:text-lg leading-relaxed text-slate-700";

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-blue-100 selection:text-blue-900">
      <header className="relative bg-slate-900 pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-slate-900 z-0"></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-semibold tracking-wider uppercase mb-6">
            {pageContent.hero.badge}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            {pageContent.hero.title}
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-300 max-w-2xl mx-auto font-light">
            {pageContent.hero.subtitle}
          </h2>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 mt-16 relative z-20">
        {imageCard(pageContent.hero.image)}
      </div>

      <main className="max-w-4xl mx-auto px-6 relative z-20 pb-20 mt-12">
        <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 border border-slate-100">
          <div className={`prose prose-slate max-w-none ${bodyTextClass}`}>
            <p className="mb-6 font-medium text-slate-900">{pageContent.intro.lead}</p>
            {pageContent.intro.paragraphs.map((text) => (
              <p key={text} className="mb-6">
                {text}
              </p>
            ))}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {pageContent.intro.highlightCards.map((item) => (
                <div
                  key={item.text}
                  className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center"
                >
                  <span className="block text-2xl font-bold text-blue-600 mb-1">{item.title}</span>
                  <span className="text-sm text-slate-500">{item.text}</span>
                </div>
              ))}
            </div>

            <p className="mb-4 font-semibold text-slate-800">{pageContent.intro.signalsTitle}</p>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8 list-none pl-0">
              {pageContent.intro.signals.map((item) => (
                <li
                  key={item}
                  className={`flex items-center space-x-2 bg-slate-50 px-3 py-2 rounded-lg border border-slate-100 ${listItemClass}`}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mb-6">
              {pageContent.intro.linkLine.before}{" "}
              <Link href={pageContent.intro.linkLine.href} className="font-semibold text-blue-800 hover:underline">
                {pageContent.intro.linkLine.anchor}
              </Link>{" "}
              {pageContent.intro.linkLine.after}
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
              <p className="italic text-slate-700">{pageContent.intro.quote}</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">{pageContent.sections.reasons.title}</h2>
          <p className={`mb-6 ${bodyTextClass}`}>{pageContent.sections.reasons.intro}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {pageContent.sections.reasons.items.map((item) => (
              <div
                key={item}
                className={`flex items-start p-4 rounded-xl bg-white border border-slate-200 shadow-sm ${listItemClass}`}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-500 flex items-center justify-center font-bold mr-4">
                  !
                </div>
                <span className="font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>
          <div className="bg-slate-900 text-white p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-4">{pageContent.sections.reasons.callout.title}</h3>
            {pageContent.sections.reasons.callout.lines.map((line) => (
              <p key={line} className={`mb-3 ${bodyTextClass}`}>
                {line}
              </p>
            ))}
          </div>
        </section>

        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{pageContent.sections.aiAndTechnical.left.title}</h2>
            {pageContent.sections.aiAndTechnical.left.paragraphs.map((line) => (
              <p key={line} className={`mb-4 ${bodyTextClass}`}>
                {line}
              </p>
            ))}
            <ul className="space-y-3 mb-6">
              {pageContent.sections.aiAndTechnical.left.bullets.map((item) => (
                <li key={item} className={`flex items-center ${listItemClass}`}>
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
            <p className={`mb-4 ${bodyTextClass}`}>{pageContent.sections.aiAndTechnical.left.followUp}</p>
            <p className={`mb-4 ${bodyTextClass}`}>{pageContent.sections.aiAndTechnical.left.focusTitle}</p>
            <ul className="space-y-2 mb-6">
              {pageContent.sections.aiAndTechnical.left.focusItems.map((item) => (
                <li key={item} className={`flex items-center ${listItemClass}`}>
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
            <p className={bodyTextClass}>{pageContent.sections.aiAndTechnical.left.outro}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-4">{pageContent.sections.aiAndTechnical.right.title}</h3>
            <p className={`mb-4 ${bodyTextClass}`}>{pageContent.sections.aiAndTechnical.right.intro}</p>
            <p className={`mb-4 font-semibold ${bodyTextClass}`}>{pageContent.sections.aiAndTechnical.right.issuesTitle}</p>
            <ul className="space-y-2 mb-6">
              {pageContent.sections.aiAndTechnical.right.issues.map((item) => (
                <li
                  key={item}
                  className={`flex justify-between items-center border-b border-slate-100 pb-2 last:border-0 ${listItemClass}`}
                >
                  <span>{item}</span>
                  <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded">RISK</span>
                </li>
              ))}
            </ul>
            <p className={`mb-4 ${bodyTextClass}`}>{pageContent.sections.aiAndTechnical.right.auditTitle}</p>
            <ul className="space-y-2 mb-6">
              {pageContent.sections.aiAndTechnical.right.auditItems.map((item) => (
                <li key={item} className={`flex items-center ${listItemClass}`}>
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
            <p className={bodyTextClass}>{pageContent.sections.aiAndTechnical.right.outro}</p>
          </div>
        </section>

        <section className="mb-16">{imageCard(pageContent.sections.aiAndTechnical.image)}</section>

        <section className="mb-16">
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-indigo-100">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">{pageContent.sections.content.title}</h2>
            {pageContent.sections.content.paragraphs.map((line) => (
              <p key={line} className={`mb-4 ${bodyTextClass}`}>
                {line}
              </p>
            ))}
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-6 list-none pl-0">
              {pageContent.sections.content.weakContent.map((item) => (
                <li
                  key={item}
                  className={`bg-white px-3 py-2 rounded-lg text-center border border-indigo-100 text-indigo-800 font-medium ${listItemClass}`}
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className={`mb-4 ${bodyTextClass}`}>{pageContent.sections.content.mustTitle}</p>
            <ul className="space-y-2 mb-6">
              {pageContent.sections.content.mustItems.map((item) => (
                <li key={item} className={`flex items-center ${listItemClass}`}>
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
            <p className={`mb-4 font-semibold ${bodyTextClass}`}>{pageContent.sections.content.optimizeTitle}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {pageContent.sections.content.optimizeItems.map((item) => (
                <span
                  key={item}
                  className={`bg-white text-indigo-600 px-3 py-1 rounded-full font-medium shadow-sm border border-indigo-100 ${listItemClass}`}
                >
                  {item}
                </span>
              ))}
            </div>
            <p className={bodyTextClass}>{pageContent.sections.content.outro}</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">{pageContent.sections.authority.title}</h2>
          {pageContent.sections.authority.paragraphs.map((line) => (
            <p key={line} className={`mb-4 ${bodyTextClass}`}>
              {line}
            </p>
          ))}
          <p className={`mb-4 ${bodyTextClass}`}>{pageContent.sections.authority.focusTitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {pageContent.sections.authority.focusItems.map((item) => (
              <div
                key={item}
                className={`bg-white p-3 rounded-lg text-center font-medium text-slate-700 border border-slate-200 shadow-sm ${listItemClass}`}
              >
                {item}
              </div>
            ))}
          </div>
          <p className={bodyTextClass}>{pageContent.sections.authority.outro}</p>
        </section>

        <section className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">{pageContent.sections.diy.title}</h2>
            <p className={`mb-6 ${bodyTextClass}`}>{pageContent.sections.diy.intro}</p>
            <div className="bg-red-50 border border-red-100 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-red-700 mb-4">{pageContent.sections.diy.mistakesTitle}</h3>
              <ul className="space-y-3">
                {pageContent.sections.diy.mistakes.map((item) => (
                  <li key={item} className={`flex items-center text-red-700 ${listItemClass}`}>
                    <span className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 font-bold text-sm">
                      x
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className={`mb-6 ${bodyTextClass}`}>{pageContent.sections.diy.after}</p>
            <div className="bg-slate-100 border border-slate-200 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-slate-800 mb-4">{pageContent.sections.diy.costTitle}</h3>
              <ul className="space-y-3">
                {pageContent.sections.diy.costs.map((item) => (
                  <li key={item} className={`flex items-center ${listItemClass}`}>
                    <span className="flex-shrink-0 w-3 h-3 bg-red-500 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl h-fit">
            <h3 className="text-xl font-bold mb-4 text-emerald-400">{pageContent.sections.diy.fixTitle}</h3>
            <p className={`text-slate-300 ${bodyTextClass}`}>{pageContent.sections.diy.fix}</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">{pageContent.sections.diagnosis.title}</h2>
          <p className={`mb-6 ${bodyTextClass}`}>{pageContent.sections.diagnosis.intro}</p>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 mb-8">
            <div className="p-6 bg-slate-50 border-b border-slate-100">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {pageContent.sections.diagnosis.auditChecks.map((item) => (
                  <div
                    key={item}
                    className={`text-center p-3 bg-white rounded-lg border border-slate-200 font-medium shadow-sm ${listItemClass}`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className={`mb-4 ${bodyTextClass}`}>{pageContent.sections.diagnosis.examplesTitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pageContent.sections.diagnosis.businessTypes.map((item) => (
              <div key={item.name} className="p-6 bg-white rounded-xl border border-slate-200">
                <h3 className="text-xl font-bold text-blue-600 mb-3">{item.name}</h3>
                {item.lines.map((line) => (
                  <p key={line} className={`mb-2 ${bodyTextClass}`}>
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{pageContent.sections.strategy.title}</h2>
          <p className={`mb-4 ${bodyTextClass}`}>{pageContent.sections.strategy.intro}</p>
          <ol className={`list-decimal pl-5 mb-4 space-y-1 ${listItemClass}`}>
            {pageContent.sections.strategy.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className={bodyTextClass}>{pageContent.sections.strategy.outro}</p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">{pageContent.sections.growth.title}</h2>
          <p className={`mb-6 ${bodyTextClass}`}>{pageContent.sections.growth.intro}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {pageContent.sections.growth.outcomes.map((item) => (
              <div
                key={item.text}
                className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm"
              >
                <div className="text-xs font-bold text-blue-600 mb-2">{item.icon}</div>
                <div className={`font-medium text-slate-700 ${listItemClass}`}>{item.text}</div>
              </div>
            ))}
          </div>
          <p className={`mb-4 ${bodyTextClass}`}>{pageContent.sections.growth.principlesTitle}</p>
          <ul className={`list-disc pl-5 mb-6 space-y-1 ${listItemClass}`}>
            {pageContent.sections.growth.principles.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className={`mb-6 ${bodyTextClass}`}>{pageContent.sections.growth.outro}</p>
          {imageCard(pageContent.sections.growth.image)}
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions (FAQ)</h2>
          <div className="space-y-4">
            {pageContent.faq.map((item) => (
              <div key={item.q} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className={`font-bold text-slate-800 mb-2 ${bodyTextClass}`}>{item.q}</h3>
                <p className={`text-slate-600 leading-relaxed ${bodyTextClass}`}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="border-t border-slate-200 pt-12 mt-12">
          <div className="flex flex-col md:flex-row items-center justify-between bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="mb-4 md:mb-0">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                {pageContent.readNext.label}
              </span>
              <h3 className={`text-lg font-bold text-slate-800 mt-1 ${bodyTextClass}`}>
                {pageContent.readNext.title}
              </h3>
            </div>
            <Link
              href={pageContent.readNext.href}
              className="px-6 py-2 bg-white border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 hover:text-blue-600 transition-colors shadow-sm"
            >
              {pageContent.readNext.cta}
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Blog4;
