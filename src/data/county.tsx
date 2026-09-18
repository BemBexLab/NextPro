import Link from "next/link";
import type { ReactNode } from "react";
import { FaArrowRight } from "react-icons/fa";

export type CountyContentSection = {
  heading?: string;
  paragraphs: ReactNode[];
};

export type CountyPost = {
  id: number;
  slug: string;
  metaTitle?: string;
  metaDescription?: string;
  title: string;
  cardTitle?: string;
  description: string;
  image: string;
  publishedAt: string;
  content: CountyContentSection[];
};

export const countyPosts: CountyPost[] = [
  {
    id: 1,
    slug: "seo-company-union-county-usa",
    metaTitle: "",
    metaDescription: "",
    title: "SEO Company in Union County, GA",
    description:
      "Your customers are searching online for the products and services they need. If your business does not appear when those searches happen, your competitors have an opportunity to win those customers.",
    image: "/image 69.webp",
    publishedAt: "2026-01-15",
    content: [
      {
        paragraphs: [
          "Self-publishing a book in the United States has never been more achievable, or more competitive. The tools, platforms, and professional services available to American authors in 2026 are genuinely world-class, and the gap between a finished manuscript and a book live on Amazon has never been smaller. But that accessibility comes with a catch: so has the noise. More books are published every year, which means the authors who succeed are increasingly the ones who approach the process strategically, not just enthusiastically.",
          "This guide covers every meaningful step in self-publishing for American authors, from finishing your manuscript to getting your book in front of readers nationwide and globally. Whether you're publishing a debut novel, a children's picture book, a personal memoir, or a business guide, the core process is the same, even when the specifics shift by genre.",
        ],
      },
      {
        heading: "Step 1: Finish, Then Properly Edit, Your Manuscript",
        paragraphs: [
          "The single piece of advice most first-time authors skip in their rush to publish: get a real professional edit. Not a proofread from a friend. Not a spell-check pass. A genuine developmental edit, line edit, or copyedit from a qualified editor who understands your genre.",
          "This is also where most authors get confused about terminology, so let's clear it up:",
          <div className="not-prose my-7">
            <ul className="grid gap-4 sm:grid-cols-2">
              <li className="group relative overflow-hidden rounded-[18px] border border-[#eaded7] bg-gradient-to-br from-[#fffaf6] to-white p-5 shadow-[0_12px_30px_rgba(178,64,2,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#e7b79d] hover:shadow-[0_18px_34px_rgba(178,64,2,0.14)] sm:p-6">
                <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0e8] text-sm font-semibold text-[#b24002] ring-1 ring-[#f4c9b1]">
                  01
                </span>
                <p className="text-[0.98rem] leading-[1.75] text-[#555555]">
                  <strong className="font-semibold text-[#282828]">
                    Developmental editing
                  </strong>{" "}
                  looks at the big picture: structure, pacing, plot, or argument
                  strength. This is the right starting point for a first-time
                  author unsure whether the book's foundation actually works.
                </p>
              </li>
              <li className="group relative overflow-hidden rounded-[18px] border border-[#eaded7] bg-gradient-to-br from-[#fffaf6] to-white p-5 shadow-[0_12px_30px_rgba(178,64,2,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#e7b79d] hover:shadow-[0_18px_34px_rgba(178,64,2,0.14)] sm:p-6">
                <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0e8] text-sm font-semibold text-[#b24002] ring-1 ring-[#f4c9b1]">
                  02
                </span>
                <p className="text-[0.98rem] leading-[1.75] text-[#555555]">
                  <strong className="font-semibold text-[#282828]">
                    Line editing
                  </strong>{" "}
                  focuses on sentence-level flow, voice, and tone, especially
                  valuable for fiction authors who want their prose to read
                  smoothly without losing their voice.
                </p>
              </li>
              <li className="group relative overflow-hidden rounded-[18px] border border-[#eaded7] bg-gradient-to-br from-[#fffaf6] to-white p-5 shadow-[0_12px_30px_rgba(178,64,2,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#e7b79d] hover:shadow-[0_18px_34px_rgba(178,64,2,0.14)] sm:p-6">
                <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0e8] text-sm font-semibold text-[#b24002] ring-1 ring-[#f4c9b1]">
                  03
                </span>
                <p className="text-[0.98rem] leading-[1.75] text-[#555555]">
                  <strong className="font-semibold text-[#282828]">
                    Copyediting
                  </strong>{" "}
                  addresses grammar, consistency, and clarity throughout the
                  manuscript, once the structure is already solid.
                </p>
              </li>
              <li className="group relative overflow-hidden rounded-[18px] border border-[#eaded7] bg-gradient-to-br from-[#fffaf6] to-white p-5 shadow-[0_12px_30px_rgba(178,64,2,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#e7b79d] hover:shadow-[0_18px_34px_rgba(178,64,2,0.14)] sm:p-6">
                <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0e8] text-sm font-semibold text-[#b24002] ring-1 ring-[#f4c9b1]">
                  04
                </span>
                <p className="text-[0.98rem] leading-[1.75] text-[#555555]">
                  <strong className="font-semibold text-[#282828]">
                    Proofreading
                  </strong>{" "}
                  is the final pass after formatting, catching typos, spacing
                  errors, and layout issues that slip in during typesetting. It's
                  the last line of defense for self-published authors who don't
                  have a traditional publisher's quality-control team behind
                  them.
                </p>
              </li>
            </ul>
          </div>,
          <div>
            If you're not sure where your manuscript stands, a manuscript
            evaluation service for new authors is often the smartest first
            investment before spending a dollar on design or formatting. It
            gives you an honest read on your book, structurally, stylistically,
            and commercially, before any other publishing decision is made.
          </div>,
          <div>
            NexiFire's manuscript editing service for authors covers every level
            above, matched to your genre, whether that's fiction, nonfiction,
            memoir, Christian nonfiction, business, or academic work. A good
            editing service should also keep your writing voice intact; a
            professional editor sharpens what you're already saying; they don't
            overwrite it with their own style.
          </div>,
          <div><h3 className="text-2xl font-semibold">What to do at this stage:</h3></div>,
          <div className="not-prose my-7">
            <ul className="grid gap-4 sm:grid-cols-2">
              <li className="group relative overflow-hidden rounded-[18px] border border-[#eaded7] bg-gradient-to-br from-[#fffaf6] to-white p-5 shadow-[0_12px_30px_rgba(178,64,2,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#e7b79d] hover:shadow-[0_18px_34px_rgba(178,64,2,0.14)] sm:p-6">
                <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0e8] text-sm font-semibold text-[#b24002] ring-1 ring-[#f4c9b1]">
                  01
                </span>
                <p className="text-[0.98rem] leading-[1.75] text-[#555555]">
                  <strong className="font-semibold text-[#282828]">
                    Complete your manuscript
                  </strong>{" "}
                </p>
              </li>
              <li className="group relative overflow-hidden rounded-[18px] border border-[#eaded7] bg-gradient-to-br from-[#fffaf6] to-white p-5 shadow-[0_12px_30px_rgba(178,64,2,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#e7b79d] hover:shadow-[0_18px_34px_rgba(178,64,2,0.14)] sm:p-6">
                <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0e8] text-sm font-semibold text-[#b24002] ring-1 ring-[#f4c9b1]">
                  02
                </span>
                <p className="text-[0.98rem] leading-[1.75] text-[#555555]">
                  <strong className="font-semibold text-[#282828]">
                    Commission a developmental edit (fiction/memoir) or a copyedit (nonfiction/business)
                  </strong>{" "}
                </p>
              </li>
              <li className="group relative overflow-hidden rounded-[18px] border border-[#eaded7] bg-gradient-to-br from-[#fffaf6] to-white p-5 shadow-[0_12px_30px_rgba(178,64,2,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#e7b79d] hover:shadow-[0_18px_34px_rgba(178,64,2,0.14)] sm:p-6">
                <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0e8] text-sm font-semibold text-[#b24002] ring-1 ring-[#f4c9b1]">
                  03
                </span>
                <p className="text-[0.98rem] leading-[1.75] text-[#555555]">
                  <strong className="font-semibold text-[#282828]">
                    Request a manuscript evaluation if you're unsure which level of editing you need
                  </strong>{" "}
                </p>
              </li>
              <li className="group relative overflow-hidden rounded-[18px] border border-[#eaded7] bg-gradient-to-br from-[#fffaf6] to-white p-5 shadow-[0_12px_30px_rgba(178,64,2,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#e7b79d] hover:shadow-[0_18px_34px_rgba(178,64,2,0.14)] sm:p-6">
                <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0e8] text-sm font-semibold text-[#b24002] ring-1 ring-[#f4c9b1]">
                  04
                </span>
                <p className="text-[0.98rem] leading-[1.75] text-[#555555]">
                  <strong className="font-semibold text-[#282828]">
                    Hold off on formatting or cover design until editing is finished, since changes made during editing affect both
                  </strong>{" "}
                </p>
              </li>
            </ul>
          </div>,
        ],
      },
    ],
  },
];

export const getCountyPostBySlug = (slug: string) =>
  countyPosts.find((post) => post.slug === slug);

export const getRecentCountyPosts = (limit = 3) =>
  [...countyPosts]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, limit);
