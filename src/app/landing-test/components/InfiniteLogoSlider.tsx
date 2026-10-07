"use client";

const logoSrc = "https://navneetdwivedi.github.io/Logo_Slider/logo.png";
const logos = Array.from({ length: 25 }, (_, index) => index);

export default function InfiniteLogoSlider() {
  return (
    <section aria-label="Partner logos" className="bg-[#FAFBFE] w-full overflow-hidden py-2">
      <div className="logo-marquee">
        <div className="logo-track flex w-max">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-center gap-6 pr-6"
            >
              {logos.map((logo) => (
                <img
                  key={logo}
                  src={logoSrc}
                  alt=""
                  width={180}
                  height={90}
                  loading="lazy"
                  draggable={false}
                  className="h-[90px] w-[180px] shrink-0 object-contain"
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
          to {
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
