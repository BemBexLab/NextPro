import RecentProjectsCarousel, {
  type RecentProject,
} from "./RecentProjectsCarousel";

const PROJECTS_API_URL = "https://projects-api-bembexlab.vercel.app/api/images/";
const PROJECTS_API_BASE = "https://projects-api-bembexlab.vercel.app";

type ApiProject = {
  id: string;
  category?: string;
  alt?: string;
  cover_image_url?: string;
  images?: { image_url?: string }[];
};

async function getRecentProjects(): Promise<RecentProject[]> {
  try {
    const response = await fetch(PROJECTS_API_URL, {
      next: { revalidate: 900 },
    });

    if (!response.ok) return [];

    const data: { projects?: ApiProject[] } = await response.json();

    return (data.projects ?? [])
      .filter((project) => project.category?.toLowerCase() === "website development & design")
      .map((project) => {
        const imagePath = project.cover_image_url || project.images?.[0]?.image_url;

        if (!imagePath) return null;

        return {
          id: project.id,
          title: project.alt || "Website project",
          imageUrl: imagePath.startsWith("http")
            ? imagePath
            : new URL(imagePath, PROJECTS_API_BASE).toString(),
        };
      })
      .filter((project): project is RecentProject => project !== null)
      .slice(0, 12);
  } catch {
    return [];
  }
}

const RecentProjects = async () => {
  const projects = await getRecentProjects();

  return (
    <section
      aria-labelledby="recent-projects-heading"
      className="bg-[linear-gradient(180deg,#ffffff_0%,#f7f9fc_100%)] px-4 py-8 text-[#101820] sm:px-6 sm:py-10 lg:px-10 lg:py-14"
    >
      <div className="mx-auto max-w-screen-2xl">
        <header className="text-center">
          <span className="inline-flex rounded-full bg-[#e90c14] px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-wide text-white sm:text-xs">
            Recent Projects
          </span>
          <h2
            id="recent-projects-heading"
            className="mt-2 text-2xl font-black uppercase leading-tight tracking-[-0.04em] sm:text-3xl lg:text-4xl"
          >
            Websites We&apos;ve Built
          </h2>
          <p className="mx-auto mt-2 max-w-3xl text-xs leading-relaxed text-slate-600 sm:text-sm lg:text-base">
            A look at some of our recent website designs and development projects.
          </p>
        </header>

        <RecentProjectsCarousel projects={projects} />
      </div>
    </section>
  );
};

export default RecentProjects;
