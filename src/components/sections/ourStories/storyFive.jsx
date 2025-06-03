import React from 'react'
import StoryContentOne from './storyContentOne'
import Image from 'next/image'
import SlideLeft from '@/components/animations/slideLeft'

const StoryFive = ({ counter }) => {
    return (
        <section className='lg:py-15 py-9 overflow-x-hidden'>
            <div className='container'>
                <div className='relative pt-7 pb-6 xl:pb-0 px-2.5 after:absolute after:z-[-1] after:left-0 after:top-0 after:bg-[#2e4dfe0d] after:w-full after:h-[calc(100%-100px)] after:rounded-[50px]'>
                    <div className='flex lg:flex-row flex-col justify-center 2xl:gap-[144px] xl:gap-20 lg:gap-10 gap-5'>
                        <div className=' max-w-[534px] relative '>
                            <div className='relative '>
                                <Image src={"/images/resource/our-story5-4.png"} width={510} height={670} sizes='(max-width:1024px) 100vw, 50vw' alt='stroy background' className='relative z-[1]' />
                                <Image src={"/images/resource/our-story5-2.png"} width={510} height={670} sizes='(max-width:1024px) 100vw, 50vw' alt='stroy background' className='absolute bottom-0' />
                            </div>
                            <div className='absolute top-7'>
                                <Image src={"/images/shapes/our-story5-1.png"} width={138} height={140} alt='bg' />
                            </div>
                            <div className='absolute -right-9 -top-12'>
                                <Image src={"/images/shapes/our-story5-3.png"} width={366} height={307} alt='bg' className='w-full z-[1]' />
                            </div>
                        </div>
                        <div className='max-w-[683px] mt-8 '>
                            <StoryContentOne />
                            {
                                counter &&
                                <div className='flex md:flex-row flex-col gap-25 2xl:mt-24 mt-14'>
                                    <div className='flex gap-[15px]'>
                                        <h2 className='text-[62px] text-muted-foreground font-extrabold'>5k+</h2>
                                        <p className='font-semibold leading-[130%] text-muted-foreground max-w-[113px]'>Website Optimized</p>
                                    </div>
                                    <div className='flex gap-[15px]'>
                                        <h2 className='text-[62px] text-muted-foreground font-extrabold'>15X</h2>
                                        <p className='font-semibold leading-[130%] text-muted-foreground max-w-[159px]'>Conversion Rate Increased</p>
                                    </div>
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StoryFive