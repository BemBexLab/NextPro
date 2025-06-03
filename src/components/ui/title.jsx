import { cn } from '@/lib/utils'
import React from 'react'

const Title = ({ children, size, className }) => {
    const titleVariants = (size) => {
        const sizes = {
            "6xl": "lg:text-6xl md:text-5xl text-4xl lg:leading-[125%] md:leading-[120%]",
            "5xl": "lg:text-5xl sm:text-4.5xl text-3xl lg:leading-[140%] sm:leading-[130%] leading-[120%]",
            "4xl": "lg:text-4xl text-[28px] lg:leading-[140%] leading-[140%]",
        }
        return sizes[size]
    }
    // 7.5xl = 75px
    // 6xl = 60px
    // 5xl = 48px
    // 4xl = 36px


    if (size === "7.5xl") {
        return (
            <h1 className={cn(`font-extrabold text-muted-foreground xl:text-7.5xl md:text-5.5xl text-4.5xl lg:leading-[120%] leading-[130%] ${className}`)}>
                {children}
            </h1>
        )
    }
    if (size === "2xl") {
        return (
            <h5 className={cn(`font-extrabold text-muted-foreground lg:text-2xl md:text-xl text-xl md:leading-[140%] ${className}`)}>{children}</h5>
        )
    }
    else {
        return (
            <h2 className={cn(`font-extrabold text-muted-foreground group ${titleVariants(size)} ${className}`)}>
                {children}
            </h2>
        )
    }



}

export default Title