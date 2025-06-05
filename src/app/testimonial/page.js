import React from 'react'
import PageTitle from '@/components/sections/pageTitle'
import SubscribeTwo from '@/components/sections/subscribes/subscribeTwo'
import TestimonialOne from '@/components/sections/testimonials/testimonialOne'
import TestimonialThree from '@/components/sections/testimonials/testimonialThree'
import TestimonialTwo from '@/components/sections/testimonials/testimonialTwo'

export const metadata = {
    title: "NextPro | Testimonial",
    description: "NextPro is a modern Next.js and Tailwind CSS Template there features General Marketing, Social Media Marketing, AI in Marketing, Paid Advertising, Video Marketing, Analytics and Reporting, Industry news & Trends, E-commerce Marketing",
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