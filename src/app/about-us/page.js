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
  description: "NextPro is a modern Next.js and Tailwind CSS Template there features General Marketing, Social Media Marketing, AI in Marketing, Paid Advertising, Video Marketing, Analytics and Reporting, Industry news & Trends, E-commerce Marketing",
};

const About = () => {
  return (
    <main>
        <PageTitle pageName={"About"} breadcrumbLink={"About us"}/>
        <StoryFive counter={false}/>
        <Mission/>
        <TeamGrid/>
        <TestimonialTwo/>
        {/* <FaqTwo/> */}
        <SubscribeTwo/>
    </main>
  )
}

export default About