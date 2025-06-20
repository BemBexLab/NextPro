import React from 'react'
import PageTitle from '@/components/sections/pageTitle'
import SubscribeTwo from '@/components/sections/subscribes/subscribeTwo'
import TeamGrid from '@/components/sections/teams/teamGrid'
import TeamPersonalCard from '@/components/sections/teams/teamPersonalCard'
import TestimonialTwo from '@/components/sections/testimonials/testimonialTwo'

export const metadata = {
    title: "WebFoundersUSA",
    description: "WebFoundersUSA is a leading digital agency specializing in web development, digital marketing, SEO, branding, and e-commerce solutions. We help businesses grow online with custom websites, effective marketing strategies, and measurable results.",
};

const Team = () => {
    return (
        <main>
            <PageTitle pageName={"Our Team"} breadcrumbLink={"Our Team"} />
            <TeamPersonalCard isDetails={true} />
            <TeamGrid />
            <TestimonialTwo />
            <SubscribeTwo />
        </main>
    )
}

export default Team