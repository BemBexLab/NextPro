"use client";
import Image from "next/image";


import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Highlight from "../ui/highlight";
import Title from "../ui/title";
import { Button } from "../ui/button";
import SlideUp from "../animations/slideUp";
import { isInvalidLegacyProjectHref } from "@/lib/invalidLegacyProjectSlugs";

const PROJECTS_API_BASE = "https://projects-api-bembexlab.vercel.app";
const PROJECTS_API_URL = "/api/project-gallery";

const resolveProjectImageUrl = (path) => {
  if (!path) return "/images/servicebanner/portfolio-image.webp";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return PROJECTS_API_BASE + path;
};

const GalleryCarousel = () => {
  const [projects, setProjects] = useState([]);
  const [loadState, setLoadState] = useState("loading");
  const [isNearViewport, setIsNearViewport] = useState(false);
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    if (!("IntersectionObserver" in window)) {
      const frame = window.requestAnimationFrame(() => setIsNearViewport(true));
      return () => window.cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: "800px 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isNearViewport) return undefined;

    const controller = new AbortController();

    const fetchProjects = async () => {
      try {
        const response = await fetch(PROJECTS_API_URL, {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error("Projects request failed: " + response.status);
        }

        const data = await response.json();
        const apiProjects = Array.isArray(data.projects) ? data.projects : [];
        const filteredProjects = apiProjects.filter((project) => {
          const hasImage =
            project.cover_image_url || project.images?.[0]?.image_url;
          const category = project.category?.toLowerCase() || "";
          const isWebDevelopment =
            category.includes("website development") ||
            category.includes("web development");

          return (
            hasImage &&
            isWebDevelopment &&
            !isInvalidLegacyProjectHref(project.href_url)
          );
        });

        setProjects(filteredProjects);
        setLoadState(filteredProjects.length ? "ready" : "empty");
      } catch (error) {
        if (error?.name === "AbortError") return;
        console.error("Failed to load projects", error);
        setLoadState("error");
      }
    };

    fetchProjects();
    return () => controller.abort();
  }, [isNearViewport]);

  const scrollCarousel = (direction) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const firstCard = carousel.querySelector("[data-project-card]");
    const distance = firstCard
      ? firstCard.getBoundingClientRect().width + 24
      : carousel.clientWidth * 0.85;

    carousel.scrollBy({
      left: direction * distance,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  let statusMessage = "Loading projects…";
  if (loadState === "empty") statusMessage = "New projects are coming soon.";
  if (loadState === "error") {
    statusMessage = "Projects are temporarily unavailable.";
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      aria-label="Project case studies"
    >
      {loadState !== "ready" ? (
        <div
          className="min-h-24 py-10 text-center text-base font-medium text-slate-600"
          role="status"
          aria-live="polite"
        >
          {statusMessage}
        </div>
      ) : (
        <>
          <div className="mb-2 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => scrollCarousel(-1)}
              disabled={projects.length < 2}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#072D7F]/15 bg-white/80 text-[#072D7F] shadow-sm transition-colors hover:bg-[#072D7F] hover:text-white disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BF0B30] focus-visible:ring-offset-2"
              aria-label="Scroll to previous projects"
              aria-controls="home-projects"
            >
              <FaChevronLeft aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel(1)}
              disabled={projects.length < 2}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#072D7F]/15 bg-white/80 text-[#072D7F] shadow-sm transition-colors hover:bg-[#072D7F] hover:text-white disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BF0B30] focus-visible:ring-offset-2"
              aria-label="Scroll to next projects"
              aria-controls="home-projects"
            >
              <FaChevronRight aria-hidden="true" />
            </button>
          </div>

          <div
            id="home-projects"
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
              const projectTitle =
                project.alt || project.category || "Web development project";
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
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06152d]/45 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                </>
              );

              return project.href_url ? (
                <a
                  key={project.id}
                  data-project-card
                  href={project.href_url}
                  aria-label={"View project: " + projectTitle}
                  className={cardClassName + " focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BF0B30] focus-visible:ring-offset-2"}
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
        </>
      )}
    </section>
  );
};

const Study = () => {
  return (
    <section className="py-9 lg:py-15">
      <div className="mx-auto max-w-[1350px] px-[15px]">
        <SlideUp>
          <div className="flex flex-col items-center">
            <Button variant="secondary">Case Study</Button>
            <Title size={"5xl"} className="max-w-[872px] pt-6 text-center">
              <Highlight>Success Stories:</Highlight>Transformative Case Studies
            </Title>
          </div>
        </SlideUp>
        <div className="pt-7.5 lg:pt-12.5">
          <GalleryCarousel />
        </div>
      </div>
    </section>
  );
};

export default Study;
