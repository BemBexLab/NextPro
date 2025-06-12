import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import Title from '../ui/title'
import SlideUp from '../animations/slideUp'
import Link from 'next/link'

const Strategy = () => {
    return (
        <section className='lg:py-15 py-9'>
            <div className='max-w-[1350px] mx-auto px-[15px]'>
                <div className='grid xl:grid-cols-[auto_642px] lg:grid-cols-[auto_530px] grid-cols-1 xl:gap-15 gap-5'>
                    <div className='relative'>
                        <div className='flex justify-center pr-12.5 lg:pr-0'>
                            <Image src="/images/resource/strategy.png" width={626} height={551} alt="bg" className='rounded-[30px] dark:hidden' />
                            <Image src="/images/resource/strategy-dark.png" width={626} height={551} alt="bg" className='rounded-[30px] hidden dark:block' />
                        </div>
                       
                    </div>
                    <div className='pt-5 lg:pt-0'>
                        <SlideUp>
                            <Button variant="secondary">Our Strategy</Button>
                            <Title size={"5xl"} className="lg:max-w-[642px] max-w-full pt-6">Scalable marketing for every stage of your funnel.</Title>
                            <p className='pt-7.5 font-semibold text-muted-foreground'>Discover the power of streamlined operations and enhanced performance through our integration solutions.</p>
                            <p className='pt-7.5  font-medium'> <strong>WebFounders USA</strong> seamlessly integrates with a variety of industry-leading tools, ensuring a cohesive and efficient digital ecosystem for your business.</p>
                            <Button asChild className="mt-10">
                                <Link href={"/about-us"}>Get Started</Link>
                            </Button>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Strategy