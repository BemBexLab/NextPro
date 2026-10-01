import React from "react";
import { HiOutlineSparkles } from "react-icons/hi2";

const CaseStudy: React.FC = () => {
  const images = [
    {
      src: "/images/TX Auto Group Houston Case Study 2.png",
      alt: "Case study image 1",
    },
    {
      src: "/images/Elite Auto Service Case Study.png",
      alt: "Case study image 2",
    },
    {
      src: "/images/River Oaks Auto Sales_ SEO Growth Case Study.png",
      alt: "Case study image 3",
    },
    {
      src: "/images/Mountain View Auto Sales Case Study.png",
      alt: "Case study image 4",
    },
  ];

  return (
    <section className="w-full bg-neutral-100 py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-full mx-auto">

        {/* Heading */}
        <div className="relative isolate overflow-hidden border-b border-blue-900/20 bg-gradient-to-br from-[#061f59] via-[#073b91] to-[#0b63b8] px-5 py-9 shadow-lg shadow-blue-950/10 sm:px-8 sm:py-12 lg:px-16 lg:py-14 mb-4">
          <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border border-white/10 bg-white/5 blur-sm" />
          <div className="pointer-events-none absolute bottom-0 right-24 h-24 w-24 rounded-full bg-cyan-300/20 blur-2xl" />
          <h2 className="relative max-w-full text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl uppercase">
            our automotive repair shop connected for seo
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {images.map((image) => (
            <article
              key={image.src}
              className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-neutral-200"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="block h-auto w-full"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
