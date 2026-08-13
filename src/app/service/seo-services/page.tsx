import type { Metadata } from "next";
import Link from "next/link";
import { getServiceById } from "@/data/services";
import { withEnUsHreflang } from "@/lib/metadata";

import ContactFormTwo from "@/components/sections/ContactFormTwo";
import ServiceHero from "./components/ServiceHero";
import ExpertsPage from "./components/ExpertsPage";
import OurPartners from "./components/OurPartners";
import LocalSEOServices from "./components/LocalSEOServices";
import AIDiscoveryChannels from "./components/AIDiscoveryChannels";
import SEOProcess from "./components/SEOProcess";
import SuccessStories from "./components/SuccessStories";
import WhyChoose from "./components/WhyChoose";
import SEOComparison from "./components/SEOComparison";
import Testimonials from "./components/Testimonials";
import ServiceFAQs from "./components/ServiceFAQs";
import { getServiceById as getSeoServiceById } from "./components/subservices";

const SERVICE_ID = "seo-services";
const seoServiceDetails = getSeoServiceById(SERVICE_ID);

const seoProcess = {
  title: "Our SEO Framework: Built for Consistent, Trackable Results",
  steps: [
    {
      number: "1",
      title: "Site + Market Audit",
      description: (
        <>
          Start here see it all laid out. Your spot right now, who else is
          playing, what's holding you back. Dive into real SEO work with{" "}
          <strong>technical SEO consulting team:</strong> can search engines
          reach your pages? Are they saving them properly. What about those web
          performance markers people talk about in{" "}
          <strong>seo optimization services</strong>? Map every chance to move
          forward, both immediate fixes and moves that pay off later. No
          assumptions needed. A solid starting line shows up in full view.
        </>
      ),
    },
    {
      number: "2",
      title: "SEO Roadmap & Playbooks",
      description: (
        <>
          After that comes the strategy shaped by our findings through{" "}
          <strong>seo consulting services</strong>. This plan lays out your
          content path while defining solid targets for{" "}
          <strong>on page SEO on-page services</strong>. Whether you run a tiny
          shop or a large team, everything remains structured and trackable
          without confusion.
        </>
      ),
    },
    {
      number: "3",
      title: "Execution Sprints",
      description: (
        <>
          Because speed keeps changing, steps stay small and quick in our{" "}
          <strong>Organic growth services</strong> approach. Testing happens
          quickly, updates come out quickly, performance is closely watched, and
          changes are made based on what works. Better topic matches and smarter
          links within pages appear through focused{" "}
          <strong>on page Digital visibility services</strong>, and the purpose
          lines up more closely. This makes natural search support more solid,
          which increases visibility where it matters most. Each result
          immediately affects the next move.
        </>
      ),
    },
    {
      number: "4",
      title: "Content That Ranks & Converts",
      description: (
        <>
          If visitors don't buy, rankings don't matter. We use{" "}
          <strong>seo copywriting services</strong> to make landing pages,
          service pages, and supporting articles that match what people are
          really looking for and get them to take action. We offer{" "}
          <a
            href="/service/seo-services/shopify-seo/"
            className="font-bold text-blue-800 hover:underline"
            rel="noopener noreferrer"
          >
            seo shopify services
          </a>{" "}
          for collections and products if you're on{" "}
          <a
            href="/service/seo-services/ecommerce-seo/"
            className="text-blue-800 hover:underline"
            rel="noopener noreferrer"
          >
            eCommerce
          </a>
          . If you're on CMS, we offer{" "}
          <a
            href="/service/seo-services/wordpress-seo/"
            className="font-bold text-blue-800 hover:underline"
            rel="noopener noreferrer"
          >
            seo wordpress services
          </a>{" "}
          that are built for clean structure and growth.
        </>
      ),
    },
    {
      number: "5",
      title: "Authority Building & Trust Signals",
      description: (
        <>
          Start solid, then comes respect with{" "}
          <strong>Organic growth services</strong>. With steady effort, real
          visibility grows backed by genuine references and clear expertise.
          Pages rise when they're seen as reliable, guided by consistent signals
          instead of shortcuts. Strength builds slowly, but it lasts, just like
          with <strong>best Digital visibility services</strong>.
        </>
      ),
    },
    {
      number: "6",
      title: "Reporting, Learnings & Growth Loops",
      description: (
        <>
          Month by month, signs point upward with{" "}
          <strong>seo optimization services</strong> visitors grow, interest
          builds, outcomes take shape. What delivers gains focus. What falls
          short loses steam without needing a push. Reports tell the story
          behind our <strong>seo consulting services</strong>: effort matches
          outcome. Progress creeps forward, not in leaps but steady tweaks,
          reviewed again and again.
        </>
      ),
    },
  ],
};

