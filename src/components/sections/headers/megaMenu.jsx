import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const MegaMenu = ({ data, bgColor, color }) => {
    // The color and bgcolor props are inherited from the header three

    return (
        <ul className={cn(`flex justify-between gap-6 w-full absolute z-50 left-0 p-10 top-full bg-background drop-shadow-3xl rounded-2.5xl transition-all duration-300 ease-in translate-y-4  opacity-0 invisible group-hover:translate-y-0 group-hover:visible group-hover:opacity-100 ${bgColor}`)}>
            {
                data.map(({ id, lable, path, tag, src }) => {
                    return (
                        <li key={id} className='group/homeImge '>
                            <div className='relative overflow-x-hidden shadow-[0px_6px_20px_0px_rgba(0,31,63,0.06)] rounded-lg transition-all duration-500 hover:-translate-y-1'>
                                <Link href={path}><Image src={src} alt={lable} className='rounded-lg' /></Link>
                            </div>
                            <h5 className='mt-7.5'>
                                <Link href={path} className={cn(`font-medium relative text-muted-foreground transition-all duration-500 hover:text-primary-foreground`, color)}>{lable}  </Link>
                                {tag && <span className={`px-2 py-1 ${(id === 2 ? "bg-purple" : "") || (id === 6 ? "bg-green" : "")} text-xs text-secondary-foreground font-semibold rounded ml-2`}>{tag}</span>}
                            </h5>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default MegaMenu