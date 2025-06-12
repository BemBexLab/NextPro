import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Highlight from '@/components/ui/highlight'
import Title from '@/components/ui/title'

import team_icon from "../../../../public/images/shapes/dynamic-team-icon.png"
import skills_icon from "../../../../public/images/shapes/skills-icon.png"
import content_icon from "../../../../public/images/shapes/content-writing-icon.png"
import SlideUp from '@/components/animations/slideUp'
import SlideRight from '@/components/animations/slideRight'

const shortInfo = [
    {
        id: 1,
        icon: team_icon,
        title: "Dynamic Team",
        desc: "Receive comprehensive reports detailing the impact of our efforts"
    },
    {
        id: 2,
        icon: skills_icon,
        title: "Extraordinary skills",
        desc: "Benefit from our team’s wide-ranging expertise in digital marketing."
    },
    {
        id: 3,
        icon: content_icon,
        title: "Customer focused",
        desc: "Enjoy personalized service with your goals at the center of everything we do."
    },

]
const TeamOne = () => {
    return (
        <section className='lg:py-15 py-9'>
            <div className='container'>
                <SlideUp>
                    <div className='flex flex-col items-center'>
                        <Button variant="secondary">Team</Button>
                        <Title size={"5xl"} className={"max-w-[872px] text-center "}>
                            <Highlight>Creative team</Highlight> who are behind all your success
                        </Title>
                    </div>
                </SlideUp>
                <div className='lg:pt-12.5 pt-7.5 relative z-[1] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[calc(100%-160px)] after:bg-gray after:rounded-[30px] after:z-[-1]'>
                    <div className='shadow-[0px_4px_46.9px_0px_rgba(9,25,40,0.1)] rounded-[30px] max-w-[1320px] mx-auto relative mt-7.5 sm:mt-0'>
                        <Image src={'/images/resource/career-team1-1.jpg'} width={1320} height={510} sizes='100vw' alt="dashboard1" className='lg:rounded-[30px] rounded-2xl' />
                    </div>
                    <div className='lg:pt-[46px] pt-4 flex lg:flex-row flex-col justify-between max-w-[1320px] mx-auto pb-12.5 px-3 lg:px-0'>
                        {
                            shortInfo.map(({ desc, icon, id, title }) => <Card key={id} id={id} icon={icon} title={title} desc={desc} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamOne


// --------------- Card
const Card = ({ id, icon, title, desc }) => {
    return (
        <SlideRight id={id}>
            <div className='flex items-center gap-7 pt-7 lg:pt-0'>
                <div className='xl:min-w-[75px] min-w-16 max-w-16 xl:min-h-[75px] min-h-16 max-h-16 px-[13px] py-[11px] shadow-[0px_4px_20px_0px_rgba(0,31,63,0.1019607843)] bg-white rounded-lg flex justify-center items-center'>
                    <Image src={icon} alt='icon' className='' />
                </div>
                <div className='lg:max-w-[450px]'>
                    <Title size={"2xl"}>
                        <Link href={"/team-details"} className='relative hover-underline after:bg-muted after:h-[1px] after:bottom-[1px]'>{title}</Link>
                    </Title>
                    <p>{desc}</p>
                </div>
            </div>
        </SlideRight>
    )
}