const seoWhyChoose = {
  title: "Why Choose Our SEO Services?",
  paragraphs: [
    <>
      Fixing errors lifts rankings fast with focused{" "}
      <strong>on page Digital visibility services</strong>. Spotting hidden
      problems on your site uncovers roadblocks holding things back. Start with
      small changes - they deliver speedier outcomes without delay. Pages that
      run smoother pull in more visitors naturally. Progress shows when layout
      makes sense plus words say exactly what matters. People stay longer if
      they find what they need. Over time, interest naturally turns into action
      through steady <strong>Organic growth services</strong>. No tricks, just
      hard work behind the scenes.
    </>,
  ],
  features: [
    { text: "SEO Experts Certified for Real Results", color: "bg-[#0052cc]" },
    { text: "Proven Success Backed by Data", color: "bg-[#ff0000]" },
    { text: "Clear Reports with Continuous Improvements", color: "bg-[#fbbc05]" },
    { text: "SEO Strategies Customized for Your Audience", color: "bg-[#0052cc]" },
    { text: "Personal SEO Manager for Dedicated Support", color: "bg-[#00875a]" },
    { text: "Reliable Partners Committed to Your Growth", color: "bg-[#ff0000]" },
  ],
};

const seoServiceFaqs = [
  {
    question: "Which industries do you serve?",
    answer: (
      <>
        We offer professional{" "}
        <a
          href="/service/seo-services/b2b-seo/"
          className="font-bold text-blue-800 hover:underline"
          rel="noopener noreferrer"
        >
          b2b seo services
        </a>{" "}
        and{" "}
        <a
          href="/service/seo-services/dental-seo/"
          className="font-bold text-blue-800 hover:underline"
          rel="noopener noreferrer"
        >
          dental seo services
        </a>{" "}
        for businesses in the{" "}
        <a
          href="/service/seo-services/healthcare-seo/"
          className="text-blue-800 hover:underline"
          rel="noopener noreferrer"
        >
          health
        </a>
        ,{" "}
        <a
          href="/service/seo-services/dental-seo/"
          className="text-blue-800 hover:underline"
          rel="noopener noreferrer"
        >
          dental
        </a>
        , law,{" "}
        <a
          href="/service/seo-services/b2b-seo/"
          className="text-blue-800 hover:underline"
          rel="noopener noreferrer"
        >
          B2B
        </a>
        ,{" "}
        <a
          href="/service/seo-services/ecommerce-seo/"
          className="text-blue-800 hover:underline"
          rel="noopener noreferrer"
        >
          eCommerce
        </a>
        ,{" "}
        <a
          href="/service/seo-services/shopify-seo/"
          className="text-blue-800 hover:underline"
          rel="noopener noreferrer"
        >
          shopify
        </a>
        ,{" "}
        <a
          href="/service/seo-services/wordpress-seo/"
          className="text-blue-800 hover:underline"
          rel="noopener noreferrer"
        >
          WordPress
        </a>
        ,{" "}
        <a
          href="/service/seo-services/hotel-seo/"
          className="text-blue-800 hover:underline"
          rel="noopener noreferrer"
        >
          hotels
        </a>
        ,{" "}
        <a
          href="/service/seo-services/automotive-seo/"
          className="text-blue-800 hover:underline"
          rel="noopener noreferrer"
        >
          automotive
        </a>
        ,{" "}
        <a
          href="/service/seo-services/construction-seo/"
          className="text-blue-800 hover:underline"
          rel="noopener noreferrer"
        >
          construction
        </a>
        , SaaS, and other areas.
      </>
    ),
  },
  {
    question: "How long before SEO shows results?",
    answer:
      "Most businesses get to see some kind of improvement in a few months, depending on how much competition there is and how healthy the website is.",
  },
  {
    question: "Do you offer services for small businesses?",
    answer: (
      <>
        That&apos;s right! Our <strong>small business seo services</strong> and{" "}
        <strong>affordable local seo service</strong> are all about providing
        you with effective solutions.
      </>
    ),
  },
  {
    question: "Can you optimize Shopify, WordPress, or WooCommerce websites?",
    answer: (
      <>
        Surely! Each platform&apos;s SEO services are personalized for Shopify,{" "}
        <a
          href="/service/seo-services/wordpress-seo/"
          className="text-blue-800 hover:underline"
          rel="noopener noreferrer"
        >
          WordPress
        </a>
        ,{" "}
        <a
          href="/service/seo-services/woocommerce-seo/"
          className="text-blue-800 hover:underline"
          rel="noopener noreferrer"
        >
          WooCommerce
        </a>
        , and{" "}
        <a
          href="/service/seo-services/bigcommerce-seo/"
          className="text-blue-800 hover:underline"
          rel="noopener noreferrer"
        >
          BigCommerce
        </a>
        .
      </>
    ),
  },
  {
    question: "Do you provide agency support?",
    answer:
      "Yes, the support that we offer to the agencies and partners comes in the form of white label SEO services, private label SEO services, and SEO consulting services for seamless collaboration with the agencies.",
  },
];

