import React from 'react'
import Image from "next/image"
import Link from "next/link"
import RightArrow from "../../../../public/icons/rightArrow"
import { Button } from '@/components/ui/button'
import SlideUp from '@/components/animations/slideUp'

const PriceCardTwo = ({ id, plan_name, isTag, price, link, services, info, isChecked, cardThree, isAnimating }) => {
    return (
        <SlideUp id={id}>
            <div className={`bg-gray rounded-2.5xl py-12.5 transition-all duration-300 transform ${isAnimating ? "translate-y-[50px] opacity-0" : "translate-y-0 opacity-100"}`}>
                <div className='px-7.5'>
                    <div className='flex justify-between items-center'>
                        <h5 className='text-2xl font-extrabold text-muted-foreground'>{plan_name}</h5>
                        {isTag && <p className='bg-primary py-2.4 px-5 max-h-[33px] font-semibold text-secondary-foreground dark:text-muted-foreground rounded-full'>Value</p>}
                    </div>
                    {cardThree && <p className='pt-2'> {info}</p>}
                    <div className='flex items-start py-2.5'>
                        <h2 className='xl:text-7.5xl md:text-5.5xl text-4.5xl font-extrabold text-muted-foreground leading-[120%] relative overflow-hidden'>
                            <span className={`${isChecked ? "relative opacity-100 visible" : "absolute opacity-0 invisible"} transition-all duration-300`}><sub className='lg:text-4xl text-2xl top-[-0.1em]'>$</sub>{price * 12 / 2}<span className='lg:font-semibold font-medium lg:text-1xl text-base text-foreground'>{""}yearly</span></span>
                            <span className={`${isChecked ? "absolute opacity-0 invisible" : "relative opacity-100 visible"} transition-all duration-300`}><sub className='lg:text-4xl text-2xl top-[-0.1em]'>$</sub>{price}<span className='lg:font-semibold font-medium lg:text-1xl text-base text-foreground'>monthly</span></span>
                        </h2>
                    </div>
                </div>
                {
                    cardThree ?
                        <div className="w-full px-7.5 mt-6">
                            {
                                id === 2 ?
                                    <Button asChild size={"lg"} className='max-h-[64px] w-full group'>
                                        <Link href="/contact-us">  Purchase Plan <span className='-rotate-45 group-hover:rotate-0 transition-all duration-75' ><RightArrow /></span></Link>
                                    </Button>
                                    :
                                    <Button asChild variant="outline" size={"lg"} className='max-h-[64px] w-full group'>
                                        <Link href="/contact-us"> Purchase Plan <span className='-rotate-45 group-hover:rotate-0 transition-all duration-75' ><RightArrow /></span> </Link>
                                    </Button>

                            }
                            <small className='text-center block pt-2'>*No Credit Card required</small>
                        </div>
                        :
                        <hr className="text-[#B0C2E2] pb-7.5" />
                }
                <div className='px-7.5 '>
                    {cardThree || <p className='text-muted-foreground lg:text-1xl text-base'><span className='font-semibold'>Ideal for: </span>{info}</p>}
                    <div className='pt-9'>
                        <h5 className='lg:text-1xl text-xl font-semibold text-muted-foreground'>Services Included:</h5>
                        <ul className='flex flex-col gap-2 pt-2'>
                            {
                                services.map(({ id, service, isavailable }) => {
                                    return (
                                        <li key={id} className='flex items-center gap-2'>
                                            {
                                                isavailable ?
                                                    <Image src={"/images/shapes/check-icon-blue.svg"} width={20} height={20} alt="check icon" />
                                                    :
                                                    <Image src={"/images/shapes/check-icon-gray.svg"} width={20} height={20} alt="check icon" className='dark:brightness-50' />
                                            }
                                            <span className='lg:text-lg text-base'>{service}</span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    {
                        cardThree ? ""
                            :
                            <div className="pt-15 w-full">
                                {
                                    id === 2 ?
                                        <Button asChild size={"lg"} className='max-h-[64px] w-full group'>
                                            <Link href="/contact-us"> Purchase Plan <span className='-rotate-45 group-hover:rotate-0 transition-all duration-75'><RightArrow /></span> </Link>
                                        </Button>
                                        :
                                        <Button asChild variant="outline" size={"lg"} className='max-h-[64px] w-full group'>
                                            <Link href="/contact-us"> Purchase Plan <span className='-rotate-45 group-hover:rotate-0 transition-all duration-75'><RightArrow /></span></Link>
                                        </Button>
                                }
                            </div>
                    }
                </div>
            </div>
        </SlideUp>
    )
}

export default PriceCardTwo