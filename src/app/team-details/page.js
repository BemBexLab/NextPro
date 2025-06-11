import React from 'react'
import PageTitle from '@/components/sections/pageTitle'
import TeamPersonalCard from '@/components/sections/teams/teamPersonalCard'

export const metadata = {
    title: "WebFoundersUSA",
    description: "NextPro is a modern Next.js and Tailwind CSS Template there features General Marketing, Social Media Marketing, AI in Marketing, Paid Advertising, Video Marketing, Analytics and Reporting, Industry news & Trends, E-commerce Marketing",
};

const TeamDetails = () => {
    return (
        <main>
            <PageTitle pageName={"Team Details"} breadcrumbLink={"Team Details"} />
            <TeamPersonalCard isDetails={false} />
        </main>
    )
}

export default TeamDetails