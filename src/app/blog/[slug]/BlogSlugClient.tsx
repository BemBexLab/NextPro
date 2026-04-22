"use client";

import { useEffect, useMemo, useState } from "react";
import type { WPPost } from "../wpPosts";

type TocItem = {
  id: string;
  text: string;
  level: "h2" | "h3";
};

type TocGroup = {
  parent: TocItem;
  children: TocItem[];
};

function slugifyHeading(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

type BlogSlugPageProps = {
  post: WPPost;
};

export default function BlogSlugPage({ post }: BlogSlugPageProps) {
  const [hasMounted, setHasMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>(
    {}
  );

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const articleClassName = useMemo(() => {
    const wpClasses = post?.class_list?.join(" ") || "";
    return ["wp-post-shell", wpClasses].filter(Boolean).join(" ");
  }, [post?.class_list]);

  const transformedPost = useMemo(() => {
    const sourceHtml = post?.content?.rendered || post?.excerpt?.rendered || "";
    const embeddedFeaturedImage =
      post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
      post?.yoast_head_json?.og_image?.[0]?.url ||
      "";
    const embeddedFeaturedImageAlt =
      post?._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || "";

    if (!sourceHtml || !hasMounted) {
      return {
        contentHtml: sourceHtml,
        featuredImage: embeddedFeaturedImage,
        featuredImageAlt: embeddedFeaturedImageAlt,
        toc: [] as TocItem[],
      };
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(sourceHtml, "text/html");
    const toc: TocItem[] = [];

    doc.querySelectorAll("[style]").forEach((element) => {
      element.removeAttribute("style");
    });

    doc.querySelectorAll("p, div").forEach((element) => {
      if (element.innerHTML.replace(/&nbsp;|\s|<br\s*\/?>/gi, "") === "") {
        element.remove();
      }
    });

    let featuredImage = embeddedFeaturedImage;
    let featuredImageAlt = embeddedFeaturedImageAlt;
    const firstImage = doc.querySelector("img");
    let shouldRemoveFirstImage = false;

    if (!featuredImage && firstImage) {
      featuredImage = firstImage.getAttribute("src") || "";
      featuredImageAlt = firstImage.getAttribute("alt") || "";
      shouldRemoveFirstImage = true;
    }

    if (shouldRemoveFirstImage && firstImage) {
      const imageParent = firstImage.parentElement;
      if (
        imageParent &&
        ["P", "FIGURE", "DIV"].includes(imageParent.tagName) &&
        imageParent.textContent?.trim() === ""
      ) {
        imageParent.remove();
      } else {
        firstImage.remove();
      }
    }

    doc.querySelectorAll("h2, h3").forEach((heading, index) => {
      const text = heading.textContent?.trim() || `section-${index + 1}`;
      const level = heading.tagName.toLowerCase() as "h2" | "h3";
      const id = slugifyHeading(text) || `section-${index + 1}`;

      heading.setAttribute("id", id);
      toc.push({ id, text, level });
    });

    doc.querySelectorAll("a").forEach((anchor) => {
      anchor.setAttribute("target", "_blank");
      anchor.setAttribute("rel", "noopener noreferrer");
    });

    return {
      contentHtml: doc.body.innerHTML,
      featuredImage,
      featuredImageAlt,
      toc,
    };
  }, [
    post?._embedded,
    post?.content?.rendered,
    post?.excerpt?.rendered,
    hasMounted,
    post?.yoast_head_json?.og_image,
  ]);

  const tocGroups = useMemo<TocGroup[]>(() => {
    const groups: TocGroup[] = [];
    let currentGroup: TocGroup | null = null;

    transformedPost.toc.forEach((item) => {
      if (item.level === "h2") {
        currentGroup = {
          parent: item,
          children: [],
        };
        groups.push(currentGroup);
        return;
      }

      if (currentGroup) {
        currentGroup.children.push(item);
      }
    });

    return groups;
  }, [transformedPost.toc]);

  useEffect(() => {
    if (!transformedPost.toc.length) {
      setActiveSection("");
      return;
    }

    const headings = transformedPost.toc
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!headings.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top)
          );

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0.1, 0.5, 1],
      }
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => {
      observer.disconnect();
    };
  }, [transformedPost.toc]);

  useEffect(() => {
    setExpandedGroups((current) => {
      const next = { ...current };

      tocGroups.forEach((group, index) => {
        if (next[group.parent.id] === undefined) {
          next[group.parent.id] = index === 0;
        }
      });

      return next;
    });
  }, [tocGroups]);

  useEffect(() => {
    if (!activeSection) {
      return;
    }

    const activeGroup = tocGroups.find(
      (group) =>
        group.parent.id === activeSection ||
        group.children.some((child) => child.id === activeSection)
    );

    if (!activeGroup?.children.length) {
      return;
    }

    setExpandedGroups((current) => ({
      ...current,
      [activeGroup.parent.id]: true,
    }));
  }, [activeSection, tocGroups]);

  function toggleGroup(groupId: string) {
    setExpandedGroups((current) => ({
      ...current,
      [groupId]: !current[groupId],
    }));
  }

  return (
    <main className="bg-white text-[#1f2937]">
      <section className="mx-auto w-full max-w-[1230px] px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <article className={articleClassName}>
          <header className="wp-post-hero">
            <div className="wp-post-badge-wrap">
              <div className="wp-post-badge">WEB FOUNDERS USA</div>
            </div>
            <h1
              className="wp-post-title text-center"
              dangerouslySetInnerHTML={{ __html: post.title?.rendered || "" }}
            />
          </header>

          {transformedPost.featuredImage ? (
            <div className="wp-post-featured">
              <img
                src={transformedPost.featuredImage}
                alt={transformedPost.featuredImageAlt || post.title?.rendered || "Featured image"}
              />
            </div>
          ) : null}

          <div className="wp-post-body-grid bg-[#F8FAFC]">
            <aside className="wp-post-sidebar">
              <div className="wp-post-toc">
                <p className="wp-post-toc-label">Table of Contents</p>
                <nav aria-label="Table of contents">
                  {tocGroups.length ? (
                    <ul className="wp-post-toc-list">
                      {tocGroups.map((group) => (
                        <li key={group.parent.id} className="wp-post-toc-group">
                          <div
                            className={`wp-post-toc-item${
                              activeSection === group.parent.id ? " is-active" : ""
                            }`}
                          >
                            <a href={`#${group.parent.id}`}>{group.parent.text}</a>
                            {group.children.length ? (
                              <button
                                type="button"
                                className={`wp-post-toc-toggle${
                                  expandedGroups[group.parent.id]
                                    ? " is-expanded"
                                    : ""
                                }`}
                                onClick={() => toggleGroup(group.parent.id)}
                                aria-label={`Toggle ${group.parent.text} subsections`}
                                aria-expanded={expandedGroups[group.parent.id] ? "true" : "false"}
                              >
                                <span />
                              </button>
                            ) : null}
                          </div>

                          {group.children.length && expandedGroups[group.parent.id] ? (
                            <ul className="wp-post-toc-children">
                              {group.children.map((child) => (
                                <li
                                  key={child.id}
                                  className={`wp-post-toc-item is-child${
                                    activeSection === child.id ? " is-active" : ""
                                  }`}
                                >
                                  <a href={`#${child.id}`}>{child.text}</a>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="wp-post-toc-empty">No sections available.</p>
                  )}
                </nav>
              </div>
            </aside>

            <div
              className="wp-post-content max-w-9xl"
              dangerouslySetInnerHTML={{
                __html: transformedPost.contentHtml,
              }}
            />
          </div>
        </article>
      </section>
    </main>
  );
}
