import {
  ChartNoAxesColumnIncreasing,
  Handshake,
  MapPin,
  RefreshCw,
  SearchCheck,
  Wrench,
} from "lucide-react";

const processSteps = [
  {
    title: "1. Understanding Your Business",
    description:
      "We learn about your business, services, target locations, and goals to build the right local SEO strategy.",
    Icon: Handshake,
  },
  {
    title: "2. SEO Audit & Keyword Research",
    description:
      "We analyze your website, research local keywords, and find opportunities to improve your search visibility.",
    Icon: SearchCheck,
  },
  {
    title: "3. Local SEO Strategy",
    description:
      "We create a tailored plan based on your business goals, target audience, and local competition.",
    Icon: MapPin,
  },
  {
    title: "4. Optimization & Implementation",
    description:
      "We optimize your website, Google Business Profile, local listings, and content to strengthen your local presence.",
    Icon: Wrench,
  },
  {
    title: "5. Tracking & Reporting",
    description:
      "We monitor keyword rankings, website traffic, and other important results to measure progress.",
    Icon: ChartNoAxesColumnIncreasing,
  },
  {
    title: "6. Ongoing Improvement",
    description:
      "We review performance regularly and adjust our strategy to help your business grow in local search results.",
    Icon: RefreshCw,
  },
];

const OurLocalSEO = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-[92%] max-w-7xl">
        <div className="max-w-4xl">
          <div aria-hidden="true" className="mb-5 h-1 w-12 bg-[#c8102e]" />
          <h2 className="text-3xl font-bold leading-tight tracking-[-0.035em] text-slate-950 sm:text-4xl lg:text-5xl">
            Our Local SEO Marketing Process
          </h2>

          <div className="mt-6 grid gap-4 text-base leading-7 tracking-[0.005em] text-slate-600 sm:mt-8 sm:gap-5 sm:text-lg sm:leading-8 md:grid-cols-2 md:gap-10">
            <p>
              We start by understanding your business, researching local
              keywords, and identifying opportunities to improve your visibility
              in Google Search and Maps.
            </p>
            <p className="md:border-l md:border-blue-200 md:pl-8">
              Then, we optimize your website and Google Business Profile, track
              performance, and refine our strategy to help attract more local
              customers.
            </p>
          </div>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-x-10 gap-y-9 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-12">
          {processSteps.map(({ title, description, Icon }) => {
            const [number, ...titleWords] = title.split(" ");

            return (
              <li key={title} className="border-t border-slate-200 pt-5 sm:pt-6">
                <div className="flex items-center gap-3">
                  <Icon
                    aria-hidden="true"
                    className="h-[18px] w-[18px] text-[#0b63b8]"
                    strokeWidth={1.8}
                  />
                  <span className="text-sm font-bold tracking-[0.04em] text-[#c8102e]">
                    {number}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-snug tracking-[-0.015em] text-[#072d7f] sm:text-xl">
                  {titleWords.join(" ")}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                  {description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default OurLocalSEO;
