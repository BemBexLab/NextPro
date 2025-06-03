import React from 'react'
import BlogTwo from '@/components/sections/blogs/blogTwo'
import ContactForm from '@/components/sections/contactForm'
import FaqTwo from '@/components/sections/faqs/faqTwo'
import HeroThree from '@/components/sections/heroes/heroThree'
import StoryThree from '@/components/sections/ourStories/storyThree'
import PlatformRating from '@/components/sections/platformRating'
import PriceThree from '@/components/sections/pricing/priceThree'
import ProvideTwo from '@/components/sections/provides/provideTwo'
import ServiceThree from '@/components/sections/services/servicesThree'
import Study from '@/components/sections/study'
import SubscribeOne from '@/components/sections/subscribes/subscribeOne'
import TeamOne from '@/components/sections/teams/teamOne'
import TestimonialTwo from '@/components/sections/testimonials/testimonialTwo'

export const metadata = {
  title: "NextPro | Home-3",
  description: "NextPro is a modern Next.js and Tailwind CSS Template there features General Marketing, Social Media Marketing, AI in Marketing, Paid Advertising, Video Marketing, Analytics and Reporting, Industry news & Trends, E-commerce Marketing",
};

const HomeThree = () => {
  return (
    <main className='overflow-x-hidden'>
      <HeroThree/>
      <PlatformRating/>
      <ServiceThree/>
      <StoryThree />
      <TeamOne />
      <Study/>
      <ProvideTwo/>
      <TestimonialTwo />
      <ContactForm color={"text-white"} inputColor={"bg-transparent border-white border text-white placeholder:text-white"}/>
      <div className='lg:pt-15 pt-9'></div>
      <PriceThree/>
      <FaqTwo/>
      <BlogTwo/>
      <SubscribeOne/>
    </main>
  )
}

export default HomeThree