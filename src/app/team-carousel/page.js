import React from 'react'
import PageTitle from '@/components/sections/pageTitle'
import SubscribeTwo from '@/components/sections/subscribes/subscribeTwo'
import TeamGrid from '@/components/sections/teams/teamGrid'
import TeamSlider from '@/components/sections/teams/teamSlider'

export const metadata = {
  title: "WebFoundersUSA",
  description: "WebFoundersUSA is a leading digital agency specializing in web development, digital marketing, SEO, branding, and e-commerce solutions. We help businesses grow online with custom websites, effective marketing strategies, and measurable results.",
};
const TeamCarousel = () => {
  return (
    <main>
        <PageTitle pageName={"Our Team"} breadcrumbLink={"Team Carousel"}/>
        <TeamSlider/>
        <TeamGrid/>
        <SubscribeTwo/>
    </main>
  )
}

export default TeamCarousel