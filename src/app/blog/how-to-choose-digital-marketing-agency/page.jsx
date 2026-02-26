import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "How to Choose a Digital Marketing Agency (Complete 2026 Guide)",
  description:
    "A step-by-step guide to choosing the right digital marketing agency in 2026. Learn how to evaluate portfolios, pricing, red flags, and contracts.",
};

// Reusing the same Icon from the previous page for consistency
const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-black mr-2 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    ></path>
  </svg>
);

// New Icon for "Warning/Red Flag" sections to add visual variety
const WarningIcon = () => (
  <svg
    className="w-6 h-6 text-red-600 mr-3 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    ></path>
  </svg>
);

// Component for the Step Cards to keep code clean
const StepCard = ({ number, title, children }) => (
  <div className="mb-12 border-l-4 border-black pl-6 md:pl-8 py-2">
    <div className="flex items-baseline mb-4">
      <span className="bg-black text-white text-xs font-bold px-2 py-1 rounded mr-3 uppercase tracking-wider">
        Step {number}
      </span>
      <h2 className="text-2xl font-bold text-black">{title}</h2>
    </div>
    <div className="text-gray-800 leading-relaxed prose prose-lg max-w-none">
      {children}
    </div>
  </div>
);

// Component for List Items within steps
const InfoList = ({ items, type = "default" }) => (
  <ul
    className={`space-y-3 my-6 ${type === "grid" ? "grid md:grid-cols-2 gap-4" : ""}`}
  >
    {items.map((item, idx) => (
      <li
        key={idx}
        className={`flex items-start ${type === "grid" ? "bg-gray-50 p-4 rounded-lg border border-gray-100" : ""}`}
      >
        {type !== "grid" && <CheckIcon />}
        <span
          className={
            type === "grid" ? "text-gray-800 font-medium" : "text-gray-700"
          }
        >
          {item}
        </span>
      </li>
    ))}
  </ul>
);

