"use client";
import React, { useState, useEffect, useRef } from 'react'
import Highlight from '../ui/highlight'
import Title from '../ui/title'
import { Button } from '../ui/button'
import SlideUp from '../animations/slideUp'

/**
 * @typedef {Object} ProjectACF
 * @property {Object} [project_image] - Project image object
 * @property {string} project_image.url - URL of the project image
 * @property {string|string[]} [catogary] - Category or categories (note: typo in original)
 */

/**
 * @typedef {Object} ProjectTitle
 * @property {string} rendered - The rendered title text
 */

/**
 * @typedef {Object} Project
 * @property {number} id - Unique identifier for the project
 * @property {string} slug - URL slug for the project
 * @property {ProjectTitle} title - Project title object
 * @property {ProjectACF} [acf] - Advanced Custom Fields data
 */

/** Minimum drag distance in pixels to trigger navigation */
const DRAG_THRESHOLD = 30;

/**
 * GalleryCarousel Component
 * 
 * A responsive carousel component that displays portfolio projects with web development category.
 * Features include:
 * - Auto-play functionality (pauses on hover)
 * - Mouse drag navigation
 * - Navigation buttons and dot indicators
 * - Responsive design with different sizes for mobile/tablet/desktop
 * - Smooth transitions and hover effects
 * 
 * @component
 * @returns {JSX.Element} The rendered gallery carousel
 */
