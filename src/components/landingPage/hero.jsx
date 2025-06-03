"use client"
import React from 'react'
import Image from 'next/image'
import CheckCircle from '../../../public/icons/checkCircle'
import SlideUp from '../animations/slideUp'
import SlideRight from '../animations/slideRight'

const Hero = () => {
    return (
        <section className='relative overflow-hidden bg-repeat landing-bg dark:bg-[url("/images/demos/hero-landing-bg.png")]'>
            <div className='flex'>
                <div className='max-w-[1350px] mx-auto px-[15px] relative z-10 lg:pt-[304px] pt-36'>
                    <div className='max-w-[944px] '>
                        <h1 className='xl:text-[75px] lg:text-6xl sm:text-5xl text-4xl xl:leading-[1.2] lg:leading-[1.1] sm:leading-[1.1] font-extrabold text-muted-foreground pb-10'>Experience the Power of Digital Marketing</h1>
                        <p className='max-w-[767px]'>Seamlessly Integrate SEO, Digital Marketing, and Social Media with Next's Intuitive Design, Impeccable Cleanliness, and High Performance.</p>

                        <ul className='inline-flex flex-wrap gap-7.5 pt-5 mt-[42px] relative after:absolute after:left-0 after:top-0 after:bg-[#C0C0C0] after:w-full after:h-[1px]'>
                            <li className='flex items-center gap-2.5'><CheckCircle /> <span className='text-1xl font-semibold'>Unique Design</span></li>
                            <li className='flex items-center gap-2.5'><CheckCircle /> <span className='text-1xl font-semibold'>Clean Code</span></li>
                            <li className='flex items-center gap-2.5'><CheckCircle /> <span className='text-1xl font-semibold'>Fast & Friendly Support</span></li>
                        </ul>
                    </div>
                </div>
                <div className='lg:block hidden pt-25'>
                    <div className='fadeinRight-animated drop-shadow-4xl pl-20'>
                        <Image src={'/images/demos/home4-demo.jpg'} width={400} height={226} style={{ width: "100%" }} unoptimized={true} alt='home demo 4' className='rounded-tl-[25px] rounded-bl-[25px]' />
                    </div>
                    <div className='fadeinRight-animated mt-8 drop-shadow-4xl'>
                        <Image src={'/images/demos/home2-demo.jpg'} width={400} height={226} style={{ width: "100%" }} unoptimized={true} alt='home demo 2' className=' rounded-tl-[25px] rounded-bl-[25px]' />
                    </div>
                </div>
            </div>
            <div className='flex justify-between md:flex-nowrap flex-wrap items-end gap-[35px] pt-10 overflow-x-hidden fadeinUp-animated'>
                <Image src={'/images/demos/home1-demo.jpg'} width={553} height={154} style={{ width: "100%" }} alt='home demo 2' className='drop-shadow-4xl w-auto h-auto rounded-tl-[25px] rounded-tr-[25px]' />
                <Image src={'/images/demos/home3-demo.jpg'} width={553} height={154} style={{ width: "100%" }} alt='home demo 3' className='drop-shadow-4xl w-auto h-auto rounded-tl-[25px] rounded-tr-[25px]' />
                <Image src={'/images/demos/home5-demo.jpg'} width={553} height={154} style={{ width: "100%" }} alt='home demo 5' className='drop-shadow-4xl w-auto h-auto rounded-tl-[25px] rounded-tr-[25px] xl:rounded-tr-0' />
            </div>

        </section>
    )
}

export default Hero