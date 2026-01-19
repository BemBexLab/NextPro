"use client"

import React, { useState } from "react";
import { Button } from "../ui/button";
import Highlight from "../ui/highlight";
import Title from "../ui/title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import icon_1 from "../../../public/images/shapes/approach-icon4-1.png";
import icon_2 from "../../../public/images/shapes/approach-icon4-2.png";
import icon_3 from "../../../public/images/shapes/approach-icon4-3.png";
import icon_4 from "../../../public/images/shapes/approach-icon4-4.png";
import icon_5 from "../../../public/images/shapes/approach-icon4-5.png";
import SlideUp from "../animations/slideUp";

const tabList = [
  {
    id: "development",
    tab_name: "Discovery & Planning",
    tab_icon: icon_1,
    tab_content: "/images/resource/approach-image4-1.jpg",
    heading: "Discovery & Planning",
    description:
      "At Web Founders USA, a dedicated and responsive Website Design and Development Company and Digital Marketing Agency, we first understand your business goals, challenges, and audience. Every business is different, so we ask insightful questions to develop custom web solutions that exactly meet your needs. We study your industry, analyze competitors, and discover what drives your customers. Whether you need SEO Optimization Services, the support of a Social Media Marketing Company, or Business Website Development, we provide a clear roadmap that is designed to save time, cost, and resources while maximizing results.",
  },
  {
    id: "partnership",
    tab_name: "Proposal & Timeline",
    tab_icon: icon_2,
    tab_content: "/images/resource/proposal-&-timeline-2.jpg",
    heading: "Proposal & Timeline",
    description:
      "Your business deserves solutions that work for you. From WordPress Development and CMS Website Development to Ecommerce Website Development and Custom Website Design, we recommend options that fit your team, budget, and timeline. Each Website that we develop includes Responsive Web Design and mobile friendly Website Design, assuring smooth performance across devices. Clearly defined deliverables, realistic timelines, and transparency are all parts of our commitments, no surprises, just professional results.",
  },
  {
    id: "decisions",
    tab_name: "Creative Process",
    tab_icon: icon_3,
    tab_content: "/images/resource/creative-process-1.jpg",
    heading: "Creative Process",
    description:
      "Our manufacturing web design agency builds websites that look great and perform even better. With our expertise in Interactive Web Design, UI/UX Design Company solutions, and fast, secure hosting, your site stays reliable, protected, and optimized for every user. From logo design services and branding services to professional web development, we handle the creative and technical aspects. We use several tools to improve user experience and increase conversions. These include website speed optimization, WooCommerce development, and Shopify website development. ",
  },
  {
    id: "execution",
    tab_name: "Final Delivery",
    tab_icon: icon_4,
    tab_content: "/images/resource/final-delivery-2.jpg",
    heading: "Final Delivery",
    description:
      "We make your vision a reality. From designing services for a landing page and lead generation websites to the development of an online booking system, we make sure your site drives results. Our digital marketing agency, including Email Marketing Services and PPC Marketing Services, will complement your Website in generating leads and growing revenue. We test each feature and then train you on how to manage the updates. With Custom Web Forms, Payment Gateway Integration, and Website Security Services, your business is both effective and secure from day one.",
  },
  {
    id: "communication",
    tab_name: "Maintenance",
    tab_icon: icon_5,
    tab_content: "/images/resource/website-maintainence.jpg",
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
    <section className=" py-15">
      <div className="max-w-[1350px] mx-auto px-[15px]">
        <SlideUp>
          <div className="flex flex-col items-center">
            <Button variant="secondary">Our Approach</Button>
            <Title size={"5xl"} className="max-w-[872px] pt-6 text-center">
              {" "}
              <Highlight>Client-Centered</Highlight> Philosophy: Personalized Strategies for Your Success
            </Title>
          </div>
        </SlideUp>

        {/* Desktop Tabs - visible md+ */}
        <div className="lg:pt-20 pt-8 hidden md:block">
          <Tabs onValueChange={onTabChange} defaultValue="development">
            <TabsList className="bg-transparent justify-between lg:flex-nowrap flex-wrap xl:gap-5 gap-2 w-full">
              {tabList.map(({ id, tab_icon, tab_name }) => (
                <TabsTrigger
  key={id}
  value={id}
  className={
    "bg-[#F4F6FF] dark:bg-[#1c242b] rounded-[10px] lg:basis-[20%] md:basis-[25%] sm:basis-[33%] basis-1/2 grow xl:px-6 px-2 h-16 whitespace-normal text-start xl:gap-5 gap-1 data-[state=active]:bg-primary dark:data-[state=active]:bg-primary data-[state=active]:text-white overflow-hidden flex items-center"
  }
>
  <Image
    src={tab_icon}
    alt="icon"
    className={`${
      id === tab ? "brightness-0 invert" : ""
    } mr-3 xl:mr-0`}
  />
  <span className="max-w-[119px] font-semibold text-lg">
    {tab_name}
  </span>
</TabsTrigger>

              ))}
            </TabsList>
            {tabList.map(({ id, tab_content, heading, description }) => (
              <TabsContent
                key={id}
                value={id}
                className={"lg:pt-7.5 md:pt-[110px] sm:pt-[190px] pt-[360px]"}
              >
                <SlideUp>
                  <div className="flex lg:flex-row flex-col justify-between bg-[#F4F6FF] dark:bg-[#1c242b] py-7.5 rounded-[30px]">
                    <div className="lg:pl-[86px] pl-7.5 pr-7.5 lg:pr-0 xl:max-w-[660px] lg:max-w-[550px] ">
                      <Title size={"4xl"}>{heading}</Title>
                      <p className="pt-5 pb-7.5">{description}</p>
                      <Button asChild variant="outline">
                        <Link href={"/about-us"}> Discover more </Link>
                      </Button>
                    </div>
                    <div className="pr-7.5 pl-7.5 lg:pl-0 lg:max-w-[540px] w-full pt-7.5 lg:pt-0">
                      <Image
                        src={tab_content}
                        width={540}
                        height={361}
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
                className="flex items-center w-full p-4 focus:outline-none"
                onClick={() => handleAccordion(id)}
                aria-expanded={mobileOpen === id}
                aria-controls={`accordion-content-${id}`}
              >
                <Image src={tab_icon} alt="icon" className="mr-3" />
                <span className="font-semibold text-lg flex-1 text-left">{tab_name}</span>
                <svg className={`transform transition-transform duration-200 ${mobileOpen === id ? "rotate-180" : ""}`} width={18} height={18} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
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
                    <Link href={"/about-us"}> Discover more </Link>
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
