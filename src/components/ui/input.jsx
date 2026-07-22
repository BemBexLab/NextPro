import { cn } from '@/lib/utils'
import React from 'react'

const Input = ({ type = "text", placeholder, className, required = true, ...props }) => {
    return (
        <input {...props} type={type} placeholder={placeholder} name={props.name ?? type} required={required} className={cn(`border border-primary rounded-lg px-[25px] py-[18px] max-h-12.5 w-auto outline-blue-200 bg-background`, className)} />
    )
}

export default Input
