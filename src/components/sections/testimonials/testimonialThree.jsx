import React from 'react'
import Link from 'next/link';
import { Button } from '@/components/ui/button'
import Title from '@/components/ui/title'
import SlideUp from '@/components/animations/slideUp';
import CardThree from './cardThree'
import RightArrow from '../../../../public/icons/rightArrow';
import { testimonialDataThree } from '@/lib/fackData/testimonialDataTwo'

const TestimonialThree = () => {
    return (
        <section className='lg:pt-15 pt-9 relative after:absolute after:bottom-0 after:left-0 after:w-full after:max-h-[552px] after:h-full after:bg-[linear-gradient(180deg,_rgba(255,255,255,0.00)_0%,_#FFF_51.94%)] dark:after:bg-[linear-gradient(180deg,_rgba(25,31,37,0.12)_0%,_#191F25_62.94%)]'>
            <div className='max-w-[1366px] mx-auto px-[15px]'>
                <SlideUp>
                    <div className='flex flex-col items-center'>
                        <Button variant="secondary">Social Proof</Button>
                        <Title size={"5xl"} className="max-w-[869px] pt-6 text-center">Client Success Stories: Our Social Proof of Digital Excellence</Title>
                    </div>
                </SlideUp>
                <div className='relative after:absolute after:top-0 after:left-0 after:w-full after:max-h-[250px] after:h-full after:bg-[linear-gradient(180deg,_#fff_30%,_#fff_0%,_rgba(255,255,255,0)_74%)] dark:after:bg-[linear-gradient(180deg,_#191F25_30%,_#191F25_0%,_rgba(25,31,37,0.12)_74%)]'>
                    <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 max-h-[1190px] overflow-hidden'>

                        <div className="scroll-area" data-dir="top" data-speed="fast">
                            {
                                testimonialDataThree.slice(0, 8).map(({ id, name, position, rating, review, src, title }) =>
                                    <CardThree key={id} name={name} rating={rating} position={position} review={review} src={src} title={title} />
                                )
                            }
                        </div>
                        <div className='sm:block hidden'>
                            <div className="scroll-area" data-dir="top" data-speed="fast">
                                {
                                    testimonialDataThree.slice(2, 10).map(({ id, name, position, rating, review, src, title }) =>
                                        <CardThree key={id} name={name} rating={rating} position={position} review={review} src={src} title={title} />
                                    )
                                }
                            </div>
                        </div>
                        
                        <div className='xl:block hidden'>
                            <div className="scroll-area" data-dir="top" data-speed="fast">
                                {
                                    testimonialDataThree.map(({ id, name, position, rating, review, src, title }) =>
                                        <CardThree key={id} name={name} rating={rating} position={position} review={review} src={src} title={title} />
                                    )
                                }
                            </div>
                        </div>

                        <div className='lg:block hidden'>
                            <div className="scroll-area" data-dir="top" data-speed="fast">
                                {
                                    testimonialDataThree.slice(4, 12).map(({ id, name, position, rating, review, src, title }) =>
                                        <CardThree key={id} name={name} rating={rating} position={position} review={review} src={src} title={title} />
                                    )
                                }
                            </div>
                        </div>
                    </div>

                </div>
                <div className='relative z-10 w-full max-w-[360px] mx-auto translate-y-[-100px]'>
                    <Button asChild size={"lg"} className='max-h-[64px] w-full group'>
                        <Link href="/blog-single"> Purchase Plan <span className='-rotate-45 group-hover:rotate-0 transition-all duration-75' ><RightArrow /></span> </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default TestimonialThree