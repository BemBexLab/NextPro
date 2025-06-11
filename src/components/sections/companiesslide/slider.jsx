'use client'

import { useRef, useEffect } from "react";
import Image from "next/image";

const companies = [
  { src: '/images/slider/clients01.webp', alt: 'Alser Logistics', width: 110, height: 54 },
  { src: '/images/slider/clients02.webp', alt: 'answerIT', width: 110, height: 54 },
  { src: '/images/slider/clients03.webp', alt: 'Professional Bookkeeping Services', width: 150, height: 54 },
  { src: '/images/slider/clients04.webp', alt: 'USCyberCall', width: 110, height: 54 },
  { src: '/images/slider/clients05.webp', alt: 'ROCHE', width: 120, height: 54 },
  { src: '/images/slider/clients06.webp', alt: 'Professional Bookkeeping Services', width: 150, height: 54 },
  { src: '/images/slider/clients07.webp', alt: 'USCyberCall', width: 110, height: 54 },
  { src: '/images/slider/clients08.webp', alt: 'ROCHE', width: 120, height: 54 },
];

export default function CompaniesSlider() {
  const trackRef = useRef(null);
  const animationRef = useRef(null);
  const posRef = useRef(0);
  const contentWidthRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Calculate width of one full set of logos (for seamless looping)
    const firstSet = Array.from(track.children).slice(0, companies.length);
    let contentWidth = 0;
    for (const child of firstSet) {
      contentWidth += child.offsetWidth + 48; // gap-12 = 48px
    }
    contentWidthRef.current = contentWidth;

    posRef.current = 0;

    function animate() {
      posRef.current -= 1.1; // px per frame
      if (Math.abs(posRef.current) >= contentWidthRef.current) {
        posRef.current = 0;
      }
      if (track) {
        track.style.transform = `translateX(${posRef.current}px)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    }

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div className="w-full bg-white  overflow-hidden border-b border-gray-100">
      

      {/* Infinite Slider */}
      <div className="relative overflow-hidden">
        <div
          ref={trackRef}
          className="flex items-center gap-12"
          style={{
            willChange: "transform",
            width: "max-content",
          }}
        >
          {[...companies, ...companies].map((logo, idx) => (
            <div className="flex-shrink-0 h-[36px] md:h-[54px] flex items-center justify-center" key={idx}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-[36px] md:h-[54px] w-auto object-contain"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
