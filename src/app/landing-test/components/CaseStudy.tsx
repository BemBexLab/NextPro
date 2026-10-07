"use client";
import React, { useState, useEffect, useRef } from "react";
import Highlight from "@/components/ui/highlight";
import Title from "@/components/ui/title";
import { Button } from "@/components/ui/button";
import SlideUp from "@/components/animations/slideUp";
import { isInvalidLegacyProjectHref } from "@/lib/invalidLegacyProjectSlugs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const DRAG_THRESHOLD = 30;
const PROJECTS_API_BASE = "https://projects-api-bembexlab.vercel.app";
const PROJECTS_API_URL = `${PROJECTS_API_BASE}/api/images/`;

const resolveProjectImageUrl = (path) => {
  if (!path) return "/images/servicebanner/portfolio-image.webp";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${PROJECTS_API_BASE}${path}`;
};

const GalleryCarousel = () => {
  const [projects, setProjects] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); // Will be set on data load
  const [shouldSmoothScroll, setShouldSmoothScroll] = useState(true);

  const carouselRef = useRef(null);
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const dragDelta = useRef(0);

  // Start loading shortly before the carousel enters the viewport instead of
  // competing with the hero and above-the-fold resources on page load.
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

  // Fetch projects only when the section is near the viewport.
  useEffect(() => {
    if (!isVisible) return undefined;

    const controller = new AbortController();

    const fetchProjects = async () => {
      try {
        const res = await fetch(PROJECTS_API_URL, {
          signal: controller.signal,
        });
        const data = await res.json();
        const filtered = (data.projects || []).filter((project) => {
          const hasImage =
            project.cover_image_url || project.images?.[0]?.image_url;
          const category = project.category?.toLowerCase() || "";
          const isWebDev =
            category.includes("website development") ||
            category.includes("web development");
          return (
            hasImage &&
            isWebDev &&
            !isInvalidLegacyProjectHref(project.href_url)
          );
        });
        setProjects(filtered);
        setActiveIndex(filtered.length);
      } catch (err) {
        if (err?.name !== "AbortError") {
          console.error("Failed to load projects", err);
        }
      }
    };
    fetchProjects();

    return () => controller.abort();
  }, [isVisible]);

  // 2. Triple your projects for infinite effect
  const tripleProjects = [...projects, ...projects, ...projects];
  const projectsCount = projects.length;

  // 3. Auto-play
  useEffect(() => {
    if (projectsCount === 0) return;
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [projectsCount, activeIndex]);

  // 4. Smooth scroll to active index, or instant if shouldSmoothScroll === false
  useEffect(() => {
    if (!carouselRef.current || itemsRef.current.length === 0) return;
    const activeItem = itemsRef.current[activeIndex];
    if (activeItem) {
      const scrollPosition =
        activeItem.offsetLeft -
        carouselRef.current.offsetWidth / 2 +
        activeItem.offsetWidth / 2;
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: shouldSmoothScroll ? "smooth" : "auto",
      });
    }
  }, [activeIndex, shouldSmoothScroll]);

  // 5. Looping logic: teleport to center set when you reach either end
  useEffect(() => {
    if (projectsCount === 0) return;

    // If at the last card of the last set, teleport to middle set
    if (activeIndex >= projectsCount * 2) {
      setTimeout(() => {
        setShouldSmoothScroll(false);
        setActiveIndex(activeIndex - projectsCount);
      }, 400);
    }
    // If at the first card of the first set, teleport to middle set
    else if (activeIndex < projectsCount) {
      setTimeout(() => {
        setShouldSmoothScroll(false);
        setActiveIndex(activeIndex + projectsCount);
      }, 400);
    }
  }, [activeIndex, projectsCount]);

  // 6. Mouse drag navigation
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleMouseDown = (e) => {
      if (e.button !== 0) return;
      isDragging.current = true;
      startX.current = e.pageX - carousel.offsetLeft;
      scrollLeft.current = carousel.scrollLeft;
      dragDelta.current = 0;
      carousel.classList.add("dragging");
    };
    const handleMouseUp = () => {
      if (!isDragging.current) return;
      isDragging.current = false;
      carousel.classList.remove("dragging");

      const moved = dragDelta.current;
      if (Math.abs(moved) > DRAG_THRESHOLD) {
        if (moved < 0) handleNext();
        else handlePrev();
      }
    };
    const handleMouseMove = (e) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = x - startX.current;
      dragDelta.current = walk;
      carousel.scrollLeft = scrollLeft.current - walk;
    };
    const handleMouseLeave = () => {
      isDragging.current = false;
      carousel.classList.remove("dragging");
    };
    carousel.addEventListener("mousedown", handleMouseDown);
    carousel.addEventListener("mouseup", handleMouseUp);
    carousel.addEventListener("mouseleave", handleMouseLeave);
    carousel.addEventListener("mousemove", handleMouseMove);
    return () => {
      carousel.removeEventListener("mousedown", handleMouseDown);
      carousel.removeEventListener("mouseup", handleMouseUp);
      carousel.removeEventListener("mouseleave", handleMouseLeave);
      carousel.removeEventListener("mousemove", handleMouseMove);
    };
  }, [projectsCount, activeIndex]);

  // --- NAVIGATION ---
  function handleNext() {
    setShouldSmoothScroll(true);
    setActiveIndex((prev) => prev + 1);
  }
  function handlePrev() {
    setShouldSmoothScroll(true);
    setActiveIndex((prev) => prev - 1);
  }

  if (projectsCount === 0) {
    return (
      <div ref={sectionRef} className="text-center py-10">
        <div className="text-lg text-gray-600">Loading Projects...</div>
      </div>
    );
  }

  return (
    <div
      ref={sectionRef}
      className="relative w-full overflow-hidden"
    >
      {/* Left Navigation Button */}
      <div className="absolute top-1/2 left-2 z-10 -translate-y-1/2">
        <button
          onClick={handlePrev}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-[#555D73] text-white shadow-md"
          aria-label="Previous project"
        >
          <FaChevronLeft aria-hidden="true" className="text-xs" />
        </button>
      </div>
      {/* Right Navigation Button */}
      <div className="absolute top-1/2 right-2 z-10 -translate-y-1/2">
        <button
          onClick={handleNext}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-[#555D73] text-white shadow-md"
          aria-label="Next project"
        >
          <FaChevronRight aria-hidden="true" className="text-xs" />
        </button>
      </div>
      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="flex gap-6 overflow-x-hidden scrollbar-hide snap-x snap-mandatory py-4 px-2 cursor-grab active:cursor-grabbing select-none"
      >
        {tripleProjects.map((project, index) => {
          const imageUrl = resolveProjectImageUrl(
            project.cover_image_url || project.images?.[0]?.image_url,
          );
          const projectTitle = project.alt || project.category || "Project";
          const projectHref = project.href_url || undefined;
          // Only use refs for items in the middle set
          const refProp =
            index >= projectsCount && index < projectsCount * 2
              ? (el) => {
                  itemsRef.current[index] = el;
                }
              : null;

          return (
            <a
              key={`${project.id}-${index}`}
              href={projectHref}
              ref={refProp}
              className={`
                                relative block aspect-[2/1] w-[80vw] min-w-0 max-w-[88vw]
                                shrink-0 snap-center overflow-hidden rounded-xl border border-[#E2E6F0] bg-[#F5F7FC] shadow-sm
                                sm:w-[320px] sm:max-w-[340px]
                                md:w-[calc((100%_-_3rem)_/_3)] md:max-w-[420px]
                            `}
            >
              <img
                src={imageUrl}
                alt={projectTitle}
                width="800"
                height="500"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                className="h-full w-full object-cover object-center"
              />
            </a>
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
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-full bg-no-repeat opacity-70"
        style={{
          backgroundImage: "url('/Halloween%20Assets%20Task/part-01.webp')",
          backgroundSize: "100% auto",
          backgroundPosition: "bottom",
        }}
      />
      <img
        aria-hidden="true"
        src="/Halloween Assets Task/image 17.webp"
        alt=""
        className="pointer-events-none absolute bottom-0 left-0 z-[1] hidden w-[142px] object-contain opacity-90 md:block md:w-[206px] lg:w-[270px]"
      />
      <div className="relative z-10 mx-auto max-w-[1350px] px-[15px]">
        <SlideUp>
          <div className="flex flex-col items-center">
            <Button variant="secondary">Case Study</Button>
            <Title size={"5xl"} className="max-w-[872px] pt-2 text-center">
              <Highlight>Success Stories:</Highlight><span className="text-red-500">Transformative Case</span> Studies
            </Title>
          </div>
        </SlideUp>
        <GalleryCarousel />
      </div>
    </section>
  );
};

export default CaseStudy;
