"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';
import { IoIosPlay } from 'react-icons/io';
import { cn } from '@/lib/utils';
import Play from '../../../public/icons/play';

const PlayIcon = ({ playOne, color }) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            {
                playOne ?
                    <div onClick={() => setOpen(true)} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <Image src={'/images/shapes/play-btn1-1.png'} alt='play icon' width={132} height={132} className='cursor-pointer lg:max-w-[116px] lg:max-h-[116px] sm:max-w-20 sm:max-h-20 max-w-16 max-h-16' />
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] z-[-1] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[rgba(46,77,254,0.3)] after:rounded-full after:animate-spring-one'></div>
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] z-[-1] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[rgba(46,77,254,0.3)] after:rounded-full after:animate-spring-two'></div>
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] z-[-1] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[rgba(46,77,254,0.3)] after:rounded-full after:animate-spring-three'></div>
                    </div>
                    :
                    <div onClick={() => setOpen(true)} className={cn(`w-12 h-12 rounded-full flex justify-center items-center border-[3px] border-foreground dark:border-muted cursor-pointer hover:border-primary transition-all duration-300 group border-${color} dark:border-${color} ${color}`)}>
                        <span className={cn(`text-2xl ml-1 dark:text-muted group-hover:text-primary-foreground transition-all duration-300 dark:text-${color}`)}>
                            <Play />
                        </span>
                    </div>
            }

            {/* <ModalVideo
                channel="youtube"
                youtube={{ mute: 0, autoplay: 0 }}
                isOpen={isOpen}
                videoId="TKnufs85hXk"
                onClose={() => setOpen(false)}
            /> */}
        </>
    )
}

export default PlayIcon