import React from 'react'
import FaqTwo from '@/components/sections/faqs/faqTwo'
import Mission from '@/components/sections/mission'
import StoryFive from '@/components/sections/ourStories/storyFive'
import PageTitle from '@/components/sections/pageTitle'
import SubscribeTwo from '@/components/sections/subscribes/subscribeTwo'
import TeamGrid from '@/components/sections/teams/teamGrid'
import TestimonialTwo from '@/components/sections/testimonials/testimonialTwo'

export const metadata = {
    title: "WebFoundersUSA",
    description: "WebFoundersUSA is a leading digital agency specializing in web development, digital marketing, SEO, branding, and e-commerce solutions. We help businesses grow online with custom websites, effective marketing strategies, and measurable results.",
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
        <TestimonialTwo/>
        {/* <FaqTwo/> */}
        <SubscribeTwo/>
    </main>
  )
}

export default About