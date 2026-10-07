"use client"

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Highlight from "@/components/ui/highlight";
import Title from "@/components/ui/title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import {
  FaPaintBrush,
  FaRegCalendarAlt,
  FaRocket,
  FaSearch,
  FaTools,
} from "react-icons/fa";
import SlideUp from "@/components/animations/slideUp";
import { FaArrowRight } from "react-icons/fa6";

const tabList = [
  {
    id: "development",
    tab_name: "Discovery & Planning",
    tab_icon: <FaSearch />,
    tab_content: "/images/resource/approach-image4-1.webp",
    heading: "Discovery & Planning",
    description: (
      <>
        At Web Founders USA, a dedicated and responsive Website Design and Development Company and <Link href="/service/digital-marketing" className="text-blue-900 hover:underline transition-all duration-300">Digital Marketing Agency</Link>, we first understand your business goals, challenges, and audience. Every business is different, so we ask insightful questions to develop custom web solutions that exactly meet your needs. We study your industry, analyze competitors, and discover what drives your customers. Whether you need SEO Optimization Services, the support of a Social Media Marketing Company, or Business Website Development, we provide a clear roadmap that is designed to save time, cost, and resources while maximizing results.
      </>
    ),
  },
  {
    id: "partnership",
    tab_name: "Proposal & Timeline",
    tab_icon: <FaRegCalendarAlt />,
    tab_content: "/images/resource/proposal-&-timeline-2.webp",
    heading: "Proposal & Timeline",
    description: (
      <>
      "Your business deserves solutions that work for you. From WordPress Development and CMS <Link href="/service/web-development" className="text-blue-900 hover:underline transition-all duration-300"> Website Development </Link> to Ecommerce Website Development and <Link href="/service/custom-website-design" className="text-blue-900 hover:underline transition-all duration-300"> Custom Website Design </Link>, we recommend options that fit your team, budget, and timeline. Each Website that we develop includes Responsive Web Design and mobile friendly Website Design, assuring smooth performance across devices. Clearly defined deliverables, realistic timelines, and transparency are all parts of our commitments, no surprises, just professional results.",
      </>
    ) 
  },
  {
    id: "decisions",
    tab_name: "Creative Process",
    tab_icon: <FaPaintBrush />,
    tab_content: "/images/resource/creative-process-1.webp",
    heading: "Creative Process",
    description:
      "Our manufacturing web design agency builds websites that look great and perform even better. With our expertise in Interactive Web Design, UI/UX Design Company solutions, and fast, secure hosting, your site stays reliable, protected, and optimized for every user. From logo design services and branding services to professional web development, we handle the creative and technical aspects. We use several tools to improve user experience and increase conversions. These include website speed optimization, WooCommerce development, and Shopify website development. ",
  },
  {
    id: "execution",
    tab_name: "Final Delivery",
    tab_icon: <FaRocket />,
    tab_content: "/images/resource/final-delivery-2.webp",
    heading: "Final Delivery",
    description:
      "We make your vision a reality. From designing services for a landing page and lead generation websites to the development of an online booking system, we make sure your site drives results. Our digital marketing agency, including Email Marketing Services and PPC Marketing Services, will complement your Website in generating leads and growing revenue. We test each feature and then train you on how to manage the updates. With Custom Web Forms, Payment Gateway Integration, and Website Security Services, your business is both effective and secure from day one.",
  },
  {
    id: "communication",
    tab_name: "Maintenance",
    tab_icon: <FaTools />,
    tab_content: "/service-deatil-images/website-maintenance.webp",
    heading: "Maintenance",
    description:
      "Unlike others, we stay by your side after launch. Our Website Maintenance and Support keeps your site secure, updated, and running smoothly. Thinking of Website Redesign Services, Mobile Friendly Website Design, or Multi Lingual Website Development? We adapt as your business grows. Performance monitoring and strategy adjustment to maximize results are achieved through website analytics services, website traffic analysis, and revenue optimization services. Honesty in communication, measurability in growth, and dependability in support, that's the promise of Web Founders USA.",
  },
];

