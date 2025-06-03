import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const DropDownMenu = ({ data, color, bgColor }) => {
    // The color and bgcolor props are inherited from the header three

    return (
        <ul className={cn(`absolute z-50 top-full bg-background drop-shadow-3xl rounded-2.5xl pt-[15px] pb-4.5 transition-all duration-300 ease-in translate-y-8  opacity-0 invisible group-hover:translate-y-0 group-hover:visible group-hover:opacity-100 ${bgColor}`)}>
            {
                data.map(({ id, lable, path, tag, subDropdonwn }) => {
                    return (
                        <li key={id} className='leading-[38px] relative pl-7.5 pr-12 group/subDropdwon'>
                            <Link href={path} className={cn(`font-medium relative text-muted-foreground transition-all duration-500 hover:text-primary-foreground group-hover/subDropdwon:after:w-full ${color}`)}>
                                {lable}
                                {tag && <span className={`text-xs font-semibold inline-block ml-4 ${id === 4 && "bg-green"} ${id === 5 && "bg-red"} rounded-[4px] px-2 py-[3px] text-secondary-foreground`}>{tag}</span>}
                            </Link>
                            {
                                subDropdonwn &&
                                <ul className={cn(`absolute z-50 top-0 left-full bg-background drop-shadow-3xl rounded-2.5xl pt-[15px] pb-4.5 duration-300 ease-in -translate-x-8 opacity-0 invisible group-hover/subDropdwon:translate-x-0 group-hover/subDropdwon:visible group-hover/subDropdwon:opacity-100 ${bgColor}`)}>
                                    {
                                        subDropdonwn.map(({ id, lable, path, tag, }) => {
                                            return (
                                                <li key={id} className='pl-7.5 pr-12 '>
                                                    <Link href={path} className={cn(`whitespace-nowrap font-medium text-muted-foreground transition-all duration-500 hover:text-primary-foreground`, color)}>{lable}</Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            }
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default DropDownMenu