import { Button } from '@/components/ui/button'
import Highlight from '@/components/ui/highlight'
import Title from '@/components/ui/title'
import { teamData } from '@/lib/fackData/teamData'
import React from 'react'
import TeamCard from './teamCard'
import SlideUp from '@/components/animations/slideUp'

const TeamGrid = () => {
    return (
        <section className='lg:py-15 py-9'>
            <div className='max-w-[1350px] mx-auto px-[15px]'>
                <SlideUp>
                    <div className='flex flex-col items-center'>
                        <Button variant="secondary">Talented Team</Button>
                        <Title size={"5xl"} className="pt-6 max-w-[872px] text-center">Our Team: The Driving Force Behind <Highlight>Next Agency</Highlight> </Title>
                    </div>
                </SlideUp>
                <div className='lgpt-20 pt-10'>
                    <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-6'>
                        {teamData.map(({ id, name, position, src }) => <TeamCard key={id} id={id} name={name} position={position} src={src} bgColor={"bg-[rgba(0,31,63,0.35)]"} link={"/team-details"} />)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamGrid