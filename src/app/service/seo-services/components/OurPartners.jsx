import Image from "next/image";

const logoPartners = [
  "/service-testing/chatgpt-logo-black-700x350.webp",
  "/service-testing/claude-logo-black-300x149.webp",
  "/service-testing/GA-certified.webp",
  "/service-testing/gemini-logo-black-300x149.webp",
  "/service-testing/Bing_logo_dark_gray_RGB.1379355071-768x295.webp",
  "/service-testing/image18.webp",
  "/service-testing/image13.webp",
  "/service-testing/image16.webp",
  "/service-testing/image14.webp",
  "/service-testing/image1-150x150.webp",
  "/service-testing/image20.webp",
  "/service-testing/image11.webp",
  "/service-testing/image12.webp",
  "/service-testing/image26.webp",
  "/service-testing/image28.webp",
  "/service-testing/BuzzSumo_Logo-1024x189.webp",
  "/service-testing/image23.webp",
  "/service-testing/image22.webp",
];

const logosPerRow = Math.ceil(logoPartners.length / 3);
const desktopLogoRows = Array.from({ length: 3 }, (_, index) =>
  logoPartners.slice(index * logosPerRow, (index + 1) * logosPerRow),
);

function LogoGroup({
  logos = logoPartners,
  duplicate = false,
  groupClassName = "partners-marquee-group",
  cardClassName = "partners-logo-card",
}) {
  return (
    <div
      className={groupClassName}
      aria-hidden={duplicate ? "true" : undefined}
    >
      {logos.map((logo, index) => (
        <div
          key={`${duplicate ? "duplicate" : "original"}-${logo}`}
          className={cardClassName}
        >
          <Image
            src={logo}
            alt={duplicate ? "" : `SEO technology partner ${index + 1}`}
            width={200}
            height={80}
            sizes="(min-width: 1024px) 200px, (min-width: 640px) 176px, 144px"
            className="h-auto max-h-full w-auto max-w-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}

export default function OurPartners() {
  return (
    <section className="w-full overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
      <style>{`
        .partners-marquee-viewport {
          position: relative;
          width: 100%;
          min-width: 0;
          overflow: hidden;
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            #000 5%,
            #000 95%,
            transparent
          );
          mask-image: linear-gradient(
            to right,
            transparent,
            #000 5%,
            #000 95%,
            transparent
          );
        }

        .partners-marquee-track {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: partners-marquee-scroll 48s linear infinite;
        }

        .partners-desktop-viewport {
          position: relative;
          width: 100%;
          min-width: 0;
          overflow: hidden;
        }

        .partners-desktop-track {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: partners-marquee-scroll 30s linear infinite;
        }

        .partners-desktop-track-2 {
          animation-duration: 35s;
        }

        .partners-desktop-track-3 {
          animation-duration: 40s;
        }

        .partners-marquee-group {
          display: flex;
          flex-shrink: 0;
          align-items: stretch;
          gap: clamp(0.75rem, 1.5vw, 1.25rem);
          padding-right: clamp(0.75rem, 1.5vw, 1.25rem);
        }

        .partners-logo-card {
          display: flex;
          width: clamp(9rem, 16vw, 12.5rem);
          height: clamp(6rem, 10vw, 8.5rem);
          flex: 0 0 clamp(9rem, 16vw, 12.5rem);
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 0.75rem;
          background: #f2f3f5;
          padding: clamp(0.875rem, 2vw, 1.25rem);
          transition:
            border-color 200ms ease,
            box-shadow 200ms ease;
        }

        .partners-desktop-group {
          display: flex;
          flex-shrink: 0;
          align-items: stretch;
          gap: 1rem;
          padding-right: 1rem;
        }

        .partners-desktop-card {
          display: flex;
          width: 200px;
          height: 136px;
          flex: 0 0 200px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(0, 0, 0, 0.04);
          border-radius: 0.75rem;
          background: #f2f3f5;
          padding: 1rem;
          transition:
            border-color 200ms ease,
            box-shadow 200ms ease;
        }

        .partners-logo-card:hover {
          border-color: rgba(8, 58, 129, 0.22);
          box-shadow: 0 10px 24px rgba(8, 58, 129, 0.08);
        }

        .partners-desktop-card:hover {
          border-color: rgba(8, 58, 129, 0.22);
          box-shadow: 0 10px 24px rgba(8, 58, 129, 0.08);
        }

        .partners-marquee-viewport:hover .partners-marquee-track,
        .partners-marquee-viewport:focus-within .partners-marquee-track {
          animation-play-state: paused;
        }

        .partners-desktop-viewport:hover .partners-desktop-track,
        .partners-desktop-viewport:focus-within .partners-desktop-track {
          animation-play-state: paused;
        }

        @keyframes partners-marquee-scroll {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @media (max-width: 639px) {
          .partners-marquee-track {
            animation-duration: 36s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .partners-marquee-viewport {
            overflow-x: auto;
            -webkit-mask-image: none;
            mask-image: none;
            scrollbar-width: none;
          }

          .partners-desktop-viewport {
            overflow-x: auto;
            scrollbar-width: none;
          }

          .partners-marquee-viewport::-webkit-scrollbar {
            display: none;
          }

          .partners-desktop-viewport::-webkit-scrollbar {
            display: none;
          }

          .partners-marquee-track {
            animation: none;
          }

          .partners-desktop-track {
            animation: none;
          }

          .partners-marquee-group[aria-hidden="true"] {
            display: none;
          }

          .partners-desktop-group[aria-hidden="true"] {
            display: none;
          }
        }
      `}</style>

      <div className="mx-auto grid w-[92%] max-w-[1200px] grid-cols-1 items-start gap-8 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-3 lg:pr-6">
          <div className="mb-5 inline-flex items-center gap-3 sm:mb-7">
            <span
              className="block h-3 w-3 shrink-0 rounded-full bg-[#6EE07F]"
              aria-hidden="true"
            />
            <span className="rounded-full border-2 border-[#083A81] px-4 py-2 text-sm font-medium text-[#083A81]">
              Our Partners
            </span>
          </div>

          <h2 className="max-w-xl text-balance text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:hidden">
            AI-Driven SEO Tools Behind Your Results
          </h2>

          <h2 className="hidden text-5xl font-bold leading-tight text-gray-900 lg:block">
            AI-Driven
            <br />
            SEO Tools
            <br />
            Behind Your
            <br />
            Results
          </h2>
        </div>

        <div className="min-w-0 lg:col-span-9">
          <div
            className="partners-marquee-viewport lg:hidden"
            role="region"
            aria-label="Our technology partners"
          >
            <div className="partners-marquee-track">
              <LogoGroup />
              <LogoGroup duplicate />
            </div>
          </div>

          <div className="hidden space-y-6 lg:block">
            {desktopLogoRows.map((row, rowIndex) => (
              <div
                key={`partner-row-${rowIndex}`}
                className="partners-desktop-viewport"
                role="region"
                aria-label={`Our technology partners, row ${rowIndex + 1}`}
              >
                <div
                  className={`partners-desktop-track partners-desktop-track-${rowIndex + 1}`}
                >
                  <LogoGroup
                    logos={row}
                    groupClassName="partners-desktop-group"
                    cardClassName="partners-desktop-card"
                  />
                  <LogoGroup
                    logos={row}
                    duplicate
                    groupClassName="partners-desktop-group"
                    cardClassName="partners-desktop-card"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