const GalleryCarousel = () => {
    /** @type {[Project[], Function]} Array of projects to display */
    const [projects, setProjects] = useState([]);

    /** @type {[number, Function]} Index of currently active/centered item */
    const [activeIndex, setActiveIndex] = useState(0);

    /** @type {[boolean, Function]} Whether user is hovering over carousel */
    const [isHovering, setIsHovering] = useState(false);

    /** @type {React.RefObject<HTMLDivElement>} Reference to carousel container */
    const carouselRef = useRef(null);

    /** @type {React.RefObject<(HTMLAnchorElement|null)[]>} References to individual carousel items */
    const itemsRef = useRef([]);

    /** @type {React.RefObject<boolean>} Whether user is currently dragging */
    const isDragging = useRef(false);

    /** @type {React.RefObject<number>} Starting X position of drag */
    const startX = useRef(0);

    /** @type {React.RefObject<number>} Initial scroll position when drag started */
    const scrollLeft = useRef(0);

    /** @type {React.RefObject<number>} Current drag distance */
    const dragDelta = useRef(0);

    /**
     * Fetches projects from API and filters for web development projects with images
     * @async
     */
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch("/api/posts", { cache: "no-store" });
                const data = await res.json();

                // Filter projects to only include web development projects with images
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
                console.log(filtered)
                setProjects(filtered);
            } catch (err) {
                console.error("Failed to load projects", err);
            }
        };

        fetchProjects();
    }, []);

    /**
     * Auto-play effect - advances to next slide every 3 seconds
     * Pauses when user is hovering or when no projects are loaded
     */
    useEffect(() => {
        if (isHovering || projects.length === 0) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, [isHovering, projects]);

    /**
     * Auto-scroll effect - smoothly scrolls to center the active item
     * Calculates the scroll position to center the active item in the viewport
     */
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
                behavior: "smooth",
            });
        }
    }, [activeIndex]);

    /**
     * Mouse drag functionality effect
     * Handles mouse events for drag-to-navigate functionality
     */
    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        /**
         * Handles mouse down event to start dragging
         * @param {MouseEvent} e - Mouse event
         */
        const handleMouseDown = (e) => {
            if (e.button !== 0) return; // Only handle left mouse button
            isDragging.current = true;
            startX.current = e.pageX - carousel.offsetLeft;
            scrollLeft.current = carousel.scrollLeft;
            dragDelta.current = 0;
            carousel.classList.add("dragging");
        };

        /**
         * Handles mouse up event to end dragging
         * Determines if drag was significant enough to trigger navigation
         */
        const handleMouseUp = () => {
            if (!isDragging.current) return;
            isDragging.current = false;
            carousel.classList.remove("dragging");

            const moved = dragDelta.current;
            if (Math.abs(moved) > DRAG_THRESHOLD) {
                if (moved < 0) {
                    // Dragged left - go to next item
                    setActiveIndex((prev) => (prev + 1) % projects.length);
                } else {
                    // Dragged right - go to previous item
                    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
                }
            }
        };

        /**
         * Handles mouse move event during dragging
         * Updates scroll position based on drag distance
         * @param {MouseEvent} e - Mouse event
         */
        const handleMouseMove = (e) => {
            if (!isDragging.current) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = x - startX.current;
            dragDelta.current = walk;
            carousel.scrollLeft = scrollLeft.current - walk;
        };

        /**
         * Handles mouse leave event to cancel dragging
         */
        const handleMouseLeave = () => {
            isDragging.current = false;
            carousel.classList.remove("dragging");
        };

        // Add event listeners
        carousel.addEventListener("mousedown", handleMouseDown);
        carousel.addEventListener("mouseup", handleMouseUp);
        carousel.addEventListener("mouseleave", handleMouseLeave);
        carousel.addEventListener("mousemove", handleMouseMove);

        // Cleanup event listeners
        return () => {
            carousel.removeEventListener("mousedown", handleMouseDown);
            carousel.removeEventListener("mouseup", handleMouseUp);
            carousel.removeEventListener("mouseleave", handleMouseLeave);
            carousel.removeEventListener("mousemove", handleMouseMove);
        };
    }, [projects.length]);

    // Show loading state if no projects are loaded yet
    if (projects.length === 0) {
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
                    onClick={() =>
                        setActiveIndex((prev) =>
                            prev === 0 ? projects.length - 1 : prev - 1
                        )
                    }
                    className="bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300 shadow-lg"
                    aria-label="Previous project"
                >
                    ←
                </button>
            </div>

            {/* Right Navigation Button */}
            <div className="absolute top-1/2 right-2 z-10 -translate-y-1/2">
                <button
                    onClick={() =>
                        setActiveIndex((prev) =>
                            prev === projects.length - 1 ? 0 : prev + 1
                        )
                    }
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
                {/* Render projects twice for infinite scroll effect */}
                {[...projects, ...projects].map((project, index) => {
                    const imageUrl = project.acf?.project_image?.url || "/default.jpg";
                    const actualIndex = index % projects.length;

                    return (
                        <a
                            key={`${project.id}-${index}`}
                            href={`/projects/${project.slug}`}
                            ref={(el) => {
                                // Only store reference for the first occurrence of each project
                                if (actualIndex === index) {
                                    itemsRef.current[actualIndex] = el;
                                }
                            }}
                            className={`relative min-w-[320px] sm:min-w-[360px] md:min-w-[400px] max-w-[420px] h-[260px] sm:h-[300px] md:h-[340px] 
                bg-white rounded-2xl overflow-hidden shadow-xl border transition-all duration-300 flex-shrink-0 snap-center
                ${actualIndex === activeIndex
                                    ? "scale-105 border-blue-500"
                                    : "scale-95 opacity-80 border-gray-200"
                                } hover:scale-105 hover:opacity-100 hover:border-blue-400`}
                        >
                            {/* Project Image */}
                            <img
                                src={imageUrl}
                                alt={project.title.rendered}
                                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
                            />

                            {/* Hover Overlay with Title */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <span className="text-white font-medium text-lg">
                                    {project.title.rendered}
                                </span>
                            </div>
                        </a>
                    );
                })}
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-6">
                {projects.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex
                                ? "w-8 bg-blue-600"
                                : "w-2 bg-gray-300 hover:bg-gray-500"
                            }`}
                        aria-label={`Go to project ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

/**
 * Study Component
 * 
 * Main component that displays the case studies section with an integrated
 * gallery carousel showing dynamic project data from the API.
 * 
 * @component
 * @returns {JSX.Element} The rendered study section
 */
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

export default Study