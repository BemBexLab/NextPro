"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

// SkeletonCard component for loading state
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
];

const ProjectsTab = () => {
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("LOGO DESIGN");
  const [loading, setLoading] = useState(true);

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

    if (Array.isArray(cat)) {
      return cat.some(
        (c) => c.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
    return cat.toLowerCase() === selectedCategory.toLowerCase();
  });

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
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((label) => (
          <span
            key={label}
            onClick={() => setSelectedCategory(label)}
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

      {/* Projects Grid or Message */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
          {Array.from({ length: 6 }).map((_, idx) => (
            <SkeletonCard key={idx} />
          ))}
        </div>
      ) : filteredPosts.length === 0 ? (
        // Show ONLY the message, NOT the grid (no border/shadow/line effect)
        <div className="w-full text-center text-lg py-16 text-white/80">
          No projects found in this category.
        </div>
      ) : (
        // Only show grid if there are posts
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
          {filteredPosts.map((post) => {
            const imageUrl = post.acf?.project_image?.url || "/default.jpg";
            return (
              <Link
                key={post.id}
                href={`/projects/${post.slug}`}
                className="group relative w-full bg-black rounded-2xl overflow-hidden shadow-xl border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:border-primary/60"
              >
                <img
                  src={imageUrl}
                  alt={post.title.rendered}
                  className="w-full h-auto object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
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

