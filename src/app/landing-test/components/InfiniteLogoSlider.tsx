"use client";

const logos = [
  { src: "/images/slider/clients01.webp", alt: "IAQ-EMF Consulting Inc. logo" },
  { src: "/images/slider/clients02.webp", alt: "The Go To Car Guy logo" },
  { src: "/images/slider/clients03.webp", alt: "Smartax logo" },
  { src: "/images/slider/clients04.webp", alt: "Alser Logistics logo" },
  { src: "/images/slider/clients05.webp", alt: "Answer I.T. logo" },
  { src: "/images/slider/clients06.webp", alt: "Professional Bookkeeping Services logo" },
  { src: "/images/slider/clients07.webp", alt: "USCyberCall logo" },
  { src: "/images/slider/clients08.webp", alt: "Roche Electric & Consulting logo" },
];

export default function InfiniteLogoSlider() {
  return (
    <section 
      aria-label="Client logos" 
      className="relative w-full overflow-hidden bg-[#FAFBFE] py-4 dark:bg-gray-900 sm:py-6"
    >
      {/* Left Edge Fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#FAFBFE] to-transparent dark:from-gray-900 sm:w-20 md:w-32" />
      
      {/* Right Edge Fade */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#FAFBFE] to-transparent dark:from-gray-900 sm:w-20 md:w-32" />

      <div className="logo-marquee flex w-full overflow-hidden">
        <div className="logo-track flex w-max items-center">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-center gap-4 pr-4 sm:gap-6 sm:pr-6 md:gap-8 md:pr-8"
            >
              {logos.map(({ src, alt }) => (
                <img
                  key={`${copy}-${src}`}
                  src={src}
                  alt={copy === 1 ? "" : alt}
                  width={180}
                  height={90}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className="h-16 w-32 shrink-0 object-contain opacity-70 transition-opacity duration-300 hover:opacity-100 sm:h-20 sm:w-44 md:h-[90px] md:w-[180px] dark:opacity-60 dark:hover:opacity-100"
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .logo-track {
          animation: logo-marquee 40s linear infinite;
        }

        .logo-marquee:hover .logo-track {
          animation-play-state: paused;
        }

        @keyframes logo-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .logo-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
