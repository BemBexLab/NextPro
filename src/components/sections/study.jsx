"use client";
import React, { useState, useEffect, useRef } from 'react'
import Highlight from '../ui/highlight'
import Title from '../ui/title'
import { Button } from '../ui/button'
import SlideUp from '../animations/slideUp'

const DRAG_THRESHOLD = 30;

const GalleryCarousel = () => {
    const [projects, setProjects] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0); // Will be set on data load
    const [isHovering, setIsHovering] = useState(false);
    const [shouldSmoothScroll, setShouldSmoothScroll] = useState(true);

    const carouselRef = useRef(null);
    const itemsRef = useRef([]);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const dragDelta = useRef(0);

    // 1. Fetch projects
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch("/api/posts", { cache: "no-store" });
                const data = await res.json();
                const filtered = data.filter((project) => {
                    const hasImage = project.acf?.project_image?.url;
                    const isWebDev =
                        project.acf?.catogary &&
                        (Array.isArray(project.acf.catogary)
                            ? project.acf.catogary.some(
                                (cat) => cat.toLowerCase() === "web development"
                            )
                            : project.acf.catogary.toLowerCase() === "web development");
                    return hasImage && isWebDev;
                });
                setProjects(filtered);
            } catch (err) {
                console.error("Failed to load projects", err);
            }
        };
        fetchProjects();
    }, []);

    // 2. On projects load, start in the middle copy for seamless loop
    useEffect(() => {
        if (projects.length > 0) {
            setActiveIndex(projects.length); // Start at middle
        }
    }, [projects]);

    // 3. Triple your projects for infinite effect
    const tripleProjects = [...projects, ...projects, ...projects];
    const projectsCount = projects.length;
    const totalProjects = tripleProjects.length;

    // 4. Auto-play
    useEffect(() => {
        if (isHovering || projectsCount === 0) return;
        const interval = setInterval(() => {
            handleNext();
        }, 3000);
        return () => clearInterval(interval);
    }, [isHovering, projectsCount, activeIndex]);

    // 5. Smooth scroll to active index, or instant if shouldSmoothScroll === false
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

    // 6. Looping logic: teleport to center set when you reach either end
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
        } else {
            setShouldSmoothScroll(true);
        }
    }, [activeIndex, projectsCount]);

    // 7. Mouse drag navigation
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
            <div className="text-center py-10">
                <div className="text-lg text-gray-600">Loading Projects...</div>
            </div>
        );
    }

    return (
        <div
            className="relative w-full overflow-hidden"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {/* Left Navigation Button */}
            <div className="absolute top-1/2 left-2 z-10 -translate-y-1/2">
                <button
                    onClick={handlePrev}
                    className="bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300 shadow-lg"
                    aria-label="Previous project"
                >
                    ←
                </button>
            </div>
            {/* Right Navigation Button */}
            <div className="absolute top-1/2 right-2 z-10 -translate-y-1/2">
                <button
                    onClick={handleNext}
                    className="bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300 shadow-lg"
                    aria-label="Next project"
                >
                    →
                </button>
            </div>
            {/* Carousel Container */}
            <div
                ref={carouselRef}
                className="flex gap-6 overflow-x-hidden scrollbar-hide snap-x snap-mandatory py-4 px-2 cursor-grab active:cursor-grabbing select-none"
            >
                {tripleProjects.map((project, index) => {
                    const imageUrl = project.acf?.project_image?.url || "/default.jpg";
                    // Use real index within current projects set for itemsRef
                    const actualIndex = index % projectsCount;
                    // Only use refs for items in the middle set
                    const refProp = (index >= projectsCount && index < projectsCount * 2)
                        ? (el) => { itemsRef.current[index] = el; }
                        : null;

                    return (
                        <a
                            key={`${project.id}-${index}`}
                            href={`/projects/${project.slug}`}
                            ref={refProp}
                            className={`
                                relative
                                w-[80vw] min-w-0 max-w-[88vw]
                                sm:min-w-[320px] sm:max-w-[340px] sm:w-[320px]
                                md:min-w-[400px] md:max-w-[420px] md:w-[400px]
                                h-[50vw] sm:h-[200px] md:h-[270px]
                                bg-white rounded-2xl overflow-hidden shadow-xl border transition-all duration-300 flex-shrink-0 snap-center
                                ${index === activeIndex
                                    ? "scale-105 border-blue-500"
                                    : "scale-95 opacity-80 border-gray-200"
                                } hover:scale-105 hover:opacity-100 hover:border-blue-400
                            `}
                        >
                            <img
                                src={imageUrl}
                                alt={project.title.rendered}
                                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <span className="text-white font-medium text-lg">
                                    {project.title.rendered}
                                </span>
                            </div>
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

const Study = () => {
    return (
        <section className='lg:py-15 py-9'>
            <div className='max-w-[1350px] mx-auto px-[15px]'>
                <SlideUp>
                    <div className='flex flex-col items-center'>
                        <Button variant="secondary">Case Study</Button>
                        <Title size={"5xl"} className="max-w-[872px] pt-6 text-center">
                            <Highlight>Success Stories:</Highlight>Transformative Case Studies
                        </Title>
                    </div>
                </SlideUp>
                <div className='lg:pt-12.5 pt-7.5'>
                    <GalleryCarousel />
                </div>
            </div>
        </section>
    )
}

export default Study;
