import React from 'react'
import Highlight from '../ui/highlight'
import Title from '../ui/title'
import { Button } from '../ui/button'
import TeamCard from './teams/teamCard'
import SlideUp from '../animations/slideUp'
import { projectsData } from '@/lib/fackData/projectsData'


const Study = () => {
    return (
        <section className='lg:py-15 py-9'>
            <div className='max-w-[1350px] mx-auto px-[15px]'>
                <SlideUp>
                    <div className='flex flex-col items-center'>
                        <Button variant="secondary">Case Study</Button>
                        <Title size={"5xl"} className="max-w-[872px] pt-6 text-center"> <Highlight>Success Stories:</Highlight>Transformative Case Studies</Title>
                    </div>
                </SlideUp>
                <div className='lg:pt-12.5 pt-7.5'>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7.5'>
                        {
                            projectsData.slice(0, 3).map(({ id, info, src, title, link }) => <TeamCard key={id} id={id} position={info} name={title} src={src} link={link} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Study