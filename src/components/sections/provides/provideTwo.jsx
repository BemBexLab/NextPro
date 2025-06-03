import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Highlight from '@/components/ui/highlight'
import Title from '@/components/ui/title'
import SlideRight from '@/components/animations/slideRight'
import RightArrow from '../../../../public/icons/rightArrow'
import LogoSlide from './logoSlide'
import SlideUp from '@/components/animations/slideUp'

const ProvideTwo = ({ order_1, order_0 }) => {
    // order props from home page 5
    return (
        <section className='lg:py-15 py-9'>
            <div className='max-w-[1350px] mx-auto px-[15px]'>
                <div className='grid xl:grid-cols-[48%_52%] lg:grid-cols-2 grid-cols-1 justify-between xl:gap-10 gap-5'>
                    <div className={order_1}>
                        <SlideUp>
                            <div>
                                <Button variant="secondary">We Provide</Button>
                                <Title size={"5xl"} className="pt-6 lg:max-w-[620px]">Integration Solutions: <Highlight>Connect Seamlessly</Highlight> with Leading Tools</Title>
                                <p className='font-semibold lg:pt-7.5 pt-5'> <strong>Next Agency</strong> seamlessly integrates with a variety of industry-leading tools, ensuring a cohesive and efficient digital ecosystem for your business.</p>
                            </div>
                            <div className='lg:pt-[74px] pt-10'>
                                <div className='flex flex-wrap md:flex-nowrap xl:gap-20 gap-10'>
                                    <div>
                                        <Image src={"/images/shapes/connectivity-icon.png"} width={62} height={40} alt='connectivity' />
                                        <p className='font-semibold text-1xl pt-4 lg:max-w-[255px]'>Seamless Connectivity with your favourite tools</p>
                                    </div>
                                    <div>
                                        <Image src={"/images/shapes/email-marketing-icon.png"} width={62} height={40} alt='connectivity' />
                                        <p className='font-semibold text-1xl pt-4 lg:max-w-[255px]'>Customized Solutions to fulfill your exact need</p>
                                    </div>
                                </div>
                                <Button asChild variant="outline" size="lg" className="max-h-[64px] group lg:mt-20 mt-14">
                                    <Link href={"/about-us"}> See all Integrations <span className='-rotate-45 group-hover:rotate-0 transition-all duration-75' ><RightArrow /></span></Link>
                                </Button>
                            </div>
                        </SlideUp>
                    </div>
                    <div className={order_0}>
                        <SlideUp>
                            <div className='bg-[rgba(226,231,255,0.22)] dark:bg-[#202932] rounded-[30px] relative after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[linear-gradient(90deg,_#F4F6FF_0%,_rgba(244,246,255,0.00)_20.2%,_rgba(244,_246,_255,_0.00)_72.88%,_#F4F6FF_100%)] after:dark:bg-[linear-gradient(90deg,_#202932_0%,_rgba(32,41,50,0)_16.2%,_rgba(32,41,50,0)_76.88%,_#202932_100%)] after:z-10 after:rounded-[30px]'>
                                <div className='bg-contain bg-bottom bg-no-repeat h-full max-h-[400px] w-full absolute bottom-7 left-0' style={{ backgroundImage: `url(/images/shapes/provide-bg3-1.png)` }}></div>
                                <div className='lg:px-14 px-5 lg:pt-[58px] pt-8 relative z-[15]'>
                                    <Title size={"4xl"}>Freedom to integrate all the tools you need</Title>
                                    <p className='pt-5'>At Next you can seamlessly integrates with a variety of industry-leading tools, ensuring a cohesive and efficient digital ecosystem for your business.</p>
                                </div>
                                <div className='lg:mt-[89px] mt-12 pb-6'>
                                    <LogoSlide />
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default ProvideTwo