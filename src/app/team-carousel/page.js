import React from 'react'
import PageTitle from '@/components/sections/pageTitle'
import SubscribeTwo from '@/components/sections/subscribes/subscribeTwo'
import TeamGrid from '@/components/sections/teams/teamGrid'
import TeamSlider from '@/components/sections/teams/teamSlider'

export const metadata = {
  title: "NextPro | Team-Carousel",
  description: "NextPro is a modern Next.js and Tailwind CSS Template there features General Marketing, Social Media Marketing, AI in Marketing, Paid Advertising, Video Marketing, Analytics and Reporting, Industry news & Trends, E-commerce Marketing",
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