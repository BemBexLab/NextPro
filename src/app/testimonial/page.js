import React from 'react'
import PageTitle from '@/components/sections/pageTitle'
import SubscribeTwo from '@/components/sections/subscribes/subscribeTwo'
import TestimonialOne from '@/components/sections/testimonials/testimonialOne'
import TestimonialThree from '@/components/sections/testimonials/testimonialThree'
import TestimonialTwo from '@/components/sections/testimonials/testimonialTwo'

export const metadata = {
    title: "WebFoundersUSA",
    description: "WebFoundersUSA is a leading digital agency specializing in web development, digital marketing, SEO, branding, and e-commerce solutions. We help businesses grow online with custom websites, effective marketing strategies, and measurable results.",
};
const Testimonial = () => {
    return (
        <main>
            <PageTitle pageName={"Testimonials"} breadcrumbLink={"Testimonials"} />
            <TestimonialOne />
            <TestimonialTwo />
            <TestimonialThree />
            <SubscribeTwo />
        </main>
    )
}

export default Testimonial