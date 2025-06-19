"use client";
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
      "We start by understanding your goals. You tell us what you need & we ask a few smart questions and help shape the right plan.",
  },
  {
    id: "partnership",
    tab_name: "Proposal & Timeline",
    tab_icon: icon_2,
    tab_content: "/images/resource/proposal-&-timeline-2.jpg",
    heading: "Proposal & Timeline",
    description:
      "Once we're aligned, we send a detailed plan with pricing, timeline, and next steps no surprises.",
  },
  {
    id: "decisions",
    tab_name: "Creative Process",
    tab_icon: icon_3,
    tab_content: "/images/resource/creative-process-1.jpg",
    heading: "Creative Process",
    description:
      "We get to work! You’ll see progress, share feedback, and stay updated along the way. It’s a back-and-forth flow until we get it just right.",
  },
  {
    id: "execution",
    tab_name: "Final Delivery",
    tab_icon: icon_4,
    tab_content: "/images/resource/final-delivery-2.jpg",
    heading: "Final Delivery",
    description:
      "After your final approval, we’ll deliver all website files and assets fully ready to go live and launch smoothly.",
  },
  {
    id: "communication",
    tab_name: "Maintenance",
    tab_icon: icon_5,
    tab_content: "/images/resource/website-maintainence.jpg",
    heading: "Maintenance",
    description:
      "Need help after the project wraps? We're still here for updates, questions, or anything else down the road.",
  },
];

const Approach = () => {
  const [tab, setTab] = useState("development");
  const onTabChange = (value) => {
    setTab(value);
  };

  return (
    <section className=" py-15">
      <div className="max-w-[1350px] mx-auto px-[15px]">
        <SlideUp>
          <div className="flex flex-col items-center">
            <Button variant="secondary">Our Approach</Button>
            <Title size={"5xl"} className="max-w-[872px] pt-6 text-center">
              {" "}
              <Highlight>Client-Centered</Highlight> Philosophy: Tailoring
              Strategies for Your Success
            </Title>
          </div>
        </SlideUp>
        <div className="lg:pt-20 pt-8">
          <Tabs onValueChange={onTabChange} defaultValue="development">
            <TabsList className="bg-transparent justify-between lg:flex-nowrap flex-wrap xl:gap-5 gap-2 w-full">
              {tabList.map(({ id, tab_icon, tab_name }) => {
                return (
                  <TabsTrigger
                    key={id}
                    value={id}
                    className={
                      "bg-[#F4F6FF] dark:bg-[#1c242b] rounded-[10px] lg:basis-[20%] md:basis-[25%] sm:basis-[33%] basis-1/2 grow xl:px-6 px-2 xl:py-4 py-2 whitespace-normal text-start xl:gap-5 gap-1 data-[state=active]:bg-primary dark:data-[state=active]:bg-primary data-[state=active]:text-white overflow-hidden"
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
                );
              })}
            </TabsList>
            {tabList.map(({ id, tab_content, heading, description }) => {
              return (
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
                          <Link href={"/contact-us"}> Discover more </Link>
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
              );
            })}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Approach;
