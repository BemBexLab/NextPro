import { notFound } from "next/navigation";
import ContactFormTwo from "@/components/sections/ContactFormTwo";
import LivePreview from "@/components/LivePreview"; // <--- Make this file (see below)
import BackButton from "./BackButton";
import { withEnUsHreflang } from "@/lib/metadata";
import { invalidLegacyProjectSlugs } from "@/lib/invalidLegacyProjectSlugs";

const API_URL =
  "https://olive-peafowl-546702.hostingersite.com/wp-json/wp/v2/posts?slug=";
const POSTS_URL =
  "https://olive-peafowl-546702.hostingersite.com/wp-json/wp/v2/posts";

export async function generateStaticParams() {
  try {
    const res = await fetch(POSTS_URL, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return [];
    }

    const posts = await res.json();
    return posts
      .filter((post) => !invalidLegacyProjectSlugs.has(post.slug))
      .map((post) => ({ slug: post.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  if (invalidLegacyProjectSlugs.has(slug)) {
    return withEnUsHreflang({
      title: "Project Not Found - Web Founders USA",
      robots: {
        index: false,
        follow: false,
      },
    });
  }

  try {
    const res = await fetch(`${API_URL}${slug}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return withEnUsHreflang({
        title: "Project Not Found - Web Founders USA",
        robots: {
          index: false,
          follow: false,
        },
      });
    }

    const data = await res.json();
    const project = data[0];

    if (!project) {
      return withEnUsHreflang({
        title: "Project Not Found - Web Founders USA",
        robots: {
          index: false,
          follow: false,
        },
      });
    }

    const title = `${project.title?.rendered || "Project"} - Web Founders USA`;
    const description =
      project.acf?.introduction ||
      project.excerpt?.rendered ||
      "Explore recent Web Founders USA project work and case studies.";
    const canonical = `https://www.webfoundersusa.com/projects/${slug}`;

    return withEnUsHreflang({
      title,
      description,
      alternates: {
        canonical,
      },
      openGraph: {
        title,
        description,
        url: canonical,
      },
    });
  } catch {
    return withEnUsHreflang({
      title: "Project Not Found - Web Founders USA",
      robots: {
        index: false,
        follow: false,
      },
    });
  }
}

export default async function ProjectPage({ params }) {
  let res;
  const { slug } = await params;

  if (invalidLegacyProjectSlugs.has(slug)) {
    notFound();
  }

  try {
    res = await fetch(`${API_URL}${slug}`, {
      next: { revalidate: 60 },
    });
  } catch {
    return notFound();
  }

  if (!res.ok) return notFound();

  const data = await res.json();
  const project = data[0];
  if (!project) return notFound();

  const imageUrl =
    project.acf?.project_image?.url || "/images/servicebanner/portfolio-image.webp";
  const acf = project.acf;

  return (
    <>
      <div className="min-h-screen px-4 lg:py-16 flex flex-col items-center mt-[10px] lg:mt-[80px]">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold max-w-4xl text-left w-full bg-gradient-to-r text-primary bg-clip-text mb-[50px]">
          {project.title.rendered}
        </h1>

        {/* Project Image */}
        <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-xl mb-12">
          <img
            src={imageUrl}
            alt={project.title.rendered}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Project Content Sections */}
        <div className="w-full max-w-3xl space-y-12 text-lg sm:text-xl">
          {acf.introduction && (
            <Section title="Introduction" text={acf.introduction} />
          )}
          {acf.genesis_of_collaboration && (
            <Section
              title="Genesis Of Collaboration"
              text={acf.genesis_of_collaboration}
            />
          )}
          {acf.conceptualization && (
            <Section title="Conceptualization" text={acf.conceptualization} />
          )}
          {acf.design_symphony && (
            <Section title="Design Symphony" text={acf.design_symphony} />
          )}
          {acf.development_overture && (
            <Section
              title="Development Overture"
              text={acf.development_overture}
            />
          )}
          {acf.launch_and_beyond && (
            <Section title="Launch And Beyond" text={acf.launch_and_beyond} />
          )}
          {acf.conclusion && <Section title="Conclusion" text={acf.conclusion} />}
        </div>

        {/* Live Website Preview (only if project_url exists) */}
        {acf.project_url && (
          <div className="w-full max-w-5xl mx-auto my-16 rounded-2xl overflow-hidden ">
            <div className="text-2xl font-semibold mb-2 px-6 pt-6 text-primary text-center ">
              Live Website Preview
            </div>
            <LivePreview url={acf.project_url} />
            
          </div>
        )}

        {/* Back Button */}
        <div className="mt-16 text-center">
          <BackButton />
        </div>
      </div>
      <ContactFormTwo />
    </>
  );
}

function Section({ title, text }) {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-semibold text-primary">{title}</h2>
      <p className=" text-lg leading-relaxed whitespace-pre-line">
        {text}
      </p>
    </div>
  );
}
