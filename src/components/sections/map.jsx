"use client";
import React from "react";
import { Button } from "../ui/button";
import Title from "../ui/title";
import Highlight from "../ui/highlight";
import team_icon from "../../../public/images/shapes/dynamic-team-icon.png";
import skills_icon from "../../../public/images/shapes/skills-icon.png";
import content_icon from "../../../public/images/shapes/content-writing-icon.png";
import Image from "next/image";
import SlideUp from "../animations/slideUp";
import SocialIcons from "../ui/socialIcons";

const ContactMap = () => {
  return (
    <section className="lg:py-15 py-9">
      <div className="container">
        <div className="flex flex-col items-center">
          <Button variant="secondary">Contact Us</Button>
          <Title size={"5xl"} className="max-w-[832px] pt-6 text-center">
            Discover <Highlight>Our Location</Highlight> and Plan Your Visit
          </Title>
        </div>
        <div className="relative z-[1] lg:pt-12.5 pt-7.5">
          {/* Gray BG with rounded corners */}
          <div className="after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-gray after:rounded-[30px] after:z-[-1] relative flex items-center justify-center min-h-[300px] px-3 lg:px-0">
            <div className="flex lg:flex-row flex-col gap-8 justify-center lg:items-center items-start max-w-[1320px] w-full py-12.5">
              <Card
                icon={team_icon}
                title={"Address"}
                isIcon={false}
                desc={"1014 Garner Rd SW, Lilburn,GA 30047, USA"}
              />
              <Card
                icon={skills_icon}
                title={"Contact"}
                isIcon={false}
                desc={`
                  <p> <span class='font-semibold'>Email:</span> <a href="mailto:info@webfoundersusa.com" class='relative hover-underline after:h-[1px] after:bg-muted'> info@webfoundersusa.com</a> </p>
                  <p> <span class='font-semibold'>Call us:</span> <a href="tel:+14702052274" class='relative hover-underline after:h-[1px] after:bg-muted'> (470) 205-2274</a> </p>
                `}
              />
              <Card
                icon={content_icon}
                title={"Social"}
                desc={<SocialIcons prantBorder={"text-2xl mt-[22px]"} />}
                isSocalIcon={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;

// --------------- Card
const Card = ({ id, icon, title, desc, isSocalIcon }) => {
  return (
    <SlideUp>
      <div className="flex items-start gap-7 pt-7 lg:pt-0 mb-8 last:mb-0">
        <div className="xl:min-w-[75px] min-w-16 max-w-16 xl:min-h-[75px] min-h-16 max-h-16 p-3 xl:p-0 shadow-[0px_4px_20px_0px_rgba(0,31,63,0.1019607843)] bg-white rounded-lg flex justify-center items-center">
          <Image src={icon} alt="icon" />
        </div>
        <div className="lg:max-w-[450px]">
          <Title size={"2xl"}>{title}</Title>
          {isSocalIcon ? (
            <div>{desc}</div>
          ) : (
            <p
              className="max-w-[311px]"
              dangerouslySetInnerHTML={{ __html: desc }}
            />
          )}
        </div>
      </div>
    </SlideUp>
  );
};
