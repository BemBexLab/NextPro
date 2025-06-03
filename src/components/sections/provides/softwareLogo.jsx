"use client"
import React from 'react'
import Image from 'next/image'
import useMoveMentAnimation from '@/hooks/useMoveMentAnimation'
import SlideUp from '@/components/animations/slideUp'

const SoftwareLogo = () => {
    const [mousPositionX, mousPositionY] = useMoveMentAnimation()
    return (
        <div className='w-full h-full flex justify-center items-center relative after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[url(/images/shapes/provide-bg1-1.png)] after:bg-contain after:bg-no-repeat after:bg-center after:z-[-1] after:dark:opacity-20' >
            <SlideUp>
                <div style={{ transform: `translate(${mousPositionX}px, ${mousPositionY}px)` }} >
                    <Image src="/images/shapes/provider-logo.png" width={571} height={498} alt='provide img' />
                </div>
            </SlideUp>
        </div>
    )
}

export default SoftwareLogo