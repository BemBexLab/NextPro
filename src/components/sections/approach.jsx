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
      "Web Founders USA begins by understanding your goals and challenges. You share your needs, and we ask insightful questions to shape the right plan. As a digital marketing agency and website design and development company, we prioritize listening. Every business faces unique problems, and your custom web solutions must align with your specific situation. We delve into your industry, analyze competitors, and identify what drives your customers to purchase. Whether you require SEO optimization, social media marketing support, or business website development, we outline a clear path that saves you time and money.",
  },
  {
    id: "partnership",
    tab_name: "Proposal & Timeline",
    tab_icon: icon_2,
    tab_content: "/images/resource/proposal-&-timeline-2.jpg",
    heading: "Proposal & Timeline",
    description:
      "Some clients need WordPress development to manage content updates themselves, while others require CMS website development for larger teams. We recommend solutions that make sense for you, not just those that are most profitable for us. Responsive web design is no longer optional; your site must function seamlessly on phones, tablets, and computers. As a professional web development company, we work within your actual budget and timeline. Need eCommerce website development? Want a custom website design? Looking for expertise in UI/UX design? We provide clear deliverables and timelines with no surprises.",
  },
  {
    id: "decisions",
    tab_name: "Creative Process",
    tab_icon: icon_3,
    tab_content: "/images/resource/creative-process-1.jpg",
    heading: "Creative Process",
    description:
      "Our web design agency creates something you’ll be proud to showcase to customers. We focus on both aesthetics and performance. Secure web hosting keeps your site online and safe, while website maintenance and support address issues before they impact your sales. Website speed optimization ensures pages load in under three seconds, as slow sites can hurt conversions. Need Shopify or WooCommerce development? Interested in local SEO services? We handle the technical aspects. Professional logo design, branding services, and business card design elevate your brand’s credibility.",
  },
  {
    id: "execution",
    tab_name: "Final Delivery",
    tab_icon: icon_4,
    tab_content: "/images/resource/final-delivery-2.jpg",
    heading: "Final Delivery",
    description:
      "This is where your vision comes to life. We guide you through every step to ensure your comfort. Need logo design or landing page services? Looking for help with online reputation management? We’ve got you covered. Our lead generation website captures contacts that convert. We also provide email marketing, PPC marketing, and Google Ads management services. Custom web forms and online booking system development simplify customer contact. We test everything, train you to manage updates, and make launch day exciting.",
  },
  {
    id: "communication",
    tab_name: "Maintenance",
    tab_icon: icon_5,
    tab_content: "/images/resource/website-maintainence.jpg",
    heading: "Maintenance",
    description:
      "Most companies disappear after launch, but we remain committed. Markets evolve, competitors adapt, and your business grows. We adjust your strategy as needed. You’ll receive regular reports in plain English that clarify what works and what requires attention. Our website maintenance and support keep your site running smoothly, with WordPress support services managing updates and website security services preventing threats. Need website redesign services? Want mobile-friendly updates? Looking to add features like a job portal or real estate website development? We’re here for you honest communication, real results, no nonsense.",
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
