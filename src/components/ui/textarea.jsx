import { cn } from '@/lib/utils'
import React from 'react'

const Textarea = ({ name, placeholder, className, props }) => {
    return (
        <textarea {...props} name={name} placeholder={placeholder} className={cn(`border-2 border-[#C0C0C0] outline-none w-full rounded-lg px-[25px] py-[18px] min-h-48 bg-background ${className}`)}></textarea>
    )
}

export default Textarea