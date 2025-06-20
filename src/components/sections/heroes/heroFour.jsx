"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { Button } from '@/components/ui/button'
import Title from '@/components/ui/title'
import useMoveMentAnimation from '@/hooks/useMoveMentAnimation';
import PlayIcon from '@/components/ui/playIcon';

const HeroFour = () => {
    const [mousPositionX, mousPositionY] = useMoveMentAnimation()

    return (
        <section className='container pb-15'>
            <div className='bg-[rgba(226,231,255,0.4)] dark:bg-[#1c232a] rounded-[30px] lg:pl-[52px] lg:pr-0 pl-4 pr-4 border-2 border-[rgba(0,31,63,0.05)] overflow-y-hidden overflow-x-hidden'>
                <div className='grid lg:grid-cols-2 grid-cols-1'>
                    {/* ----- left side start */}
                    <div className='lg:pt-[132px] lg:pb-[120px] pt-12 pb-12'>
                        <Title size={'7.5xl'} className={"max-w-[754px]"}>Turning Ideas into Digital Impact</Title>
                        <p className='font-semibold max-w-[689px] pt-7.5'>Partner with Web Founders USA to elevate your brand through high-performing websites and smart social media marketing — everything you need to grow online, all in one place. </p>
                        <div className='flex sm:flex-row flex-col sm:items-center gap-[32px] pt-[55px] pb-[22px]'>
                            <Button asChild>
                                <Link href="/contact-us"> Contact Us </Link>
                            </Button>
                            {/* <div className='flex items-center gap-2'>
                                <PlayIcon playOne={false} />
                                <p className='font-semibold'>How It works?</p>
                            </div> */}
                        </div>
                        {/* <span className='inline-block h-[1px] w-full max-w-[491px] bg-[#C0C0C0]'></span> */}
                        {/* <ul className='pt-4 flex sm:flex-row flex-col sm:items-center gap-8'>
                            <li className='flex items-center gap-2'> <Image src="/images/shapes/check-icon-blue.svg" width={"20"} height={"20"} alt='check icon' /> <span className='text-sm'>7 Days Free trial</span> </li>
                            <li className='flex items-center gap-2'> <Image src="/images/shapes/check-icon-blue.svg" width={"20"} height={"20"} alt='check icon' /> <span className='text-sm'>Credit card required</span> </li>
                            <li className='flex items-center gap-2'> <Image src="/images/shapes/check-icon-blue.svg" width={"20"} height={"20"} alt='check icon' /> <span className='text-sm'>Cancel anytime</span> </li>
                        </ul> */}
                    </div>
                    {/* ----- left side end */}

                    <div className='relative '>
                        <div className='absolute -top-[21px] -left-[21px] xl:inline-block hidden' style={{ transform: `translate(-${mousPositionX}px, -${mousPositionY}px)` }}>
                            <Image src={"/images/shapes/mobius-strip4-1.png"} width={330} height={194} alt='mobius-strip-1' />
                        </div>
                        <div className='relative lg:absolute xl:top-[62px] lg:top-[30%] xl:right-[136px] lg:right-14 lg:z-[2]' style={{ transform: `translate(-${mousPositionX}px, -${mousPositionY}px)` }}>
                            <Image src={"/images/shapes/mobius-strip4-4.png"} width={600} height={600} alt='mobius-strip-4' style={{ width: "100%" }} className='max-h-[420px] lg:max-h-full object-cover' />
                        </div>
                        <div className='absolute top-0 md:right-5 right-0 z-[1] sm:max-w-full max-w-[190px]' style={{ transform: `translate(${mousPositionX}px, ${mousPositionY}px)` }}>
                            <Image src={"/images/shapes/mobius-strip4-3.png"} width={288} height={267} alt='mobius-strip-3' style={{ width: "100%" }} />
                        </div>
                        <div className='absolute md:bottom-[138px] bottom-12 md:-left-2 left-0 z-[3] sm:max-w-full max-w-[190px]' style={{ transform: `translate(${mousPositionX}px, ${mousPositionY}px)` }}>
                            <Image src={"/images/shapes/mobius-strip4-2.png"} width={300} height={300} alt='mobius-strip-2 ' style={{ width: "100%" }} />
                        </div>
                        <div className='absolute bottom-0 left-0 lg:block hidden' >
                            <Image src={"/images/shapes/mobius-strip4-5.png"} width={434} height={188} alt='mobius-strip-5' />
                        </div>
                        <div className='absolute -bottom-[6px] right-[70px] blur-[7px]' style={{ transform: `translate(-${mousPositionX}px, -${mousPositionY}px)` }}>
                            <Image src={"/images/shapes/mobius-strip4-6.png"} width={382} height={164} alt='mobius-strip-6' />
                        </div>
                        <div className='absolute lg:bottom-[210px] bottom-25 xl:right-[94px] right-0 z-[7] md:block hidden' style={{ transform: `translate(${mousPositionX}px, ${mousPositionY}px)` }}>
                            <Image src={"/images/shapes/mobius-strip4-7.png"} width={160} height={160} alt='mobius-strip-7' />
                        </div>
                        <div className='absolute bottom-0 right-0 xl:inline-block hidden' style={{ transform: `translate(${mousPositionX}px, ${mousPositionY}px)` }}>
                            <Image src={"/images/shapes/mobius-strip4-8.png"} width={276} height={246} alt='mobius-strip-8' />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HeroFour