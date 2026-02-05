import Logo from '@/components/ui/logo'
import Logo2 from '@/components/ui/logo2'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FooterContact = ({ bgColor, color, white_logo }) => {
    return (
        <div className='grid lg:grid-cols-[30%_60%] items-center gap-8'>
            <div className=' max-w-[178px]'>
                {
                    white_logo ?
                        <Image src={"/images/logo-light2.png"} width={500} height={200} alt='logo-white' className={`w-full h-full`} />
                        :
                        <Logo2 />
                }
            </div>
            <div className='flex md:flex-row flex-col justify-between gap-8'>
                <div className='flex items-center gap-8'>
                    <div className={cn(`w-[75px] h-[75px] rounded-lg ${bgColor} flex justify-center items-center`)}>
                        <Image src={'/images/shapes/Frame 210.png'} width={45} height={50} alt='map arrwo' />
                    </div>
                    <div className={cn(`${color}`)}>
                        <p>3021 Peachtree Rd NWAtlanta,</p>
                        <p>GA 30305, USA</p>
                    </div>
                </div>
                <div className='flex items-center gap-8'>
                    <div className={cn(`w-[75px] h-[75px] rounded-lg ${bgColor} flex justify-center items-center`)}>
                        <Image src={"/images/shapes/Frame 208.png"} width={44} height={50} alt='comments icon' />
                    </div>
                    <div className={cn(`${color}`)}>
                        <p> <span className='font-semibold'>Email:</span> <Link href={"mailto:info@webfoundersusa.com"} className='relative hover-underline after:h-[1px] after:bg-muted'> info@webfoundersusa.com</Link> </p>
                        <p> <span className='font-semibold'>Call us:</span> <Link href={"tal:+14704707520"} className='relative hover-underline after:h-[1px] after:bg-muted'>+1 470-470-7520</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterContact