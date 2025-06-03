import React from 'react'
import Image from 'next/image'
import StoryContentOne from './storyContentOne'
import Work from '../../../../public/icons/work'
import Notification from '../../../../public/icons/notification'
import { cn } from '@/lib/utils'
import SlideUp from '@/components/animations/slideUp'

const StoryOne = () => {
    return (
        <section className='lg:py-15 py-9'>
            <div className='container'>
                <div className='relative md:pt-16 pb-8 lg:pb-6 xl:pb-0 sm:px-2.5 after:absolute after:z-[-1] after:left-0 after:top-0 sm:after:bg-accent after:w-full after:h-[calc(100%-140px)] lg:after:rounded-[50px] after:rounded-2.5xl'>
                    <div className='flex lg:flex-row flex-col justify-between '>
                        <div className='-mt-[22px] basis-1/2'>
                            <Image src={"/images/resource/our-story1-1.png"} width={731} height={763} alt='stroy background' />
                        </div>
                        <div className='basis-1/2 mt-8 lg:mt-0 px-[15px] lg:px-0'>
                            <StoryContentOne />
                            <div className='flex md:flex-row flex-col gap-6 2xl:mt-28 xl:mt-20 md:mt-14 mt-5'>
                                <Card bgColor={"after:bg-green"} color={"text-green"} icon={<Work />} title={"Digital Innovation Leaders"} />
                                <Card bgColor={"after:bg-purple"} color={"text-purple"} icon={<Notification />} title={"Proven Results Achievers"} />
                                <Card bgColor={"after:bg-red"} color={"text-red"} icon={<Notification />} title={"Tailored Strategy Experts"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StoryOne


const Card = ({ icon, color, bgColor, title }) => {
    return (
        <SlideUp>
            <div className='flex items-center gap-2.5 group'>
                <div className={cn(`${color}  min-w-12.5 min-h-12.5 flex items-center justify-center relative z-[1] after:absolute after:left-0 after:top-0 after:w-full after:h-full ${bgColor} after:opacity-[0.08] group-hover:after:opacity-25 hover:transition-all after:duration-500 after:rounded-full after:z-[-1]`)}>
                    <span className='group-hover:scale-90 transition-all duration-500'>{icon}</span>
                </div>
                <p className='font-bold md:max-w-[154px] text-muted-foreground leading-[120%]'>{title}</p>
            </div>
        </SlideUp>
    )
}