export default function HowToChooseAgency() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        {/* Header Section */}
        <header className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Left Side: Text Content (Swapped order for variety or keep same? Keeping same as requested: Image Left, Text Right) */}
            <div className="w-full md:w-1/2 flex-shrink-0 order-2 md:order-1">
              <div className="relative w-full aspect-[7/8] rounded-lg overflow-hidden bg-gray-100 shadow-sm">
                {/* Placeholder image - replace with actual path */}
                <Image
                  src="/images/blog-images/digital-marketing.webp"
                  alt="Digital Marketing Strategy Meeting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>
            </div>

            {/* Right Side: Text Content */}
            <div className="w-full md:w-1/2 text-center md:text-left order-1 md:order-2">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-black">
                How to Choose a Digital Marketing Agency (Complete 2026 Guide)
              </h1>
              <div className="prose prose-lg text-gray-800">
                <p className="mb-4 font-medium text-lg">
                  Choosing the right digital marketing agency can directly
                  impact your revenue, brand visibility, and long-term growth.
                  The wrong choice can waste months of budget with little to no
                  results.
                </p>
                <p className="mb-4">
                  If you're researching how to choose a digital marketing
                  agency, this guide will walk you step-by-step through the
                  exact evaluation process—from defining goals to reviewing
                  contracts.
                </p>

                <div className="bg-gray-50 border-l-4 border-blue-600 p-4 my-6 rounded-r-lg">
                  <h2 className="font-bold text-black mb-2">
                    Why Choosing the Right Agency Matters
                  </h2>
                  <p className="text-sm text-gray-700 mb-2">
                    A professional agency should help you:
                  </p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Increase qualified traffic</li>
                    <li>• Improve conversion rates</li>
                    <li>• Generate measurable ROI</li>
                    <li>• Build long-term brand authority</li>
                  </ul>
                  <p className="text-sm text-gray-700 mt-2 italic">
                    But not every agency delivers real results. That’s why you
                    need a structured evaluation process, not just a good sales
                    pitch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <hr className="border-gray-200 my-12" />

        {/* Steps Section */}
        <section className="mb-16">
          <StepCard number="1" title="Define Your Goals First">
            <p>
              Before contacting any agency, clarify your internal needs to avoid
              mismatched expectations:
            </p>
            <InfoList
              items={[
                <>
                  Do you need{" "}
                  <Link
                    href="/service/seo-services"
                    className="text-blue-600 underline"
                  >
                    SEO
                  </Link>
                  ,{" "}
                  <Link
                    href="/service/pay-per-click"
                    className="text-blue-600 underline"
                  >
                    PPC
                  </Link>
                  ,{" "}
                  <Link
                    href="/service/social-media-marketing"
                    className="text-blue-600 underline"
                  >
                    social media
                  </Link>
                  ,{" "}
                  <Link
                    href="/service/content-writing"
                    className="text-blue-600 underline"
                  >
                    content marketing
                  </Link>
                  , or full-service?
                </>,
                "Are you focused on leads, sales, brand awareness, or traffic?",
                "What is your monthly marketing budget?",
                "What KPIs matter most (CPL, ROAS, traffic growth, rankings)?",
              ]}
            />
          </StepCard>

          <StepCard number="2" title="Understand Different Types of Agencies">
            <p>
              Not all agencies are the same. Choose based on your specific
              needs:
            </p>
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                <h3 className="font-bold text-lg mb-2">1. SEO Agency</h3>
                <p className="text-gray-700 text-sm">
                  Focuses on organic rankings and long-term traffic growth.
                </p>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                <h3 className="font-bold text-lg mb-2">2. PPC Agency</h3>
                <p className="text-gray-700 text-sm">
                  Manages paid ads like Google Ads and social media ads.
                </p>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                <h3 className="font-bold text-lg mb-2">
                  3. Social Media Agency
                </h3>
                <p className="text-gray-700 text-sm">
                  Handles content creation, engagement, and paid campaigns on
                  social platforms.
                </p>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                <h3 className="font-bold text-lg mb-2">
                  4. Full-Service Agency
                </h3>
                <p className="text-gray-700 text-sm">
                  Offers SEO, PPC, social media, content,{" "}
                  <Link
                    href="/service/email-marketing"
                    className="text-blue-600 underline"
                  >
                    email
                  </Link>
                  , and strategy under one roof.
                </p>
              </div>
            </div>
            <p className="italic text-gray-600 border-l-2 border-gray-300 pl-4">
              Choose specialization over “we do everything” claims if your need
              is specific.
            </p>
          </StepCard>

          <StepCard number="3" title="Check Experience & Portfolio">
            <p>
              A good{" "}
              <Link
                href="/service/digital-marketing"
                className="text-blue-600 underline"
              >
                digital marketing agency
              </Link>{" "}
              should have case studies with real numbers, industry experience,
              clear before-and-after results, client testimonials, and proven
              process documentation.
            </p>

            <div className="my-6 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3 flex items-center">
                <span className="bg-black text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">
                  !
                </span>
                What to Look for in Case Studies
              </h3>
              <p className="mb-4 text-gray-700">
                Instead of vague claims like “We increased traffic,” look for:
              </p>
              <InfoList
                items={[
                  "Specific % growth metrics",
                  "Revenue impact (not just clicks)",
                  "Clear timeline of results",
                  "Detailed strategy explanation",
                ]}
              />
              <p className="text-red-600 font-medium mt-4">
                If results are unclear or generic, that’s a red flag.
              </p>
            </div>
          </StepCard>

          <StepCard number="4" title="Ask the Right Questions">
            <p>
              Here are critical questions to ask during your discovery call:
            </p>
            <InfoList
              items={[
                "How do you measure success?",
                "What KPIs will you track?",
                "Who will work on my account?",
                "How often will I receive reports?",
                "What tools do you use?",
                "Have you worked in my industry?",
                "What happens if targets are not met?",
              ]}
            />
            <p className="mt-4 text-gray-700">
              If answers are unclear or overly sales-driven, reconsider.
            </p>
          </StepCard>

          <StepCard number="5" title="Evaluate Their Process">
            <p>
              Professional agencies follow a structured workflow. If an agency
              jumps straight to execution without research, that's a warning
              sign.
            </p>
            <div className="flex flex-wrap gap-2 my-6">
              {[
                "Audit & Research",
                "Strategy Development",
                "Implementation",
                "Testing & Optimization",
                "Reporting & Scaling",
              ].map((step, i) => (
                <span
                  key={i}
                  className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium border border-gray-200"
                >
                  {step}
                </span>
              ))}
            </div>
          </StepCard>

          <StepCard number="6" title="Understand Pricing & Contracts">
            <h3 className="font-bold text-xl mb-4">
              How Much Does a Digital Marketing Agency Charge?
            </h3>
            <p className="mb-4">
              Pricing varies based on scope of services, market competition,
              agency expertise, and ad spend (if PPC).
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-bold mb-2">Common Pricing Models</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <CheckIcon /> Monthly retainer
                  </li>
                  <li className="flex items-center">
                    <CheckIcon /> Project-based
                  </li>
                  <li className="flex items-center">
                    <CheckIcon /> Performance-based
                  </li>
                  <li className="flex items-center">
                    <CheckIcon /> Hourly consulting
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">Contract Essentials</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <CheckIcon /> Contract length
                  </li>
                  <li className="flex items-center">
                    <CheckIcon /> Termination clause
                  </li>
                  <li className="flex items-center">
                    <CheckIcon /> Asset ownership
                  </li>
                  <li className="flex items-center">
                    <CheckIcon /> Reporting frequency
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 border border-red-100 p-4 rounded-lg">
              <h5 className="font-bold text-red-800 mb-2">Be Cautious Of:</h5>
              <ul className="text-red-700 text-sm space-y-1">
                <li>• Extremely cheap offers</li>
                <li>• Guaranteed #1 rankings</li>
                <li>• No written contract</li>
              </ul>
            </div>
          </StepCard>

          <StepCard number="7" title="Identify Red Flags">
            <p className="mb-4">
              Avoid agencies that exhibit these behaviors. A trustworthy agency
              focuses on sustainable growth, not shortcuts.
            </p>
            <div className="space-y-3">
              {[
                "Guarantee specific rankings",
                "Refuse to show case studies",
                "Lack transparent reporting",
                "Use black-hat SEO tactics",
                "Avoid performance discussions",
                "Offer unrealistic timelines",
              ].map((flag, idx) => (
                <div
                  key={idx}
                  className="flex items-start p-3 bg-gray-50 rounded border border-gray-100"
                >
                  <WarningIcon />
                  <span className="text-gray-800 font-medium">{flag}</span>
                </div>
              ))}
            </div>
          </StepCard>

          <StepCard number="8" title="Review Communication & Transparency">
            <p>
              Strong communication is critical. If communication feels
              disorganized before signing, it will likely be worse after.
            </p>
            <InfoList
              items={[
                "Clear onboarding process",
                "Dedicated account manager",
                "Transparent reporting dashboard",
                "Regular performance meetings",
              ]}
            />
          </StepCard>

          <StepCard number="9" title="Check Reviews & Reputation">
            <p>
              Before making a final decision, validate their claims externally:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
              {[
                "Google Reviews",
                "LinkedIn Presence",
                "Client Testimonials",
                "References",
              ].map((item, i) => (
                <div
                  key={i}
                  className="text-center p-4 bg-black text-white rounded-lg font-bold"
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="text-gray-700 italic">
              Real client feedback provides insight beyond marketing claims.
            </p>
          </StepCard>

          <StepCard number="10" title="Use a Final Decision Checklist">
            <p className="mb-6">
              Before signing, confirm the following align with your
              expectations:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border-2 border-black">
              <ul className="space-y-3">
                {[
                  "Goals clearly defined",
                  "KPIs agreed upon",
                  "Pricing transparent",
                  "Contract reviewed",
                  "Reporting structure set",
                  "Communication expectations clear",
                  "Case studies verified",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-lg font-medium text-gray-800"
                  >
                    <svg
                      className="w-6 h-6 text-green-600 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-bold text-black">
                If everything aligns, you can move forward confidently.
              </p>
            </div>
          </StepCard>
        </section>

        {/* Why Hire a Digital Marketing Agency? */}
        <section className="mb-16 bg-white border border-gray-200 rounded-lg p-8 md:p-12 shadow-sm">
          <h2 className="text-3xl font-bold mb-6">
            Why Hire a Digital Marketing Agency?
          </h2>
          <p className="mb-4 text-gray-700">
            Because it helps businesses build a strong online presence and reach
            their target audience effectively. A professional agency has experts
            in SEO, social media marketing, content creation, and paid ads to
            grow your brand faster. It also saves your time and allows you to
            focus on your core business operations. With proper strategy, tools,
            and data analysis, an agency improves your marketing performance and
            increases ROI.
          </p>
        </section>

        {/* Bonus Section */}
        <section className="mb-16 bg-[#072D7F] text-white p-8 md:p-12 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6">
            Bonus: Should You Choose Agency vs Freelancer?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-300">
                Choose a Freelancer If:
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckIcon />
                  <span className="text-gray-300">Budget is small</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  <span className="text-gray-300">Scope is limited</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  <span className="text-gray-300">
                    You need one specific service
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-300">
                Choose an Agency If:
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckIcon />
                  <span className="text-gray-300">
                    You need multiple services
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  <span className="text-gray-300">You want scalability</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  <span className="text-gray-300">
                    You require a team approach
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  <span className="text-gray-300">
                    You need structured reporting
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="border-gray-200 my-16" />

        {/* Related Content / CTA Section */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">More Relevant Resources</h2>
          <p className="text-gray-600 mb-8">
            Ready to see who made our top list for 2026?
          </p>

          <Link
            href="/blog/top-usa-digital-marketing-agencies-in-2026"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-[#072D7F] rounded-lg hover:bg-transparent hover:text-[#072D7F] border-2 border-[#072D7F] transition-colors duration-200 shadow-lg"
          >
            View Top 5 U.S.A Digital Marketing Agencies in 2026
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </Link>
        </section>
      </main>
    </div>
  );
}
