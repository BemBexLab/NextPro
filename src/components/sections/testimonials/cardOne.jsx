import React from 'react'
import Image from "next/image"
import PlayIcon from '@/components/ui/playIcon'
import Rating from '@/components/ui/rating'
import Title from '@/components/ui/title'

const CardOne = ({rating, name, position, src, review}) => {
    return (
        <div className='grid lg:grid-cols-[60%_auto] grid-cols-1 pt-12.5'>
            <div className='py-5 lg:pl-20 pl-7 lg:pr-[72px] pr-7 bg-primary rounded-tl-[30px] rounded-tr-[30px] lg:rounded-tr-none lg:rounded-bl-[30px]'>
                <div className='h-full content-center'>
                    <Rating star={rating} />
                    <Title size={"2xl"} className={"text-secondary-foreground mt-2 dark:text-white min-h-[196px] sm:min-h-24 lg:min-h-max"}>{review}</Title>
                    <div className='lg:pt-10 pt-6'>
                        <h5 className='text-1xl font-semibold text-secondary-foreground dark:text-white'>{name}</h5>
                        <p className='text-secondary-foreground flex items-center gap-1 pt-1 dark:text-white'> <span className='w-5 h-[1px] bg-background dark:bg-muted-foreground block'></span> <span>{position}</span> </p>
                    </div>
                </div>
            </div>
            <div className='relative'>
                <Image src={src} width={528} height={455} style={{width:"100%"}} alt="testimonial-bg" className='rounded-bl-[30px] lg:rounded-bl-none rounded-br-[30px] rounded-tr-[30px] lg:max-h-[452px] lg:min-h-full min-h-[380px] max-h-[380px] h-full object-cover -mt-10 lg:-mt-0 relative z-[-1]' />
                <PlayIcon playOne={true} />
            </div>
        </div>
    )
}

export default CardOne