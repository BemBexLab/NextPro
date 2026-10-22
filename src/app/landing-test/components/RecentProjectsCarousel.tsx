"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";

export type RecentProject = {
  id: string;
  title: string;
  imageUrl: string;
};

const RecentProjectsCarousel = ({ projects }: { projects: RecentProject[] }) => {
  const trackRef = useRef<HTMLDivElement>(null);

  const move = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;

    const firstCard = track.querySelector<HTMLElement>("[data-project-card]");
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 16;
    const distance = firstCard ? firstCard.offsetWidth + gap : track.clientWidth;

    track.scrollBy({ left: direction * distance, behavior: "smooth" });
  };

  if (projects.length === 0) {
    return (
      <p className="mt-8 text-center text-sm text-slate-500">
        Recent project previews are temporarily unavailable.
      </p>
    );
  }

  return (
    <div className="relative mt-6 sm:mt-8 lg:mt-10">
      <button
        type="button"
        aria-label="Show previous projects"
        onClick={() => move(-1)}
        className="absolute -left-3 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-100 bg-white text-slate-700 transition hover:text-[#e31824] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e31824] sm:inline-flex lg:-left-6 lg:h-12 lg:w-12"
      >
        <ArrowLeft aria-hidden="true" className="h-5 w-5" />
      </button>

      <div
        ref={trackRef}
        className="grid auto-cols-[94%] grid-flow-col gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:auto-cols-[calc((100%-1.25rem)/2)] min-[680px]:auto-cols-[calc((100%-3.75rem)/4)]"
      >
        {projects.map((project, index) => (
          <article
            key={project.id}
            data-project-card
            className="min-w-0 snap-start"
            aria-label={project.title}
          >
            <div className="mx-auto w-full max-w-md">
              <div className="relative aspect-[1.4/1] overflow-hidden rounded-xl border border-slate-200 bg-white">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 88vw"
                  unoptimized
                  className="object-cover object-top"
                />
              </div>
            </div>
          </article>
        ))}
      </div>

      <button
        type="button"
        aria-label="Show more projects"
        onClick={() => move(1)}
        className="absolute -right-3 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-100 bg-white text-slate-700 transition hover:text-[#e31824] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e31824] sm:inline-flex lg:-right-6 lg:h-12 lg:w-12"
      >
        <ArrowRight aria-hidden="true" className="h-5 w-5" />
      </button>
    </div>
  );
};

export default RecentProjectsCarousel;
