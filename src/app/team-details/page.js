import React from 'react'
import PageTitle from '@/components/sections/pageTitle'
import TeamPersonalCard from '@/components/sections/teams/teamPersonalCard'

export const metadata = {
    title: "WebFoundersUSA",
    description: "WebFoundersUSA is a leading digital agency specializing in web development, digital marketing, SEO, branding, and e-commerce solutions. We help businesses grow online with custom websites, effective marketing strategies, and measurable results.",
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