"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

function SkeletonCard() {
  return (
    <div className="w-full h-[350px] bg-gradient-to-br from-[#10132b] to-[#1a1e38] rounded-2xl shadow-2xl border border-white/10 overflow-hidden flex flex-col animate-pulse relative">
      <div className="flex-1 w-full h-[220px] skeleton-shimmer" />
      <div className="p-4 flex flex-col gap-2">
        <div className="h-6 w-2/3 bg-white/10 rounded" />
        <div className="h-4 w-1/3 bg-white/5 rounded" />
      </div>
    </div>
  );
}

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

const logoSubcategories = [
  "Hand Picked",
  "Real Estate",
  "IT/Tech",
  "Cosmetics & Beauty",
  "Consulting",
  "Sports",
  "Automotive",
  "Health & Fitness",
];

const FIGMA_CARD_HEIGHT = 500; // px, adjust as needed

const ProjectsTab = () => {
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("LOGO DESIGN");
  const [selectedLogoSubcategory, setSelectedLogoSubcategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hoveredFigmaCard, setHoveredFigmaCard] = useState(null);
  const [scrollOffsets, setScrollOffsets] = useState({});
  const imgRefs = useRef({});

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/posts", { cache: "no-store" });
        const data = await res.json();
        const projectPosts = data.filter(
          (post) => post.acf?.project_image?.url && post.slug
        );
        setPosts(projectPosts);
      } catch (err) {
        console.error("Error fetching posts", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const filteredPosts = posts.filter((post) => {
    const cat = post.acf?.catogary;
    if (!cat) return false;

    const categoryMatch = Array.isArray(cat)
      ? cat.some((c) => c.toLowerCase() === selectedCategory.toLowerCase())
      : cat.toLowerCase() === selectedCategory.toLowerCase();

    if (selectedCategory !== "LOGO DESIGN") return categoryMatch;

    if (!selectedLogoSubcategory) return categoryMatch;

    const subcat = post.acf?.logo_sub_catogary;
    if (!subcat) return false;

    if (Array.isArray(subcat)) {
      return (
        categoryMatch &&
        subcat.some(
          (sc) =>
            sc.toLowerCase().replace(/\s+/g, "") ===
            selectedLogoSubcategory.toLowerCase().replace(/\s+/g, "")
        )
      );
    }
    return (
      categoryMatch &&
      subcat.toLowerCase().replace(/\s+/g, "") ===
        selectedLogoSubcategory.toLowerCase().replace(/\s+/g, "")
    );
  });

  // Helper to check if a post is a Figma card
  const isFigmaCard = (post) => {
    const cat = post.acf?.catogary;
    if (Array.isArray(cat)) {
      return cat.some((c) => c.toLowerCase() === "figma design".toLowerCase());
    }
    return cat && cat.toLowerCase() === "figma design".toLowerCase();
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
      <h2 className="text-4xl sm:text-5xl font-bold mb-10 leading-tight text-center">
        <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
          Our Portfolio
        </span>
      </h2>

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
      {selectedCategory === "LOGO DESIGN" && (
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
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
          {Array.from({ length: 6 }).map((_, idx) => (
            <SkeletonCard key={idx} />
          ))}
        </div>
      ) : filteredPosts.length === 0 ? (
        <div className="w-full text-center text-lg py-16 text-white/80">
          No projects found in this category.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
          {filteredPosts.map((post) => {
            const imageUrl = post.acf?.project_image?.url || "/default.jpg";
            const figma = isFigmaCard(post);
            const scrollAmount = scrollOffsets[post.id] || 0;

            return (
              <Link
                key={post.id}
                href={`/projects/${post.slug}`}
                className={`group relative w-full rounded-2xl overflow-hidden shadow-xl border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:border-primary/60 bg-black ${
                  figma ? `h-[${FIGMA_CARD_HEIGHT}px]` : "h-[350px]"
                }`}
                style={figma ? { height: `${FIGMA_CARD_HEIGHT}px` } : {}}
                onMouseEnter={() => figma && setHoveredFigmaCard(post.id)}
                onMouseLeave={() => figma && setHoveredFigmaCard(null)}
              >
                <div className={`w-full ${figma ? "h-full overflow-hidden relative" : ""}`}>
                  <img
                    ref={(el) => {
                      if (figma) imgRefs.current[post.id] = el;
                    }}
                    src={imageUrl}
                    alt={post.title.rendered}
                    className={`w-full object-cover object-top transition-transform duration-[2500ms] ease-in-out`}
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
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium text-lg text-center">
                    {post.title.rendered}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default ProjectsTab;
