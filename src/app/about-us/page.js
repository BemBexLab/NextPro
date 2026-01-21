import React from 'react'
import FaqTwo from '@/components/sections/faqs/faqTwo'
import Mission from '@/components/sections/mission'
import StoryFive from '@/components/sections/ourStories/storyFive'
import PageTitle from '@/components/sections/pageTitle'
import SubscribeTwo from '@/components/sections/subscribes/subscribeTwo'
import TeamGrid from '@/components/sections/teams/teamGrid'
import TestimonialTwo from '@/components/sections/testimonials/testimonialTwo'
import ContactFormTwo from "@/components/sections/ContactFormTwo";

export const metadata = {
    title: "ABOUT US | Web Founders USA ",
    description: "Learn about Web Founders USA, a results-driven digital marketing agency helping businesses grow online with proven strategies.",

    keywords: [
    "About us",
  ],

    alternates: {
    canonical: "https://www.webfoundersusa.com/about-us",
  },
};

const About = () => {
  return (
    <main>
        {/* <PageTitle PageTitle pageName="About Us"
  breadcrumbLink="About Us"
  breadcrumbCurrent=""
  bgImage="/images/servicebanner/website-creatives-and-images.jpg"/> */}
        <StoryFive counter={false}/>
        <Mission/>
        {/* <TeamGrid/> */}
        {/* <TestimonialTwo/> */}
        {/* <FaqTwo/> */}
        <SubscribeTwo/>
        <ContactFormTwo />
    </main>
  )
}

export default About