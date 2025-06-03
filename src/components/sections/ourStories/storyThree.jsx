import React from 'react'
import StoryContentThree from './storyContentThree'
import ExperienceCounter from './experienceCounter'
import Image from 'next/image'
import SlideLeft from '@/components/animations/slideLeft'
import SlideUp from '@/components/animations/slideUp'

const StoryThree = () => {
    return (
        <section className='lg:py-15 py-9'>
            <div className='max-w-[1350px] mx-auto px-[15px]'>
                <div className='flex lg:flex-row flex-col justify-between'>
                    <div className='order-1 lg:order-0 mt-8 lg:mt-0'>
                        <SlideUp>
                            <StoryContentThree />
                        </SlideUp>
                    </div>
                    <div className='mx-auto lg:mr-0 order-0 lg:order-1 relative'>
                        <SlideUp>
                            <Image src={"/images/resource/our-story3-1.png"} width={621} height={713} alt='story background' />
                            <div className='absolute bottom-2'>
                                <ExperienceCounter />
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StoryThree