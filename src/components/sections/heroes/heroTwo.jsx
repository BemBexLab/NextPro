import React from 'react'
import Image from 'next/image'
import SlotCounter from "react-slot-counter"
import PartnersSlider from '../partnersSlider'
import { partnersData } from '@/lib/fackData/partnersData'
import Title from '@/components/ui/title'
import PlayIcon from '@/components/ui/playIcon'

const HeroTwo = () => {
    return (
        <section className='pt-20 relative after:absolute after:z-[-1] after:left-0 after:top-0 after:w-full after:h-[calc(100vh-120px)] after:bg-background-linear'>
            <div className='max-w-[1355px] mx-auto px-[15px]'>
                <div className='grid xl:grid-cols-[auto_505px] lg:grid-cols-[auto_48%] items-center justify-between xl:gap-[82px] gap-8'>
                    <div className=''>
                        <Title size={"7.5xl"}>Data driven revenue marketing agency</Title>
                    </div>
                    <div>
                        <p className='font-semibold'>Choose NextMarketing as your digital marketing agency and propel ur business to new heights with our award-winning digital marketing services.</p>
                        <div className='flex sm:flex-row flex-col sm:items-center gap-8 sm:divide-x pt-7.5'>
                            <div className='flex items-center gap-2'>
                                <Title size={"5xl"}>
                                    <SlotCounter startValue={0} value={13} debounceDelay={5000} duration={2} animateOnVisible={{ triggerOnce: true, rootMargin: '0px 0px -100px 0px' }} />
                                </Title>
                                <p className='font-bold text-muted-foreground max-w-[170px]'>Years of Track Record</p>
                            </div>
                            <div className='flex items-center gap-2 sm:pl-8'>
                                <Title size={"5xl"} className={"flex items-center"}>
                                    <SlotCounter startValue={0} value={96} debounceDelay={5000} duration={2} animateOnVisible={{ triggerOnce: true, rootMargin: '0px 0px -100px 0px' }} />%
                                </Title>
                                <p className='font-bold text-muted-foreground max-w-[170px]'>Years of Track Record</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:mt-25 mt-16 rounded-[30px] relative'>
                    <Image src={'images/banner/hero2-1.jpg'} width={1320} height={604} alt='background image' className='mx-auto lg:rounded-[30px] rounded-2xl min-h-[400px] w-auto object-cover' />
                    <PlayIcon playOne={true}/>
                </div>

                <PartnersSlider data={partnersData.slice(0, 5)} className={"shadow-[0px_4px_40px_0px_rgba(44,54,109,0.2509803922)] max-w-[1005px] mx-auto lg:-mt-14 -mt-6 z-[1] relative dark:bg-white"} />

            </div>
        </section>
    )
}

export default HeroTwo