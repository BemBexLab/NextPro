"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoCall } from "react-icons/io5";
import { Button } from "@/components/ui/button";


// Inline SVG Icons (Lucide-style)
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const HeartHandshakeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5" />
    <path d="M12 8.5v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7" />
    <path d="M12 8.5V3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5.5" />
  </svg>
);

const TargetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const BarChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="20" x2="12" y2="10" />
    <line x1="18" y1="20" x2="18" y2="4" />
    <line x1="6" y1="20" x2="6" y2="16" />
  </svg>
);

const RefreshIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
    <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
    <path d="M16 16h5v5" />
  </svg>
);

// Social Platform Icons
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.23 1.664-4.781 4.919-4.92 1.266-.058 1.645-.07 4.849-.07zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);

const strategySteps = [
  {
    id: "audit",
    tab_name: "Audit & Competitive Analysis",
    icon: <SearchIcon />,
    heading: "Audit & Competitive Analysis",
    description:
      "We start by getting to know your position. Our social media marketing agency does research on your social media profiles, their performance in the past, the audience insights, the competitors, and the trends in the industry. This provides us with a clear view of strengths, weaknesses, and opportunities. Rather than assuming what works, we make your strategy based on real data.",
  },
  {
    id: "content",
    tab_name: "Content Strategy & Planning",
    icon: <CalendarIcon />,
    heading: "Content Strategy & Planning",
    description:
      "Posting randomly doesn't grow businesses or achieve audience attention. We make a strategic content calendar that incorporates educational posts, brand storytelling, sales messaging, and share-worthy content. It all aligns with your brand voice and supports your broader objectives, from engagement to Conversion Rate Optimization.",
  },
  {
    id: "engagement",
    tab_name: "Engagement & Community Building",
    icon: <HeartHandshakeIcon />,
    heading: "Engagement & Community Building",
    description:
      "People don't follow brands; people follow values. We spark conversations, respond promptly, engage your audience, and have cunning interactions that just feel real. We leverage polls, contests, giveaways, and relevant content for community building that will support your brand long term.",
  },
  {
    id: "ads",
    tab_name: "Paid Advertising & Audience Targeting",
    icon: <TargetIcon />,
    heading: "Paid Advertising & Audience Targeting",
    description:
      "Organic reach is powerful, but smart advertising is in a class of its own. Our social media marketing agency experts will create high-performing ad campaigns on Meta, TikTok, LinkedIn, and more. We test creatives, refine audiences, and optimize bids to drive conversions, not just clicks.",
  },
  {
    id: "reporting",
    tab_name: "Performance Monitoring",
    icon: <BarChartIcon />,
    heading: "Performance Monitoring",
    description:
      "Every post, ad, and strategy is tracked and measured. Web Founders USA provides easy-to-understand reports that show you what's working and where you need improvement. With our approach of continuous optimization, your campaigns are never static.",
  },
  {
    id: "optimization",
    tab_name: "Growth Focused Optimization",
    icon: <RefreshIcon />,
    heading: "Growth Focused Optimization",
    description:
      "From improving ad funnels to refining content angles, we continually optimize your strategy. Whether adjusting messaging or matching campaigns with a new Landing Page Design Services layout, we persuade consistent growth backed by intelligent decision making.",
  },
];

const faqs = [
  {
    question: "What makes Web Founders USA different as a Social Media Marketing Company?",
    answer:
      "As a complete service social media marketing agency, we blend strategy, creativity, data, and technical expertise from our web design and development company to drive measurable results, not vanity metrics.",
  },
  {
    question: "Can social media marketing help with lead generation?",
    answer:
      "Of course, we align your campaigns with your funnels, whether that be a Landing Page Design Services set up or a Lead Generation Website, so your traffic actually becomes real leads.",
  },
  {
    question: "Do you manage ads, as well as organic content?",
    answer:
      "Yes, Web Founders USA takes care of everything, from paid advertising to content creation, audience targeting to continuous optimization for maximum conversions.",
  },
  {
    question: "Will I get regular performance reports?",
    answer:
      "Yes, our social media marketing agency provides transparent, understandable reports on growth, engagement, and conversion, showing what we will improve next.",
  },
  {
    question: "Do you offer social media marketing services across various industries?",
    answer:
      "Of course, our web design and development company, along with the SMM team, develops strategies that will work for your industry, audience, and goals, whether it's a startup or an established brand.",
  },
];

