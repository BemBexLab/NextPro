"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Highlight from "@/components/ui/highlight";
import Title from "@/components/ui/title";
import { Button } from "@/components/ui/button";
import Reveal from "./Reveal";
import { isInvalidLegacyProjectHref } from "@/lib/invalidLegacyProjectSlugs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PROJECTS_API_BASE = "https://projects-api-bembexlab.vercel.app";
const PROJECTS_API_URL = "/api/project-gallery";

type Project = {
  id: string | number;
  cover_image_url?: string;
  images?: Array<{ image_url?: string }>;
  category?: string;
  alt?: string;
  href_url?: string;
};

const resolveProjectImageUrl = (path?: string) => {
  if (!path) return "/images/servicebanner/portfolio-image.webp";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${PROJECTS_API_BASE}${path}`;
};

const GalleryCarousel = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [loadState, setLoadState] = useState<"loading" | "ready" | "empty" | "error">("loading");
  const carouselRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    if (typeof IntersectionObserver === "undefined") {
      const fallbackId = window.setTimeout(() => setIsVisible(true), 0);
      return () => window.clearTimeout(fallbackId);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "800px 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return undefined;

    const controller = new AbortController();

    const fetchProjects = async () => {
      try {
        const response = await fetch(PROJECTS_API_URL, { signal: controller.signal });
        if (!response.ok) throw new Error(`Projects request failed: ${response.status}`);

        const data = await response.json();
        const apiProjects = Array.isArray(data.projects) ? data.projects : [];
        const filtered = apiProjects.filter((project: Project) => {
          const hasImage = project.cover_image_url || project.images?.[0]?.image_url;
          const category = project.category?.toLowerCase() || "";
          const isWebDev =
            category.includes("website development") ||
            category.includes("web development");

          return hasImage && isWebDev && !isInvalidLegacyProjectHref(project.href_url);
        });

        setProjects(filtered);
        setLoadState(filtered.length ? "ready" : "empty");
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") return;
        console.error("Failed to load projects", error);
        setLoadState("error");
      }
    };

    fetchProjects();
    return () => controller.abort();
  }, [isVisible]);

  const scrollCarousel = (direction: -1 | 1) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const firstCard = carousel.querySelector<HTMLElement>("[data-project-card]");
    const distance = firstCard
      ? firstCard.getBoundingClientRect().width + 24
      : carousel.clientWidth * 0.85;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    carousel.scrollBy({
      left: direction * distance,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  if (loadState !== "ready") {
    const message =
      loadState === "loading"
        ? "Loading projects…"
        : loadState === "error"
          ? "Projects are temporarily unavailable."
          : "New projects are coming soon.";

    return (
      <div
        ref={sectionRef}
        className="min-h-24 py-10 text-center text-base font-medium text-slate-600"
        role="status"
        aria-live="polite"
      >
        {message}
      </div>
    );
  }

  return (
    <div ref={sectionRef} className="relative w-full">
      <div className="mb-2 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => scrollCarousel(-1)}
          disabled={projects.length < 2}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#072D7F]/15 bg-white/80 text-[#072D7F] shadow-sm transition-colors hover:bg-[#072D7F] hover:text-white disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BF0B30] focus-visible:ring-offset-2"
          aria-label="Scroll to previous projects"
          aria-controls="landing-test-projects"
        >
          <FaChevronLeft aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => scrollCarousel(1)}
          disabled={projects.length < 2}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#072D7F]/15 bg-white/80 text-[#072D7F] shadow-sm transition-colors hover:bg-[#072D7F] hover:text-white disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BF0B30] focus-visible:ring-offset-2"
          aria-label="Scroll to next projects"
          aria-controls="landing-test-projects"
        >
          <FaChevronRight aria-hidden="true" />
        </button>
      </div>

      <div
        id="landing-test-projects"
        ref={carouselRef}
        role="region"
        aria-label="Web development project gallery"
        tabIndex={0}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-1 py-4 sm:gap-6 sm:px-2 [scrollbar-color:rgba(7,45,127,.35)_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-blue-900/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BF0B30]"
      >
        {projects.map((project) => {
          const imageUrl = resolveProjectImageUrl(
            project.cover_image_url || project.images?.[0]?.image_url,
          );
          const projectTitle = project.alt || project.category || "Web development project";
          const cardClassName =
            "group relative block aspect-[2/1] w-[min(84vw,360px)] shrink-0 snap-center overflow-hidden rounded-2xl border border-white/70 bg-slate-100 shadow-[0_10px_30px_rgba(7,45,127,0.10)] sm:w-[min(68vw,400px)] lg:w-[calc((100%_-_3rem)/3)] lg:max-w-[420px]";

          const image = (
            <>
              <Image
                src={imageUrl}
                alt={projectTitle}
                width="800"
                height="500"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                draggable={false}
                className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025] motion-reduce:transition-none" unoptimized
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06152d]/55 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
            </>
          );

          return project.href_url ? (
            <a
              key={project.id}
              data-project-card
              href={project.href_url}
              aria-label={`View project: ${projectTitle}`}
              className={`${cardClassName} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BF0B30] focus-visible:ring-offset-2`}
            >
              {image}
            </a>
          ) : (
            <div key={project.id} data-project-card className={cardClassName}>
              {image}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CaseStudy = () => {
  return (
    <section className="relative isolate bg-[#FAFBFE] lg:py-15 py-9">
      <div
        aria-hidden="true"
        className="landing-test-image-fade pointer-events-none absolute inset-x-0 bottom-0 z-0 h-full bg-no-repeat opacity-100"
        style={{
          backgroundImage: "url('/Halloween%20Assets%20Task/part-02-bg-optimized.webp')",
          backgroundSize: "100% auto",
          backgroundPosition: "bottom",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, #000 8%, #000 92%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, #000 8%, #000 92%, transparent 100%)",
        }}
      />
      <Image
        aria-hidden="true"
        src="/Halloween Assets Task/image 17.webp"
        alt=""
        width={458}
        height={678}
        sizes="(max-width: 1023px) 206px, 270px"
        className="pointer-events-none absolute bottom-0 left-0 z-[1] hidden w-[142px] object-contain opacity-90 md:block md:w-[206px] lg:w-[270px]"
      />
      <div className="relative z-10 mx-auto max-w-[1350px] px-[15px]">
        <Reveal>
          <div className="flex flex-col items-center">
            <Button variant="secondary">Case Study</Button>
            <Title size={"5xl"} className="relative z-10 max-w-[872px] pt-2 text-center">
              <Highlight>Success Stories:</Highlight><span className="text-red-500">Transformative Case Studies</span>
            </Title>
          </div>
        </Reveal>
        <GalleryCarousel />
      </div>
    </section>
  );
};

export default CaseStudy;
