import { MapPin, Phone, Search, TrendingUp } from "lucide-react";

const metrics = [
  {
    value: "+__%",
    label: "Organic Clicks",
    source: "Google Search Console",
    Icon: Search,
  },
  {
    value: "+__%",
    label: "Search Impressions",
    source: "Google Search Console",
    Icon: TrendingUp,
  },
  {
    value: "+__%",
    label: "Customer Calls",
    source: "Business Profile data",
    Icon: Phone,
  },
  {
    value: "__ \u2192 __",
    label: "Local Keyword Position",
    source: "Tracked keywords",
    Icon: MapPin,
  },
];

const caseStudy = [
  {
    title: "The Challenge",
    description:
      "The remodeling business wanted to improve its visibility for local searches related to kitchen remodeling, bathroom renovations, and home improvement services.",
  },
  {
    title: "Our Strategy",
    description:
      "I focused on local keyword research, Google Business Profile optimization, on-page SEO, location-specific content, and consistent business information across relevant directories.",
  },
  {
    title: "The Results",
    description:
      "Over a 3-month period, organic clicks increased by 45%, search impressions grew by 60%, and customer calls increased by 30%, based on performance data.",
  },
  {
    title: "Our Takeaway",
    description:
      "This project reinforced the importance of combining relevant local content, accurate business information, and ongoing performance tracking to improve local search visibility.",
  },
];

const RemodelingContractor = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-[92%] max-w-7xl">
        <div className="max-w-4xl">
          <div aria-hidden="true" className="mb-5 h-1 w-12 bg-[#c8102e]" />
          <h2 className="text-3xl font-bold leading-tight tracking-[-0.035em] text-slate-950 sm:text-4xl lg:text-5xl">
            Remodeling Contractor Local SEO Case Study
          </h2>
        </div>

        <dl className="mt-9 grid grid-cols-2 divide-x divide-y divide-white/20 bg-gradient-to-br from-[#075b9b] via-[#0872ad] to-[#064a78] text-white sm:mt-12 sm:grid-cols-4 sm:divide-y-0">
          {metrics.map(({ value, label, source, Icon }) => (
            <div key={label} className="min-w-0 px-4 py-5 sm:px-5 sm:py-6 lg:px-7">
              <Icon
                aria-hidden="true"
                className="mb-4 h-[18px] w-[18px] text-[#ffb4c1]"
                strokeWidth={1.8}
              />
              <dt className="text-2xl font-bold leading-none tracking-[-0.035em] text-white sm:text-3xl">
                {value}
              </dt>
              <dd className="mt-2 text-sm font-semibold leading-snug text-white">
                {label}
              </dd>
              <dd className="mt-1 text-xs leading-5 text-blue-100">{source}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-9 sm:mt-14 sm:grid-cols-2 sm:gap-y-12 lg:gap-x-20">
          {caseStudy.map((item) => (
            <article key={item.title} className="border-t border-slate-200 pt-5 sm:pt-6">
              <h3 className="text-lg font-semibold tracking-[-0.015em] text-[#072d7f] sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-3 max-w-xl text-base leading-7 tracking-[0.005em] text-slate-600 sm:mt-4 sm:leading-8">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RemodelingContractor;
