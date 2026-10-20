import Link from "next/link";
import Image from "next/image";

export default function ArticleHero() {
  return (
    <header className="relative overflow-hidden bg-[#072d7f] text-white">
      <div aria-hidden="true" className="absolute inset-y-0 right-0 hidden w-[38%] border-l border-white/10 md:flex md:items-center md:justify-center">
        <Image
          src="/images/blog-images/Affordable SEO Pricing in Alexandria.png"
          alt=""
          fill
          sizes="(min-width: 1280px) 480px, 38vw"
          className="object-cover object-[center_60%] mix-blend-screen"
        />
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
