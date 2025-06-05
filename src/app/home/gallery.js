"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

/**
 * @typedef {Object} PostACF
 * @property {Object} [project_image] - Project image object
 * @property {string} project_image.url - URL of the project image
 * @property {string|string[]} [catogary] - Category or categories (note: typo in original)
 */

/**
 * @typedef {Object} PostTitle
 * @property {string} rendered - The rendered title text
 */

/**
 * @typedef {Object} Post
 * @property {number} id - Unique identifier for the post
 * @property {string} slug - URL slug for the post
 * @property {PostTitle} title - Post title object
 * @property {PostACF} [acf] - Advanced Custom Fields data
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
    /** @type {[Post[], Function]} Array of posts to display */
    const [posts, setPosts] = useState([]);

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
     * Fetches posts from API and filters for web development projects with images
     * @async
     */
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch("/api/posts", { cache: "no-store" });
                const data = await res.json();

                // Filter posts to only include web development projects with images
                const filtered = data.filter((post) => {
                    const hasImage = post.acf?.project_image?.url;
                    const isWebDev =
                        post.acf?.catogary &&
                        (Array.isArray(post.acf.catogary)
                            ? post.acf.catogary.some(
                                (cat) => cat.toLowerCase() === "web development"
                            )
                            : post.acf.catogary.toLowerCase() === "web development");

                    return hasImage && isWebDev;
                });
                setPosts(filtered);
            } catch (err) {
                console.error("Failed to load posts", err);
            }
        };

        fetchPosts();
    }, []);

    /**
     * Auto-play effect - advances to next slide every 3 seconds
     * Pauses when user is hovering or when no posts are loaded
     */
    useEffect(() => {
        if (isHovering || posts.length === 0) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev === posts.length - 1 ? 0 : prev + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, [isHovering, posts]);

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
                    setActiveIndex((prev) => (prev + 1) % posts.length);
                } else {
                    // Dragged right - go to previous item
                    setActiveIndex((prev) => (prev === 0 ? posts.length - 1 : prev - 1));
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
    }, [posts.length]);

    // Show loading state if no posts are loaded yet
    if (posts.length === 0) {
        return (
            <div className="text-white text-center py-10">Loading Projects...</div>
        );
    }

    return (
        <section className="w-full py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
            {/* Section Header */}
            <p className="text-[#BF0B30] font-semibold mb-2">Our Portfolio</p>
            <h2 className="text-[#1F1F1F] text-3xl sm:text-4xl md:text-5xl font-normal mb-10 leading-tight">
                Our{" "}
                <span className="text-black">
                    Previous Work
                </span>
            </h2>

            <div
                className="relative w-full overflow-x-hidden"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                {/* Left Navigation Button */}
                <div className="absolute top-1/2 left-2 z-10 -translate-y-1/2">
                    <button
                        onClick={() =>
                            setActiveIndex((prev) =>
                                prev === 0 ? posts.length - 1 : prev - 1
                            )
                        }
                        className="bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300"
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
                                prev === posts.length - 1 ? 0 : prev + 1
                            )
                        }
                        className="bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300"
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
                    {/* Render posts twice for infinite scroll effect */}
                    {[...posts, ...posts].map((post, index) => {
                        const imageUrl = post.acf?.project_image?.url || "/default.jpg";
                        const actualIndex = index % posts.length;

                        return (
                            <Link
                                key={`${post.id}-${index}`}
                                href={`/projects/${post.slug}`}
                                ref={(el) => {
                                    // Only store reference for the first occurrence of each post
                                    if (actualIndex === index) {
                                        itemsRef.current[actualIndex] = el;
                                    }
                                }}
                                className={`relative min-w-[320px] sm:min-w-[360px] md:min-w-[400px] max-w-[420px] h-[260px] sm:h-[300px] md:h-[340px] 
                  bg-black rounded-2xl overflow-hidden shadow-xl border transition-all duration-300 flex-shrink-0 snap-center
                  ${actualIndex === activeIndex
                                        ? "scale-105 border-[#002768]"
                                        : "scale-95 opacity-80 border-white/10"
                                    } hover:scale-105 hover:opacity-100 hover:border-[#002768]/60`}
                            >
                                {/* Project Image */}
                                <img
                                    src={imageUrl}
                                    alt={post.title.rendered}
                                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
                                />

                                {/* Hover Overlay with Title */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <span className="text-white font-medium text-lg text-center">
                                        {post.title.rendered}
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center gap-2 mt-6">
                    {posts.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex
                                ? "w-8 bg-[#002768]"
                                : "w-2 bg-gray-300 hover:bg-gray-500"
                                }`}
                            aria-label={`Go to project ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GalleryCarousel;