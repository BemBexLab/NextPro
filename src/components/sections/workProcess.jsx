import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../ui/button'
import Title from '../ui/title'
import Category from '../../../public/icons/category'
import Filter from '../../../public/icons/filter'
import Shield from '../../../public/icons/shield'
import Analysis from '../../../public/icons/analysis'
import Paper from '../../../public/icons/paper'
import User from '../../../public/icons/user'
import SlideLeft from '../animations/slideLeft'
import SlideRight from '../animations/slideRight'
import SlideUp from '../animations/slideUp'

const processData = [
    {
        id: 1,
        title: "Discovery and Consultation",
        desc: "We begin by understanding your business, goals, and unique challenges through in-depth consultations",
        Icon: Category
    },
    {
        id: 2,
        title: "Strategic Planning",
        desc: "Our team develops a customized digital strategy tailored to your objectives, ensuring every step aligns with your vision.",
        Icon: Filter
    },
    {
        id: 3,
        title: "Implementation and Execution",
        desc: "Bringing the plan to life, we execute strategies with precision, leveraging cutting-edge tools and technologies.",
        Icon: Shield
    },
    {
        id: 4,
        title: "Continuous Optimization",
        desc: "We monitor and analyze performance metrics, making data-driven adjustments to optimize your digital presence continually.",
        Icon: Analysis
    },
    {
        id: 5,
        title: "Reporting and Insights",
        desc: "Receive comprehensive reports detailing the impact of our efforts and gain valuable insights for future growth.",
        Icon: Paper
    },
    {
        id: 6,
        title: "Client Collaboration",
        desc: "Throughout the process, we prioritize transparent communication, ensuring your input shapes every phase of our work.",
        Icon: User
    },

]
const WorkProcess = () => {
    return (
        <section className='lg:pb-15 pb-9 lg:pt-[178px] pt-20'>
            <div className='max-w-[1350px] mx-auto px-[15px]'>
                <div className='grid xl:grid-cols-[605px_642px] lg:grid-cols-[500px_auto] grid-cols-1 gap-x-10 justify-between items-start'>
                    <SlideUp>
                        <div className='bg-accent rounded-[30px] w-full relative'>
                            <div className='absolute left-0 lg:-top-[138px] md:-top-20 -top-14 max-w-[200px] md:max-w-full animate-up-down'>
                                <Image src={"/images/shapes/rocket1-1.png"} width={330} height={412} className='w-full' alt="rocket"  />
                            </div>
                            <div className=''>
                                <Image src={"/images/shapes/process1-2.png"} width={582} height={658} className='w-full' alt="laptop" />
                            </div>
                            <div className='absolute right-0 -bottom-48 lg:block hidden animate-left-right'>
                                <Image src={"/images/shapes/process1-1.png"} width={330} height={412} alt="bord" />
                            </div>
                        </div>
                    </SlideUp>
                    <div className='pt-12 lg:pt-0'>
                        <SlideUp>
                            <Button variant="secondary">Our Process</Button>
                            <Title size={"5xl"} className="max-w-[642px] pt-6">Turning Visions into Digital Excellence</Title>
                        </SlideUp>
                        <ul className='pt-12.5'>
                            {
                                processData.map(({ desc, Icon, id, title }) => <ProcessCard key={id} title={title} id={id} icon={<Icon height={"34px"} width={"34px"} />} desc={desc} />)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkProcess


const ProcessCard = ({ id, title, icon, desc }) => {
    return (

        <li className='pb-7.5 last:pb-0 group'>
            <SlideUp id={id}>
                <div className='flex items-center lg:gap-8 gap-4'>
                    <div className='lg:min-w-[85px] lg:min-h-[85px] min-w-16 min-h-16 rounded-full flex justify-center items-center text-primary-foreground transition-all duration-500 bg-[rgba(46,77,254,0.08)] group-hover:bg-[rgba(46,77,254,0.28)]'>
                        {icon}
                    </div>
                    <div className='max-w-[509px]'>
                        <Title size={"2xl"}>
                            <Link href="#" className='relative hover-underline after:bg-muted after:h-[1px] after:-bottom-1'>{title}</Link>
                        </Title>
                        <p>{desc}</p>
                    </div>
                </div>
            </SlideUp>
        </li>

    )
}