import React from 'react'
import Logo from '../ui/logo'
import Image from 'next/image'
import Link from 'next/link'

const Technologies = () => {
    return (
        <div className='pt-[130px] pb-15'>
            <div className='max-w-[1350px] mx-auto px-[15px] '>
                <div className='grid lg:grid-cols-[18%_auto_18%] grid-cols-1 lg:justify-between gap-7.5'>
                    <div className='flex lg:flex-col justify-center sm:gap-7.5 gap-3'>
                        <SmallCard width={74} height={74} src={"/images/demos/next_js.png"} name={"Next.js"} />
                        <SmallCard width={74} height={74} src={"/images/demos/google-font-logo.png"} name={"Fast Loading Speed"} />
                    </div>
                    <div className='bg-[#2E4DFE0D] rounded-[30px] md:px-12.5 px-6 md:py-[88px] py-16'>
                        <div className='text-center'>
                            <div className='block lg:max-w-[300px] sm:max-w-[250px] max-w-[170px] w-full h-auto mx-auto'>
                                <Link href={"/"} className='relative'>
                                    <Image src={"/images/demos/logo-dark.png"} width={354} height={105} unoptimized="true" alt='logo-white' className={`w-full h-full dark:block hidden`} />
                                    <Image src={"/images/demos/logo-light.png"} width={354} height={105} unoptimized="true" alt='logo-original' className='w-full h-full block dark:hidden' />
                                </Link>
                            </div>
                            <p className='lg:pt-12.5 pt-8 lg:text-[26px] text-xl font-medium leading-[150%]'>Integrate SEO, Digital Marketing, & Social Media with Next's Intuitive Design, Impeccable Cleanliness, and High Performance.</p>
                        </div>
                    </div>
                    <div className='flex lg:flex-col justify-center sm:gap-7.5 gap-3'>
                        <SmallCard width={74} height={74} src={"/images/demos/tailwind.png"} name={"Tailwind CSS"} />
                        <SmallCard width={74} height={74} src={"/images/demos/pagespeed-logo.png"} name={"Google Font"} />
                    </div>
                </div>
            </div>
            <div className='max-w-[1350px] mx-auto px-[15px] pt-7.5'>
                <div className='grid lg:grid-cols-[39%_39%_auto] grid-cols-1 lg:justify-between justify-center gap-7.5'>
                    <div className='bg-[#2E4DFE0D] rounded-[30px] pl-12.5 flex max-w-[514px] w-full mx-auto'>
                        <div className='absolute pt-[26px] z-10'>
                            <h2 className='text-[#C8D9F6] dark:text-[#1e2959] font-extrabold md:text-[150px] text-[100px] leading-[118%] mt-[-25px]'>50+</h2>
                            <p className='sm:text-5.5xl text-4xl font-extrabold leading-[93%] text-primary-foreground max-w-[231px] mt-[-60px]'>Elements included</p>
                        </div>
                        <div className='relative w-full h-full sm:min-h-[230px] min-h-44'>
                            <Image src={'/images/demos/technologies-md-image.png'} fill alt='technologies-1' className='ml-auto w-auto h-auto' />
                        </div>
                    </div>
                    <div className='bg-[#2E4DFE0D] rounded-[30px] pl-12.5 flex max-w-[514px] w-full mx-auto'>
                        <div className='absolute pt-[26px] z-10'>
                            <h2 className='text-[#C8D9F6] dark:text-[#1e2959] font-extrabold md:text-[150px] text-[100px] leading-[118%] mt-[-25px]'>07+</h2>
                            <p className='sm:text-5.5xl text-4xl font-extrabold leading-[93%] text-primary-foreground max-w-[231px] mt-[-60px]'>Pre-built Sites</p>
                        </div>
                        <div className='relative w-full h-full sm:min-h-[230px] min-h-44'>
                            <Image src={'/images/demos/technologies-md-image.png'} fill alt='technologies-2' className='ml-auto w-auto h-auto' />
                        </div>
                    </div>
                    <div className='max-w-[260px] mx-auto h-full'>
                        <SmallCard width={74} height={74} src={"/images/demos/code-logo.png"} name={"Custom Clean Code"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technologies



const SmallCard = ({ src, width, height, name }) => {
    return (
        <div className='h-full bg-[#2E4DFE0D] rounded-[30px] px-7.5 py-10 text-center sm:basis-[32%] basis-1/2 flex flex-col items-center justify-center'>
            <Image src={src} width={width} height={height} alt={name} className='mx-auto mb-3' />
            <h5 className='text-1xl font-semibold'>{name}</h5>
        </div>
    )
}