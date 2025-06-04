import React from 'react'
import Image from 'next/image'
import PartnersSlider from '../partnersSlider'
import PlayIcon from '@/components/ui/playIcon'
import { partnersData } from '@/lib/fackData/partnersData'

const HeroThree = () => {
    return (
        <div className='lg:pb-15 pb-9 container '>
            <div className='rounded-[30px] relative'>
                <Image src={'/images/banner/hero2-1.jpg'} width={1650} height={774} alt='background image' className='mx-auto lg:rounded-[40px] rounded-2xl min-h-[400px] object-cover' />
                <PlayIcon playOne={true} />
            </div>
            <PartnersSlider data={partnersData.slice(0, 5)} className={"max-w-[1005px] mx-auto lg:-mt-14 -mt-6 z-[1] relative dark:bg-white"} />
        </div>
    )
}

export default HeroThree