"use client"

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Title from "@/components/ui/title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import {
  FaPaintBrush,
  FaRegCalendarAlt,
  FaRocket,
  FaSearch,
  FaTools,
} from "react-icons/fa";
import Reveal from "./Reveal";
import { FaArrowRight } from "react-icons/fa6";
import Popup from "./Popup";

const tabList = [
  {
    id: "development",
    tab_name: "Project Discovery",
    tab_icon: <FaSearch />,
    tab_content: "/images/resource/approach-image4-1.webp",
    heading: "Project Discovery",
    description: "We start by learning about your business, audience, and goals for the website. Together, we define what the site needs to do, which content it should include, and how visitors should move through it.",
  },
  {
    id: "partnership",
    tab_name: "Structure & Planning",
    tab_icon: <FaRegCalendarAlt />,
    tab_content: "/images/resource/proposal-&-timeline-2.webp",
    heading: "Structure & Planning",
    description: "We map out the pages, content, and features your website needs, then agree on the scope and timeline. This gives the design and development work a clear direction from the start.",
  },
  {
    id: "decisions",
    tab_name: "Visual Design",
    tab_icon: <FaPaintBrush />,
    tab_content: "/images/resource/creative-process-1.webp",
    heading: "Visual Design",
    description: "We create a consistent visual direction for your pages, with clear navigation, readable layouts, and thoughtful details. Designs are tailored to your brand and prepared to work smoothly across screen sizes.",
  },
  {
    id: "execution",
    tab_name: "Development & Testing",
    tab_icon: <FaRocket />,
    tab_content: "/images/resource/final-delivery-2.webp",
    heading: "Development & Testing",
    description: "We build the approved designs into a responsive website, connect the agreed features and forms, and test the pages on common devices and browsers before launch.",
  },
  {
    id: "communication",
    tab_name: "Launch & Handoff",
    tab_icon: <FaTools />,
    tab_content: "/images/resource/final-delivery-2.webp",
    heading: "Launch & Handoff",
    description: "We prepare your finished website for launch, walk you through the completed pages and features, and provide the access and guidance you need to manage your new site.",
  },
];

const Approach = () => {
  const [tab, setTab] = useState("development");
  const [mobileOpen, setMobileOpen] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const onTabChange = (value) => {
    setTab(value);
  };

  const handleAccordion = (id) => {
    setMobileOpen(mobileOpen === id ? null : id);
  };

  return (
    <section className="relative isolate py-10 sm:py-12 lg:py-15">
      <div className="relative z-10 mx-auto max-w-[1500px] px-[15px]">
        <Reveal>
          <div className="flex flex-col items-center">
            <Button variant="secondary">Our Approach</Button>
            {/* <Title size={"5xl"} className="max-w-[872px] pt-6 text-center">
              {" "}
              <Highlight>Client-Centered</Highlight> Philosophy: Personalized Strategies for Your Success
            </Title> */}
          </div>
        </Reveal>

        {/* Tabs are shown on wide screens; the accordion stays easier to use on tablets. */}
        <div className="hidden pt-8 min-[1338px]:block">
          <Tabs onValueChange={onTabChange} defaultValue="development">
            <TabsList className="mx-auto flex h-auto w-full max-w-6xl justify-between gap-2 bg-transparent p-0">
              {tabList.map(({ id, tab_icon, tab_name }) => (
                <TabsTrigger
                  key={id}
                  value={id}
                  className={
                    "flex min-h-16 w-max shrink-0 items-center justify-center gap-3 rounded-[10px] bg-[#F4F6FF] px-4 py-3 text-left whitespace-nowrap dark:bg-[#1c242b] data-[state=active]:bg-red-700 data-[state=active]:text-white dark:data-[state=active]:bg-red-800"
                  }
                >
                  <span
                    aria-hidden="true"
                    className={`shrink-0 text-lg ${id === tab ? "text-white" : "text-[#001F3F]"}`}
                  >
                    {tab_icon}
                  </span>
                  <span className="w-max text-sm font-semibold leading-snug whitespace-nowrap sm:text-base">
                    {tab_name}
                  </span>
                </TabsTrigger>

              ))}
            </TabsList>
            {tabList.map(({ id, tab_content, heading, description }) => (
              <TabsContent
                key={id}
                value={id}
                className="w-full pt-6 lg:pt-8"
              >
                <Reveal>
                  <div className="grid w-full grid-cols-1 gap-7 rounded-[24px] bg-[#F4F6FF] p-5 dark:bg-[#1c242b] sm:rounded-[30px] sm:p-7.5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-8 lg:p-10 xl:gap-12 xl:p-12">
                    <div className="flex min-w-0 flex-col justify-center">
                      <Title className="" size={"4xl"}>{heading}</Title>
                      <p className="break-words pt-5 pb-7.5">{description}</p>
                      <Button type="button" variant="outline" onClick={() => setIsPopupOpen(true)}>
                        Discover more
                        <FaArrowRight aria-hidden="true" className="text-lg" />
                      </Button>
                    </div>
                    <div className="w-full min-w-0">
                      <Image
                        src={tab_content}
                        width={720}
                        height={482}
                        alt="bg"
                        className="h-auto w-full rounded-2xl object-cover sm:rounded-2.5xl"
                      />
                    </div>
                  </div>
                </Reveal>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Accordion is used on phones and tablets. */}
        <div className="block pt-8 min-[1238px]:hidden">
          {tabList.map(({ id, tab_icon, tab_name, heading, description, tab_content }) => (
            <div key={id} className="mb-4 rounded-xl overflow-hidden shadow-sm bg-[#F4F6FF] dark:bg-[#1c242b]">
              <button
                type="button"
                className={`flex w-full min-w-0 items-center gap-2 p-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-inset ${mobileOpen === id ? "bg-red-700 text-white" : ""}`}
                onClick={() => handleAccordion(id)}
                aria-expanded={mobileOpen === id}
                aria-controls={`accordion-content-${id}`}
              >
                <span
                  aria-hidden="true"
                  className={`shrink-0 text-xl ${mobileOpen === id ? "text-white" : ""}`}
                >
                  {tab_icon}
                </span>
                <span
                  className={`min-w-0 flex-1 text-left text-base font-semibold leading-snug sm:text-lg ${mobileOpen === id ? "text-white" : ""}`}
                >
                  {tab_name}
                </span>
                <svg className={`transform transition-transform duration-200 ${mobileOpen === id ? "rotate-180" : ""}`} width={18} height={18} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              {mobileOpen === id && (
                <div
                  id={`accordion-content-${id}`}
                  className="min-w-0 border-t p-4 sm:p-6"
                >
                  <Title size={"xl"}>{heading}</Title>
                  <p className="break-words py-3">{description}</p>
                  <Image
                    src={tab_content}
                    width={540}
                    height={361}
                    alt="bg"
                    className="h-auto w-full rounded-2xl object-cover"
                  />
                  <Button type="button" variant="outline" className="mt-4" onClick={() => setIsPopupOpen(true)}>
                    Discover more
                    <FaArrowRight aria-hidden="true" className="text-sm" />
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {isPopupOpen && <Popup onClose={() => setIsPopupOpen(false)} />}
    </section>
  );
};

export default Approach;
