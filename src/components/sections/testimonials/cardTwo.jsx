import Rating from '@/components/ui/rating'
import Image from 'next/image'
import React from 'react'

const CardTwo = ({ rating, name, position, src, review }) => {
    return (
        <div className='my-15 slider__img'>
            <div className='max-w-[1019px] mx-auto bg-background dark:bg-accent rounded-[30px] shadow-[0px_4px_40px_0px_rgba(19,15,38,0.1019607843)] lg:px-[90px] px-7 lg:py-15 py-8 relative'>
                <div className='absolute z-[-1] md:-bottom-[37px] -bottom-[25px] left-1/2 -translate-x-1/2 md:w-[calc(100%-130px)] w-[calc(100%-50px)] h-1/2 bg-background rounded-[30px] shadow-[0px_4px_40px_0px_rgba(19,15,38,0.1019607843)]'></div>
                <div className='grid md:grid-cols-[200px_auto] grid-cols-1 gap-11'>
                    <div className='relative'>
                        <div className='absolute -left-6 -top-6'>
                            <Image src={'/images/shapes/skills-icon.png'} width={49} height={56} alt='testimonial-image' />
                        </div>
                        <Image src={src} className='h-full max-h-[268px] md:max-h-full object-cover rounded-2xl' alt='testimonial-image' />
                    </div>
                    <div className='py-4'>
                        <div className='flex items-center justify-between pb-5'>
                            <Rating star={rating} />
                            <Image src={"/images/shapes/trustpilot-img.png"} width={178} height={50} alt='trustpilot' />
                        </div>
                        <p>{review.length > 134 ? review.slice(0, 180) : review}</p>
                        <div className='pt-11'>
                            <strong className='text-1xl font-semibold text-muted-foreground'>{name}</strong>
                            <p className='font-semibold'>{position}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardTwo