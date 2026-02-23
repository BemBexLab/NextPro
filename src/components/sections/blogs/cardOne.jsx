import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Title from '@/components/ui/title'
import ZoomIn from '@/components/animations/zoomIn'
const CardOne = ({ id, title, date, thumb, author, category, url }) => {
    return (
        <div className='group'>
            <ZoomIn id={id}>
                <div className='relative overflow-hidden  rounded-2.5xl'>
                    {/* <div className='absolute z-10 top-5 left-5'>
                        <Link key={id} href={`/blog/top-usa-digital-marketing-agencies-in-2026`} className='px-2.5 py-[5px] inline-block font-semibold text-primary-foreground rounded-lg text-sm bg-accent'>{category[0]}</Link>
                    </div> */}
                    <div className='relative'>
                        <Image src={thumb} width={520} height={280} sizes='(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw' style={{ width: "100%" }} alt='thumb' className='group-hover:scale-110 transition-all duration-700 max-h-[285px] object-cover' />
                    </div>
                </div>
                <div className='pt-[15px]'>
                    <div className='flex items-center gap-7.5 pb-[15px]'>
                        {(() => {
                            const authorName = typeof author === 'string' ? author : (author?.author_name || '');
                            return (
                                <Link key={id} href={url} className='text-base font-semibold hover:text-primary-foreground transition-all duration-500'> {authorName}</Link>
                            )
                        })()}
                        <p className='text-base font-semibold relative after:absolute after:-left-[15px] after:top-1/2 after:-translate-y-1/2 after:bg-secondary after:w-[6px] after:h-[6px] after:rounded-full'>{date}</p>
                    </div>
                    <Title size={"2xl"}>
                        <Link key={id} href={url} className='multiline-hover hover:text-primary-foreground transition-all duration-500'>{title}</Link>
                    </Title>
                </div>
            </ZoomIn>
        </div>
    )
}

export default CardOne