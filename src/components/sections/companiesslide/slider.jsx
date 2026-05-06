import Image from "next/image";

const companies = [
  { src: "/images/slider/clients01.webp", alt: "Alser Logistics", width: 110, height: 54 },
  { src: "/images/slider/clients02.webp", alt: "answerIT", width: 110, height: 54 },
  { src: "/images/slider/clients03.webp", alt: "Professional Bookkeeping Services", width: 150, height: 54 },
  { src: "/images/slider/clients04.webp", alt: "USCyberCall", width: 110, height: 54 },
  { src: "/images/slider/clients05.webp", alt: "ROCHE", width: 120, height: 54 },
  { src: "/images/slider/clients06.webp", alt: "Professional Bookkeeping Services", width: 150, height: 54 },
  { src: "/images/slider/clients07.webp", alt: "USCyberCall", width: 110, height: 54 },
  { src: "/images/slider/clients08.webp", alt: "ROCHE", width: 120, height: 54 },
  { src: "/images/slider/clients01.webp", alt: "Alser Logistics", width: 110, height: 54 },
  { src: "/images/slider/clients02.webp", alt: "answerIT", width: 110, height: 54 },
  { src: "/images/slider/clients03.webp", alt: "Professional Bookkeeping Services", width: 150, height: 54 },
  { src: "/images/slider/clients04.webp", alt: "USCyberCall", width: 110, height: 54 },
  { src: "/images/slider/clients05.webp", alt: "ROCHE", width: 120, height: 54 },
  { src: "/images/slider/clients06.webp", alt: "Professional Bookkeeping Services", width: 150, height: 54 },
  { src: "/images/slider/clients07.webp", alt: "USCyberCall", width: 110, height: 54 },
  { src: "/images/slider/clients08.webp", alt: "ROCHE", width: 120, height: 54 },
];

export default function CompaniesSlider() {
  return (
    <div className="w-full overflow-hidden border-b border-gray-100 bg-white">
      <div className="relative overflow-hidden">
        <div className="company-marquee flex w-max items-center gap-12 will-change-transform">
          {[...companies, ...companies].map((logo, idx) => (
            <div
              className="flex h-[36px] flex-shrink-0 items-center justify-center md:h-[54px]"
              key={`${logo.src}-${idx}`}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-[36px] w-auto object-contain md:h-[54px]"
                priority={idx < 4}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
