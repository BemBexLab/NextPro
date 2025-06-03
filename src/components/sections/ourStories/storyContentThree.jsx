import { Button } from '@/components/ui/button'
import Highlight from '@/components/ui/highlight'
import Title from '@/components/ui/title'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const StoryContentThree = () => {
    return (
        <div className='lg:max-w-[645px]'>
            <Title size={"5xl"}>
                Success in Every Click: Welcome to <Highlight>Next Agency.</Highlight>
            </Title>
            <p className='mt-7.5'>Since 2012, we've been pioneering innovative solutions, crafting unique narratives, and consistently delivering exceptional results. Join us in shaping the future of digital excellence!</p>
            <ul className='py-12.5 flex flex-col gap-2.5'>
                <li className=' flex items-center gap-2.5'> <Image src={"/images/shapes/check-icon-blue.svg"} width={20} height={20} alt='img-1' /> <span>As Digital Innovation Leaders shaping digital future.</span> </li>
                <li className=' flex items-center gap-2.5'> <Image src={"/images/shapes/check-icon-blue.svg"} width={20} height={20} alt='img-2' /> <span>Tailored Strategy Experts ensuring a roadmap to success.</span> </li>
                <li className=' flex items-center gap-2.5'> <Image src={"/images/shapes/check-icon-blue.svg"} width={20} height={20} alt='img-3' /> <span>Proven Results Achievers: dedicated to achieving your success.</span> </li>
            </ul>
            <Button asChild>
                <Link href={"/about-us"}> Find more about us</Link>
            </Button>
        </div>
    )
}

export default StoryContentThree