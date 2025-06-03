import ZoomIn from '@/components/animations/zoomIn'
import Title from '@/components/ui/title'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CardThree = ({ id, title, date, thumb, author, category }) => {
    return (
        <div className='group'>
            <ZoomIn id={id}>
                <div className='relative overflow-hidden rounded-2.5xl'>
                    <div className='max-h-[471px]'>
                        <Image src={thumb} width={870} height={471} style={{ width: "100%" }} alt='thumb' className='group-hover:scale-110 transition-all duration-700 object-cover' />
                    </div>
                </div>
                <div className='lg:px-12.5 px-5'>
                    <div className='flex md:flex-row flex-col md:items-center justify-between pb-7.5'>
                        <div className='flex sm:flex-row flex-col sm:items-center sm:gap-7 gap-3 mt-2.5'>
                            <div className='flex items-center gap-4'>
                                <Image src={"/images/blog/posts-author-img1-1.png"} alt='author' width={38} height={38} className='rounded-full' />
                                <Link href={""} className='text-base hover:text-primary-foreground transition-all duration-500'>Eleanor Pena</Link>
                            </div>
                            <Link href={""} className='text-base relative after:absolute after:-left-[15px] after:top-1/2 after:-translate-y-1/2 after:bg-secondary after:w-[6px] after:h-[6px] after:rounded-full hover:text-primary-foreground transition-all duration-500 ml-4 sm:ml-0'>Social Media Marketing</Link>
                            <p className='text-base relative after:absolute after:-left-[15px] after:top-1/2 after:-translate-y-1/2 after:bg-secondary after:w-[6px] after:h-[6px] after:rounded-full ml-4 sm:ml-0'>25 Feb 2024</p>
                        </div>
                        <p className='text-base relative mt-3 lg:mt-0'>5 min read</p>
                    </div>
                    <Title size={"4xl"}>
                        <Link href={"/blog-single"} className='multiline-hover text-muted-foreground transition-all duration-500'>{title}</Link>
                    </Title>
                    <p className='pt-[15px]'>In the ever-evolving landscape of social media, platforms constantly vie for users' attention. Instagram, known for its innovation in visual content...</p>
                </div>
            </ZoomIn>
        </div>
    )
}

export default CardThree