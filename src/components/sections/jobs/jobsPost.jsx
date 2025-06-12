import React from 'react'
import Title from '../../ui/title'
import { jobsData } from '@/lib/fackData/jobsData'
import { Button } from '../../ui/button'
import Link from 'next/link'
import SlideUp from '@/components/animations/slideUp'

const JobsPost = () => {
    return (
        <section className='lg:py-15 py-9'>
            <div className='max-w-[1350px] mx-auto px-[15px]'>
                <SlideUp>
                    <Title size={"5xl"} className={"text-center"}>Open Positions</Title>
                </SlideUp>
                <div className='pt-[70px]'>
                    <div className='flex flex-col gap-12.5'>
                        {
                            jobsData.map(({ id, job_nature, location, position }) => {
                                return (
                                    <SlideUp id={id} key={id}>
                                        <div className='bg-[rgba(46,77,254,0.05)] border border-accent rounded-[30px] xl:p-10 p-5 flex flex-wrap lg:flex-nowrap justify-between items-center gap-4 lg:gap-0 transition-all duration-500 hover:shadow-[0px_0px_20px_0px_rgba(0,31,63,0.1)]'>
                                            <Card icon={position.icon} name={position.position_name} title={"Position"} />
                                            <Card icon={job_nature.icon} name={job_nature.nature} title={"Job Nature"} />
                                            <Card icon={location.icon} name={location.location} title={"Location"} />
                                            <div className='lg:max-w-64 lg:w-full w-[45%] basis-auto flex lg:justify-end'>
                                                <Button asChild className={"px-12.5"}>
                                                    <Link href={`/career-details/${id}`}>View Details</Link>
                                                </Button>
                                            </div>
                                        </div>
                                    </SlideUp>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JobsPost

const Card = ({ icon, title, name }) => {
    return (
        <div className='flex items-center gap-6 lg:max-w-64 lg:w-full sm:w-[45%] w-full'>
            <div className='w-15 h-15 flex items-center justify-center bg-white p-[15px] rounded-lg border-2 border-accent'>
                {icon}
            </div>
            <div>
                <h5 className='font-extrabold text-muted-foreground'>{title}</h5>
                <p>{name}</p>
            </div>
        </div>
    )
}
