"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Title from '@/components/ui/title';
import PlayIcon from '@/components/ui/playIcon';

function HeroSix() {
    return (
        <section className='container pb-15'>
            <div className='bg-[rgba(226,231,255,0.4)] dark:bg-[#1c232a] rounded-[30px] lg:pl-[52px] lg:pr-0 pl-4 pr-4 border-2 border-[rgba(0,31,63,0.05)] overflow-y-hidden overflow-x-hidden relative'>
                <div className='grid lg:grid-cols-2 grid-cols-1 relative z-10'>
                    {/* ----- left side start */}
                    <div className='lg:pt-[132px] lg:pb-[120px] pt-12 pb-12'>
                        <Title size={'7.5xl'} className={"max-w-[754px]"}>Transforming Visions into Digital Excellence</Title>
                        <p className='font-semibold max-w-[689px] pt-7.5'>Choose RankFlow as your digital marketing agency and propel ur business to new heights with our award-winning digital marketing services.</p>
                        <div className='flex sm:flex-row flex-col sm:items-center gap-[32px] pt-[55px] pb-[22px]'>
                            <Button asChild>
                                <Link href="/pricing"> Start Free Trial </Link>
                            </Button>
                            <div className='flex items-center gap-2'>
                                <PlayIcon playOne={false} />
                                <p className='font-semibold'>How It works?</p>
                            </div>
                        </div>
                        <span className='inline-block h-[1px] w-full max-w-[491px] bg-[#C0C0C0]'></span>
                        <ul className='pt-4 flex sm:flex-row flex-col sm:items-center gap-8'>
                            <li className='flex items-center gap-2'> <Image src="/images/shapes/check-icon-blue.svg" width={"20"} height={"20"} alt='check icon' /> <span className='text-sm'>7 Days Free trial</span> </li>
                            <li className='flex items-center gap-2'> <Image src="/images/shapes/check-icon-blue.svg" width={"20"} height={"20"} alt='check icon' /> <span className='text-sm'>Credit card required</span> </li>
                            <li className='flex items-center gap-2'> <Image src="/images/shapes/check-icon-blue.svg" width={"20"} height={"20"} alt='check icon' /> <span className='text-sm'>Cancel anytime</span> </li>
                        </ul>
                    </div>
                    {/* ----- left side end */}

                    <div className='relative flex justify-center lg:justify-end'>
                        <Image className='object-cover' src={'/images/banner/hero-img6-1.png'} width={668} height={772} alt='hero image' />
                    </div>
                </div>
                <div className="hero-six-parallax absolute w-full h-full left-0 top-0 z-0 bg-[url('/images/background/hero-bg6-1.png')] bg-cover bg-no-repeat bg-center dark:opacity-10"></div>
            </div>
        </section>
    );
}

export default HeroSix