const SocialMediaMarketingPage = () => {
  const [activeTab, setActiveTab] = useState("audit");
  const [mobileOpenStep, setMobileOpenStep] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const handleStepAccordion = (id) => {
    setMobileOpenStep(mobileOpenStep === id ? null : id);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#072d7f] to-[#A7C7E7] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[#FFB199] font-semibold mb-4 text-sm md:text-base flex items-center justify-center gap-2">
            <FacebookIcon />
            <InstagramIcon />
            <LinkedInIcon />
            <TikTokIcon />
            Social Media Marketing
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-3xl mx-auto">
            <span className="bg-gradient-to-r from-[#ffb199] to-white text-transparent bg-clip-text">
              Real Growth, Real Engagement,
            </span>
            <br />
            <span className="bg-gradient-to-r from-white to-[#ffb199] text-transparent bg-clip-text">
              Real Customers
            </span>
          </h1>
          <p className="mt-6 md:mt-8 max-w-3xl mx-auto text-white/90 text-base md:text-lg">
            At Web Founders USA, our reliable social media marketing agency transforms social media into a profit-making machine for your company.
          </p>
          <div className="mt-8 flex items-center justify-center gap-5">
            <a
              href="tel:+14704707520"
              className="flex items-center gap-3 group"
              aria-label="Call us"
            >
              <div className="rounded-full bg-primary border-primary w-14 h-14 flex items-center justify-center animate-shake-pause group-hover:bg-primary/80 transition">
                <div className="text-white flex items-center justify-center">
                  <IoCall size={30} />
                </div>
              </div>
              <span className="text-base font-semibold text-white group-hover:underline">
                +1 (470) 470-7520
              </span>
            </a>

            <Button asChild size="xl">
              <Link className="text-foreground" href={'/contact-us'}>
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Paragraph */}
      <section className="py-12 md:py-16 px-4 max-w-6xl mx-auto">
  <div className="flex flex-col md:flex-row items-center gap-8">
  {/* Text on the left — equal column */}
  <div className="flex-1 text-base md:text-lg leading-relaxed text-gray-700 space-y-4">
    <p>
      The current customers are not just looking through the profiles; they are going to and fro, comparing, and making quick decisions. Consequently, your social presence needs more than just posts; it needs a proper social media marketing strategy, creativity, and guidance.
    </p>
    <p>
      As the best Social Media Marketing Consultant, we develop campaigns that engage audiences, build trust, and convert followers into buyers. Our team deeply understands your audience—whether you’re a growing brand or a corporate giant—and tailors strategies for small business marketing or enterprise-scale impact.
    </p>
    <p>
      Every campaign aligns with your industry, goals, and customer behavior. With Web Founders USA, you gain a partner who tracks trends, analyzes performance, and ensures every post, ad, and message drives conversions—whether through brand awareness, sales, or lead generation via a Lead Generation Website or targeted Landing Page Design Services.
    </p>
  </div>

  {/* Image on the right — equal column, square shape */}
  <div className="flex-1 flex justify-center">
    <div className="w-full" style={{ aspectRatio: '1 / 1' }}>
      <Image
        src="/service-deatil-images/social-media-marketing.jpg"
        alt="Social media marketing illustration"
        width={300}
        height={300}
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  </div>
</div>
</section>

      {/* Strategy Section */}
      <section className="py-12 md:py-20 bg-[#F4F6FF]">
        <div className="max-w-[1350px] mx-auto px-[15px]">
          <div className="flex flex-col items-center mb-12">
            <span className="px-4 py-2 bg-white text-[#072d7f] font-semibold rounded-full text-sm">
              Our Strategy
            </span>
            <h2 className="text-3xl md:text-4xl font-bold max-w-[800px] pt-4 text-center">
              <span className="bg-gradient-to-r from-[#072d7f] to-[#A7C7E7] text-transparent bg-clip-text">
                Strategic Social Media
              </span>{" "}
              Approach
            </h2>
          </div>

          {/* Desktop Tabs */}
          <div className="hidden md:block">
            <div className="flex flex-wrap justify-between gap-2 w-full mb-10">
              {strategySteps.map(({ id, icon, tab_name }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-start gap-2 px-3 py-4 rounded-[10px] basis-[30%] sm:basis-[22%] md:basis-[15%] grow h-auto whitespace-normal text-start font-semibold text-sm md:text-base transition-colors ${
                    activeTab === id
                      ? "bg-[#072d7f] text-white"
                      : "bg-white text-[#072d7f]"
                  }`}
                >
                  <span className="text-inherit">{icon}</span>
                  {tab_name}
                </button>
              ))}
            </div>

            {strategySteps.map(({ id, heading, description }) => (
              activeTab === id && (
                <div key={id} className="pt-6 md:pt-10">
                  <div className="bg-white py-8 px-6 rounded-[30px] max-w-4xl mx-auto shadow-sm">
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-5">
                      {heading}
                    </h3>
                    <p className="text-gray-700 text-base md:text-lg text-center leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              )
            ))}
          </div>

          {/* Mobile Accordion */}
          <div className="block md:hidden pt-8">
            {strategySteps.map(({ id, icon, tab_name, heading, description }) => (
              <div
                key={id}
                className="mb-4 rounded-xl overflow-hidden shadow-sm bg-white border border-gray-200"
              >
                <button
                  className="flex items-start w-full p-5 text-left focus:outline-none"
                  onClick={() => handleStepAccordion(id)}
                  aria-expanded={mobileOpenStep === id}
                >
                  <span className="text-[#072d7f] mr-3 mt-1">{icon}</span>
                  <span className="font-semibold text-lg flex-1">{tab_name}</span>
                  <svg
                    className={`transform transition-transform duration-200 ml-2 mt-1 ${
                      mobileOpenStep === id ? "rotate-180" : ""
                    }`}
                    width={18}
                    height={18}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileOpenStep === id && (
                  <div className="p-5 pt-0 border-t border-gray-200">
                    <h3 className="text-xl font-bold mb-2">{heading}</h3>
                    <p className="text-gray-700 py-3">{description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Trusted By Section */}
{/* Trusted By Section */}
<section className="py-12 md:py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-10">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
        Trusted By Industry Leaders
      </h2>
      <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
        We proudly partner with brands and platforms that demand excellence, transparency, and results.
      </p>
    </div>

    {/* Logo Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 items-center justify-center">
      {[
        { src: "/brands/images__2_-removebg-preview.png", alt: "Trustpilot", width: 40, height: 40 },
        { src: "/brands/images-removebg-preview 2.png", alt: "Google", width: 40, height: 40 },
        { src: "/brands/images-removebg-preview.png", alt: "Facebook", width: 40, height: 40 },
        { src: "/brands/Instagram-Logo-removebg-preview.png", alt: "Instagram", width: 40, height: 40 },
        { src: "/brands/images__1_-removebg-preview.png", alt: "LinkedIn", width: 40, height: 40 },
        { src: "/brands/649281618d19a80286e15ade_clutch-1-removebg-preview.png", alt: "Clutch", width: 40, height: 40 },
      ].map(({ src, alt, width, height }) => (
        <div
          key={alt}
          className="flex justify-center transition-all duration-300"
        >
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="max-w-full h-auto object-contain"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  </div>
</section>

      {/* FAQs Section */}
      <section className="py-16 md:py-24 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                className="flex justify-between items-center w-full p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                onClick={() => toggleFaq(index)}
                aria-expanded={openFaq === index}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <svg
                  className={`transform transition-transform duration-200 ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                  width={20}
                  height={20}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === index && (
                <div className="p-5 pt-3 border-t border-gray-200 bg-white">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/contact-us"
            className="inline-block px-6 py-3 border-2 border-[#072d7f] text-[#072d7f] font-semibold rounded-lg hover:bg-[#072d7f] hover:text-white transition-colors"
          >
            Start Your Social Media Journey
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaMarketingPage;