import Rating from '@/components/ui/rating'
import Image from 'next/image'
import React from 'react'

const CardThree = ({ review, name, src, position, rating, title }) => {
    return (
        <div className={"p-2 mb-5"}>
            <div className='rounded-[15px] p-7.5 bg-background shadow-[0px_4px_18px_0px_rgba(0,31,63,0.1)] dark:shadow-[0px_4px_18px_0px_rgba(0,0,0,0.3)] overflow-y-hidden '>
                <Rating star={rating} className={"text-2xl"} />
                <h6 className='font-semibold text-muted-foreground my-2.5'>{title}</h6>
                <p>{review}</p>

                <div className='pt-6 flex items-center gap-[15px]'>
                    <Image src={src} width={50} height={50} alt='img' className='w-12.5 h-12.5 rounded-full' />
                    <div>
                        <b className='text-muted-foreground font-semibold inline-block'>{name}</b>
                        <small className='inline-block'>{position}</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardThree