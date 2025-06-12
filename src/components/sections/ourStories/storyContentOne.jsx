import SlideRight from '@/components/animations/slideRight'
import SlideUp from '@/components/animations/slideUp'
import { Button } from '@/components/ui/button'
import PlayIcon from '@/components/ui/playIcon'
import Title from '@/components/ui/title'
import Link from 'next/link'
import React from 'react'

const StoryContentOne = () => {
    return (
        <div >
            <SlideUp>
                <Title size={"5xl"} className={"xl:leading-[140%] lg:max-w-[645px]"}>
                    Discover Our Story: Redefine Digital Excellence at WebFounders USA.
                </Title>

                <div className='lg:max-w-[645px]'>
                    <p className='font-semibold text-muted-foreground mt-6'>Step into the heart of RankFlow, where a dynamic blend of passion and expertise fuels our journey to redefine digital success. </p>

                    <p className='mt-7.5 font-medium'> Since 2012, we've been pioneering innovative solutions, crafting unique narratives, and consistently delivering exceptional results. Join us in shaping the future of digital excellence!</p>
                </div>

                <div className='flex items-center sm:gap-[32px] gap-6 md:pt-[55px] pt-7 pb-[22px]'>
                    <div>
                        <Button asChild>
                            <Link href="/about-us">  Get Started</Link>
                        </Button>
                    </div>
                    <div className='flex items-center gap-2'>
                        <PlayIcon playOne={false} />
                        <p className='font-semibold sm:block hidden'>How It works?</p>
                    </div>
                </div>
            </SlideUp>
        </div>
    )
}

export default StoryContentOne