const Approach = () => {
  const [tab, setTab] = useState("development");
  const [mobileOpen, setMobileOpen] = useState(null);

  const onTabChange = (value) => {
    setTab(value);
  };

  const handleAccordion = (id) => {
    setMobileOpen(mobileOpen === id ? null : id);
  };

  return (
    <section className="relative isolate pt-15 pb-5">
      <div className="relative z-10 mx-auto max-w-[1500px] px-[15px]">
        <SlideUp>
          <div className="flex flex-col items-center">
            <Button variant="secondary">Our Approach</Button>
            {/* <Title size={"5xl"} className="max-w-[872px] pt-6 text-center">
              {" "}
              <Highlight>Client-Centered</Highlight> Philosophy: Personalized Strategies for Your Success
            </Title> */}
          </div>
        </SlideUp>

        {/* Desktop Tabs - visible md+ */}
        <div className="pt-8 hidden md:block">
          <Tabs onValueChange={onTabChange} defaultValue="development">
            <TabsList className="mx-auto flex h-auto w-fit max-w-full flex-wrap justify-center gap-2 bg-transparent">
              {tabList.map(({ id, tab_icon, tab_name }) => (
                <TabsTrigger
                  key={id}
                  value={id}
                  className={
                    "h-16 w-fit shrink-0 items-center gap-3 overflow-hidden rounded-[10px] bg-[#F4F6FF] px-4 text-start whitespace-nowrap dark:bg-[#1c242b] xl:gap-5 xl:px-6 data-[state=active]:bg-red-700 data-[state=active]:text-white dark:data-[state=active]:bg-red-800"
                  }
                >
                  <span
                    aria-hidden="true"
                    className={`mr-3 text-xl xl:mr-0 ${id === tab ? "text-white" : "text-[#001F3F]"}`}
                  >
                    {tab_icon}
                  </span>
                  <span className="whitespace-nowrap text-lg font-semibold">
                    {tab_name}
                  </span>
                </TabsTrigger>

              ))}
            </TabsList>
            {tabList.map(({ id, tab_content, heading, description }) => (
              <TabsContent
                key={id}
                value={id}
                className="w-full pt-[360px] sm:pt-[190px] md:pt-[110px] lg:pt-7.5"
              >
                <SlideUp>
                  <div className="flex w-full flex-col justify-between rounded-[30px] bg-[#F4F6FF] py-7.5 dark:bg-[#1c242b] lg:flex-row">
                    <div className="flex flex-col justify-center pl-7.5 pr-7.5 lg:max-w-[550px] lg:pl-[86px] lg:pr-0 xl:max-w-[660px]">
                      <Title className="" size={"4xl"}>{heading}</Title>
                      <p className="pt-5 pb-7.5">{description}</p>
                      <Button asChild variant="outline">
                        <a href="#request-audit">
                          Discover more
                          <FaArrowRight aria-hidden="true" className="text-lg" />
                        </a>
                      </Button>
                    </div>
                    <div className="pr-7.5 pl-7.5 lg:pl-0 lg:max-w-[720px] w-full pt-7.5 lg:pt-0">
                      <Image
                        src={tab_content}
                        width={720}
                        height={482}
                        alt="bg"
                        style={{ width: "100%" }}
                        className="rounded-2.5xl"
                      />
                    </div>
                  </div>
                </SlideUp>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Mobile Accordion - visible only below md */}
        <div className="block md:hidden pt-8">
          {tabList.map(({ id, tab_icon, tab_name, heading, description, tab_content }) => (
            <div key={id} className="mb-4 rounded-xl overflow-hidden shadow-sm bg-[#F4F6FF] dark:bg-[#1c242b]">
              <button
                className={`flex w-full items-center p-4 focus:outline-none ${mobileOpen === id ? "bg-red-700 text-white" : ""}`}
                onClick={() => handleAccordion(id)}
                aria-expanded={mobileOpen === id}
                aria-controls={`accordion-content-${id}`}
              >
                <span
                  aria-hidden="true"
                  className={`mr-3 text-xl ${mobileOpen === id ? "text-white" : ""}`}
                >
                  {tab_icon}
                </span>
                <span
                  className={`flex-1 text-left text-lg font-semibold ${mobileOpen === id ? "text-white" : ""}`}
                >
                  {tab_name}
                </span>
                <svg className={`transform transition-transform duration-200 ${mobileOpen === id ? "rotate-180" : ""}`} width={18} height={18} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              {mobileOpen === id && (
                <div
                  id={`accordion-content-${id}`}
                  className="p-4 border-t"
                >
                  <Title size={"xl"}>{heading}</Title>
                  <p className="py-3">{description}</p>
                  <Image
                    src={tab_content}
                    width={540}
                    height={361}
                    alt="bg"
                    style={{ width: "100%" }}
                    className="rounded-2xl"
                  />
                  <Button asChild variant="outline" className="mt-4">
                    <a href="#request-audit">
                      Discover more
                      <FaArrowRight aria-hidden="true" className="text-sm" />
                    </a>
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
