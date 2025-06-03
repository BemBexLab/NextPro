import SocialIcons from '@/components/ui/socialIcons'
import Image from 'next/image'
import React from 'react'

const Author = () => {
    return (
        <div className='bg-[rgba(46,77,254,0.05)] rounded-[30px] p-[26px] border border-accent'>
            <div className='flex md:flex-row flex-col lg:items-center gap-5'>
                <div className='min-w-[160px]'>
                    <Image src={'/images/blog/single-post-author.jpg'} width={160} height={168} alt='Eleanor Pena' className='rounded-[15px]' />
                </div>
                <div>
                    <h6 className='text-1xl font-semibold'>Eleanor Pena</h6>
                    <p className='pb-4'>Founder and Creative Director of Next, an independent digital creative studio based out of NYC founded in 2011. He has over 15 years experience as an award-winning Creative Director/Art for clients.</p>
                    <SocialIcons/>
                </div>
            </div>
        </div>
    )
}

export default Author