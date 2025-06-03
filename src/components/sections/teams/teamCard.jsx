import Image from 'next/image'
import React from 'react'
import Title from '@/components/ui/title'
import Link from 'next/link'
import SlideUp from '@/components/animations/slideUp'
import { cn } from '@/lib/utils'
const TeamCard = ({id, name, position, src, bgColor, link }) => {
    return (
        <SlideUp id={id}>
            <div className='relative group after:absolute after:w-full after:h-full after:top-0 after:left-0 after:transition-all after:duration-700 hover:after:bg-[linear-gradient(0deg,_rgba(0,0,0,0.20)_0%,_rgba(0,0,0,0.20)_100%)] after:rounded-[30px]'>
                <Image src={src} alt='team-1' width={308} height={400} className='rounded-[30px] w-full' />
                <div className={cn(`bg-muted dark:bg-[#001F3F] ${bgColor} backdrop-blur-sm rounded-[18px] px-[23px] pt-2.5 pb-5 absolute z-[1] left-[14px] bottom-[14px] max-w-[391px] w-[calc(100%-30px)]`)}>
                    <Title size={"2xl"} className={"text-white"}> <Link href={link} className='relative after:absolute after:left-0 after:-bottom-3 after:w-[88px] after:h-[1px] after:bg-white group-hover:after:w-full after:transition-all after:duration-500'>{name}</Link> </Title>
                    <p className='font-medium text-[#C0C0C0] pt-4'>{position}</p>
                </div>
            </div>
        </SlideUp>
    )
}

export default TeamCard