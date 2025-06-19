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
                    Discover Our Story: Redefining Digital Excellence at Web Founders USA
                </Title>

                <div className='lg:max-w-[645px]'>
                    <p className='font-semibold text-muted-foreground mt-6'>Step into the heart of Web Founders USA, where passion meets expertise and innovation drives everything we do.</p>

                    <p className='mt-7.5 font-medium'>Since 2012, we've been helping brands grow through smart digital strategies, powerful storytelling, and standout design. From building custom websites to executing full-scale marketing campaigns, we’ve stayed committed to one mission: delivering exceptional results that truly move the needle.</p>
                    <br />
                    <p>Join us as we continue to shape the future of digital excellence one bold idea at a time.</p>
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