import Link from "next/link";

export default function ArticleHero() {
  return (
    <header className="relative overflow-hidden bg-[#072d7f] text-white">
      <div aria-hidden="true" className="absolute inset-y-0 right-0 hidden w-[38%] border-l border-white/10 md:flex md:items-center md:justify-center">
        <span className="select-none text-[9rem] font-black leading-none tracking-[0.08em] text-white/[0.08] lg:text-[14rem]">
          SEO
        </span>
        {/* <div className="absolute inset-y-0 left-1/3 border-l border-white/10" />
        <div className="absolute inset-y-0 left-2/3 border-l border-white/10" />
        <div className="absolute bottom-0 left-0 h-1.5 w-2/3 bg-[#bf0b30]" /> */}
      </div>
      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-12 md:px-10 md:pb-24 md:pt-20">
        <nav aria-label="Breadcrumb" className="mb-8 md:mb-10">
          <ol className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white/75 md:text-xs">
            <li><Link href="/" className="transition-colors hover:text-white">Home</Link></li>
            <li aria-hidden="true" className="text-white/40">/</li>
            <li><Link href="/blog" className="transition-colors hover:text-white">Blog</Link></li>
            <li aria-hidden="true" className="text-white/40">/</li>
            <li aria-current="page" className="text-white">Affordable SEO Pricing, Packages &amp; Cost</li>
          </ol>
        </nav>
        <h1 className="max-w-4xl text-balance text-[2.55rem] font-extrabold leading-[1.04] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-7xl">
          Affordable SEO Pricing, Packages &amp; Cost! What Are You Waiting For?
        </h1>
      </div>
      <div className="h-1 bg-[#bf0b30] md:hidden" />
    </header>
  );
}
