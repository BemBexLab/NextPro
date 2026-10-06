"use client";

import { useState, useEffect } from "react";
import { Inter, JetBrains_Mono } from "next/font/google";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const caseStudyImages = [
  {
    src: "/images/unnamed (1).png",
    alt: "SEO Analytics Dashboard showing keyword ranking improvements",
  },
  {
    src: "/images/unnamed (3).png",
    alt: "Data visualization of organic traffic growth over 8 months",
  },
  {
    src: "/images/unnamed (4).png",
    alt: "Client testimonial highlighting improved search visibility",
  },
];

export default function CaseStudy02() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === caseStudyImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`relative bg-white text-black ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased selection:bg-[#0033CC] selection:text-white`}
    >
      {/* Subtle Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(black 1px, transparent 1px), linear-gradient(90deg, black 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          backgroundPosition: "center top",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-5 pb-5 md:px-12">
        {/* Main Layout Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          {/* Left Column: Meta & Identifier */}
          <aside className="md:col-span-4 md:space-y-16">
            {/* Massive Case Identifier */}
            <div className="relative">
              <span className="absolute -left-4 -top-16 -z-10 select-none text-[10rem] font-semibold leading-none text-[#0033CC] opacity-10 md:text-[14rem]">
                02
              </span>
              <h3 className="relative z-10 pt-12 text-2xl font-medium tracking-tight md:pt-24">
                Case 02
              </h3>
            </div>

            {/* Metadata Block */}
            <div className="space-y-8 font-mono text-xs uppercase tracking-widest">
              <div className="border-b border-black pb-4">
                <span className="mb-2 block text-[#666666]">
                  Client Website
                </span>
                <Link
                  href="https://www.fairmounttire.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-black transition-colors hover:text-[#0033CC] hover:underline"
                >
                  <span className="font-sans text-base font-medium normal-case tracking-normal">
                    fairmounttire.com
                  </span>
                </Link>
              </div>

              <div className="border-b border-black pb-4">
                <span className="mb-2 block text-[#666666]">Industry</span>
                <span className="font-sans text-base font-medium normal-case tracking-normal text-black">
                  Tire & Automotive
                </span>
              </div>

              <div className="border-b border-black pb-4">
                <span className="mb-2 block text-[#666666]">Location</span>
                <span className="font-sans text-base font-medium normal-case tracking-normal text-black">
                  USA, California
                </span>
              </div>

              <div className="border-b border-black pb-4">
                <span className="mb-2 block text-[#666666]">Timeline</span>
                <span className="font-sans text-base font-medium normal-case tracking-normal text-black">
                  4 Months
                </span>
              </div>
            </div>
          </aside>

          {/* Right Column: Narrative Content & Slideshow */}
          <main className="md:col-span-8 md:space-y-20">
            {/* Live Snap Shot Slideshow */}
            <section className="relative w-full border-2 border-black bg-black">
              {/* Stamp Label */}
              <div className="absolute left-4 top-4 z-20 flex items-center gap-2 border border-black bg-white px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-black">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0033CC] opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0033CC]"></span>
                </span>
                Live Snap Shot
              </div>

              {/* Image Container */}
              <div className="relative aspect-[16/9] w-full overflow-hidden md:aspect-[2/1]">
                {caseStudyImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-contain grayscale-[30%] transition-transform duration-[8000ms] ease-linear hover:grayscale-0"
                      style={{
                        transform:
                          index === currentImageIndex
                            ? ""
                            : "",
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Slideshow Indicators */}
              <div className="absolute bottom-4 right-4 z-20 flex items-center gap-3 border border-black bg-black px-3 py-1.5 font-mono text-xs text-white">
                <span>0{currentImageIndex + 1}</span>
                <span className="text-[#666666]">/</span>
                <span className="text-[#666666]">
                  0{caseStudyImages.length}
                </span>
              </div>
            </section>

            {/* Challenge */}
            <section className="group">
              <div className="mb-6 flex items-baseline gap-6">
                <span className="font-mono whitespace-nowrap text-xs uppercase tracking-widest text-[#0033CC]">
                  Challenge
                </span>
                <div className="flex-1 h-px bg-black" />
              </div>
              <p className="max-w-3xl text-2xl font-medium leading-snug tracking-tight text-black md:text-3xl">
                The website had 1,000+ pages along with approximately 120 technical SEO, crawling, and indexing issues, making it difficult for search engines to efficiently crawl and index the website.
              </p>
            </section>

            {/* SEO Strategy */}
            <section className="group">
              <div className="mb-6 flex items-baseline gap-6">
                <span className="font-mono whitespace-nowrap text-xs uppercase tracking-widest text-[#0033CC]">
                  SEO Strategy
                </span>
                <div className="flex-1 h-px bg-black" />
              </div>
              <p className="max-w-3xl text-2xl font-medium leading-snug tracking-tight text-black md:text-3xl">
                We conducted a comprehensive technical SEO audit, identified and resolved the crawling, indexing, and technical issues, and optimized the website's overall technical foundation.
              </p>
            </section>

            {/* Results */}
            <section className="group">
              <div className="mb-6 flex items-baseline gap-6">
                <span className="font-mono whitespace-nowrap text-xs uppercase tracking-widest text-[#0033CC]">
                  Results
                </span>
                <div className="flex-1 h-px bg-black" />
              </div>
              <p className="max-w-3xl text-2xl font-medium leading-snug tracking-tight text-black md:text-3xl">
                After resolving the issues, the website reached approximately 8,000 monthly organic visitors, with 62 keywords ranking in the Top 3 and 19 keywords in the Top 4.
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}