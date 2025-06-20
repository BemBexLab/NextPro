import React from 'react'
import Approach from '@/components/sections/approach'
import ContactForm from '@/components/sections/contactForm'
import CountDown from '@/components/sections/countDown'
import StoryFour from '@/components/sections/ourStories/storyFour'
import PageTitle from '@/components/sections/pageTitle'
import PriceThree from '@/components/sections/pricing/priceThree'
import ProvideOne from '@/components/sections/provides/provideOne'
import ServiceTwo from '@/components/sections/services/serviceTwo'
import Solutions from '@/components/sections/solutions'

export const metadata = {
    title: "WebFoundersUSA",
    description: "WebFoundersUSA is a leading digital agency specializing in web development, digital marketing, SEO, branding, and e-commerce solutions. We help businesses grow online with custom websites, effective marketing strategies, and measurable results.",
};
const Services = () => {
    return (
        <main>
            {/* <PageTitle pageName={"Services"} breadcrumbLink={"Services"} /> */}
            <StoryFour />
            <ServiceTwo />
            <Approach />
            <CountDown />
            <ProvideOne />
            <Solutions />
            <PriceThree />
            {/* <ContactForm color={"text-white"} inputColor={"bg-transparent border-white border text-white placeholder:text-white"} /> */}
        </main>
    )
}

export default Services