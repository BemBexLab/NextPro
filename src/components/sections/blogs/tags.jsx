import SocialIcons from '@/components/ui/socialIcons'
import Link from 'next/link'
import React from 'react'

const Tags = () => {
    return (
        <div className='flex lg:flex-row flex-col lg:items-center justify-between lg:pb-12.5 pb-8'>
            {/* --------- Tags start */}
            <div className='flex items-center gap-3'>
                <p className='text-muted-foreground'>Tags:</p>
                <ul className='flex flex-wrap gap-x-2.5 gap-y-4 items-center'>
                    <li>
                        <Link href={""} className='py-[5px] px-2.5 rounded-lg border border-[#7C848C] transition-all duration-500 hover:bg-primary hover:text-white'>Instagram</Link>
                    </li>
                    <li>
                        <Link href={""} className='py-[5px] px-2.5 rounded-lg border border-[#7C848C] transition-all duration-500 hover:bg-primary hover:text-white'>TikTok</Link>
                    </li>
                    <li>
                        <Link href={""} className='py-[5px] px-2.5 rounded-lg border border-[#7C848C] transition-all duration-500 hover:bg-primary hover:text-white'>Reels</Link>
                    </li>
                    <li>
                        <Link href={""} className='py-[5px] px-2.5 rounded-lg border border-[#7C848C] transition-all duration-500 hover:bg-primary hover:text-white'>SocialMediaMarketing</Link>
                    </li>
                </ul>
            </div>
            {/* --------- Tags end */}

            {/* ----------- social icon start */}
            <div className='flex items-center gap-3 pt-6 lg:pt-0'>
                <p className='text-muted-foreground'>Share:</p>
                <SocialIcons prantBorder={'border border-[#7C848C] px-2.5 py-2 rounded-lg hover:bg-primary hover:text-white transition-all duration-500'}/>
            </div>
             {/* ----------- social icon end */}
        </div>
    )
}

export default Tags