export function generateMetadata(): Metadata {
  const service = getServiceById(SERVICE_ID);
  const title =
    service?.seo?.title ||
    service?.title ||
    "SEO Services - Get Quick Ranking Just 30 Days!";
  const description =
    service?.seo?.description ||
    service?.desc ||
    "Expert SEO services by Web Founders USA. We offer technical audits and strategic solutions to grow your online presence and visibility.";

  return withEnUsHreflang({
    title,
    description,
    keywords: service?.seo?.keyword
      ? String(service.seo.keyword)
          .split(",")
          .map((k) => k.trim())
      : undefined,
    alternates: {
      canonical: "https://www.webfoundersusa.com/service/seo-services/",
    },
    openGraph: {
      title,
      description,
    },
  });
}

export default function SeoServicesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
	  "@context": "https://schema.org",
	  "@type": "Service",
	  "@id": "https://www.webfoundersusa.com/service/seo-services/#service",
	  "name": "Complete SEO Services",
	  "alternateName": "Full-Service Search Engine Optimization Agency",
	  "url": "https://www.webfoundersusa.com/service/seo-services/",
	  "description": "Web Founders USA provides complete SEO services including Technical SEO, On-Page SEO, Off-Page SEO, Local SEO, Enterprise SEO, E-commerce SEO, SEO Audits, Keyword Research, Content Optimization, Link Building, and Conversion Optimization for businesses of all sizes.",
	  "provider": {
	    "@type": "Organization",
	    "name": "Web Founders USA",
	    "url": "https://www.webfoundersusa.com/"
  },
  "serviceType": [
    "SEO Audit",
    "Technical SEO",
    "On-Page SEO",
    "Off-Page SEO",
    "Local SEO",
    "Enterprise SEO",
    "E-commerce SEO",
    "Keyword Research",
    "Competitor Analysis",
    "Content Optimization",
    "Link Building",
    "Backlink Strategy",
    "Conversion Rate Optimization",
    "Mobile SEO",
    "Core Web Vitals Optimization",
    "Schema Markup Implementation",
    "International SEO",
    "SEO Consulting"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "audience": {
    "@type": "Audience",
    "audienceType": "Small Businesses, Startups, Corporations, Enterprises and Online Brands"
	  },
	  "offers": {
	    "@type": "Offer",
	    "url": "https://www.webfoundersusa.com/service/seo-services/",
	    "priceCurrency": "USD",
	    "availability": "https://schema.org/InStock"
	  }
	}`,
        }}
      />
      <section className="text-black">
        <ServiceHero
          image={{
            src: "/service-testing/Local-SEO-Agency-LocalMighty.webp",
            alt: "SEO services hero background",
          }}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Service", href: "/service" },
            { label: "SEO Services" },
          ]}
          title="Professional SEO Services Built on Strategy, Trust & Results - Web Founders USA"
          description={
            <>
              At{" "}
              <Link className="font-semibold text-white hover:underline" href="/">
                Web Founders USA
              </Link>
              , every step we take is based on real results, not quick fixes. Our
              approach combines sharp <strong>SEO audit services</strong>.
              <br />
              <br />
              Imagine clearer online positioning, steady traffic growth, and a
              smarter site structure, all built without tricks. The work stays
              grounded in what lasts, whether it&apos;s fine-tuning product pages or
              guiding strategy through <b>Professional SEO solutions</b>.
              <br />
              <br />
              You can make real changes by working hard, being open about how you
              do things, and planning ahead. That&apos;s how presence grows, not all
              at once, but little by little.
            </>
          }
          actions={[
            { label: "Contact Us", href: "/contact-us" },
            { label: "About Us", href: "/about-us", variant: "secondary" },
          ]}
          form={{
            ariaLabel: "Contact Web Founders USA",
            fields: [
              {
                name: "firstName",
                placeholder: "First Name",
                autoComplete: "given-name",
                colSpan: 1,
              },
              {
                name: "lastName",
                placeholder: "Last Name",
                autoComplete: "family-name",
                colSpan: 1,
              },
              {
                name: "email",
                type: "email",
                placeholder: "Email Address",
                autoComplete: "email",
              },
              {
                name: "website",
                type: "url",
                placeholder: "Website URL",
                autoComplete: "url",
              },
              {
                name: "phone",
                type: "tel",
                placeholder: "Phone",
                autoComplete: "tel",
              },
              {
                as: "textarea",
                name: "message",
                placeholder: "Message",
              },
            ],
            submitLabel: "Send",
          }}
        />
        <ExpertsPage
          intro={{
            title: "SEO That Brings Nearby Customers",
            description: (
              <>
                Getting seen online does not require fancy tricks for small shops.
                The important thing is to appear when neighbors search in the area,
                which is exactly what small business Search Engine Optimization
                experts focus on. Simple steps work better than complicated plans.
                Real outcomes, stable rates, and no extended contracts are what you
                can expect from some suppliers.
              </>
            ),
          }}
          certifications={[
            {
              src: "/service-testing/GA-certified.webp",
              alt: "Google Analytics certification",
            },
            {
              src: "/service-testing/images-300x82.webp",
              alt: "SEO partner certification",
            },
            {
              src: "/service-testing/hubspot.webp",
              alt: "HubSpot certification",
            },
            {
              src: "/service-testing/google-digital-garage-1.webp",
              alt: "Google Digital Garage certification",
            },
          ]}
          relatedServices={{
            title: "Explore Related Services",
            description: "Dive deeper into specific offerings related to this service.",
            exploreLabel: "Explore service",
            items:
              seoServiceDetails?.sub_categories?.map((subService) => ({
                id: subService.id,
                title: subService.title,
                href: `/service/${seoServiceDetails.id}/${subService.id}`,
                descriptionHtml: String(
                  subService.desc || subService.introParagraphs?.[0] || "",
                ).replace(/\n/g, "<br/>"),
                icon:
                  ("icon" in subService ? subService.icon : undefined) ||
                  ("icon" in seoServiceDetails
                    ? seoServiceDetails.icon
                    : undefined),
                image: {
                  src: subService.hero?.image || seoServiceDetails.hero?.image,
                  alt: subService.title,
                },
              })) || [],
          }}
          results={{
            title: "Real SEO Results Not Just Rankings",
            description: (
              <>
                We do <strong>Search engine optimization services</strong> that get
                you real money, qualified leads, and steady traffic, not just pretty
                reports. We offer <strong>Professional SEO solutions</strong> to both
                small and large businesses that can grow with them. With our Organic
                growth services, we want to help your site grow over time. With our
                on-page SEO services, we want to make it easier to use. And with our
                technical Ranking improvement strategy, we want to make it better.
              </>
            ),
            stats: [
              {
                label: (
                  <>
                    Local Businesses<br />Supported
                  </>
                ),
                value: "400+",
              },
              {
                label: (
                  <>
                    Leads Generated<br />Through SEO
                  </>
                ),
                value: "1200K+",
              },
              {
                label: (
                  <>
                    Average Organic<br />Growth Delivered
                  </>
                ),
                value: "1,000%+",
              },
              {
                label: (
                  <>
                    Revenue Influenced<br />via SEO
                  </>
                ),
                value: "$200k+",
              },
            ],
          }}
        />
        <OurPartners />
        <LocalSEOServices
          eyebrow="The Foundation of Local Growth"
          title="Organic growth services Built to Win Rankings, Traffic, and Customers"
          services={[
            {
              id: "keyword-strategy",
              icon: {
                src: "/service-testing/keyword.webp",
                alt: "Keyword strategy",
              },
              title: "Keyword Strategy",
              description: (
                <>
                  We find the high-intent searches that your customers really use,
                  and then we put the terms that will bring in steady calls, visits,
                  and sales at the top of the list. This is great for{" "}
                  <strong>Professional SEO solutions</strong> and{" "}
                  <strong>Digital visibility services</strong> that want to grow.
                </>
              ),
            },
            {
              id: "full-seo-audit",
              icon: {
                src: "/service-testing/seoaudit.webp",
                alt: "SEO audit",
              },
              title: "Full SEO Audit",
              description: (
                <>
                  We do a thorough check of your site through{" "}
                  <Link
                    href="/service/seo-services/seo-audit/"
                    className="font-bold text-blue-800 hover:underline"
                  >
                    SEO audit services
                  </Link>{" "}
                  to find things that are keeping it from ranking, missed chances,
                  and gaps in your competitors&apos; sites. Then we turn that
                  information into an action plan that also helps with{" "}
                  <strong>enterprise Digital visibility services</strong>.
                </>
              ),
            },
            {
              id: "on-page-seo",
              icon: {
                src: "/service-testing/onpageseo.webp",
                alt: "On-page SEO optimization",
              },
              title: "On-Page SEO Optimization",
              description: (
                <>
                  With <strong>on page Organic growth services</strong> and{" "}
                  <strong>SEO copywriting services</strong>, we improve your pages by
                  giving them better structure, smarter headings, internal links,
                  and on-page signals. This helps Google understand your content and
                  get more users to convert.
                </>
              ),
            },
            {
              id: "technical-seo",
              icon: {
                src: "/service-testing/technicalseo.webp",
                alt: "Technical SEO fixes",
              },
              title: "Technical SEO Fixes",
              description: (
                <>
                  We fix crawl issues, indexing problems, site speed, Core Web
                  Vitals, and architecture so that your website works the way it
                  should. These are advanced{" "}
                  <strong>technical Digital visibility services</strong> backed by
                  detailed <strong>SEO audit services</strong> that make your site
                  easier to find.
                </>
              ),
            },
            {
              id: "authority-link-growth",
              icon: {
                src: "/service-testing/linkbuilding.webp",
                alt: "Authority and link growth",
              },
              title: "Authority & Link Growth",
              description: (
                <>
                  We get quality mentions and backlinks from relevant sources to
                  build trust, improve domain authority, and move competitive pages
                  up. This is all part of our{" "}
                  <strong>Professional SEO solutions</strong> approach and long-term{" "}
                  <strong>Organic growth services</strong> mindset, not spammy links.
                </>
              ),
            },
            {
              id: "content-copywriting",
              icon: {
                src: "/service-testing/contentmarketing.webp",
                alt: "Content and SEO copywriting",
              },
              title: "Content & SEO Copywriting",
              description: (
                <>
                  We create content that matches search intent and drives action:
                  service pages, location pages, blogs, and landing pages,
                  high-impact <strong>SEO copywriting services</strong> made for AI +
                  Google results.
                </>
              ),
            },
          ]}
        />
        <AIDiscoveryChannels
          eyebrow="AI Discovery Channels"
          title={
            <>
              Get discovered. Get recognized.
              <br className="hidden sm:block" /> Across every AI search.
            </>
          }
          platforms={[
            {
              src: "/service-testing/chatgpt-logo-black-700x350.webp",
              alt: "ChatGPT",
            },
            {
              src: "/service-testing/perplexity-logo-black-700x350.webp",
              alt: "Perplexity",
            },
            {
              src: "/service-testing/claude-logo-black-300x149.webp",
              alt: "Claude",
            },
            {
              src: "/service-testing/Bing_logo_dark_gray_RGB.1379355071-768x295.webp",
              alt: "Bing",
            },
            {
              src: "/service-testing/gemini-logo-black-300x149.webp",
              alt: "Gemini",
            },
            { src: "/service-testing/qwen.webp", alt: "Qwen" },
          ]}
        />
        <SEOProcess title={seoProcess.title} steps={seoProcess.steps} />
        <SuccessStories
          eyebrow="Success Stories That Speak Louder Than Words"
          title={
            <>
              How Smart Digital Visibility Services Drive
              <br className="hidden sm:block" /> Real Business Growth
            </>
          }
          stories={[
            {
              id: "cleaning-business",
              image: {
                src: "/service-testing/bg.webp",
                alt: "Cleaning business SEO growth results",
              },
              title: "Cleaning Business SEO Success Story",
              description:
                "6,750% Increase in Organic Leads and 12,300% Traffic Growth for a Cleaning Business",
            },
            {
              id: "law-firm",
              image: {
                src: "/service-testing/bg.webp",
                alt: "Law firm SEO growth results",
              },
              title: "Law Firm SEO Case Study",
              description:
                "1,200% Growth in Organic Traffic and 750% Lead Boost for a Law Firm",
            },
            {
              id: "dental-clinic",
              image: {
                src: "/service-testing/bg.webp",
                alt: "Dental clinic SEO growth results",
              },
              title: "Dental Clinic SEO Results",
              description:
                "350% Rise in Organic Traffic and 480% Increase in Leads for a Dental Clinic",
            },
            {
              id: "ecommerce",
              image: {
                src: "/service-testing/bg.webp",
                alt: "E-commerce SEO growth results",
              },
              title: "E-commerce SEO Performance Review",
              description:
                "800% Increase in Organic Traffic and 950% Growth in Leads for an E-commerce Store",
            },
          ]}
        />
        <WhyChoose
          title={seoWhyChoose.title}
          paragraphs={seoWhyChoose.paragraphs}
          features={seoWhyChoose.features}
        />
        <SEOComparison
          title="Traditional SEO vs Local SEO vs AI SEO (AIO)"
          description={
            <>
              A complete, future-ready search optimization framework powered by{" "}
              <strong>enterprise SEO services</strong>. Gone are the days when
              searching meant just clicking blue links on Google. Now people find
              companies by asking smart speakers, tapping maps, or getting instant
              replies from artificial intelligence. One path does not cover it
              anymore.
            </>
          }
          comparisons={[
            {
              id: "traditional-seo",
              title: "Traditional SEO",
              subtitle: "(Foundational Search Engine Optimization)",
              sections: [
                {
                  title: "What it is:",
                  items: [
                    "Helping people discover your website with clarity",
                    "Pages built with simple layouts, honest words, and relevant answers",
                    "Consistency and value build trust over time",
                    "Keyword identification shapes each page",
                    "Clear structure with headers, tags, and titles",
                    "Fast site speed and mobile responsiveness",
                    "Building credibility through genuine background and steady reliability",
                  ],
                },
                {
                  title: "Why it matters:",
                  items: [
                    "Generates consistent, long-term organic traffic",
                    "Builds credibility with users and search engines",
                    "Improves keyword rankings in competitive industries",
                    "Lowers customer acquisition cost over time",
                    "Creates a strong foundation for advanced SEO strategies",
                  ],
                },
              ],
            },
            {
              id: "local-seo",
              title: "Local SEO",
              subtitle: "(Location-Based Search & Map Visibility Optimization)",
              sections: [
                {
                  title: "What it is:",
                  items: [
                    "Optimizing web presence for local audiences",
                    "Enhancing visibility on Google Maps",
                    "Optimizing Google Business Profile",
                    "Using location-specific keywords",
                    "Managing citations with uniform NAP (Name, Address, Phone)",
                    "Leveraging customer feedback and trust indicators",
                    "Encouraging calls, directions, bookings, and walk-ins",
                  ],
                },
                {
                  title: "Why it matters:",
                  items: [
                    "Increases visibility in “near me” and local-intent searches",
                    "Connects businesses with nearby ready-to-buy customers",
                    "Strengthens trust through reviews and local authority",
                    "Converts map impressions into real-world revenue",
                    "Establishes brand dominance in specific geographic areas",
                  ],
                },
              ],
            },
            {
              id: "ai-seo",
              title: "AI SEO / AIO",
              subtitle: "(Answer Engine Optimization & Generative Search Visibility)",
              sections: [
                {
                  title: "What it is:",
                  items: [
                    "Optimizing content for AI-powered search and smart assistants",
                    "Shaping information so algorithms understand it better",
                    "Creating clear, structured, natural content for bots",
                    "Focusing on meaning and context over keywords",
                    "Answering questions quickly, sometimes without clicks",
                    "Grouping related topics to show depth",
                  ],
                },
                {
                  title: "Why it matters:",
                  items: [
                    "AI answers replace traditional search clicks",
                    "Brands are discovered in conversations, not just search results",
                    "Captures users earlier in the decision-making journey",
                    "Future-proofs SEO strategy against algorithm and platform changes",
                    "Positions the brand as an authority trusted by AI systems",
                  ],
                },
              ],
            },
          ]}
        />
        <Testimonials />
        <ContactFormTwo />
        <div className="h-10"></div>
        <div className="h-20"></div>
        <ServiceFAQs faqs={seoServiceFaqs} />
      </section>
    </main>
  );
}
