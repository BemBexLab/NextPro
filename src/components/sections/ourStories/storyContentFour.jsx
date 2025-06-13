import React from 'react'
import Link from 'next/link'
import Highlight from '@/components/ui/highlight'
import Title from '@/components/ui/title'
import Category from '../../../../public/icons/category'
import Filter from '../../../../public/icons/filter'
import Shield from '../../../../public/icons/shield'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import ProgressBar from '../../ui/progressBar'
import SlideUp from '@/components/animations/slideUp'

const StoryContentFour = () => {

    return (

        <SlideUp>
            <Title size={"5xl"}>
                Crafting <Highlight>Digital Success</Highlight> Stories since 2012
            </Title>
            <p className='pt-5'>Since 2012, we've been pioneering innovative solutions, crafting unique narratives, and consistently delivering exceptional results. Join us in shaping the future of digital excellence!</p>

            <div className='flex md:flex-row flex-col gap-6 2xl:mt-12.5 xl:mt-14 mt-8'>
                <Card bgColor={"after:bg-green"} color={"text-green"} icon={<Category />} title={"Innovative Approach"} />
                <Card bgColor={"after:bg-purple"} color={"text-purple"} icon={<Filter />} title={"Client-Centric Approach"} />
                <Card bgColor={"after:bg-red"} color={"text-red"} icon={<Shield />} title={"Results-Driven Focus"} />
            </div>

            <div className='lg:pb-[73px] pb-12 pt-14'>
                <ProgressBar finalWidth={80} title={"Strategic Expertise"} />
                <ProgressBar finalWidth={98} title={"Client Satisfaction"} />
            </div>

            <Button asChild variant="outline" className="dark:text-muted-foreground">
                <Link href={"/contact-us"}> Discover more </Link>
            </Button>
        </SlideUp >

    )
}

export default StoryContentFour


const Card = ({ icon, color, bgColor, title }) => {
    return (
        <div className='flex items-center gap-2.5 group'>
            <div className={cn(`${color}  min-w-12.5 min-h-12.5 flex items-center justify-center relative z-[1] after:absolute after:left-0 after:top-0 after:w-full after:h-full ${bgColor} after:opacity-[0.08] group-hover:after:opacity-25 hover:transition-all after:duration-500 after:rounded-full after:z-[-1]`)}>
                <span className='group-hover:scale-90 transition-all duration-500'>{icon}</span>
            </div>
            <p className='font-bold lg:max-w-[154px] leading-[120%]'>{title}</p>
        </div>
    )
}