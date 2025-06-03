import React from 'react'
import StoryContentFour from './storyContentFour'
import Image from 'next/image'
import ExperienceCounter from './experienceCounter'
import SlideUp from '@/components/animations/slideUp'

const StoryFour = () => {
    return (
        <section className='pt-15'>
            <div className='max-w-[1350px] mx-auto px-[15px] overflow-x-hidden overflow-y-clip'>
                <div className='flex lg:flex-row flex-col justify-between items-start gap-5 lg:pb-14 pb-0'>
                    <div className='lg:max-w-[48%] max-w-full relative mx-auto lg:ml-0'>
                        <SlideUp>
                            <Image src={"/images/resource/strategy4-1.png"} width={564} height={672} sizes='(max-width:1024px) 100vw, 50vw' alt='stroy background' className='rounded-[30px]' />
                        </SlideUp>
                        <div className='absolute w-full max-w-[420px] -bottom-[8%] left-1/2 -translate-x-1/2'>
                            <SlideUp>
                                <ExperienceCounter />
                            </SlideUp>
                        </div>
                    </div>
                    <div className='lg:max-w-[52%] max-w-full mt-12 lg:mt-0'>
                        <StoryContentFour />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StoryFour


