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

// Placeholder images relevant to SEO/Analytics. Replace with your actual client screenshots.
const caseStudyImages = [
  {
    src: "/images/unnamed (2).png",
    alt: "SEO Analytics Dashboard showing keyword ranking improvements",
  },
  {
    src: "/images/unnamed.png",
    alt: "Data visualization of organic traffic growth over 8 months",
  },
];

export default function CaseStudy01() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === caseStudyImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5 second delay between slides

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

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
        {/* Header */}
        <header className="mb-12 border-b-2 border-black pb-8 md:mb-16">
          <h2 className="max-w-5xl text-4xl font-semibold leading-[0.95] tracking-tighter md:text-6xl lg:text-6xl">
            Web Founders USA Revealed Live Snap Shots Of Real Case Studies Our
            SEO Clients 2026
          </h2>
        </header>

        {/* Main Layout Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          {/* Left Column: Meta & Identifier */}
          <aside className="md:col-span-4 md:space-y-16">
            {/* Massive Case Identifier */}
            <div className="relative">
              <span className="absolute -left-4 -top-16 -z-10 select-none text-[10rem] font-semibold leading-none text-[#0033CC] opacity-10 md:text-[14rem]">
                01
              </span>
              <h3 className="relative z-10 pt-12 text-2xl font-medium tracking-tight md:pt-24">
                Case 01
              </h3>
            </div>

            {/* Metadata Block */}
            <div className="space-y-8 font-mono text-xs uppercase tracking-widest">
              <div className="border-b border-black pb-4">
                <span className="mb-2 block text-[#666666]">
                  Client Website
                </span>
                <Link
                  href="https://www.sunlightmedia.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-black transition-colors hover:text-[#0033CC] hover:underline"
                >
                  <span className="font-sans text-base font-medium normal-case tracking-normal">
                    sunlightmedia.org
                  </span>
                </Link>
              </div>

              <div className="border-b border-black pb-4">
                <span className="mb-2 block text-[#666666]">Industry</span>
                <span className="font-sans text-base font-medium normal-case tracking-normal text-black">
                  Internet Marketing Agency
                </span>
              </div>

              <div className="border-b border-black pb-4">
                <span className="mb-2 block text-[#666666]">Location</span>
                <span className="font-sans text-base font-medium normal-case tracking-normal text-black">
                  USA, Los Angeles
                </span>
              </div>

              <div className="border-b border-black pb-4">
                <span className="mb-2 block text-[#666666]">Timeline</span>
                <span className="font-sans text-base font-medium normal-case tracking-normal text-black">
                  8 Months
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
                            ? "scale(1.05)"
                            : "scale(1)",
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
                The target page had reached a ranking plateau, with 110 keywords ranking in the Top 4 and 33 keywords in the Top 3, but the rankings were no longer improving.
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
                We conducted a detailed SEO audit and identified issues within the page's content optimization. After optimizing the content based on our findings, we requested a fresh crawl of the page to allow Google to process the updates.
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
                After optimizing the page content and addressing the identified content optimization issues, the page was recrawled to allow Google to process the improvements. The page achieved 110 keywords ranking in the Top 4, including 33 keywords in the Top 3.
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}