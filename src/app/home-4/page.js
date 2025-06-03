import React from 'react'
import Approach from '@/components/sections/approach'
import BlogOne from '@/components/sections/blogs/blogOne'
import ChooseUs from '@/components/sections/chooseUs'
import ContactForm from '@/components/sections/contactForm'
import CountDown from '@/components/sections/countDown'
import HeroFour from '@/components/sections/heroes/heroFour'
import StoryFour from '@/components/sections/ourStories/storyFour'
import ServiceFour from '@/components/sections/services/serviceFour'
import ServiceFive from '@/components/sections/services/sesrviceFive'
import Study from '@/components/sections/study'
import SubscribeTwo from '@/components/sections/subscribes/subscribeTwo'
import TestimonialThree from '@/components/sections/testimonials/testimonialThree'
import ContactFormTwo from '@/components/sections/ContactFormTwo'

export const metadata = {
    title: "NextPro | Home-4",
    description: "NextPro is a modern Next.js and Tailwind CSS Template there features General Marketing, Social Media Marketing, AI in Marketing, Paid Advertising, Video Marketing, Analytics and Reporting, Industry news & Trends, E-commerce Marketing",
};

const HomeFour = () => {
    return (
        <main>
            <HeroFour />
            <ServiceFour />
            <StoryFour />
            <ServiceFive />
            <Approach />
            <CountDown />
            <ChooseUs />
            <Study />
            <TestimonialThree />
            <div className='mt-[-80px]'></div>
            <SubscribeTwo />
            <BlogOne />
            <ContactFormTwo/>
        </main>
    )
}

export default HomeFour