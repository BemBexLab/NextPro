import React from 'react'
import HeroSix from '@/components/sections/heroes/heroSix'
import Study from '@/components/sections/study'

import ServiceSeven from '@/components/sections/services/serviceSeven'
import StoryFour from '@/components/sections/ourStories/storyFour'
import ProvideSix from '@/components/sections/provides/provideSix'
import ChooseUs from '@/components/sections/chooseUs'
import TestimonialThree from '@/components/sections/testimonials/testimonialThree'
import SubscribeTwo from '@/components/sections/subscribes/subscribeTwo'
import BlogOne from '@/components/sections/blogs/blogOne'
import ContactFormTwo from '@/components/sections/ContactFormTwo'
import IntegrationsLogo from '@/components/sections/IntegrationsLogo'

export const metadata = {
  title: "NextPro | Home-6",
  description: "NextPro is a modern Next.js and Tailwind CSS Template there features General Marketing, Social Media Marketing, AI in Marketing, Paid Advertising, Video Marketing, Analytics and Reporting, Industry news & Trends, E-commerce Marketing",
};

const HomeThree = () => {
  return (
    <main>
      <HeroSix/>
      <ServiceSeven/>
      <StoryFour/>
      <ProvideSix/>
      <ChooseUs/>
      <IntegrationsLogo/>
      
      <Study/>
      <TestimonialThree/>
      <SubscribeTwo/>
      <BlogOne/>
      <ContactFormTwo/>
    </main>
  )
}

export default HomeThree