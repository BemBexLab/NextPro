"use client";
import Link from "next/link";
import { useState, useRef } from "react";
const PROJECTS_API_BASE = "https://projects-api-bembexlab.vercel.app";

const CATEGORY_MAP = {
  "LOGO DESIGN": ["logo"],
  "WEB DEVELOPMENT": ["website development & design", "web development"],
  SHOPIFY: ["website development & design", "web development"],
  WORDPRESS: ["website development & design", "web development"],
  BRANDING: ["branding"],
  ILLUSTRATION: ["illustration"],
  PRINT: ["print"],
  "FIGMA DESIGN": ["website development & design", "web development"],
};

const WEB_DEVELOPMENT_TABS = [
  "WEB DEVELOPMENT",
  "SHOPIFY",
  "WORDPRESS",
  "FIGMA DESIGN",
];

const normalizeValue = (value) => (value || "").toLowerCase().trim();

const matchesMappedCategory = (projectCategory, selectedCategory) => {
  const normalizedProjectCategory = normalizeValue(projectCategory);
  const mappedCategories = CATEGORY_MAP[selectedCategory] || [
    normalizeValue(selectedCategory),
  ];

  return mappedCategories.includes(normalizedProjectCategory);
};

const resolveProjectImageUrl = (path) => {
  if (!path) return "/images/servicebanner/portfolio-image.webp";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${PROJECTS_API_BASE}${path}`;
};

const getSegmentedPosts = (items, segmentIndex, segmentCount) => {
  if (items.length === 0) return [];

  const segmentSize = Math.ceil(items.length / segmentCount);
  const start = segmentIndex * segmentSize;
  const end = start + segmentSize;
  const segment = items.slice(start, end);

  return segment.length > 0 ? segment : items;
};

const categories = [
  "LOGO DESIGN",
  "WEB DEVELOPMENT",
  "SHOPIFY",
  "WORDPRESS",
  "BRANDING",
  "ILLUSTRATION",
  "PRINT",
  "FIGMA DESIGN",
];

const FIGMA_CARD_HEIGHT = 500;

const ProjectsTab = ({ initialPosts = [] }) => {
  const posts = initialPosts;
  const [selectedCategory, setSelectedCategory] = useState("LOGO DESIGN");
  const [selectedLogoSubcategory, setSelectedLogoSubcategory] = useState(null);
  const [hoveredFigmaCard, setHoveredFigmaCard] = useState(null);
  const [scrollOffsets, setScrollOffsets] = useState({});
  const imgRefs = useRef({});

  const logoSubcategories = [
    ...new Set(
      posts
        .filter((post) => matchesMappedCategory(post.category, "LOGO DESIGN"))
        .map((post) => post.subcategory?.trim())
        .filter(Boolean)
    ),
  ];

  const webDevelopmentPosts = posts.filter((post) =>
    matchesMappedCategory(post.category, "WEB DEVELOPMENT")
  );

  const filteredPosts = (() => {
    if (WEB_DEVELOPMENT_TABS.includes(selectedCategory)) {
      const segmentIndex = WEB_DEVELOPMENT_TABS.indexOf(selectedCategory);
      return getSegmentedPosts(
        webDevelopmentPosts,
        segmentIndex,
        WEB_DEVELOPMENT_TABS.length
      );
    }

    return posts.filter((post) => {
      const categoryMatch = matchesMappedCategory(post.category, selectedCategory);

      if (selectedCategory !== "LOGO DESIGN") return categoryMatch;

      if (!selectedLogoSubcategory || logoSubcategories.length === 0) {
        return categoryMatch;
      }

      return (
        categoryMatch &&
        normalizeValue(post.subcategory).replace(/\s+/g, "") ===
          normalizeValue(selectedLogoSubcategory).replace(/\s+/g, "")
      );
    });
  })();

  // Helper to check if a post is a Figma card
  const isFigmaCard = (post) => {
    return normalizeValue(post.category) === "figma design";
  };

  // On image load, calculate how much we can scroll (no black bg ever shows)
  const handleImageLoad = (postId) => {
    const img = imgRefs.current[postId];
    const cardHeight = FIGMA_CARD_HEIGHT;
    if (img) {
      // Wait for browser to render actual size
      setTimeout(() => {
        const displayedHeight = img.offsetHeight; // Height inside card
        const maxScroll = Math.max(displayedHeight - cardHeight, 0);
        setScrollOffsets((prev) => ({ ...prev, [postId]: maxScroll }));
      }, 10); // Slight delay ensures correct layout
    }
  };

  return (
    <section className="w-full py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto bg-background text-white">
      {/* Section Heading */}
      <p className="text-primary font-semibold mb-2 text-center">
        Featured Projects
      </p>
      <h1 className="text-4xl sm:text-5xl font-bold mb-10 leading-tight text-center">
        <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
          Our Portfolio
        </span>
      </h1>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {categories.map((label) => (
          <span
            key={label}
            onClick={() => {
              setSelectedCategory(label);
              if (label !== "LOGO DESIGN") setSelectedLogoSubcategory(null);
            }}
            className={`px-4 py-1.5 text-sm sm:text-base rounded-full border transition-all duration-200 font-medium cursor-pointer ${
              selectedCategory === label
                ? "bg-[#072d7f] text-white border-[#072d7f]"
                : "bg-white text-[#072d7f] border-[#d1d5db] hover:bg-[#f0f4ff] hover:border-[#072d7f]"
            }`}
          >
            {label}
          </span>
        ))}
      </div>

      {/* Logo Subcategory Filter Buttons */}
      {selectedCategory === "LOGO DESIGN" && logoSubcategories.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {logoSubcategories.map((subcat) => (
            <span
              key={subcat}
              onClick={() =>
                setSelectedLogoSubcategory(
                  selectedLogoSubcategory === subcat ? null : subcat
                )
              }
              className={`px-3 py-1 text-xs sm:text-sm rounded-full border transition-all duration-200 font-medium cursor-pointer ${
                selectedLogoSubcategory === subcat
                  ? "bg-[#BF0B30] text-white border-[#BF0B30]"
                  : "bg-white text-[#BF0B30] border-[#d1d5db] hover:bg-[#fbd9d3] hover:border-[#BF0B30]"
              }`}
            >
              {subcat}
            </span>
          ))}
        </div>
      )}

      {/* Projects Grid or Message */}
      {filteredPosts.length === 0 ? (
        <div className="w-full text-center text-lg py-16 text-white/80">
          No projects found in this category.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
          {filteredPosts.map((post, index) => {
            const imageUrl = resolveProjectImageUrl(
              post.cover_image_url || post.images?.[0]?.image_url
            );
            const figma = isFigmaCard(post);
            const scrollAmount = scrollOffsets[post.id] || 0;
            const projectTitle = post.alt || post.category || "Project";
            const projectHref = post.href_url?.trim();
            const cardClassName = `group relative w-full rounded-2xl overflow-hidden shadow-xl border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:border-primary/60 bg-black ${
              figma ? "h-[500px]" : "aspect-[4/3]"
            }`;
            const cardContent = (
              <>
                <div className="relative h-full w-full overflow-hidden">
                  <img
                    ref={(el) => {
                      if (figma) imgRefs.current[post.id] = el;
                    }}
                    src={imageUrl}
                    alt={projectTitle}
                    width={figma ? undefined : 800}
                    height={figma ? undefined : 600}
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "low"}
                    className="h-full w-full object-cover object-top transition-transform duration-[2500ms] ease-in-out"
                    style={
                      figma
                        ? {
                            height: "auto",
                            minHeight: "100%",
                            transition: "transform 2.5s cubic-bezier(0.4, 0, 0.2, 1)",
                            willChange: "transform",
                            transform:
                              figma && hoveredFigmaCard === post.id && scrollAmount > 0
                                ? `translateY(-${scrollAmount}px)`
                                : "translateY(0)",
                          }
                        : {}
                    }
                    onLoad={() => figma && handleImageLoad(post.id)}
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-10 rounded-2xl border border-white/25 bg-gradient-to-br from-white/[0.08] via-transparent to-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-1px_0_rgba(255,255,255,0.12)] transition-colors duration-300 group-hover:from-white/[0.12]"
                  />
                </div>
              </>
            );

            if (projectHref) {
              return (
                <Link
                  key={post.id}
                  href={projectHref}
                  className={cardClassName}
                  style={figma ? { height: `${FIGMA_CARD_HEIGHT}px` } : {}}
                  onMouseEnter={() => figma && setHoveredFigmaCard(post.id)}
                  onMouseLeave={() => figma && setHoveredFigmaCard(null)}
                >
                  {cardContent}
                </Link>
              );
            }

            return (
              <div
                key={post.id}
                className={cardClassName}
                style={figma ? { height: `${FIGMA_CARD_HEIGHT}px` } : {}}
                onMouseEnter={() => figma && setHoveredFigmaCard(post.id)}
                onMouseLeave={() => figma && setHoveredFigmaCard(null)}
              >
                {cardContent}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default ProjectsTab;
