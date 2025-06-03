import React from 'react'
import JobOverview from './jobOverview'
import Benefits from './benefits'
import Title from '@/components/ui/title'
import SlideUp from '@/components/animations/slideUp'

const JobDescription = () => {
    return (
        <section className='lg:pb-15 pb-9'>
            <JobOverview />
            <div className='max-w-[1350px] mx-auto px-[15px] pt-15'>
                <div className='grid lg:grid-cols-[auto_420px] grid-cols-1 gap-x-8 gap-y-14 justify-between items-start'>
                    <div className='lg:max-w-[745px]'>
                        <SlideUp>
                            <div>
                                <Title size={"4xl"}>Job Summary</Title>
                                <p className='pt-5 lg:pt-7.5'>
                                    We are seeking a talented and experienced Digital Marketing Specialist to join our dynamic team. The ideal candidate will have a passion for digital marketing, a strong understanding of online advertising platforms, and a track record of delivering successful campaigns. This role offers the opportunity to work on a diverse range of projects and collaborate with a team of talented professionals in a fast-paced environment.
                                </p>
                            </div>
                        </SlideUp>
                        <SlideUp>
                            <div className='pt-8 lg:pt-12.5'>
                                <Title size={"4xl"}>Responsibilities</Title>
                                <ul className='pt-5 lg:pt-7.5 flex flex-col gap-[15px]'>
                                    <List> Develop and implement digital marketing strategies to drive online traffic and increase conversion rates.</List>
                                    <List> Manage and optimize paid advertising campaigns across various platforms, including Google Ads, Facebook Ads, and LinkedIn Ads.</List>
                                    <List> Conduct keyword research and perform SEO analysis to improve website rankings and organic search visibility.</List>
                                    <List> Create engaging content for social media channels and manage social media accounts to enhance brand awareness and engagement.</List>
                                    <List> Monitor and analyze campaign performance metrics, track KPIs, and provide regular reports to clients on campaign effectiveness.</List>
                                    <List> Stay up-to-date with industry trends, best practices, and emerging technologies in digital marketing.</List>
                                </ul>
                            </div>
                        </SlideUp>
                        <SlideUp>
                            <div className='pt-8 lg:pt-12.5'>
                                <Title size={"4xl"}>Qualifications</Title>
                                <ul className='pt-5 lg:pt-7.5 flex flex-col gap-[15px]'>
                                    <List> Bachelor's degree in Marketing, Communications, or related field.</List>
                                    <List> 3+ years of experience in digital marketing, with a focus on PPC advertising, SEO, and social media marketing.</List>
                                    <List> Strong analytical skills and the ability to interpret data to drive actionable insights. Excellent communication skills, both written and verbal.</List>
                                    <List> Proven track record of managing successful digital marketing campaigns and delivering measurable results.</List>
                                    <List> Ability to work independently and collaboratively in a fast-paced environment.</List>
                                </ul>
                            </div>
                        </SlideUp>
                    </div>
                    <Benefits />
                </div>
            </div>
        </section>
    )
}

export default JobDescription

const List = ({ children }) => {
    return (
        <li className='relative after:absolute after:-left-3 after:top-[11.5px] after:w-1 after:h-1 after:bg-foreground after:rounded-full ml-3'>
            {children}
        </li>
    )
}